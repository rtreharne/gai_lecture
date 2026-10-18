script_argument <- grep("^--file=", commandArgs(trailingOnly = FALSE), value = TRUE)
if (length(script_argument) == 0) {
  stop("Run this analysis with Rscript analyze_penguins.R.")
}
script_path <- sub("^--file=", "", script_argument[[1]])
project_dir <- dirname(normalizePath(script_path))
setwd(project_dir)

data_path <- file.path("data", "penguins.csv")
output_dir <- "output"
dir.create(output_dir, showWarnings = FALSE, recursive = TRUE)
tukey_path <- file.path(output_dir, "tukey_results.csv")
if (file.exists(tukey_path)) {
  unlink(tukey_path)
}

raw_data <- read.csv(data_path, stringsAsFactors = FALSE, na.strings = c("", "NA"))
missing_by_column <- colSums(is.na(raw_data))
inspection_lines <- c(
  sprintf("Raw observations: %d", nrow(raw_data)),
  sprintf("Missing cells: %d", sum(is.na(raw_data))),
  "Missing values by column:",
  capture.output(print(missing_by_column))
)
cat(paste(inspection_lines, collapse = "\n"), "\n")
writeLines(inspection_lines, file.path(output_dir, "data_inspection.txt"))

analysis_data <- raw_data[
  !is.na(raw_data$species) & !is.na(raw_data$body_mass_g),
]
analysis_data$species <- factor(
  analysis_data$species,
  levels = c("Adelie", "Chinstrap", "Gentoo")
)
analysis_data <- droplevels(analysis_data)

if (nlevels(analysis_data$species) != 3) {
  stop("Expected Adelie, Chinstrap, and Gentoo observations after filtering.")
}

species_colors <- c(
  Adelie = "#2B6F77",
  Chinstrap = "#D47752",
  Gentoo = "#6B8E4E"
)
set.seed(105)

png(file.path(output_dir, "body_mass_by_species.png"),
    width = 1800, height = 1200, res = 200)
par(mar = c(5, 5, 2, 1), las = 1, cex = 1.05)
boxplot(
  body_mass_g ~ species,
  data = analysis_data,
  col = grDevices::adjustcolor(species_colors, alpha.f = 0.25),
  border = species_colors,
  outline = FALSE,
  xlab = "Penguin species",
  ylab = "Body mass (g)",
  ylim = range(analysis_data$body_mass_g) * c(0.95, 1.05),
  yaxs = "i"
)
for (species_name in levels(analysis_data$species)) {
  species_mass <- analysis_data$body_mass_g[
    analysis_data$species == species_name
  ]
  stripchart(
    species_mass,
    vertical = TRUE,
    method = "jitter",
    jitter = 0.16,
    at = match(species_name, levels(analysis_data$species)),
    add = TRUE,
    pch = 21,
    bg = grDevices::adjustcolor(species_colors[species_name], alpha.f = 0.55),
    col = species_colors[species_name],
    cex = 0.7
  )
}
box()
dev.off()

scatter_data <- analysis_data[!is.na(analysis_data$flipper_length_mm), ]
png(file.path(output_dir, "flipper_length_vs_body_mass.png"),
    width = 1800, height = 1200, res = 200)
par(mar = c(5, 5, 2, 1), las = 1, cex = 1.05)
scatter_colors <- species_colors[as.character(scatter_data$species)]
plot(
  body_mass_g ~ flipper_length_mm,
  data = scatter_data,
  pch = 21,
  bg = grDevices::adjustcolor(scatter_colors, alpha.f = 0.7),
  col = scatter_colors,
  xlab = "Flipper length (mm)",
  ylab = "Body mass (g)"
)
legend(
  "topleft",
  legend = names(species_colors),
  pch = 21,
  pt.bg = grDevices::adjustcolor(species_colors, alpha.f = 0.7),
  col = species_colors,
  bty = "n",
  title = "Species"
)
box()
dev.off()

