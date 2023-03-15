# Result Extraction

## Download 

After running through all station, you can click on the **Download**-button on point **4.Result**.
This will start the download of a tar file. The name of the file is your train ID.
[![Offline Tool Download Results](/images/offline_tool_images/download_results.png)](/images/offline_tool_images/download_results.png)

## Decrypt

The results file is encrypted with the public key you selected during setup. In order for the Desktop APP to decrypt the results, it is necessary to load the same key pair that you used to set up the train.

1.  Load the RSA key pair, see [Setup -> Load keys](setup.md#load-keys)

2.  Click on **results** on the menu. 
      
      You will be directed to an overview where you can click on **Select Result-File(.tar)** button. Chose the downloaded results-file from the UI and press load.
      [![Offline Tool Load Results](/images/offline_tool_images/load_results.png)](/images/offline_tool_images/load_results.png)
3. A new view appears where you can chose which files you want to save.

      By clicking on the **x**-buttons, you can delete those files from the working space (you do not delete them from the results_file.tar, only a deletion from the Desktop App!).
      
      By clicking on the **save**-button you start downloading the remaining files. A new folder will be placed in the same folder where you have selected the result-File.tar.
