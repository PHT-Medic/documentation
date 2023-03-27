# PHT CORD Demo
This section will provide explanations and examples for writing and executing CORD demo code and queries by using PHT meDIC.
By using the demo account, we automatically accept and execute your analysis over three stations providing secure access to synthetic 
CORD demo data in FHIR.

Demo credentials for [PHT demo](https://demo.personalhealthtrain.de): username `demo_user` and password `cord_pht_demo`.
With this user you can use all functionalities and
take a look at our admin area. Don't worry and play around, you cannot break something and the system resets itself.

## Running CORD demo trains
We suggest to you to follow these steps:

1. Download and install our Offline Tool.
2. Load the private keys.
3. Train submission:
    1. Define your FHIR query to be executed (see section below).
    2. Define your analysis (see section below).
    3. Submit your code (see section below).
4. Run the train.
5. Decrypt results.


### Step 1 - Preliminaries
1. Download and install the Offline Tool from our [releases page](https://github.com/PHT-Medic/offline-tool/releases).
2. The demo user has predefined [keys](https://github.com/PHT-Medic/cord-pht-demo/tree/master/cord-demo-keys). Please download those.
3. Login to our [PHT demo page](https://demo.personalhealthtrain.de) with username `demo_user` and password `cord_pht_demo`.


### Step 2 - Offline Tool and key loading
 Get familiar with its functionalities. Additional information can be found in the
[DesktopApp documentation](../../guide/user/train.md).

You need to download and use the [keys](https://github.com/PHT-Medic/cord-pht-demo/tree/master/cord-demo-keys) in order 
to decrypt the analysis results.
Go to the `Security Values` section of the tool and load the previous downloaded `demo-start123_sk.pem` private key.
You need to enter the password of the private key: `start123`.
Now you can continue with the train submission - you will need to sign
your submitted code and query with your private key.

### Step 3 - Train submission
For this CORD PHT demo we recommend using or customizing an example train.
Please clone this [repository](https://github.com/PHT-Medic/cord-pht-demo) if you want to use our example trains.

Now you need to decide if you want to run a [Python](cord_python.md) or [R](cord_r.md) analysis.
By writing the analysis code, you specify the data access, we recommend using FHIR.

#### Step 3.1 - FHIR queries
Our self implemented train-library not only includes security but also standardised FHIR query execution and access and
currently supports the following servers: IBM, Hapi and Blaze. In this demo we use Blaze FHIR servers.

Read this section for details regarding FHIR queries:
[FHIR query documentation](cord_fhir.md) or continue with the train submission.

#### Step 3.2 - Write your analysis code
You can write your analysis code in any IDE. We suggest to use PyCharm for Python and RStudio for R code.
The following examples will be executed at each station. Please get familiar with the following Python or R code:

R demo trains code is documented here: [R CORD documentation](cord_r.md)

Python demo trains code is documented here: [Python CORD documentation](cord_python.md)


#### Step 3.3 - Code submission
Upload your analysis code within the UI and select the entrypoint (script to be executed at stations if multiple files are submitted).
The hash of the uploaded files and query needs to be signed by using the Offline Tool with your private key.
The next steps guide you through the general submission process, exemplified by the submission of [R demo train 2](https://github.com/PHT-Medic/cord-pht-demo/blob/master/R/demo-train-2.R).

1. Login to the UI
2. Create a new train. Select the proposal based on your desired programming language.
3. Keep the default Demo master image of the train unchanged, if you submit provided example code.
<br/><br/>
   ![submission 1](/images/demo/submission_1.png)
<br/><br/>
5. Specify the stations to be executed at and select depending on your programming language the master image.
<br/><br/>![submission 2](/images/demo/submission_2.png)<br/><br/>



7. Upload the algorithm and select the entrypoint of the train.
   <br/><br/>![submission 3](/images/demo/submission_3.png)<br/><br/>
8. Specify the query
   <br/><br/>![submission 4](/images/demo/submission_4.png)<br/><br/>
9. Sign the hash with the desktop app
   <br/><br/> ![submission 5](/images/demo/submission_5.png)<br/><br/>


### Step 4 - Train running
You need to build and run the train before you can download the results.
Start the building process of the train.  
<br/><br/> ![submission 6](/images/demo/submission_6.png)<br/><br/>
Please manually reload the page within the browser after 30-40 seconds.
Then you will be able to start the execution at the stations.
<br/><br/> ![submission 7](/images/demo/submission_7.png)<br/><br/>

After a few minutes, results are available. Please reload the page manually again.
A soon released feature will display the progress of the train in the Stations overview with a random station numbering.
The user will also be able to see log files of the train.


### Step 5 - result download and decryption
After a few minutes your train results can be downloaded.
The files are automatically encrypted and need to be decrypted with the Offline Tool.
Please follow these steps:

1. Download results
<br/><br/> ![submission 8](/images/demo/submission_8.png)<br/><br/>
2. Unzip the downloaded train results locally
3. Result decryption:
    1. Start the Offline Tool
    2. Go to the "Model" section
    3. Load your private key
    4. Open the unzipped result directory "pht_results"
    5. Load the "train_config.json"-file of your train
    6. Select the files to decrypt (the selected ones appear in the box on the right)
    7. Decrypt the files by pressing the "Decrypt selected models" button
      <br/><br/> ![submission 9](/images/demo/submission_9.png)<br/><br/>
4. View, process and store the results locally on your computer.
You can directly access them with the "Show decrypted files" button.
   <br/><br/> ![submission 10](/images/demo/submission_10.png)<br/><br/>

More information regarding result decryption can be read [here](./../../guide/user/train.md#decrypt).
The decrypted files can be accessed from your explorer or finder locally.

## FAQ
### Train not updating
**Question: My train is not updated in the UI, what can I do?**

**Answer** Most likely your code or query has caused an error during execution.
We work on extending this version to provide you with
log files from the execution.

### Is this the PHT?
**Question: Is this the Personal Health Train?**

**Answer** This is the implementation of the PHT from Tübingen University (PHT-meDIC). Many other versions exist.

### Any difference in the demo?
**Question: Is the PHT-meDIC as it would operate on real patient data?**

**Answer** All services are interacting in this demo, as it would be on real data.
But there is a major difference: any train will be approved and executed.
There is no one to validate, if something malicious is ongoing.
In case you saved all patient data as fake results in the train, you did not break the system nor hacked the architecture.
We allowed you and automatically executed your train to do so.
