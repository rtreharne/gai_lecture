# Palmer Penguins: body mass analysis

This reproducible base-R analysis compares body mass across Adelie, Chinstrap,
and Gentoo penguins. The raw CSV is downloaded from the official
[palmerpenguins GitHub repository](https://github.com/allisonhorst/palmerpenguins/blob/main/inst/extdata/penguins.csv)
and kept unchanged at `data/penguins.csv`. The analysis uses only base R; no
packages are required.

## Rerun the analysis

From the repository root, run:

```sh
cd penguins
Rscript analyze_penguins.R
```

Use R 4.0 or later. The script reads the checked-in local CSV, reports the
original row and missing-cell counts, and writes all generated files to
`penguins/output/`. It does not modify the raw data. To refresh the data
manually, download the CSV from the official repository URL above and replace
`data/penguins.csv`.

If R is not installed in the Codespace, create a base-R environment once from
the repository root, then run the analysis with Conda:

```sh
conda create --yes --name penguins-r r-base=4.3
conda run --name penguins-r Rscript penguins/analyze_penguins.R
```

## Analysis steps

The script removes rows with missing species or body mass for summaries and
the one-way ANOVA. The scatterplot additionally excludes rows missing flipper
length; this does not alter the ANOVA data. It draws a jittered boxplot and a
species-coloured scatterplot, fits `body_mass_g ~ species`, and saves
residual-versus-fitted and normal Q-Q diagnostic plots. Tukey HSD pairwise
comparisons are run only when the overall ANOVA p-value is below 0.05.

## Outputs

- `output/data_inspection.txt`: raw row count, total missing cells, and missing values by column.
- `output/species_summary.csv`: sample size, mean, and standard deviation of body mass by species.
- `output/anova_results.csv`: one-way ANOVA table.
- `output/body_mass_by_species.png`: publication-style boxplot with jittered observations.
- `output/flipper_length_vs_body_mass.png`: flipper length versus body mass by species.
- `output/anova_diagnostics.png`: residual-versus-fitted and normal Q-Q plots.
- `output/results_interpretation.txt`: concise statistical result and plain-English interpretation.
- `output/tukey_results.csv`: Tukey HSD comparisons, created only if the overall ANOVA is significant.

## Interpretation and limitations

These are observational comparisons and do not establish causal effects.
Species comparisons may be confounded by sex and island, whose distributions
can differ among species. A sensible next analysis is a multiple linear model
of body mass by species, sex, and island, using complete observations for
those variables, followed by assumption checks and consideration of
biologically justified interactions.
