# Identity Providers

::: info Notice
In order to manage your identity-providers, stations, ... you need to get an organization. Please contact us,
such we can provide you a realm in which you can manage all your stations, users and identity providers.
:::

## Setup
To allow each participant to control their own distribution of roles, the central UI allows the user to configure an OIDC provider which
can be used to authenticate users associated with their realm.
OIDC providers can be configured in the admin panel of the central UI under **Auth -> Realms** in the providers tab.
[![image](/images/ui_images/providers_overview.png)](/images/ui_images/providers_overview.png)


Clicking on the **Add** button on the left will allow you to configure a new OIDC provider.

[![image](/images/ui_images/provider_add.png)](/images/ui_images/provider_add.png)

## Example: Keycloak

Any OpenID-provider can be configured to be selected in the login screen to authenticate users belonging to your realm.
If you don't know how to set up a client in Keycloak, follow the steps below configuration.

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
