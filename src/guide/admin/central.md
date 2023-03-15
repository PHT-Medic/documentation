# Central
In order to manage the stations settings the user needs to be assigned the **Station Authority** role.

::: warning IMPORTANT
When changing the settings of your station in the central UI you need to restart your local station. 
:::

## Realm Management
In order to set a OIDC provider and manage your stations you need to get an organization. Please contact us,
such we can provide you a realm in which you can manage all your stations, users and identity providers.

### Configuring an OIDC provider
To allow each participant to control their own distribution of roles, the central UI allows the user to configure an OIDC provider which
can be used to authenticate users associated with their realm.
OIDC providers can be configured in the admin panel of the central UI under **Auth -> Realms** in the providers tab.
[![image](/images/ui_images/providers_overview.png)](/images/ui_images/providers_overview.png)


Clicking on the **Add** button on the left will allow you to configure a new OIDC provider.

#### Keycloak settings

[![image](/images/ui_images/provider_add.png)](/images/ui_images/provider_add.png)

Any OpenID-provider can be configured to be selected in the login screen to authenticate users belonging to your realm.
If you dont know how to set up a client in Keycloak, follow the steps below configuration.

The following settings are used in the User Interface with Keycloak as identity provider:
```
Slug: Unique pretty (url) identifier
Name: <Display name in UI>
Client-ID: <name of client specified in keycloak>
Client Secret: <secret of client if set to confidential>

Token
Endpoint: (e.g. https://DOMAIN.de/auth/realms/REALM_NAME/protocol/openid-connect/token)
DOMAIN and REALM_NAME need to be edited.

Authorization
Endpoint: (e.g. https://DOMAIN.de/auth/realms/REALM_NAME/protocol/openid-connect/auth)
DOMAIN and REALM_NAME need to be edited.

```

##### Create a Realm in Keycloak
1. Create a realm - in this example: ``PHT_DEV``
2. Create a new client within this realm - in this example: ``pht-staging``
   [![image](/images/keycloak_images/keycloak_1.png)](/images/keycloak_images/keycloak_1.png)
3. Set the access type to confidential and a root URL and the valid redirect URIs
   [![image](/images/keycloak_images/keycloak_2.png)](/images/keycloak_images/keycloak_2.png)
4. Copy your client secret and use it for the configuration in the UI
   [![image](/images/keycloak_images/keycloak_3.png)](/images/keycloak_images/keycloak_3.png)
5. The following two roles must be created in the identity provider
   [![image](/images/keycloak_images/keycloak_4.png)](/images/keycloak_images/keycloak_4.png)
### Registering/Updating a public key

1. Within the admin area (top left, next to Home), you need to select **Auth -> Realms** within the left navigation.
2. You can see a list of stations. Choose the station you want and click on the blue "List"-Symbol.
3. In *Station* the public key can be entered into the field *PublicKey*.


## Station Management
### Station Setup
Before going deeper into the next steps make sure that your local Station Setup is ready. If it is not, follow the steps
found [here](./../deployment/station.md).

### Registering/Updating a public key
1. Within the admin area (top left, next to Home), you need to select **Auth -> Realms** within the left navigation.
2. You can see a list of stations. Choose the station you want and click on the blue "List"-Symbol.
3. In *Station* the public key can be entered into the field *PublicKey*.

### Updating the Station ID
1. Follow the steps 1 and 2 of "Registering/Updating a public key"
2. On the same page you can find **SecureID**, which you can adapt.
   [![image](/images/ui_images/pk_station.png)](/images/ui_images/pk_station.png)

### Setting/Updating harbor username and password
1. Within the admin area (top left), you need to select **Realms** within the left navigation.
2. Select the Station you want to edit
3. In *Harbor* the credentials, project name and path can be modified - webhooks for API communication can be tested.
   [![image](/images/ui_images/harbor_station.png)](/images/ui_images/harbor_station.png)

## User Management
As a station administrator, you have access to functions that allow you to manage users in your realm. You may create
user accounts, create and allocate roles within your realm, and apply permissions to those roles. Furthermore, you can
offer temporary users to use your own account to access your realm via the Identity Providers. All of those functions 
are accessible for the administrator with the Central app.

