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

ICONS="public/img/kth-style/icons/pill-back.svg \
public/img/kth-style/icons/file-pdf-fa-regular.svg \
public/img/kth-style/icons/globe.svg \
public/img/kth-style/icons/globe-white.svg \
public/img/kth-style/icons/arrow-black-right.svg \
public/img/kth-style/icons/arrow-black-left.svg \
public/img/kth-style/icons/arrow-black-down.svg \
public/img/kth-style/icons/arrow-white-down.svg \
public/img/kth-style/icons/arrow-white-right.svg \
public/img/kth-style/icons/check-mark.svg \
public/img/kth-style/icons/modal-info.svg \
public/img/kth-style/icons/pill-back-white.svg \
public/img/kth-style/icons/file-upload-fa-solid.svg \
public/img/kth-style/icons/external-link.svg"

for f in ${ICONS}
do
  echo "Generate data for ${f}"
  DATA=`base64 -i $f`
  FILENAME=`basename -s .svg $f`
  echo "\$data-${FILENAME}-svg: url(data:image/svg+xml;base64,${DATA});" >> ${OUTFILE}
  echo ''>> ${OUTFILE}
done

 echo "${OUTFILE} created."