# Analyst Introduction
As an Analyst, you will interact with two of the components of the PHT. The Central services, where you can create [Trains](/guide/introduction/trains.md) and see their status,
and the [Desktop APP](#desktop-app), where you can create your keys, sign your trains, and decrypt the results of your train. 
In this guide, we will show you step-by-step how to install the desktop app and create your user in the central instance; Then, we will show you how to make your first train and download the results.   
# Desktop App

The PHT Desktop App is the offline tool of the User Interface. It can sign hashes locally during the submission process of a train.
After successful execution, it is used to decrypt downloaded results and key management.  

## Installation

You can download the newest release of the Desktop APP for Windows, Linux, or Mac from [GitHub](https://github.com/PHT-Medic/desktop-app/releases/latest) and
install the software on your local machine.
[![download](/images/offline_tool_images/download_app.png)](/images/offline_tool_images/download_app.png)
## Create Keys
The first thing we need from the Desktop APP is an *RSA-key-pair*. For this, follow these steps.

1. Start the application.
2. From the Homepage click on **Settings** on the left hand side.

[![Offline Tool Start](/images/offline_tool_images/settings.png)](/images/offline_tool_images/settings.png)
      
3. Click on the **KeyPair**-button of the RSA box.

[![Offline Tool KeyPairs](/images/offline_tool_images/encryption.png)](/images/offline_tool_images/encryption.png)
      

4. Specify the directory where the keys should be saved.
5. Specify the filename of the private and the public key on the right side.
6. Select a passphrase for your private key. (If you press enter, an empty passphrase will be used)
7. Click on the **Generate**-button.

### Load Keys
If you already have made a key-pair, you can load them into the Desktop APP. For this, follow these steps.

1. Start the application.
2. From the Homepage click on **Settings** on the left hand side.
3. Click on the **KeyPair**-button of the RSA box.
4. Specify the directory where the keys are saved.
5. Specify the Passphrase for the key.
6. Click on the **Load**-button.

[![Offline Tool Start](/images/offline_tool_images/settings.png)](/images/offline_tool_images/settings.png)

### Homomorphic Keys
If you want to create a train that uses Homomorphic encryption, you will have to create a *homomorphic key-pair*; this is done similarly.
Only select the **Homomorphic**-button in step 3.
