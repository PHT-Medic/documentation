# Key Management
As a user of the PHT, the Desktop App is required to perform certain processes in the User Interface.
The desktop app allows you to sign a train and decrypt 
results using an existing key pair or with a generated pair in the Desktop App.

The desktop app can be downloaded from the following [link](https://github.com/PHT-Medic/desktop-app/releases/latest) for Mac,
Linux and Windows on GitHub.

### Generation
The first thing you need from the Desktop APP is an *RSA-key-pair*. For this, follow these steps.

1. Start the application.
2. From the Homepage click on **Settings** on the left hand side.

[![Offline Tool Start](/images/offline_tool_images/settings.png)](/images/offline_tool_images/settings.png)
      
3. Click on the **KeyPair**-button of the RSA box.

[![Offline Tool KeyPairs](/images/offline_tool_images/encryption.png)](/images/offline_tool_images/encryption.png)
      

4. Specify the directory where the keys should be saved.
5. Specify the filename of the private and the public key on the right side.
6. Select a passphrase for your private key. (If you press enter, an empty passphrase will be used)
7. Click on the **Generate**-button.

### Load
If you already have made a key-pair, you can load them into the Desktop APP. For this, follow these steps.

1. Start the application.
2. From the Homepage click on **Settings** on the left hand side.
3. Click on the **KeyPair**-button of the RSA box.
4. Specify the directory where the keys are saved.
5. Specify the Passphrase for the key.
6. Click on the **Load**-button.

### Upload
Log into the Central-UI with either the identity provider from your organization or an account that your realm
admin set up. In the [admin guide](./../admin/identity-providers), you can find how the user management and
configuration of identity providers is done.
After signing in for the first time, you should register the public key you generated in the Desktop APP in the Central 
Services. In the **Home** section press **Settings** in the menu on the left-hand side and then press **Secrets**.

You can define the public key

- **type**: You can choose between an RSA-key and a Paillier-key. The Paillier-key is not needed in the base case.
For more information, look at the  "[Train With  Homomorphic Encryption](./homomorphic-encryption)" chapter.
- **name**: The preferred name for this specific key.

Furthermore, you do have two options for loading the key into the system:

1. Load the key via the file path (through the **Browse** option)
2. Copy and paste the whole key into the **Content**-section.

On the right side, you will then find each already stored keys with specific name as list below the **Overview** and the
search bar (where you can filter for a specific key in the list).

[![image](/images/ui_images/Register_Updating_public_key.png)](/images/ui_images/Register_Updating_public_key.png)
