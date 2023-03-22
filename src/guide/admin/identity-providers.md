# Identity Providers

::: info Notice
In order to manage your identity-providers, stations, ... you need to get an organization. Please contact us,
such we can provide you a realm in which you can manage all your stations, users and identity providers.
For more details on realms click [here](/guide/admin/realms).
:::
Identity providers allow for an alternative way to login into a realm. They are set up by the administrator 
with external third-party OIDC providers such as google, Keycloak, and many others. 

## Setup
To allow each participant to control their own distribution of roles, the central UI allows the user to configure an OIDC provider which
can be used to authenticate users associated with their realm.
OIDC providers can be configured in the admin panel of the central UI under **Auth -> Identity Providers**.
[![image](/images/ui_images/providers_overview.png)](/images/ui_images/providers_overview.png)


Clicking on the **Add** button on the left will allow you to configure a new OIDC provider.
The form for adding the identity provider holds the following options:
* **Configuration**
  * **Slug**: Readable slug identifier for OIDC provider configuration in the central UI. 
  May only contain the following characters: [0-9a-z-_]+
  * **Name**: Visible handle, shown in OIDC provider overview in the central UI
* **Security**
  * **Client ID**: Identifier/Username in OIDC provider
  * **Client Secret**: Password/Secret in OIDC provider
* **Token**
  * **Endpoint**: Token endpoint for OIDC provider
* **Authorization**
  * **Endpoint**: Authorization endpoint for OIDC provider

[![image](/images/ui_images/oidc_add.png)](/images/ui_images/oidc_add.png)


### Example: Keycloak

Any OpenID-provider can be configured to be selected in the login screen to authenticate users belonging to your realm.
If you don't know how to set up a client, follow the steps below for an example configuration of Keycloak.

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

## Management
1. Within the admin area (top left), you need to select **Identity Providers** within the left navigation.
   [![image](/images/ui_images/oidc.png)](/images/ui_images/oidc.png)
2. **View** existing identity providers (Optional: Use the search bar at the top).
3. **See/Edit details and roles** for each identity provider by clicking the blue triple-bar button on the right.
   Doing so shows the general description of the identity provider configuration.
   [![image](/images/ui_images/oidc_details.png)](/images/ui_images/oidc_details.png)\
Here you may also change roles automatically assigned to users, that use this identity provider at the bottom, by either
adding a role with the green plus-button, or deleting it with the red trashcan-button. Individual changes here have to 
be saved by clicking the respective black save-button.
4. **Delete** identity providers by clicking the red thrash can button on the right.
5. **Add** identity providers by clicking the grey plus button on the left of the overview (for details see 
description at the top).
6. **Refresh** this list anytime by clicking the black refresh button on the top right.
