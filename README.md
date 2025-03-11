# KTH STYLE

### Notice

This package is being deprecated and will eventually be replaced by [@kth/style](https://github.com/KTH/style).

- **`main` branch**: Contains the deprecated version 9 of this package.
- **`deprecation` branch**: This branch is the base for version 10, which is still in use but will also be removed in the future.

When making changes, please use the `deprecation` branch

For future development, consider migrating to [@kth/style](https://github.com/KTH/style).

## kth-style

KTH base stylesheets and javascript package and a custom build of Bootstrap 4. The purpose of this project is to provide the essential design and style for applications within KTH and make the development process of these applications faster.

### How to generate icons in base64 format

**Working as intended on MacOS, not Ubuntu!**

- Add the icon into the `/public/img/kth-style/icons` folder
- Run the script ./generate-svg-data.sh to generate the icons

### Included file structure in dist folder

<pre>
dist
├── css
├── fonts
├── img
│  └── kth-style
│     └── icons
└── js
</pre>

## Note about Klaro CSS

The original Klaro CSS contains validation errors so the actual CSS file has been extracted and updatet to validate.
The file is placed here and the update could be found by searching for "Updated manually to validate".

<pre>
└── public
  └── css
    └── klaro.css
</pre>
