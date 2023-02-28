# Setup / Configuration
As analysts, we will interact with two of the components of the PHT. The [Central services](#central-services), where
we can create [Trains](/guide/introduction/trains.md) and see their status, and the [Desktop APP](#desktop-app), where 
we can create our keys, sign our trains, and decrypt the results of our train. In this guide, we will show 
step-by-step how to install the desktop app and create our user profile in the central instance. Then, we will show how
to make our first train and download the results.   
## Desktop App

The PHT Desktop App is the offline tool of the User Interface. It can sign hashes locally during the submission process 
of a train. After successful execution, it is used to decrypt downloaded results and key management.  

### Installation

We can download the newest release of the Desktop APP for Windows, Linux, or Mac from 
[GitHub](https://github.com/PHT-Medic/desktop-app/releases/latest) and install the software on our local machine.
[![download](/images/offline_tool_images/download_app.png)](/images/offline_tool_images/download_app.png)
### Create Keys ([for alternative, see below](/guide/analyst/setup#alternative-approach))
The first thing we need from the Desktop APP is an *RSA-key-pair*. For this, follow these steps.

1. Start the application.
2. From the Homepage click on **Settings** on the left hand side.

[![Offline Tool Start](/images/offline_tool_images/settings.png)](/images/offline_tool_images/settings.png)
      
3. Click on the **KeyPair**-button of the RSA box.

[![Offline Tool KeyPairs](/images/offline_tool_images/encryption.png)](/images/offline_tool_images/encryption.png)
      

4. Specify the directory where the keys should be saved.
5. Specify the filename of the private and the public key on the right side.
6. Select a passphrase for our private key. (If we press enter, an empty passphrase will be used)
7. Click on the **Generate**-button.

### Alternative approach
Generate a new key using [open-ssl](https://www.openssl.org/):

1. Open a command-line terminal
2. Create and go to our specific folder where we want to store the new key-pair
3. Type: ```openssl genrsa -passout pass:start123 -out private.pem 2048``` for creating the private key
4. Type: ```openssl rsa -in private.pem -passin pass:start123 -outform PEM -pubout -out public.pem``` for creating the 
associated public key.

### Load Keys
If we already have made a key-pair, we can load them into the Desktop APP. For this, follow these steps.

1. Start the application.
2. From the Homepage click on **Settings** on the left hand side.
3. Click on the **KeyPair**-button of the RSA box.
4. Specify the directory where the keys are saved.
5. Specify the Passphrase for the key.
6. Click on the **Load**-button.


## Central Services
The User Interface (UI) [https://pht-medic.medizin.uni-tuebingen.de](https://pht-medic.medizin.uni-tuebingen.de/) is the
central control interface to interact with the PHT. Its main tasks are the administration of stations and train 
proposals but also the submission of analysis-trains and consequently receiving encrypted results.

### Login
Log into the Central service with either the identity provider from our organization or an account that our realm 
admin set up. In the [admin guide](/guide/admin/central), we can find how the user management and 
configuration of identity providers is done.

### Registering/Updating a public key
After signing in for the first time, we should register the public key we generated in the Desktop APP in the Central 
Services. In the **Home** section press **Settings** in the menu on the left-hand side and then press **Secrets**.

We ...

- ... *key type*: We can choose between an RSA-key and a Paillier-key. The Paillier-key is not needed in the base case.
For more information, look at the  "[Train With  Homomorphic Encryption](/guide/analyst/other_features)" chapter.
- ... *key name*: The preferred name for this specific key.

Furthermore, we do have two options for loading the key into the system:

1. Load the key via the file path (through the **Browse** option)
2. Copy and paste the whole key into the **Content**-section.

On the right side, we will then find each already stored keys with specific name as list below the **Overview** and the
search bar (where we can filter for a specific key in the list).

[![image](/images/ui_images/Register_Updating_public_key.png)](/images/ui_images/Register_Updating_public_key.png)

### Create a Train
We now have all the prerequisites we need to create our first train. The only thing missing to send it on its 
way, is receiving approval from the stations containing the data we wish our train to train on. Therefore, we will 
look at [proposals](/guide/analyst/proposal_analyst) next.
