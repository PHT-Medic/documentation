# Analyst Introduction
As an Analyst, you will interact with two of the components of the PHT. The [Central services](#central-services), where you can create [Trains](/guide/introduction/trains.md) and see their status,
and the [Desktop APP](#desktop-app), where you can create your keys, sign your trains, and decrypt the results of your train. 
In this guide, we will show you step-by-step how to install the desktop app and create your user in the central instance. Then, we will show you how to make your first train and download the results.   
## Desktop App

The PHT Desktop App is the offline tool of the User Interface. It can sign hashes locally during the submission process of a train.
After successful execution, it is used to decrypt downloaded results and key management.  

### Installation

You can download the newest release of the Desktop APP for Windows, Linux, or Mac from [GitHub](https://github.com/PHT-Medic/desktop-app/releases/latest) and
install the software on your local machine.
[![download](/images/offline_tool_images/download_app.png)](/images/offline_tool_images/download_app.png)
### Create Keys
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

### Alternative approach
Generate a new key using [open-ssl](https://www.openssl.org/):

1. Open a command-line terminal
2. Create and go to your specific folder where you want to store the new key-pair
3. Type: ```openssl genrsa -passout pass:start123 -out private.pem 2048``` for creating the private key
4. Type: ```openssl rsa -in private.pem -passin pass:start123 -outform PEM -pubout -out public.pem``` for creating the assoziated public key.

### Load Keys
If you already have made a key-pair, you can load them into the Desktop APP. For this, follow these steps.

1. Start the application.
2. From the Homepage click on **Settings** on the left hand side.
3. Click on the **KeyPair**-button of the RSA box.
4. Specify the directory where the keys are saved.
5. Specify the Passphrase for the key.
6. Click on the **Load**-button.


## Central Services
The User Interface (UI) [https://pht-medic.medizin.uni-tuebingen.de](https://pht-medic.medizin.uni-tuebingen.de/) is the central control interface 
to interact with the PHT. Its main tasks are the administration of stations and train proposals
but also the submission of analysis-trains and consequently receiving encrypted results.

### Login
Log into the Central service with either the identity provider from your organization or an account that your realm admin set up for you . In the [admin guide](/guide/admin/central), you can find how the user management and configuration of identity providers is done.

### Registering/Updating a public key
After signing in for the first time, you should register the public key you generated in the Desktop APP in the Central Services.
In the **Home** section press **Settings** in the menu on the left-hand side and then press **Secrets**.

You can define the ...

- ... *key type*: You can choose between an RSA-key and a Paillier-key. The Paillier-key is not needed in the base case. For more information, look at the  "[Train With  Homomorphic Encryption](/guide/analyst/other_features)" chapter
- ... *key name*: The preferred name for this specific key

Furthermore, you do have two options for loading the key into the system:

1. Load the key via the file path (through the **Browse** option)
2. Copy and paste the whole key into the **Content**-section.

On the right sight, you will then find each already stored keys with specific name as list below the **Overview** and the search bar (where you can filter after a specific key in the list)

[![image](/images/ui_images/Register_Updating_public_key.png)](/images/ui_images/Register_Updating_public_key.png)

### Create a Train
You now have all the prerequisites you need to create your first train.
