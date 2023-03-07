# Overview

## What is your role as an admin in the PHT?

As an Admin, you will be responsible for managing the users on your realm, as well as reviewing proposals and trains. You will also manage the trains as you run them at your stations. 
The tasks are mainly performed in two interfaces, the central UI and the station software. 

## What is the central UI?

The User Interface (UI) [https://pht-medic.medizin.uni-tuebingen.de](https://pht-medic.medizin.uni-tuebingen.de/) is the central control interface 
to interact with the PHT. Its main tasks are the administration of stations and train proposals
but also the submission of analysis-trains and consequently receiving encrypted results.

## What is the station software?

Station is the software that runs the trains in the selected clinics.

## What is there to review?
Before accepting a proposal or a train the requested data and the code contained in a train need to be reviewed. While
removing network access and the built-in security features should be sufficient to prevent the transfer of data, the 
code still needs to be reviewed to prevent any unwanted behaviour.

### Proposal
Proposals are the top level organizational unit of the PHT system. Proposals describe the goal of an analysis, the 
requested data and an estimation of the potential risk of participation. When the description of the proposal meets the
local requirements of your station, a user with the role of **Station Authority** can accept the proposal, otherwise
the proposal is rejected (optionally with comments for improvement).

Joining a proposal means that users of other stations also joined in the proposal can select your station as a
participant in the trains they create for this proposal.

### Train
Trains contain analysis code that will be executed on the data requested in the proposal. The code is user submitted, so
while the security protocol prevents the transfer of any unencrypted data via docker images and restricted network access,
prevents direct transfer of any data, the code still needs to be reviewed in order to prevent any kind of malicious behaviour.
