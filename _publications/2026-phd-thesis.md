---
title: "Molecular Dynamics-Enhanced Machine Learning Models for Protein Binding and Stability"
collection: publications
category: theses
thesis_type: "PhD Thesis"
supervisor:
  - Luca Franco Pavarino
  - Giorgio Colombo
permalink: /publication/2026-phd-thesis
excerpt: 'The work integrated atomistic Molecular Dynamics with Machine and Deep Learning to decode the functional profiles of biomolecules beyond static structural representations. Three biophysical domains were addressed: the functional profiling of kinase ligands through MOLECULE, a self-designed dual-modal deep neural network combining chemical fingerprints with dynamic structural fluctuations; the prediction of mutational protein stability by coupling plain MD with the Energy Decomposition Method; and the target-independent classification of SARS-CoV-2 neutralizing nanobody binding from the energetic distribution of the hypervariable CDR3 loop. Together, these contributions define a scalable computational triage methodology that connects instantaneous static predictors with expensive alchemical calculations, offering a cost-aware protocol for molecular prioritization in the design of selective small-molecule drugs and variant-proof biologics.'
date: 2026-09-10
venue: 
venue_short: "PhD Thesis"
card_aria: "View details: PhD thesis on molecular dynamics-enhanced machine learning for protein binding and stability"
authors:
  - Ivan Cucchi
institution: "University of Pavia"
logo: "unipv.png"
slidesurl: '/files/phd-defence.html'
paperurl: 
bibtexurl: 
citation: "Cucchi, I. (2026). <i>Molecular dynamics-enhanced machine learning models for protein binding and stability</i> [Doctoral dissertation, University of Pavia]."
topics: [Ligand binding, Protein stability, Nanobodies]
bibtex: |
  @phdthesis{cucchi2026thesis,
    title  = {Molecular Dynamics-Enhanced Machine Learning Models for Protein Binding and Stability},
    author = {Cucchi, Ivan},
    school = {University of Pavia},
    year   = {2026}
  }
---
This thesis explores the integration of atomistic Molecular Dynamics (MD) with Machine Learning (ML) and Deep Learning (DL) to decode the complex functional profiles of biomolecules, moving beyond the traditional static representations of structural biology. The research introduces molecular dynamics-enhanced machine learning frameworks across three distinct biophysical domains, with a focus on innovative algorithmic strategies for extracting informative patterns from high-dimensional molecular trajectories.

First, the study addresses the functional profiling of kinase targets, specifically Cyclin-Dependent Kinases (CDKs) and the broader human kinome, by initially utilizing classical machine learning models and subsequently developing MOLECULE — Molecular-dynamics and Optimized deep Learning for Entropy-regularized Classification and Uncertainty-aware Ligand Evaluation — a self-designed dual-modal deep neural network that combines static chemical fingerprints with dynamic structural fluctuations to classify allosteric and orthosteric inhibitors accurately. This novel approach bridges these complementary molecular representations, embedding molecular motion into a unified predictive architecture.

In a second research line, the thesis tackles the challenge of predicting mutational protein stability by coupling plain MD with the Energy Decomposition Method (EDM) to reliably estimate thermodynamic impacts (ΔΔG) based on spectral energy gaps and van der Waals packing.

Finally, extending the framework to therapeutic biomolecules, the research achieves the target-independent prediction of nanobody binding. This work demonstrates that the binding mechanism of SARS-CoV-2 neutralizing nanobodies can be classified in a strictly target-free environment by analyzing the energetic distribution, specifically the skewness and kurtosis, of the hypervariable CDR3 loop.

Ultimately, this contribution establishes a scalable computational triage methodology that connects instantaneous static predictors with computationally expensive alchemical calculations, providing a rational, cost-aware protocol for molecular prioritization across a hierarchy of predictive models, with direct relevance to the design of selective small-molecule drugs and variant-proof biologics.
