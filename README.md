This repo explores some ms graph API features to authenticate and get access to an excel file previously created with the graph explorer.

As mentioned, you need to create a file somewhere in your one drive folder.

Use the explorer to get the remote id of the file and once you get it, you can update the GraphService.ts file.

The table.ts is a single demo, but you can gather the information that you need from anywhere else (ie, some API), and follow this schema to render it in a react table component

Once you have "loaded" with real information (or random numbers like here), you can select the rows you need to push to the excel file.

I used as a template a demo in the graph documentation which shows the email information, and modified some features to write a file.

Hope it helps, regards

My e-mail address is alexis.600@gmail.com
