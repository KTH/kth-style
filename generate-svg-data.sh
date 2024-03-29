#!/bin/bash

# !! Not working on linux since base64 will insert line breaks !!

OUTFILE='public/sass/variables/_svg_data.scss'

echo  '// prettier-ignore' > ${OUTFILE}
for f in `ls public/img/kth-style/*.svg public/img/kth-style/icons/*.svg`
do
  echo "Generate data for ${f}"
  DATA=`base64 -i $f`
  FILENAME=`basename -s .svg $f`
  echo "\$data-${FILENAME}-svg: url(data:image/svg+xml;base64,${DATA});" >> ${OUTFILE}
  echo ''>> ${OUTFILE}
done

echo "${OUTFILE} created."