species_summary <- data.frame(
  species = levels(analysis_data$species),
  n = as.integer(table(analysis_data$species)),
  mean_body_mass_g = as.numeric(tapply(
    analysis_data$body_mass_g, analysis_data$species, mean
  )),
  sd_body_mass_g = as.numeric(tapply(
    analysis_data$body_mass_g, analysis_data$species, sd
  )),
  stringsAsFactors = FALSE
)
write.csv(
  species_summary,
  file.path(output_dir, "species_summary.csv"),
  row.names = FALSE
)

anova_model <- aov(body_mass_g ~ species, data = analysis_data)
anova_table <- summary(anova_model)[[1]]
rownames(anova_table) <- trimws(rownames(anova_table))
anova_results <- data.frame(
  term = rownames(anova_table),
  df = anova_table[["Df"]],
  sum_sq = anova_table[["Sum Sq"]],
  mean_sq = anova_table[["Mean Sq"]],
  f_value = anova_table[["F value"]],
  p_value = anova_table[["Pr(>F)"]],
  row.names = NULL,
  check.names = FALSE
)
write.csv(
  anova_results,
  file.path(output_dir, "anova_results.csv"),
  row.names = FALSE
)

png(file.path(output_dir, "anova_diagnostics.png"),
    width = 1800, height = 900, res = 200)
par(mfrow = c(1, 2), mar = c(5, 5, 3, 1), las = 1, cex = 1.0)
plot(
  fitted(anova_model), residuals(anova_model),
  pch = 21, bg = "#79A7A3", col = "#2B6F77",
  xlab = "Fitted body mass (g)",
  ylab = "Residual (g)",
  main = "Residuals vs fitted"
)
abline(h = 0, lty = 2, col = "#555555")
qqnorm(residuals(anova_model), pch = 21, bg = "#79A7A3", col = "#2B6F77",
       main = "Normal Q-Q plot")
qqline(residuals(anova_model), col = "#D47752", lwd = 2)
dev.off()

species_row <- which(rownames(anova_table) == "species")
f_value <- anova_table[species_row, "F value"]
p_value <- anova_table[species_row, "Pr(>F)"]
df_between <- anova_table[species_row, "Df"]
df_residual <- anova_table["Residuals", "Df"]

if (!is.na(p_value) && p_value < 0.05) {
  tukey_matrix <- TukeyHSD(anova_model, "species")$species
  tukey_results <- data.frame(
    comparison = rownames(tukey_matrix),
    tukey_matrix,
    row.names = NULL,
    check.names = FALSE
  )
  write.csv(
    tukey_results,
    tukey_path,
    row.names = FALSE
  )
  tukey_note <- paste(
    "The overall ANOVA was significant; Tukey HSD pairwise comparisons",
    "are in tukey_results.csv."
  )
  conclusion <- paste(
    "Mean body mass differed among at least some of the three species",
    "in this one-way ANOVA."
  )
} else {
  tukey_note <- "The overall ANOVA was not significant; Tukey HSD was not run."
  conclusion <- paste(
    "The one-way ANOVA did not provide evidence of a difference in mean",
    "body mass among the three species."
  )
}

interpretation <- c(
  "Palmer Penguins: body mass by species",
  "",
  sprintf("Raw rows: %d; missing cells: %d.", nrow(raw_data), sum(is.na(raw_data))),
  sprintf(
    "Rows retained after removing missing species or body mass: %d (%d removed).",
    nrow(analysis_data), nrow(raw_data) - nrow(analysis_data)
  ),
  sprintf(
    "One-way ANOVA: F(%d, %d) = %.2f, p = %s.",
    df_between, df_residual, f_value,
    format.pval(p_value, digits = 3, eps = 0.001)
  ),
  conclusion,
  tukey_note,
  "",
  paste(
    "These are observational species comparisons, not causal effects.",
    "Species comparisons may be confounded by sex and island because their",
    "distributions can differ across species."
  ),
  paste(
    "A sensible next analysis is a multiple linear model of body mass by",
    "species, sex, and island, using complete observations for those variables,",
    "then checking model assumptions and considering biologically justified",
    "interactions."
  ),
  "",
  "Check the residuals-versus-fitted and Q-Q plots in anova_diagnostics.png for departures from model assumptions."
)
writeLines(interpretation, file.path(output_dir, "results_interpretation.txt"))
cat(paste(interpretation, collapse = "\n"), "\n")
