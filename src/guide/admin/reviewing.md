# What is there to review?
Before accepting a proposal or a train the requested data and the code contained in a train need to be reviewed. While
removing network access and the built-in security features should be sufficient to prevent the transfer of data, the
code still needs to be reviewed to prevent any unwanted behaviour.

## Proposal
Proposals are the top level organizational unit of the PHT system. Proposals describe the goal of an analysis, the
requested data and an estimation of the potential risk of participation. When the description of the proposal meets the
local requirements of your station, a user with the role of **Station Authority** can accept the proposal, otherwise
the proposal is rejected (optionally with comments for improvement).

Joining a proposal means that users of other stations also joined in the proposal can select your station as a
participant in the trains they create for this proposal.

## Train
Trains contain analysis code that will be executed on the data requested in the proposal. The code is user submitted, so
while the security protocol prevents the transfer of any unencrypted data via docker images and restricted network access,
prevents direct transfer of any data, the code still needs to be reviewed in order to prevent any kind of malicious behaviour.
