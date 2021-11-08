# PHT CORD Demo
This section will provide explanations and examples for writing and executing CORD demo code and queries by using PHT meDIC.
By using the demo account, we automatically accept and execute your analysis over three trains providing secure access to synthetic 
CORD demo data in FHIR.

Demo credentials for [PHT demo](https://demo.personalhealthtrain.de) username ``demo_user`` and password ``cord_pht_demo``. With this user you can use all functionalities and
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
1. Download and install the tool from our [releases page](https://github.com/PHT-Medic/offline-tool/releases).
2. The demo user has predefined [keys](https://github.com/PHT-Medic/cord-pht-demo/tree/master/cord-demo-keys). Please download those.
3. Login our [PHT demo page](https://demo.personalhealthtrain.de) with username ``demo_user`` and password ``cord_pht_demo``.


### Step 2 - Offline Tool and key loading
 Get familiar with its functionalities additional infos can be found here
[documentation](https://pht-medic.github.io/documentation/offline_tool/).

You need to download and use those in order to decrypt the analysis results.
Go to the `Security` Section of the tool and load the previous downloaded `demo-start123_sk.pem` private key.
You need to enter the password of the private ``start123``. Now you can continue with train submission - you will need to sign
with your private key your submitted code and query.

### Step 3 - FHIR queries
Our self implemented train-library not only includes security but also standardised FHIR query execution and access and supports
currently the following servers: IBM, Hapi and Blaze. In this demo we use HAPI FHIR servers.
Please follow these in order to create a first FHIR query.

1. Login to the UI
2. Create a new train
3. Select the CORD Demo
4. Specify the stations to be executed at
5. Specify the query


### Step 4 - write your analysis code
In any IDE you can write your analysis code. We suggest to use PyCharm for Python and RStudio for R code.
These following examples will be executed at each station. Please get familiar with the following Python or R code:

R demo code is documented here: [R CORD documentation](https://pht-medic.github.io/documentation/cord_r/)

Python demo code is documented here: [Python CORD documentation](https://pht-medic.github.io/documentation/cord_python/)


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

TODO add images when bugs are fixed