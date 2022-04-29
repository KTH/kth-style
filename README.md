# KTH STYLE ![Continous Integration](https://github.com/KTH/kth-style/actions/workflows/main.yml/badge.svg)

## kth-style

KTH base stylesheets and javascript package and a custom build of Bootstrap 4. The purpose of this project is to provide the essential design and style for applications within KTH and make the development process of these applications faster.

For information how to use and examples: https://app.kth.se/style/

### How to generate icons in base64 format

- Add the icon into the `/public/img/kth-style/icons` folder
- Run the script ./generate-svg-data.sh to generate the icons

### Included files in dist folder

<pre>

dist
├── css
│  ├── klaro.css
│  ├── kth-bootstrap.css
│  └── kth-bootstrap.css.map
├── fonts
│  ├── mem5YaGs126MiZpBA-UN_r8OUehpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2
│  ├── mem5YaGs126MiZpBA-UN_r8OVuhpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UN_r8OX-hpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UN_r8OXOhpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UN_r8OXehpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UN_r8OXuhpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2
│  ├── mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2
│  ├── mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2
│  ├── mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2
│  ├── mem8YaGs126MiZpBA-UFVZ0b.woff2
│  ├── mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2
│  ├── mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2
│  ├── mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2
│  ├── mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2
│  ├── mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2
│  ├── mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2
│  └── openSans.css
├── img
│  └── kth-style
│     ├── KTH_Logotyp_RGB_2013-2.svg
│     └── icons
│        ├── arrow-back-blue.svg
│        ├── arrow-back.svg
│        ├── arrow-collapse-white.svg
│        ├── arrow-collapse.svg
│        ├── arrow-expand-white.svg
│        ├── arrow-expand.svg
│        ├── arrow-maximize-blue.svg
│        ├── arrow-maximize.svg
│        ├── arrow-minimize-blue.svg
│        ├── arrow-minimize.svg
│        ├── arrow-next-white.svg
│        ├── arrow-next.svg
│        ├── arrow-up-down-white.svg
│        ├── arrow-up-down.svg
│        ├── asterisk.svg
│        ├── audio-blue.svg
│        ├── audio-white.svg
│        ├── audio.svg
│        ├── back-to-top.svg
│        ├── calculate-blue.svg
│        ├── calculate.svg
│        ├── check.svg
│        ├── close.svg
│        ├── code-blue.svg
│        ├── code-white.svg
│        ├── code.svg
│        ├── compressed-blue.svg
│        ├── compressed-white.svg
│        ├── compressed.svg
│        ├── copy-blue.svg
│        ├── copy.svg
│        ├── date-blue.svg
│        ├── date-white.svg
│        ├── date.svg
│        ├── delete-blue.svg
│        ├── delete.svg
│        ├── doc-blue.svg
│        ├── doc-white.svg
│        ├── doc.svg
│        ├── download.svg
│        ├── edit-blue.svg
│        ├── edit.svg
│        ├── email-white.svg
│        ├── email.svg
│        ├── error.svg
│        ├── eye-blue.svg
│        ├── eye-off-blue.svg
│        ├── eye-off.svg
│        ├── eye.svg
│        ├── favorite-active-blue.svg
│        ├── favorite-active.svg
│        ├── favorite-blue.svg
│        ├── favorite.svg
│        ├── file-blue.svg
│        ├── file-white.svg
│        ├── file.svg
│        ├── gallery-active.svg
│        ├── gallery-back.svg
│        ├── gallery-next.svg
│        ├── gallery-passive.svg
│        ├── gallery-pause.svg
│        ├── gallery-play.svg
│        ├── image-blue.svg
│        ├── image-white.svg
│        ├── image.svg
│        ├── information.svg
│        ├── language.svg
│        ├── menu.svg
│        ├── message-white.svg
│        ├── message.svg
│        ├── notification-white.svg
│        ├── notification.svg
│        ├── open-modal.svg
│        ├── open-window-blue.svg
│        ├── open-window-white.svg
│        ├── open-window.svg
│        ├── pdf-blue.svg
│        ├── pdf-white.svg
│        ├── pdf.svg
│        ├── ppt-blue.svg
│        ├── ppt-white.svg
│        ├── ppt.svg
│        ├── print-blue.svg
│        ├── print.svg
│        ├── quote-white.svg
│        ├── quote.svg
│        ├── scale-blue.svg
│        ├── scale.svg
│        ├── search-blue.svg
│        ├── search.svg
│        ├── settings-blue.svg
│        ├── settings.svg
│        ├── sort-ascending-white.svg
│        ├── sort-ascending.svg
│        ├── sort-descending-white.svg
│        ├── sort-descending.svg
│        ├── success.svg
│        ├── text-blue.svg
│        ├── text-white.svg
│        ├── text.svg
│        ├── thumb-down-blue.svg
│        ├── thumb-down.svg
│        ├── thumb-up-blue.svg
│        ├── thumb-up.svg
│        ├── upload.svg
│        ├── user-management-blue.svg
│        ├── user-management.svg
│        ├── video-blue.svg
│        ├── video-white.svg
│        ├── video.svg
│        ├── xls-blue.svg
│        ├── xls-white.svg
│        └── xls.svg
└── js
    ├── bootstrap.min.js
    └── klaro-no-css.js
</pre>

## Note about Klaro CSS

The original Klaro CSS contains validation errors so the actual CSS file has been extracted and updatet to validate.
The file is placed here and the update could be found by searching for "Updated manually to validate".

<pre>
└── public
  └── css
    └── klaro.css
</pre>
