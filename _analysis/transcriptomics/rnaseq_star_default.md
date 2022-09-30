---
title: RNAseq STAR (Default settings)
description: Workflow for the alignment and quantification of raw RNA-seq data using default settings.
slug: rnaseq_star_default
label: rnaseq_align_recommended
authors:
 - bcavadas
 - i3S-bioinformaticsService
---

## RNAseq STAR (Default settings)

This pipeline performs the alignment of fastq files, from RNA-seq reads, using the STAR aligner. This software is currently the one with the higher accuracies, even though it requires a large amount of RAM (50Gb for the human genome)

### What you should provide
1. Reads in fastq format (ideally compressed in .gz format)
2. The organism from which they come from.

### What you will receive
1. File with the aligned reads in BAM format.
2. File with gene quantification for the sample.
3. File with alignment statistics.
4. Quality control plots representing the various factors affecting sample overall quality

**WARNING:** These files are required for followup analysis, such as [Principal component analysis](../visual_representations/principal_component_analysis/), [Heatmap analysis](../visual_representations/heatmap/), [Differential expression analysis](../exploratory_analysis/differentia_expression_analysis/) and [Pathway analysis](../pathway_analysis/) Visual exploration of the BAM genomic data can be assessed in [IGV](https://software.broadinstitute.org/software/igv/).


### Software versions
* STAR v2.7.10a
* BioBamBam2 v2.0.180
* RSeQC v4.0.0
* dupRadar v1.26.1


### Relevant software values (assume default if unspecified)
* alignSJoverhangMin   set to **8**
* alignSJDBoverhangMin set to **1**

### Pipeline

<div class="container-lg px-3 pt-3">
  <div class="page-section d-flex flex-column gutter-md flex-md-row align-items-end mb-2" >
    <div id="vue" style="height: 500px;">
      <cwl cwl-url="https://raw.githubusercontent.com/i3S-BioinformaticsService/i3s-cwl-ngs-workflows/main/RNA-Seq/rnaseq.star.default.json">
      </cwl>
    </div>
    <script src="/assets/js/vue.min.js"></script>
    <script src="/assets/js/cwl_svg.js"></script>
    <script>
      new Vue({
          el: '#vue',
          components: {
              cwl: vueCwl.default
          }
      });
    </script>
  </div>
</div>

### Methods (Please adapt)
Mapping to reference genome (assembly version XXX) was performed using BWA mem (version 0.7.17) and duplicates were removed using biobambam2 (version 2.0.87) followed by base quality recalibration using GATK (version 4.3.6.1).

