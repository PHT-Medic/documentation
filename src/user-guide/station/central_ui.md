# Configuration

In order to manage the stations settings the user needs to be assigned the **Station Authority** role.

::: warning IMPORTANT
When changing the settings of your station in the central UI you need to restart your local station. 
:::

## Add a realm
In order to set a OIDC provider and manage your stations you need to get an organization. Please contact us,
such we can provide you a realm in which you can manage all your stations, users and identity providers.

### Configuring an OIDC provider
To allow each participant to control their own distribution of roles, the central UI allows the user to configure an OIDC provider which
can be used to authenticate users associated with their realm.
OIDC providers can be configured in the admin panel of the central UI under **Auth -> Realms** in the providers tab.
[![image](../../images/ui_images/providers_overview.png)](../../images/ui_images/providers_overview.png)


Clicking on the **Add** button on the left will allow you to configure a new OIDC provider.

#### Keycloak settings

[![image](../../images/ui_images/provider_add.png)](../../images/ui_images/provider_add.png)

Any OpenID-provider can be configured to be selected in the login screen to authenticate users belonging to your realm.
If you dont know how to set up a client in Keycloak, follow the steps below configuration.

The following settings are used in the User Interface with Keycloak as identity provider:
```
Name: <Display name in UI>
Client-ID: <name of client specified in keycloak>
Client Secret: <secret of client if set to confidential>

Token
Host: <URL to realm> (e.g. https://DOMAIN.de/auth/realms/PHT_DEV/)
Path: protocol/openid-connect/token

Authorization
Host: Auto from Token
Path: protocol/openid-connect/auth
```

##### Create a Realm in Keycloak
1. Create a realm - in this example: ``PHT_DEV``
2. Create a new client within this realm - in this example: ``pht-staging``
   [![image](../../images/keycloak_images/keycloak_1.png)](../../images/keycloak_images/keycloak_1.png)
3. Set the access type to confidential and a root URL and the valid redirect URIs
   [![image](../../images/keycloak_images/keycloak_2.png)](../../images/keycloak_images/keycloak_2.png)
4. Copy your client secret and use it for the configuration in the UI
   [![image](../../images/keycloak_images/keycloak_3.png)](../../images/keycloak_images/keycloak_3.png)
5. The following two roles must be created in the identity provider
   [![image](../../images/keycloak_images/keycloak_4.png)](../../images/keycloak_images/keycloak_4.png)
### Registering/Updating a public key

1. Within the admin area (top left, next to Home), you need to select **Auth -> Realms** within the left navigation.
2. You can see a list of stations. Choose the station you want and click on the blue "List"-Symbol.
3. In *Station* the public key can be entered into the field *PublicKey*.

### Updating the Station ID

1. Follow the steps 1 and 2 of "Registering/Updating a public key"
2. On the same page you can find **SecureID**, which you can adapt.
   [![image](../../images/ui_images/pk_station.png)](../../images/ui_images/pk_station.png)

### Setting/Updating harbor username and password

1. Within the admin area (top left), you need select **Realms** within the left navigation.
2. Select the Station you want to edit
3. In *Harbor* the credentials, project name and path can be modified - webhooks for API communication can be tested.
   [![image](../../images/ui_images/harbor_station.png)](../../images/ui_images/harbor_station.png)


## Review
Before accepting a proposal or a train the requested data and the code contained in a train need to be reviewed. While
removing network access and the built-in security features should be sufficient to prevent the transfer of data, the 
code still needs to be reviewed to prevent any unwanted behaviour.

### Proposal
Proposals are the top level organizational unit of the PHT system. Proposals describe the goal of an analysis, the 
requested data and an estimation of the potential risk of participation. When the description of the proposal meets the
local requirements of your station, a user with the role of **Station Authority** can accept the proposal, otherwise
the proposal is rejected (optionally with comments for improvement).

Joining a proposal means that users of other stations also joined in the proposal can select your station as a
participant in the trains they create for this proposal.

### Train
Trains contain analysis code that will be executed on the data requested in the proposal. The code is user submitted, so
while the security protocol prevents the transfer of any unencrypted data via docker images and restricted network access,
prevents direct transfer of any data, the code still needs to be reviewed in order to prevent any kind of malicious behaviour.


