# PHT CORD Demo
This section will provide explanations and examples for writing and executing CORD demo code and queries by using PHT meDIC.
By using the demo account, we automatically accept and execute your analysis over three stations providing secure access to synthetic 
CORD demo data in FHIR.

Demo credentials for [PHT demo](https://demo.personalhealthtrain.de) username `demo_user` and password `cord_pht_demo`.
With this user you can use all functionalities and
take a look at our admin area. Don't worry and play around, you cannot break something and the system resets itself.

## Running CORD demo trains
We suggest to you to follow these steps:

1. Download and install our offline tool.
2. Load the private keys.
3. Define your FHIR query to be executed (see section below).
4. Define your analysis (see section below).
5. Submit your code (see section below).
6. Decrypt results.


### Step 1 - Preliminaries
1. Download and install the offline tool from our [releases page](https://github.com/PHT-Medic/offline-tool/releases).
2. The demo user has predefined [keys](https://github.com/PHT-Medic/cord-pht-demo/tree/master/cord-demo-keys). Please download those.
3. Login our [PHT demo page](https://demo.personalhealthtrain.de) with username `demo_user` and password `cord_pht_demo`.


### Step 2 - Offline Tool and key loading
 Get familiar with its functionalities additional infos can be found in the
[offline tool documentation](../user_guide/offline_tool.md).

You need to download and use the [keys](https://github.com/PHT-Medic/cord-pht-demo/tree/master/cord-demo-keys) in order 
to decrypt the analysis results.
Go to the `Security` Section of the tool and load the previous downloaded `demo-start123_sk.pem` private key.
You need to enter the password of the private `start123`. Now you can continue with train submission - you will need to sign
with your private key your submitted code and query.

### Step 3 - FHIR queries
Our self implemented train-library not only includes security but also standardised FHIR query execution and access and
currently supports the following servers: IBM, Hapi and Blaze. In this demo we use Blaze FHIR servers.
Please follow these in order to create a first FHIR query.

1. Login to the UI
2. Create a new train
3. Select the CORD Demo in the desired programming language for your proposal
4. Specify the stations to be executed at
5. Specify the query
6. Sign the hash with the local Offline Tool [documentation](../user_guide/offline_tool.md#sign-hash)

Read this section for details regarding FHIR queries: [FHIR query documentation](cord_fhir.md)

### Step 4 - write your analysis code
In any IDE you can write your analysis code. We suggest to use PyCharm for Python and RStudio for R code.
These following examples will be executed at each station. Please get familiar with the following Python or R code:

R demo code is documented here: [R CORD documentation](cord_r.md)

Python demo code is documented here: [Python CORD documentation](cord_python.md)


### Step 5 - Code submission
Upload your analysis code within the UI and select the entrypoint (script to be executed at stations if multiple files are submitted).
The hash of the uploaded files and query needs to be signed by the offline tool with your private key.

TODO add images when bugs are fixed in UI.

### Step 6 - result download and decryption
After a few minutes your train results can be downloaded. The files are automatically encrypted and need to be decrypted with the offline tool.
Please follow these steps:

1. Download results
2. Open the offline tool
3. Go to "Model" section
4. Load your private key
5. Open the result directory
6. Select the files to decrypt
7. Decrypt the files
8. View or process the results locally

More information regarding result decryption can be read [here](../user_guide/offline_tool.md#decrypt-results).
The decrypted files can be accessed from you explorer or finder locally.
<br/><br/>
![Offline Tool decrypted files](../images/offline_tool_images/decrypted.png)
<br/><br/>

## FAQ
### Train not updating
**Question: My train is not updated in the UI, what can I do?**

**Answer** Most likely your code or query has caused an error during execution. We work on extending this version, to provide you with
log files from the execution.

### Is this the PHT?
**Question: Is this the personal health train?**

**Answer** This is the implementation of the PHT from Tübingen University. Many other versions exist.

### Is there a difference in the demo?
**Question: Is the pht-medic as it would operate on real patient data?**

**Answer** All services are interacting in this demo, as it would be on real data.
But there is a major difference: any train will be approved and executed. There is no one to validate, if something malicious is ongoing.
In case you saved all patient data as fake results in the train, you did not break the system nor hacked the architecture. We allowed you and automatically executed your train to do such.