# User guide

## Introduction
This guide is addressed at analysts and other users. By contacting the administrator of your
realm, you will receive access to the PHT.

Users utilize the PHT as a means to safely access medical data. If they have the intention to 
perform an analysis using a specific dataset offered in the PHT, they may first create a 
so-called Proposal in which they announce their interest to the administrator(s) responsible for
the data. This Proposal will be reviewed by their side, and if approved, can be used among others
to configure a Train pipeline. The Stations, which is how the local setups reading the data are
called, may be placed as stops for the Train. Upon arriving at a Station the respective
administrator may review the analysis script contained in the Train and then execute it on their
data. Thereby the results of the full Train pipeline will ultimately be returned to the analyst,
without the analyst physically accessing the data themselves.

## Overview
Users have the following tasks in the PHT. Additionally, we prepared additional sources, concepts,
and tutorials involved in those tasks:

**``Quickstart``**
- [key-management](/guide/user/key-management)
- [creating proposals](/guide/user/proposal)
- [creating trains](/guide/user/train)

**`Concepts/Tutorials`**
- [train-coding](/guide/user/train-coding)
- [FHIR-query](/guide/user/fhir-query)
- [homomorphic encryption](/guide/user/homomorphic-encryption)
