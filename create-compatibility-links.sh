#!/bin/bash

mkdir -p dist/js dist/css

# copy the files since symlinks are removed by npm 
cp dist/kth-bootstrap.css dist/css/kth-bootstrap.min.css
cp dist/kth-bootstrap.css dist/css/kth-bootstrap.css
cp dist/backtotop.js dist/js/backtotop.min.js
cp dist/menus.js dist/js/menus.min.js

