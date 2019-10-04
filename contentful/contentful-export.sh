#!/bin/bash

echo "Contentful Exporting..."
echo $CTF_SPACE_ID
contentful space export --export-dir ./contentful/exports/ --space-id $CTF_SPACE_ID
