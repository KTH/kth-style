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

ICONS="public/img/kth-style/icons/arrow-back.svg \
public/img/kth-style/icons/arrow-back-blue.svg \
public/img/kth-style/icons/arrow-next.svg \
public/img/kth-style/icons/arrow-next-white.svg \
public/img/kth-style/icons/arrow-collapse.svg \
public/img/kth-style/icons/arrow-collapse-white.svg \
public/img/kth-style/icons/arrow-expand.svg \
public/img/kth-style/icons/arrow-expand-white.svg \
public/img/kth-style/icons/arrow-maximize.svg \
public/img/kth-style/icons/arrow-maximize-blue.svg \
public/img/kth-style/icons/arrow-minimize.svg \
public/img/kth-style/icons/arrow-minimize-blue.svg \
public/img/kth-style/icons/arrow-up-down.svg \
public/img/kth-style/icons/arrow-up-down-white.svg \
public/img/kth-style/icons/asterisk.svg \
public/img/kth-style/icons/audio.svg \
public/img/kth-style/icons/audio-blue.svg \
public/img/kth-style/icons/audio-white.svg \
public/img/kth-style/icons/back-to-top.svg \
public/img/kth-style/icons/calculate.svg \
public/img/kth-style/icons/calculate-blue.svg \
public/img/kth-style/icons/check.svg \
public/img/kth-style/icons/close.svg \
public/img/kth-style/icons/code.svg \
public/img/kth-style/icons/code-blue.svg \
public/img/kth-style/icons/code-white.svg \
public/img/kth-style/icons/compressed.svg \
public/img/kth-style/icons/compressed-blue.svg \
public/img/kth-style/icons/compressed-white.svg \
public/img/kth-style/icons/copy.svg \
public/img/kth-style/icons/copy-blue.svg \
public/img/kth-style/icons/date.svg \
public/img/kth-style/icons/date-blue.svg \
public/img/kth-style/icons/date-white.svg \
public/img/kth-style/icons/delete.svg \
public/img/kth-style/icons/delete-blue.svg \
public/img/kth-style/icons/doc.svg \
public/img/kth-style/icons/doc-blue.svg \
public/img/kth-style/icons/doc-white.svg \
public/img/kth-style/icons/download.svg \
public/img/kth-style/icons/edit.svg \
public/img/kth-style/icons/edit-blue.svg \
public/img/kth-style/icons/email.svg \
public/img/kth-style/icons/email-white.svg \
public/img/kth-style/icons/error.svg \
public/img/kth-style/icons/eye-off.svg \
public/img/kth-style/icons/eye-off-blue.svg \
public/img/kth-style/icons/eye.svg \
public/img/kth-style/icons/eye-blue.svg \
public/img/kth-style/icons/favorite-active.svg \
public/img/kth-style/icons/favorite-active-blue.svg \
public/img/kth-style/icons/favorite.svg \
public/img/kth-style/icons/favorite-blue.svg \
public/img/kth-style/icons/file.svg \
public/img/kth-style/icons/file-blue.svg \
public/img/kth-style/icons/file-white.svg \
public/img/kth-style/icons/gallery-active.svg \
public/img/kth-style/icons/gallery-back.svg \
public/img/kth-style/icons/gallery-next.svg \
public/img/kth-style/icons/gallery-passive.svg \
public/img/kth-style/icons/gallery-pause.svg \
public/img/kth-style/icons/gallery-play.svg \
public/img/kth-style/icons/image.svg \
public/img/kth-style/icons/image-blue.svg \
public/img/kth-style/icons/image-white.svg \
public/img/kth-style/icons/information.svg \
public/img/kth-style/icons/language.svg \
public/img/kth-style/icons/menu.svg \
public/img/kth-style/icons/message.svg \
public/img/kth-style/icons/message-white.svg \
public/img/kth-style/icons/notification.svg \
public/img/kth-style/icons/notification-white.svg \
public/img/kth-style/icons/open-modal.svg \
public/img/kth-style/icons/open-window.svg \
public/img/kth-style/icons/open-window-blue.svg \
public/img/kth-style/icons/open-window-white.svg \
public/img/kth-style/icons/pdf.svg \
public/img/kth-style/icons/pdf-blue.svg \
public/img/kth-style/icons/pdf-white.svg \
public/img/kth-style/icons/ppt.svg \
public/img/kth-style/icons/ppt-blue.svg \
public/img/kth-style/icons/ppt-white.svg \
public/img/kth-style/icons/print.svg \
public/img/kth-style/icons/print-blue.svg \
public/img/kth-style/icons/quote.svg \
public/img/kth-style/icons/quote-white.svg \
public/img/kth-style/icons/scale.svg \
public/img/kth-style/icons/scale-blue.svg \
public/img/kth-style/icons/search.svg \
public/img/kth-style/icons/search-blue.svg \
public/img/kth-style/icons/settings.svg \
public/img/kth-style/icons/settings-blue.svg \
public/img/kth-style/icons/sort-ascending.svg \
public/img/kth-style/icons/sort-ascending-white.svg \
public/img/kth-style/icons/sort-descending.svg \
public/img/kth-style/icons/sort-descending-white.svg \
public/img/kth-style/icons/success.svg \
public/img/kth-style/icons/text.svg \
public/img/kth-style/icons/text-blue.svg \
public/img/kth-style/icons/text-white.svg \
public/img/kth-style/icons/thumb-down.svg \
public/img/kth-style/icons/thumb-down-blue.svg \
public/img/kth-style/icons/thumb-up.svg \
public/img/kth-style/icons/thumb-up-blue.svg \
public/img/kth-style/icons/upload.svg \
public/img/kth-style/icons/user-management.svg \
public/img/kth-style/icons/user-management-blue.svg \
public/img/kth-style/icons/video.svg \
public/img/kth-style/icons/video-blue.svg \
public/img/kth-style/icons/video-white.svg \
public/img/kth-style/icons/xls.svg \
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