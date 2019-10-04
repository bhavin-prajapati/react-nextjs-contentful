#!/bin/bash

echo "Contentful Importing latest..."
echo $CTF_SPACE_ID
lastest_file=$(ls ./contentful/exports/* | sort -n -t _ -k 2 | tail -1)
echo $lastest_file
contentful space import --content-file $lastest_file --space-id $CTF_SPACE_ID
