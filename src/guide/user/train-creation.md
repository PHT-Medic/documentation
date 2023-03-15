# Train Creation
Important: Before you can create a new train, you must have an available proposal. If there is none, you have to create a new [Proposal](./proposal.md) first.

## Train submission

### Create a new train
In the **Home** section you can choose **Trains** in the menu on the left-hand side. You will lead to the **Outgoing** page where you can switch to the creation form via the **Create** button inbetween the menu and the overview-list.
####  Define pre-parameters of the new train
On this page you can define:

- an *optional* **name** for the given train.
- which **type** of train you want to create. There are two options:
   - **Discovery**: A discovery train can be used to get to know about the availability of data at the targeted stations.
   - **Analysis**: An analysis train should be created on base of the knowledge achieved during the discovery phase.

- to which **proposal** the train is associated. Only one proposal can be selected.

Click on **create** to continue.

[![Train Creation](/images/ui_images/create_train.png)](/images/ui_images/create_train.png)

#### Define MasterImage and choose Stations

At this point the MasterImage settings are taking from the chosen proposal but can still be changed.

Additionally, you can select those stations you want the train to be sent to. The order you selected the stations will define the path the train will pursue.

Click on **Next** to continue.

[![Train: MasterImage and Stations](/images/ui_images/train_1.png)](/images/ui_images/train_1.png)

#### Check the Security Settings

You need to select one of your registered RSA public keys for encrypting the train.

Additionally, you can add a Paillier-key to be used for homomorphic encryption. 

Click on **Next** to continue.

[![Train: Security Settings](/images/ui_images/train_2.png)](/images/ui_images/train_2.png)

#### Load Code to the train

In the file-section of the train submission you can upload the files containing your code, which the train will execute while visiting the different stations.

You can decide whether you want to upload only one single file or a whole directory of files. Depending on you decision you need to mark or unmark the **Directory mode**-switch.

After you have selected the file or directory via the browse-button you can find all the files listed below. Depending on the folder, you may not wish to upload each file, so it is possible to delete some files at this point.

[![Train: Load Code](/images/ui_images/train_3_1.png)](/images/ui_images/train_3_1.png)

After uploading the files to the train you need to select one of the files as entrypoint. It is not name-depending as you can see in the picture below. You can select the specific file by clicking on the green-button. The chosen file will be displayed in the black textfield. *We have chosen the stuff_1.py as entrypoint for showing you, that it is not necessary to name one of your files "entrypoint".*

By clicking on the yellow **X**-button you deselect this file.

Additionally, you can delete some files as well at this point.

Click on **Next** to continue.

[![Train: Load Code](/images/ui_images/train_3_2.png)](/images/ui_images/train_3_2.png)

#### Add a FHIR Query

In the **Extra**-section of the train submission you can add your valid FHIR Query to the train. It can be either the option with parameters or as URL version.

You can find more information about the query in this documentation under the section [User Guide -> FHIR Query](fhir-query.md)

Here we used an example query from the FHIR Query documentation. 

[![Train: Add FHIR Query](/images/ui_images/train_4.png)](/images/ui_images/train_4.png)

#### Create Hash and Signature 

One of the last steps is to create a hash of the train started by this station. For this, you need to generate the hash value. (This could take some time)

After the hash value was generated, copy the HashKey and perform the signature with your private key. 

The application must know your keypair (private and public key) to perform the signature on a hash value. (See [Create Keys](setup.md#load-keys) when you have restarted the Desktop APP). 

1. In the Menu, click on **Signature**.
2. In the **Hash** text field, you should paste the generated HashKey
3. Click on **Sign**.
4. Copy the signed hash from the **Signature (read-only)** text field and proceed
      [![Offline Tool Signature](/images/offline_tool_images/Signature.png)](/images/offline_tool_images/Signature.png)

The signature from the Desktop APP now needs to be pasted into the text field **Signed Hash**.

Click on **Next** to finish the configuration step.

[![Train: Create Hash and Signature](/images/ui_images/train_5.png)](/images/ui_images/train_5.png)

###  Train Approval 

Before the train can be built and run, it must be approved by the stations you selected at the beginning of the train setup process. See the [Admin Guide](../admin/central) for details on how the approval process works.

### Finding the Train 

Your train can be found in several ways after it is created.

 - In the **Home** section, you can choose **Trains** in the menu on the left-hand side. All your trains and their current status are listed under *Outgoing**.
 - If you have several trains for different proposals, it may be helpful to find them under proposals. To do this, go to the **Home** section and select **Proposals** from the menu on the left. There you will find your list of proposals. Select the one your train is using and select **Trains** from the proposals menu below the proposals name. You will then see a list of all the trains for that proposal.

 Selecting the name of the train will take you to the train overview.  Here you can view the status and start the build and run.

### Start the train

At this point, the train is ready to be led loose on the track.


You can start the train by firstly build the whole train together (by clicking on the green **start**-button next to **Build**).

After a successful build train you can **Run** the train, which starts visiting the stations and perform your code.

Each station needs to start the code manually via the Airflow-Control of the station. You can find more information here: [Station](../admin/usage.md)


After running through all station, you can click on the **Download**-button on point **4.Result**. To decrypt the results, you need the [Desktop App](/train.md) again.
