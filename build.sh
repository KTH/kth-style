#!/bin/bash

# Colors
yellow='\033[1;33m' # Yellow
nc='\033[0m'        # No Color

echo -e "${yellow}"
echo -e "|--------------------------------------------------------|"
echo -e "| Building the application with Bash and Webpack          |"   
echo -e "|--------------------------------------------------------|"


echo -e "\n  0. Install some necessary tools if not found"

OS=`uname`
echo  -e "\n  Building on OS: ${OS}"

if [ -f "/etc/alpine-release"  ]; then

  echo -e "\n  Install zip"
  apk add zip

  echo -e "\n  Install tools for build"
 
  apk add  bash 
  apk add  python2 make g++ util-linux

fi

echo -e "\n  1. Cleaning up & copying files"

# Removing the dist folder
echo -e "     -> Removing the dist folder"
rm -rf ./dist

# Creating dist directories
echo -e "     -> Creating the dist folder structure"
mkdir -p ./dist/css ./dist/img ./dist/js 

# Only run Parcel watch in production
if [ $1 == "prod" ]; then

  # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  2. Transpiling kth-bootstra.scss annd put it /dist/css folder${nc}"
  npm run sass-prod

   # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  3. Parcing all js files and putting them in the /dist/js folder${nc}"
  npm run webpack

  # Run create-zip and create the kth-style-scss.zip package and put it in the dist folder
  echo -e "${yellow}\n  4. Creating the kth-style-scss.zip package and putting it in the /dist folder${nc}"
  npm run create-zip
fi

# Only run Parcel watch in development
if [ $1 == "dev" ]; then
  # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  2. Transpiling kth-bootstra.scss annd put it /dist/css folder${nc}"
  npm run sass-dev

   # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  3. Parcing all js files and putting them in the /dist/js folder${nc}"
  npm run webpack-watch

fi