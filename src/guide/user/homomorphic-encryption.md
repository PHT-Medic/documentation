# Homomorphic Encryption

You can use homomorphic encryption if your analysis requires data to be visible only in a globally aggregated state and
hide individual sites contribution to results. In a regular train, the stations can access and see the intermediate
results from previous stations running the analysis.

[//]: # (## Homomorphic Decryption)

[//]: # ()
[//]: # (1. Start the application)

[//]: # (2. From the opening page select **Secure Addition**)

[//]: # (3. Generate key-pair &#40;Public & Private Key for Homomorphic Decryption&#41;)

[//]: # (4. Select the corresponding Private Key &#40;identical steps as in section hash signing&#41;)

[//]: # (5. Copy your encrypted paillier number into the text field &#40;encrypted number is found in the decrypted results from the)

[//]: # (   previous step&#41;)

[//]: # (   )
[//]: # (      <br/><br/>)

[//]: # (      ![Offline Tool Secure Addition]&#40;../images/offline_tool_images/extra.png&#41;)

[//]: # (      <br/><br/>)

[//]: # (   )
[//]: # (6. Press **Decrypt**)

[//]: # (7. Now in the right textfield appears the decrypted count query)

[//]: # ()
[//]: # (      <br/><br/>)

[//]: # (      ![Offline Tool Secure Addition_2]&#40;../images/offline_tool_images/5step.png&#41;)

[//]: # (      <br/><br/>)

[//]: # ()
[//]: # (If you want to calculate the average age over multiple sites, this cannot be done trivially.)

[//]: # (You need to know the total age and total number of patients over all sites. By saving both decrypted numbers,)

[//]: # (you can manually calculate such afterwards. Average age: `5384 / 144 = 37,38`.)

[//]: # (![Offline Tool Model Page]&#40;../images/offline_tool_images/6step.png&#41;)
