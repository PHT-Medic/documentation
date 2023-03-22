# Robots
::: info Notice
In order to manage your identity-providers, stations, ... you need to get an organization. Please contact us,
such we can provide you a realm in which you can manage all your stations, users and identity providers.
For more details on realms click [here](/guide/admin/realms).
:::
Robots may be freely created and edited by the admin. They are pseudo-users, which are handled directly 
by the API, meaning that you will not be able to login in the central App with their credentials.
This allows for slightly faster automatized pipeline executions for the PHT's functions. 

1. Within the admin area (top left), you need to select **Robots** within the left navigation.
   [![image](/images/ui_images/robots.png)](/images/ui_images/robots.png)
2. **View** existing robots (Optional: Use the search bar at the top).
3. **See/Edit details** for each robot by clicking the blue triple-bar button on the right.
   Doing so shows the general description of the robot.
   [![image](/images/ui_images/robots_details.png)](/images/ui_images/robots_details.png)
   You may also specify realms of other users if you wish to make it accessible for them.\
   You can furthermore specify the roles and associated permissions of the robot with the tabs on
   top under its name to ensure it does not have any authorities beyond the ones necessary for its 
   functionalities. For this, roles describe a rough outline specifically targeted at the admin's
   own realm.\
   [![image](/images/ui_images/robots_details_roles.png)](/images/ui_images/robots_details_roles.png)\
   If the robot is shared though, it is useful to declare the underlying permissions in 
   order to ensure it is working in other realms as well (as the permissions of their roles may vary).\
   [![image](/images/ui_images/robots_details_permissions.png)](/images/ui_images/robots_details_permissions.png)\
   Adding either roles or permissions to the robot is done by clicking the green plus-symbol on the right.
   Vice-versa, roles and permissions can be removed from the robot by clicking the red trashcan-button there.
4. **Delete** robots by clicking the red thrash can button on the right.
5. **Add** robots by clicking the grey plus button on the left of the overview. For this, a name and description of the
   robot have to be given.
   [![image](/images/ui_images/robots_add.png)](/images/ui_images/robots_add.png)
6. **Refresh** this list anytime by clicking the black refresh button on the top right.
