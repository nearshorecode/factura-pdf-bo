const { FONT_SIZE, FONTS } = require('../../common/constants')

const generateTableBottom = (doc, { content: { tableBottomRows } }) => {
  doc.fontSize(FONT_SIZE.REGULAR)
  for (let i = 0; i < tableBottomRows.length; i += 1) {
    const splits = tableBottomRows[i].content[0].text.split(':')
    doc.font(FONTS.HELVETICA_BOLD)
    doc.text(`${splits[0]}:`,
      tableBottomRows[i].content[0].metadata.widthStart,
      tableBottomRows[i].content[0].metadata.heightStart)
    doc.font(FONTS.HELVETICA)
    doc.text(splits[1],
      tableBottomRows[i].content[0].metadata.widthStart + 120,
      tableBottomRows[i].content[0].metadata.heightStart)
  }
}

module.exports = { generateTableBottom }
