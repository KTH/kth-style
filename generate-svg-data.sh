#!/bin/bash

OUTFILE='public/sass/variables/_svg_data.scss'

echo  '// prettier-ignore' > ${OUTFILE}
for f in `ls public/img/kth-style/*.svg`
do
  echo "Generate data for ${f}"
  DATA=`base64 -i $f`
  FILENAME=`basename -s .svg $f`
  echo "\$data-${FILENAME}-svg: url(data:image/svg+xml;base64,${DATA});" >> ${OUTFILE}
  echo ''>> ${OUTFILE}
done

ICONS="public/img/kth-style/icons/arrow-back-black.svg \
public/img/kth-style/icons/arrow-back-blue.svg \
public/img/kth-style/icons/arrow-next-black.svg \
public/img/kth-style/icons/arrow-next-white.svg \
public/img/kth-style/icons/arrow-collapse-black.svg \
public/img/kth-style/icons/arrow-collapse-white.svg \
public/img/kth-style/icons/arrow-expand-black.svg \
public/img/kth-style/icons/arrow-expand-blue.svg \
public/img/kth-style/icons/arrow-expand-white.svg \
public/img/kth-style/icons/arrow-maximize-black.svg \
public/img/kth-style/icons/arrow-maximize-blue.svg \
public/img/kth-style/icons/arrow-minimize-black.svg \
public/img/kth-style/icons/arrow-minimize-blue.svg \
public/img/kth-style/icons/arrow-up-down-black.svg \
public/img/kth-style/icons/arrow-up-down-white.svg \
public/img/kth-style/icons/asterisk-black.svg \
public/img/kth-style/icons/audio-black.svg \
public/img/kth-style/icons/audio-blue.svg \
public/img/kth-style/icons/audio-white.svg \
public/img/kth-style/icons/back-to-top-black.svg \
public/img/kth-style/icons/back-to-top-blue.svg \
public/img/kth-style/icons/calculate-black.svg \
public/img/kth-style/icons/calculate-blue.svg \
public/img/kth-style/icons/check-black.svg \
public/img/kth-style/icons/close-black.svg \
public/img/kth-style/icons/close-white.svg \
public/img/kth-style/icons/code-black.svg \
public/img/kth-style/icons/code-blue.svg \
public/img/kth-style/icons/code-white.svg \
public/img/kth-style/icons/compressed-black.svg \
public/img/kth-style/icons/compressed-blue.svg \
public/img/kth-style/icons/compressed-white.svg \
public/img/kth-style/icons/copy-black.svg \
public/img/kth-style/icons/copy-blue.svg \
public/img/kth-style/icons/date-black.svg \
public/img/kth-style/icons/date-blue.svg \
public/img/kth-style/icons/date-white.svg \
public/img/kth-style/icons/delete-black.svg \
public/img/kth-style/icons/delete-blue.svg \
public/img/kth-style/icons/doc-black.svg \
public/img/kth-style/icons/doc-blue.svg \
public/img/kth-style/icons/doc-white.svg \
public/img/kth-style/icons/download-black.svg \
public/img/kth-style/icons/edit-black.svg \
public/img/kth-style/icons/edit-blue.svg \
public/img/kth-style/icons/email-black.svg \
public/img/kth-style/icons/email-white.svg \
public/img/kth-style/icons/error-black.svg \
public/img/kth-style/icons/eye-off-black.svg \
public/img/kth-style/icons/eye-off-blue.svg \
public/img/kth-style/icons/eye-black.svg \
public/img/kth-style/icons/eye-blue.svg \
public/img/kth-style/icons/favorite-active-black.svg \
public/img/kth-style/icons/favorite-active-blue.svg \
public/img/kth-style/icons/favorite-black.svg \
public/img/kth-style/icons/favorite-blue.svg \
public/img/kth-style/icons/file-black.svg \
public/img/kth-style/icons/file-blue.svg \
public/img/kth-style/icons/file-white.svg \
public/img/kth-style/icons/folder-black.svg \
public/img/kth-style/icons/folder-blue.svg \
public/img/kth-style/icons/folder-white.svg \
public/img/kth-style/icons/gallery-active-black.svg \
public/img/kth-style/icons/gallery-back-black.svg \
public/img/kth-style/icons/gallery-next-black.svg \
public/img/kth-style/icons/gallery-passive-black.svg \
public/img/kth-style/icons/gallery-pause-black.svg \
public/img/kth-style/icons/gallery-play-black.svg \
public/img/kth-style/icons/image-black.svg \
public/img/kth-style/icons/image-blue.svg \
public/img/kth-style/icons/image-white.svg \
public/img/kth-style/icons/information-black.svg \
public/img/kth-style/icons/link-black.svg \
public/img/kth-style/icons/link-blue.svg \
public/img/kth-style/icons/language-black.svg \
public/img/kth-style/icons/language-white.svg \
public/img/kth-style/icons/menu-black.svg \
public/img/kth-style/icons/message-black.svg \
public/img/kth-style/icons/message-white.svg \
public/img/kth-style/icons/notification-black.svg \
public/img/kth-style/icons/notification-white.svg \
public/img/kth-style/icons/open-modal-blue.svg \
public/img/kth-style/icons/open-window-black.svg \
public/img/kth-style/icons/open-window-blue.svg \
public/img/kth-style/icons/open-window-white.svg \
public/img/kth-style/icons/page-first-black.svg \
public/img/kth-style/icons/page-last-black.svg \
public/img/kth-style/icons/pdf-black.svg \
public/img/kth-style/icons/pdf-blue.svg \
public/img/kth-style/icons/pdf-white.svg \
public/img/kth-style/icons/ppt-black.svg \
public/img/kth-style/icons/ppt-blue.svg \
public/img/kth-style/icons/ppt-white.svg \
public/img/kth-style/icons/print-black.svg \
public/img/kth-style/icons/print-blue.svg \
public/img/kth-style/icons/quote-black.svg \
public/img/kth-style/icons/quote-white.svg \
public/img/kth-style/icons/scale-black.svg \
public/img/kth-style/icons/scale-blue.svg \
public/img/kth-style/icons/search-black.svg \
public/img/kth-style/icons/search-blue.svg \
public/img/kth-style/icons/settings-black.svg \
public/img/kth-style/icons/settings-blue.svg \
public/img/kth-style/icons/sort-ascending-black.svg \
public/img/kth-style/icons/sort-ascending-white.svg \
public/img/kth-style/icons/sort-descending-black.svg \
public/img/kth-style/icons/sort-descending-white.svg \
public/img/kth-style/icons/success-black.svg \
public/img/kth-style/icons/text-black.svg \
public/img/kth-style/icons/text-blue.svg \
public/img/kth-style/icons/text-white.svg \
public/img/kth-style/icons/thumb-down-black.svg \
public/img/kth-style/icons/thumb-down-blue.svg \
public/img/kth-style/icons/thumb-up-black.svg \
public/img/kth-style/icons/thumb-up-blue.svg \
public/img/kth-style/icons/upload-black.svg \
public/img/kth-style/icons/user-management-black.svg \
public/img/kth-style/icons/user-management-blue.svg \
public/img/kth-style/icons/video-black.svg \
public/img/kth-style/icons/video-blue.svg \
public/img/kth-style/icons/video-white.svg \
public/img/kth-style/icons/xls-black.svg \
public/img/kth-style/icons/xls-blue.svg \
public/img/kth-style/icons/xls-white.svg"

for f in ${ICONS}
do
  echo "Generate data for ${f}"
  DATA=`base64 -i $f`
  FILENAME=`basename -s .svg $f`
  echo "\$data-${FILENAME}-svg: url(data:image/svg+xml;base64,${DATA});" >> ${OUTFILE}
  echo ''>> ${OUTFILE}
done

 echo "${OUTFILE} created."