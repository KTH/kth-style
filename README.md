# KTH STYLE ![Continous Integration](https://github.com/KTH/kth-style/actions/workflows/main.yml/badge.svg)

## kth-style

KTH base stylesheets and javascript package and a custom build of Bootstrap 4. The purpose of this project is to provide the essential design and style for applications within KTH and make the development process of these applications faster.

For information how to use and examples: https://app.kth.se/style/

### How to generate icons in base64 format

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
