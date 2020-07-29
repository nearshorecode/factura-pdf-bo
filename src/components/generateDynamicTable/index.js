const { FONTS } = require('../../common/constants')

const tableLetterWidth = 520

const tableCellsGrow = {
  12: tableLetterWidth / 1,
  11: tableLetterWidth * (11 / 12),
  10: tableLetterWidth * (10 / 12),
  9: tableLetterWidth * (9 / 12),
  8: tableLetterWidth * (8 / 12),
  7: tableLetterWidth * (7 / 12),
  6: tableLetterWidth * (6 / 12),
  5: tableLetterWidth * (5 / 12),
  4: tableLetterWidth * (4 / 12),
  3: tableLetterWidth * (3 / 12),
  2: tableLetterWidth * (2 / 12),
  1: tableLetterWidth * (1 / 12),
}

const dynamicTable = (doc, { content: { dynamicTableRows } }) => {
  let contentsGrow = 12
  let widthTracker = 50
  let dynamicStartTableTop = dynamicTableRows[0].heightStart + 30
  const numberOfObjects = dynamicTableRows.length
  for (let i = 1; i < numberOfObjects; i += 1) {
    const textY = dynamicStartTableTop + 7
    for (let rowContentObject = 0;
      rowContentObject < dynamicTableRows[i].content.length;
      rowContentObject += 1) {
      if (contentsGrow !== 0) {
        doc.rect(widthTracker,
          dynamicStartTableTop,
          tableCellsGrow[dynamicTableRows[i].content[rowContentObject].metadata.grow],
          dynamicTableRows[i].rowHeight)
          .fillAndStroke(
            dynamicTableRows[i].content[rowContentObject].metadata.backgroundColor,
            dynamicTableRows[i].content[rowContentObject].metadata.borderColor,
          )
        doc.font(FONTS[dynamicTableRows[i].content[rowContentObject].metadata.fontFamily])
          .fontSize(8)
          .fillColor(dynamicTableRows[i].content[rowContentObject].metadata.color
            ? dynamicTableRows[i].content[rowContentObject].metadata.color : 'black')
          .text(dynamicTableRows[i].content[rowContentObject].text,
            widthTracker,
            textY,
            {
              width: tableCellsGrow[dynamicTableRows[i].content[rowContentObject].metadata.grow],
              height: dynamicTableRows[i].rowHeight,
              align: dynamicTableRows[i].content[rowContentObject].metadata.alignContent,
            })
        widthTracker += tableCellsGrow[dynamicTableRows[i].content[rowContentObject].metadata.grow]
        contentsGrow -= dynamicTableRows[i].content[rowContentObject].metadata.grow
      }
    }
    widthTracker = 50
    dynamicStartTableTop += dynamicTableRows[i].rowHeight
    contentsGrow = 12
  }
}

module.exports = { dynamicTable }
