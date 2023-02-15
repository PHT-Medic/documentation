# Proposals
A Proposal is an organizational unit in the PHT, which represents the collaboration between different participants in regard to a specific research or analysis project.  
It contains an initial risk assessment as well as a high level description of the requested data.

In the **Home** section press **Proposals** in the menu on the left-hand side.
At first, you will lead to the **outgoing**-proposals section, where you can see a list of all the proposals created by this station. Via the searchbar you can filter after the name.
You have the option to adjust the already existing proposals via the **List**-icon or to delete the proposal via the **bin**-icon. Furthermore, you can see, who exactly created that proposal.

Moreover, you have the option to switch to the **incoming** section or to create a new proposal on the left side between the menu and the overview-list.

[![image](/images/ui_images/proposal.png)](/images/ui_images/proposal.png)

## Creating a new Proposal

After pressing the **Create**-button, it will take you to a new form. Here you can define principal aspects of you train. You can define ...

- ... a title of the proposal.
- ... the group where you can choose from cord, python, leuko-expert and R
- ... Additionally you can select the Image such as *base* (for cord | leuko-expert | python), *ml* (for python | r) and *conda* , *pytorch* , *tensorflow* (for python).
- ... the risk level and specifies it by context in the risk comment: *Low* | *Mid* | *High*.
- ... to which of the known stations you want to send this proposal. (You can choose multiple stations by clicking on the green **+**-icon.)
- ... some Data/Parameters information, which will be necessary for the training algorithm in the **Data/Parameter**- text block.

After clicking on the create-button the proposal will be sent to all the selected stations, such each side can approve/reject the analysis.
How the approval process works from the perspective of a realm admin, see the [admin guide](/guide/admin/central).

[![Proposal create](/images/ui_images/proposal_create.png)](/images/ui_images/proposal_create.png)

### Definition of Risk
A train is working on specific data from the different station but data can be quite differentiable depending on combinations of all data. Private data is really sensitive and needs to be handled accordingly. So we give a Risk, so each station can have a clue about what kind of data will be used during the stopover of the train.
For this we have three stages:

- Low risk (*green*): The train won't use any personal related data, such as calculation about all Loinc-Codes of Observation-Resources in a FHIR-Server.
- Mid risk (*yellow*): The train will use only one or quite few personal information of a patient such as the gender or the age. One param will not be harmful at all, but should still be mentioned when used during the process.
- High (*red*): The train in general will perform some calculations / analysis on private data where it can be possible that private information can be figured out about a single person. This can occur when the calculations will be performed on only a few participants with many private data about them. Overall this should not be an issue, when the FHIR-Servers provide enough privacy preserving measurements such as pseudonymization or anonymization.