### Realm users
Managing realm users comes in three features.\
(1) **Permissions**: Permissions are pre-implemented actions which describe UI functions that the specified role may 
use, such as adding or editing proposals, stations, trains, etc.\
(2) **Roles**: Roles may be freely created and edited by the admin. By allocating permissions to those new roles, the 
admin can thereby control which functions each user may access.\
(3) **Users**: Currently normal realm users cannot register into the PHT by themselves. They must be registered and 
added by a realm administrator. While doing so, the admin may give roles to a specific user.
#### Permissions
1. Within the admin area (top left), you need to select **Permissions** within the left navigation.
[![image](/images/ui_images/permissions.png)](/images/ui_images/permissions.png)
2. **View** the Permissions you want to add to a role (Optional: Use the search bar at the top).
3. **Refresh** this list anytime by clicking the black refresh button on the top right.
#### Roles
1. Within the admin area (top left), you need to select **Roles** within the left navigation.
[![image](/images/ui_images/roles.png)](/images/ui_images/roles.png)
2. **View** existing roles (Optional: Use the search bar at the top).
3. **See/Edit details and Permissions** for each role by clicking the blue triple-bar button on the right of the role. 
Doing so shows the general description of the role.
[![image](/images/ui_images/roles_details.png)](/images/ui_images/roles_details.png)\
By navigating to Permissions on the top, you may view all 
permissions allocated to this role or allocate/withdraw permissions to/from this role.
[![image](/images/ui_images/roles_permissions.png)](/images/ui_images/roles_permissions.png)\
By navigating to Users you may view all users added to this role.
[![image](/images/ui_images/roles_users.png)](/images/ui_images/roles_users.png)
4. **Delete** roles by clicking the red thrash can button on the right.
5. **Add** roles by clicking the grey plus button on the left of the overview. For this, a name and description of the
role have to be given.
[![image](/images/ui_images/roles_add.png)](/images/ui_images/roles_add.png)
6. **Refresh** this list anytime by clicking the black refresh button on the top right.
#### Users
1. Within the admin area (top left), you need to select **Users** within the left navigation.
[![image](/images/ui_images/users.png)](/images/ui_images/users.png)
2. **View** existing users in the realm (Optional: Use the search bar at the top).
3. **See/Edit details and Roles** for each user by clicking the blue triple-bar button on the right of the user. Doing 
so shows the general information of the user, including an option to change/update their password on the right.
[![image](/images/ui_images/users_details.png)](/images/ui_images/users_details.png)\
By navigating to Roles on the top, you may view all roles allocated to this user, with the option to allocate/withdraw 
them to/from the user.
[![image](/images/ui_images/users_roles.png)](/images/ui_images/users_roles.png)
4. **Delete** user accounts by clicking the red thrash can button on the right.
5. **Add** user accounts by clicking the grey plus button on the left of the overview. For this, a name, display name and 
e-mail address for the new user account have to be given.
[![image](/images/ui_images/users_add.png)](/images/ui_images/users_add.png)
6. **Refresh** this list anytime by clicking the black refresh button on the top right.
### Identity Providers


## Proposal Review
A Proposal is an organizational unit in the PHT, which represents the collaboration between different participants in regard to a specific research or analysis project.  
It contains an initial risk assessment as well as a high level description of the requested data.

In the **Home** section press **Proposals** in the menu on the left-hand side.
At first, you will lead to the **outgoing**-proposals section, where you can see a list of all the proposals created by this station. Via the searchbar you can filter after the name.
You have the option to adjust the already existing proposals via the **List**-icon or to delete the proposal via the **bin**-icon. Furthermore, you can see, who exactly created that proposal.

Moreover, you have the option to switch to the **incoming** section or to create a new proposal on the left side between the menu and the overview-list.

[![image](/images/ui_images/proposal.png)](/images/ui_images/proposal.png)

### Accepting/Rejecting an incoming proposal
Within the incoming section of each station, a station authority can independently decide to comment, approve or reject
a study proposal for analysis. In order to do such, click on the **list**-icon on the right side of the corresponding proposal and select the preferred action.

[![Proposal Creation](/images/ui_images/proposal_approve.png)](/images/ui_images/proposal_approve.png)


## Train Review
As a station administrator, you have a very important role when it comes to trains: If your station was part of a 
fully approved proposal the analyst user who set it up is able to create trains with your station as a halt. Upon its 
execution, it will naturally make a stop at your station requiring approval. Here, you may review the analysis code and
see whether the station data under your responsibility is used correctly. If it is, approve the train so it may make its
way to the next station. If it is not, you may reject the train, effectively stopping its execution. If you do so, we 
encourage you to inform the data analyst of the reason, so that they get the chance to revise it.

In order to review trains follow these steps:
1. Within the home area (top left), you need to select **Trains** in the left navigation, and then the Option 
**Incoming** to its right.
2. Here, you can view all approved, rejected, as well as trains awaiting either (Optional: Use the search bar at the 
top).
[![image](/images/ui_images/train_incoming.png)](/images/ui_images/train_incoming.png)
3. **Review** incoming train analysis scripts by clicking the black download button on the right of the train.
4. **Approve** incoming trains by clicking the gray triple-bar button on the right of the train and then clicking the 
green approve button in the small popup.
5. **Reject** incoming trains by clicking the gray triple-bar button on the right of the train and then clicking the 
red reject button in the small popup.
6. **Refresh** this list anytime by clicking the black refresh button on the top right.
