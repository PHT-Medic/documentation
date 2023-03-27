# User guide

## Introduction
We address this guide to analysts and other users. By contacting the administrator of your realm or organization,
you will receive access to the PHT interface.

Users utilize the PHT as a means to safely access medical data. Suppose they intend to analyze using a specific dataset
or study offered in the PHT. In that case, they may first create a so-called Proposal in which they announce their interest to
the administrator(s) responsible for the data. Each side will review this ``Proposal``, and if approved, it can be used,
among others, to configure a Train pipeline. The Stations, which is how the local setups reading the data are called,
may be placed as stops for the Train. Upon arriving at a Station, the administrator may review the analysis script
contained in the Train and then execute it on their data. The models or results of the Train pipeline will be returned
to the analyst without stations requiring to transfer input data outside their organization.

## Overview
Users can use the following resources and documentation of the PHT.
Additionally, we prepared concepts and tutorials involved in those tasks:

**``Quickstart``**
- [Key management](/guide/user/key-management)
- [Creating proposals](/guide/user/proposal)
- [Creating trains](/guide/user/train)

**`Concepts/Tutorials`**
- [Train coding](/guide/user/train-coding)
- [FHIR queries](/guide/user/fhir-query)
- [Homomorphic encryption](/guide/user/homomorphic-encryption)
