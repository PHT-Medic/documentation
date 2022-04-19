## Station settings

In order to manage the stations settings the user needs to be assigned the **Station Authority** role.

!!! warning When changing the settings of your station in the central UI you need to restart your local station.

### Registering/Updating a public key

1. Within the admin area (top left, next to Home), you need to select **Auth -> Realms** within the left navigation.
2. You can see a list of stations. Choose the station you want and click on the blue "List"-Symbol.
3. In *Station* the public key can be entered into the field *PublicKey*.

### Updating the Station ID

1. Follow the steps 1 and 2 of "Registering/Updating a public key"
2. On the same page you can find **SecureID**, which you can adapt.
   [![image](../images/ui_images/pk_station.png)](../images/ui_images/pk_station.png)

### Setting/Updating harbor username and password

1. Within the admin area (top left), you need select **Realms** within the left navigation.
2. Select the Station you want to edit
3. In *Harbor* the credentials, project name and path can be modified - webhooks for API communication can be tested.
   [![image](../images/ui_images/harbor_station.png)](../images/ui_images/harbor_station.png)
