---
title: Short read alignment (&lt; 1000 bp) - Non-model organisms
description: Pipeline for alignment of short reads using bwa mem for non-model organisms.
slug: resequencing_bwamem_nonmodelorganism
label: dna_resequencing
authors:
 - bcavadas
 - i3S-bioinformaticsService
---

## Pipeline for the alignment of short reads (&lt; 1000 bp)

This pipeline performs the alignment of fastq files, from DNA sequencing reads, using BWA-MEM. It is recommended for reads with and mean length greater or equal to 70 bp and below 1000 bp.

### What you should provide
1. Reads in fastq format (ideally compressed in .gz format)
2. The organism from which they come from.

### What you will receive
1. File with the aligned reads in BAM format.
2. File with alignment statistics.

**WARNING:** These files are required for followup analysis, such as [Small variant analysis](../variant_detection/small_variants/), [Copy number variants](../variant_detection/copy_number/), [Structural variants](..//variant_detection/structural_variants/). Visual exploration of the BAM genomic data can be assessed in [IGV](https://software.broadinstitute.org/software/igv/).


### Software versions
* BWA v0.7.17
* Samtools v1.15.1
* BioBamBam2 v2.0.87

### Relevant software values (assume default if unspecified)
* None

### Pipeline [&#128279;](https://raw.githubusercontent.com/i3S-BioinformaticsService/i3s-cwl-ngs-workflows/main/DNA-Seq/dna_resequencing_bwa_mem.nonmodel_organism.json)

<div id="vue" style="height: 500px; ">
  <cwl cwl-url="https://raw.githubusercontent.com/i3S-BioinformaticsService/i3s-cwl-ngs-workflows/main/DNA-Seq/dna_resequencing_bwa_mem.nonmodel_organism.json">
  </cwl>
</div>
<script src="/assets/js/vue.min.js"></script>
<script src="/assets/js/cwl_svg.js"></script>
<script src="/assets/js/tua-bsl.umd.min.js"></script>
<script>
  new Vue({
           el: '#vue',
           components: {
             cwl: vueCwl.default
          }
 });
  var $ = document.querySelector.bind(document)
      $('#vue').onmouseover = function () {bodyScrollLock.lock('#vue')}
      $('#vue').onmouseout = function() { bodyScrollLock.unlock('#vue')}
</script>


### Methods (Please adapt)
Mapping to reference genome (assembly version XXX) was performed using BWA mem (version 0.7.17) and duplicates were removed using biobambam2 (version 2.0.87).

