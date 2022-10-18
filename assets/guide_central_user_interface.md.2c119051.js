import{_ as e,o as t,c as a,f as i}from"./app.28c9cc87.js";const n="/documentation/images/ui_images/Register_Updating_public_key.png",o="/documentation/images/ui_images/proposal.png",r="/documentation/images/ui_images/proposal_create.png",s="/documentation/images/ui_images/proposal_approve.png",h="/documentation/images/ui_images/create_train.png",l="/documentation/images/ui_images/train_1.png",c="/documentation/images/ui_images/train_2.png",p="/documentation/images/ui_images/train_3_1.png",d="/documentation/images/ui_images/train_3_2.png",u="/documentation/images/ui_images/train_4.png",g="/documentation/images/ui_images/train_5.png",m="/documentation/images/ui_images/train_6.png",C=JSON.parse('{"title":"User Interface","description":"","frontmatter":{},"headers":[{"level":2,"title":"User Account Configuration","slug":"user-account-configuration","link":"#user-account-configuration","children":[{"level":3,"title":"Registering/Updating a public key","slug":"registering-updating-a-public-key","link":"#registering-updating-a-public-key","children":[]}]},{"level":2,"title":"Proposals","slug":"proposals","link":"#proposals","children":[{"level":3,"title":"Creating a new Proposal","slug":"creating-a-new-proposal","link":"#creating-a-new-proposal","children":[]},{"level":3,"title":"Accepting/Rejecting an incoming proposal","slug":"accepting-rejecting-an-incoming-proposal","link":"#accepting-rejecting-an-incoming-proposal","children":[]}]},{"level":2,"title":"Train submission","slug":"train-submission","link":"#train-submission","children":[{"level":3,"title":"1. Add user key","slug":"_1-add-user-key","link":"#_1-add-user-key","children":[]},{"level":3,"title":"2. Create a new train","slug":"_2-create-a-new-train","link":"#_2-create-a-new-train","children":[]},{"level":3,"title":"3. Start the train","slug":"_3-start-the-train","link":"#_3-start-the-train","children":[]}]}],"relativePath":"guide/central/user_interface.md"}'),f={name:"guide/central/user_interface.md"},y=i('<h1 id="user-interface" tabindex="-1">User Interface <a class="header-anchor" href="#user-interface" aria-hidden="true">#</a></h1><p>The User Interface (UI) <a href="https://pht-medic.medizin.uni-tuebingen.de/" target="_blank" rel="noreferrer">https://pht-medic.medizin.uni-tuebingen.de</a> is the central control interface to interact with the PHT. Its main tasks are the administration of stations and train proposals but also the submission of analysis-trains and consequently receiving encrypted results.</p><h2 id="user-account-configuration" tabindex="-1">User Account Configuration <a class="header-anchor" href="#user-account-configuration" aria-hidden="true">#</a></h2><h3 id="registering-updating-a-public-key" tabindex="-1">Registering/Updating a public key <a class="header-anchor" href="#registering-updating-a-public-key" aria-hidden="true">#</a></h3><p>After signing in for the first time you should register a public key in the UI (Vault). In the <strong>Home</strong> section press <strong>Settings</strong> in the menu on the left-hand side and then press <strong>Secrets</strong>.</p><p>You can define the ...</p><ul><li>... <em>key type</em>: You can choose between an RSA-key and a Paillier-key</li><li>... <em>key name</em>: The preferred name for this specific key</li></ul><p>Furthermore, you do have two options for loading the key into the system:</p><ol><li>Load the key via the file path (through the <strong>Browse</strong> option)</li><li>Copy and paste the whole key into the <strong>Content</strong>-section.</li></ol><p>On the right sight, you will then find each already stored keys with specific name as list below the <strong>Overview</strong> and the search bar (where you can filter after a specific key in the list)</p><p><a href="/images/ui_images/Register_Updating_public_key.png"><img src="'+n+'" alt="image"></a></p><h2 id="proposals" tabindex="-1">Proposals <a class="header-anchor" href="#proposals" aria-hidden="true">#</a></h2><p>A Proposal is an organizational unit in the PHT, which represents the collaboration between different participants in regard to a specific research or analysis project.<br> It contains an initial risk assessment as well as a high level description of the requested data.</p><p>In the <strong>Home</strong> section press <strong>Proposals</strong> in the menu on the left-hand side. At first, you will lead to the <strong>outgoing</strong>-proposals section, where you can see a list of all the proposals created by this station. Via the searchbar you can filter after the name. You have the option to adjust the already existing proposals via the <strong>List</strong>-icon or to delete the proposal via the <strong>bin</strong>-icon. Furthermore, you can see, who exactly created that proposal.</p><p>Moreover, you have the option to switch to the <strong>incoming</strong> section or to create a new proposal on the left side between the menu and the overview-list.</p><p><a href="/images/ui_images/proposal.png"><img src="'+o+'" alt="image"></a></p><h3 id="creating-a-new-proposal" tabindex="-1">Creating a new Proposal <a class="header-anchor" href="#creating-a-new-proposal" aria-hidden="true">#</a></h3><p>After pressing the <strong>Create</strong>-button, it will take you to a new form. Here you can define principal aspects of you train. You can define ...</p><ul><li>... a title of the proposal.</li><li>... the group where you can choose from cord, python, leuko-expert and R</li><li>... Additionally you can select the Image such as <em>base</em> (for cord | leuko-expert | python), <em>ml</em> (for python | r) and <em>conda</em> , <em>pytorch</em> , <em>tensorflow</em> (for python).</li><li>... the risk level and specifies it by context in the risk comment: <em>Low</em> | <em>Mid</em> | <em>High</em>.</li><li>... to which of the known stations you want to send this proposal. (You can choose multiple stations by clicking on the green <strong>+</strong>-icon.)</li><li>... some Data/Parameters information, which will be necessary for the training algorithm in the <strong>Data/Parameter</strong>- text block.</li></ul><p>After clicking on the create-button the proposal will be sent to all the selected stations, such each side can approve/reject the analysis.</p><p><a href="/images/ui_images/proposal_create.png"><img src="'+r+'" alt="Proposal create"></a></p><h4 id="definition-of-risk" tabindex="-1">Definition of Risk <a class="header-anchor" href="#definition-of-risk" aria-hidden="true">#</a></h4><p>A train is working on specific data from the different station but data can be quite differentiable depending on combinations of all data. Private data is really sensitive and needs to be handled accordingly. So we give a Risk, so each station can have a clue about what kind of data will be used during the stopover of the train. For this we have three stages:</p><ul><li>Low risk (<em>green</em>): The train won&#39;t use any personal related data, such as calculation about all Loinc-Codes of Observation-Resources in a FHIR-Server.</li><li>Mid risk (<em>yellow</em>): The train will use only one or quite few personal information of a patient such as the gender or the age. One param will not be harmful at all, but should still be mentioned when used during the process.</li><li>High (<em>red</em>): The train in general will perform some calculations / analysis on private data where it can be possible that private information can be figured out about a single person. This can occur when the calculations will be performed on only a few participants with many private data about them. Overall this should not be an issue, when the FHIR-Servers provide enough privacy preserving measurements such as pseudonymization or anonymization.</li></ul><h3 id="accepting-rejecting-an-incoming-proposal" tabindex="-1">Accepting/Rejecting an incoming proposal <a class="header-anchor" href="#accepting-rejecting-an-incoming-proposal" aria-hidden="true">#</a></h3><p>Within the incoming section of each station, a station authority can independently decide to comment, approve or reject a study proposal for analysis. In order to do such, click on the <strong>list</strong>-icon on the right side of the corresponding proposal and select the preferred action.</p><p><a href="/images/ui_images/proposal_approve.png"><img src="'+s+'" alt="Proposal Creation"></a></p><h2 id="train-submission" tabindex="-1">Train submission <a class="header-anchor" href="#train-submission" aria-hidden="true">#</a></h2><h3 id="_1-add-user-key" tabindex="-1">1. Add user key <a class="header-anchor" href="#_1-add-user-key" aria-hidden="true">#</a></h3><p>If no public key has been registered yet follow the instructions in <a href="#user-account-configuration">user account configuration</a> section.</p><h3 id="_2-create-a-new-train" tabindex="-1">2. Create a new train <a class="header-anchor" href="#_2-create-a-new-train" aria-hidden="true">#</a></h3><p>In the <strong>Home</strong> section you can choose <strong>Trains</strong> in the menu on the left-hand side. You will lead to the <strong>Outgoing</strong> page where you can switch to the creation form via the <strong>Create</strong> button inbetween the menu and the overview-list.</p><h4 id="_2-1-define-pre-parameters-of-the-new-train" tabindex="-1">2.1. Define pre-parameters of the new train <a class="header-anchor" href="#_2-1-define-pre-parameters-of-the-new-train" aria-hidden="true">#</a></h4><p>On this page you can define:</p><ul><li><p>an <em>optional</em> <strong>name</strong> for the given train.</p></li><li><p>which <strong>type</strong> of train you want to create. There are two options:</p><ul><li><strong>Discovery</strong>: A discovery train can be used to get to know about the availability of data at the targeted stations.</li><li><strong>Analysis</strong>: An analysis train should be created on base of the knowledge achieved during the discovery phase.</li></ul></li><li><p>to which <strong>proposal</strong> the train is associated. Only one proposal can be selected.</p></li></ul><p>Click on <strong>create</strong> to continue.</p><p><a href="/images/ui_images/create_train.png"><img src="'+h+'" alt="Train Creation"></a></p><h4 id="_2-2-define-masterimage-and-choose-stations" tabindex="-1">2.2. Define MasterImage and choose Stations <a class="header-anchor" href="#_2-2-define-masterimage-and-choose-stations" aria-hidden="true">#</a></h4><p>At this point the MasterImage settings are taking from the chosen proposal but can still be changed.</p><p>Additionally, you can select those stations you want the train to be sent to. The order you selected the stations will define the path the train will pursue.</p><p>Click on <strong>Next</strong> to continue.</p><p><a href="/images/ui_images/train_1.png"><img src="'+l+'" alt="Train: MasterImage and Stations"></a></p><h4 id="_2-3-check-the-security-settings" tabindex="-1">2.3. Check the Security Settings <a class="header-anchor" href="#_2-3-check-the-security-settings" aria-hidden="true">#</a></h4><p>You need to select one of your registered RSA public keys for encrypting the train.</p><p>Additionally, you can add a Paillier-key to be used for homomorphic encryption.</p><p>Click on <strong>Next</strong> to continue.</p><p><a href="/images/ui_images/train_2.png"><img src="'+c+'" alt="Train: Security Settings"></a></p><h4 id="_2-4-load-code-to-the-train" tabindex="-1">2.4. Load Code to the train <a class="header-anchor" href="#_2-4-load-code-to-the-train" aria-hidden="true">#</a></h4><p>In the file-section of the train submission you can upload the files containing your code, which the train will execute while visiting the different stations.</p><p>You can decide whether you want to upload only one single file or a whole directory of files. Depending on you decision you need to mark or unmark the <strong>Directory mode</strong>-switch.</p><p>After you have selected the file or directory via the browse-button you can find all the files listed below. Depending on the folder, you may not wish to upload each file, so it is possible to delete some files at this point.</p><p><a href="/images/ui_images/train_3_1.png"><img src="'+p+'" alt="Train: Load Code"></a></p><p>After uploading the files to the train you need to select one of the files as entrypoint. It is not name-depending as you can see in the picture below. You can select the specific file by clicking on the green-button. The chosen file will be displayed in the black textfield. <em>We have chosen the stuff_1.py as entrypoint for showing you, that it is not necessary to name one of your files &quot;entrypoint&quot;.</em></p><p>By clicking on the yellow <strong>X</strong>-button you deselect this file.</p><p>Additionally, you can delete some files as well at this point.</p><p>Click on <strong>Next</strong> to continue.</p><p><a href="/images/ui_images/train_3_2.png"><img src="'+d+'" alt="Train: Load Code"></a></p><h4 id="_2-5-add-a-fhir-query" tabindex="-1">2.5. Add a FHIR Query <a class="header-anchor" href="#_2-5-add-a-fhir-query" aria-hidden="true">#</a></h4><p>In the <strong>Extra</strong>-section of the train submission you can add your valid FHIR Query to the train. It can be either the option with parameters or as URL version.</p><p>You can find more information about the query in this documentation under the section <a href="./../fhir.html">User Guide -&gt; FHIR Query</a></p><p>Here we used an example query from the FHIR Query documentation.</p><p><a href="/images/ui_images/train_4.png"><img src="'+u+'" alt="Train: Add FHIR Query"></a></p><h4 id="_2-6-create-hash-and-signature" tabindex="-1">2.6. Create Hash and Signature <a class="header-anchor" href="#_2-6-create-hash-and-signature" aria-hidden="true">#</a></h4><p>One of the last steps it is to create a hash of the train started by this station. For this you need to generate the hash-value. (This could take some time)</p><p>After the hash value was generated, copy it and perform the signature on this with your private key. For this action you need to download and install the Offline Tool. How this signature is performed you can read it in this documentation under the section <a href="./desktop_app.html">User Guide -&gt; Desktop App (Offline Tool)</a></p><p>The final signature from the Offline App you need to the textfield <strong>Signed Hash</strong>.</p><p>Click on <strong>Next</strong> to finish the configuration step.</p><p><a href="/images/ui_images/train_5.png"><img src="'+g+'" alt="Train: Create Hash and Signature"></a></p><h3 id="_3-start-the-train" tabindex="-1">3. Start the train <a class="header-anchor" href="#_3-start-the-train" aria-hidden="true">#</a></h3><p>At this point the train is ready to be led loose on the track.</p><p>You can start the train by firstly build the whole train together (by clicking on the green <strong>start</strong>-button next to <strong>Build</strong>).</p><p>After a successful build train you can <strong>Run</strong> the train, which starts visiting the stations and perform your code.</p><p>Each station needs to start the code manually via the Airflow-Control of the station. You can find more information here: <a href="./../station/usage.html">Station</a></p><p>After running through all station, you can click on the <strong>Download</strong>-button on point <strong>4.Result</strong>. To decrypt the results, you need the <a href="./desktop_app.html">Desktop App</a> again.</p><p><a href="/images/ui_images/train_6.png"><img src="'+m+'" alt="Train: Start train"></a></p>',75),_=[y];function b(w,k,v,A,x,T){return t(),a("div",null,_)}const S=e(f,[["render",b]]);export{C as __pageData,S as default};