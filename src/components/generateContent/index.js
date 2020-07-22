const { FONT_SIZE, FONTS } = require('../../common/constants')

const generateCustomerInformation = (doc, { content: { customerInformationRows } }) => {
  doc.fontSize(FONT_SIZE.REGULAR)
  for (let i = 0; i < customerInformationRows.length; i += 1) {
    const splits = customerInformationRows[i].content[0].text.split(':')
    doc.font(FONTS.HELVETICA_BOLD)
    doc.text(`${splits[0]}:`,
      customerInformationRows[i].content[0].metadata.widthStart,
      customerInformationRows[i].content[0].metadata.heightStart)
    doc.font(FONTS.HELVETICA)
    doc.text(splits[1],
      customerInformationRows[i].content[0].metadata.widthStart + 60,
      customerInformationRows[i].content[0].metadata.heightStart)
  }
}

module.exports = { generateCustomerInformation }
