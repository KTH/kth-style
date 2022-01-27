#!/bin/bash

set -euo pipefail

# Initialize evolene env
[[ -e /root/.evolene_bashrc ]] && . /root/.evolene_bashrc

# Colors
yellow='\033[1;33m' # Yellow
nc='\033[0m'        # No Color

echo -e "${yellow}"
echo -e "|--------------------------------------------------------|"
echo -e "| Building the application with Bash and Webpack         |"   
echo -e "|--------------------------------------------------------|"


OS=$(uname -a)
echo  -e "\n  Building on OS: ${OS}"

echo -e "\n  1. Cleaning up & copying files"

# Removing the dist folder
echo -e "     -> Removing the dist folder"
rm -rf ./dist

# Creating dist directories
echo -e "     -> Creating the dist folder structure"
mkdir -p ./dist/css ./dist/img ./dist/js ./dist/fonts

# Copy bootstrap.min.js and klaro-no-css.js
echo -e "     -> Copying bootstrap.min.js to dist/js folder"
cp -R ./node_modules/bootstrap/dist/js/bootstrap.min.js ./dist/js
cp -R ./node_modules/klaro/dist/klaro-no-css.js ./dist/js

# Copy all images
echo -e "     -> Copying all images to dist/img folder"
cp -R ./public/img/. ./dist/img

# Copy all fonts
echo -e "     -> Copying all fonts to dist/fonts folder"
cp -R ./public/fonts/. ./dist/fonts

# Only production
if [ $1 == "prod" ]; then

  # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  2. Transpiling kth-bootstrap.scss and put it /dist/css folder${nc}"
  npm run sass-prod

   # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  3. Parcing all js files and putting them in the /dist/js folder${nc}"
  npm run babel-js-prod

   # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
#   echo -e "${yellow}\n  3. Parcing all js files and putting them in the /dist/js folder${nc}"
#   npm run webpack

  # Run create-zip and create the kth-style-scss.zip package and put it in the dist folder
  echo -e "${yellow}\n  4. Creating the kth-style-scss.zip package and putting it in the /dist folder${nc}"
  npm run create-zip

  ls -lR dist
  
  if [[ ! -s dist/css/kth-bootstrap.css || ! -s dist/kth-style-scss.zip || ! -s dist/js/backtotop.js || ! -s dist/js/menus.js || ! -s dist/js/vendor.js ]];then 
    echo >&2 "Some files are missing, failing..."
    exit 1
  fi
fi

# Only run webpack watch in development
if [ $1 == "dev" ]; then
  # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  2. Transpiling kth-bootstra.scss annd put it /dist/css folder${nc}"
  npm run sass-dev

   # Run webpack build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  3. Parcing all js files and putting them in the /dist/js folder${nc}"
  npm run webpack-watch

fi
