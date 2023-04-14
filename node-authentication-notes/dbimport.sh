#!/bin/bash
#The following command successfully imports the specified file into the database locally.  
mongoimport -d=pies -c=qrs --mode merge --jsonArray --file=sampledata.json --host=localhost:27017

# The following are options we can add to the command to allow access 
# to the AWS server for uploading the actual JSON file of clues. 
# This should be tested on our own instance. Not all are needed.
# --sslPEMKeyFile=<filename>
# --uri=<connectionString>
# --config=<filename> 
# --awsSessionToken=<AWS Session Token>
