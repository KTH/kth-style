#!/bin/bash

# Colors
yellow='\033[1;33m' # Yellow
nc='\033[0m'        # No Color

echo -e "${yellow}"
echo -e "|--------------------------------------------------------|"
echo -e "| Building the application with Bash and Parcel          |"   
echo -e "|--------------------------------------------------------|"

echo -e "\n  1. Cleaning up & copying files"

# Removing the dist folder
echo -e "     -> Removing the dist folder"
rm -rf ./dist

# Creating dist directories
echo -e "     -> Creating the dist folder structure"
mkdir -p ./dist/css ./dist/img ./dist/js 

# Copy bootstrap.min.js
echo -e "     -> Copying bootstrap.min.js to dist/js folder"
cp -R ./node_modules/bootstrap/dist/js/bootstrap.min.js ./dist/js

# Copy all images
echo -e "     -> Copying all images to dist/img folder"
cp -R ./public/img/. ./dist/img


# Only run Parcel watch in production
if [ $1 == "prod" ]; then

  # Run parcel build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  2. Parcing all js files and putting them in the /dist/js folder${nc}"
  npm run parcel-js-prod

  # Run parcel on the scss files and put the optimized file in the /dist
  echo -e "${yellow}\n  3. Transpiling sass files and putting them in the /dist folder${nc}"
  npm run parcel-sass-prod

  # Run create-zip and create the kth-style-scss.zip package and put it in the dist folder
  echo -e "${yellow}\n  3. Creating the kth-style-scss.zip package and putting it in the /dist folder${nc}"
  npm run create-zip
fi

# Only run Parcel watch in development
if [ $1 == "dev" ]; then
  # Run parcel build on the vendor.js file and put the optimized file in the /dist folder.
  echo -e "${yellow}\n  2. Parcing all js files and putting them in the /dist/js folder${nc}"
  npm run parcel-js

  # Run parcel on the scss files and put the optimized file in the /dist
  echo -e "${yellow}\n  3. Transpiling sass files and putting them in the /dist folder${nc}"
  npm run parcel-sass

  # Run parcel watch on the js and sass files and put the optimized files in the /dist folder upon change.
  echo -e "${yellow}\n  4. Running watch on js and sass files${nc}"
  npm run parcel-watch
fi