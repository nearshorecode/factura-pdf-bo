const { FONT_SIZE, FONTS } = require('../../common/constants')

const generateBasicData = (doc, { header: { basicDataRows } }) => {
  const maxWidth = basicDataRows[0].content[0].text.length * 5
  for (let i = 0; i < basicDataRows.length; i += 1) {
    doc.font(FONTS[basicDataRows[i].content[0].metadata.fontFamily])
    doc.fontSize(FONT_SIZE.REGULAR)
    doc.fillColor(basicDataRows[i].content[0].metadata.color ? basicDataRows[i].content[0].metadata.color : 'black')
    doc.text(basicDataRows[i].content[0].text,
      basicDataRows[i].content[0].metadata.horizontalPosition,
      basicDataRows[i].content[0].metadata.verticalPosition, { width: maxWidth, align: basicDataRows[i].content[0].metadata.alignContent })
  }
}

const generateDosificationData = (doc, { header: { dosificationDataRows } }) => {
  for (let i = 0; i < dosificationDataRows.length; i += 1) {
    doc.font(FONTS[dosificationDataRows[i].content[0].metadata.fontFamily])
    doc.fontSize(FONT_SIZE.REGULAR)
    doc.fillColor(dosificationDataRows[i].content[0].metadata.color)
    doc.text(dosificationDataRows[i].content[0].text,
      dosificationDataRows[i].content[0].metadata.widthStart,
      dosificationDataRows[i].content[0].metadata.heightStart)
  }
}

const generateNote = (doc, { header: { noteRows } }) => {
  for (let i = 0; i < noteRows.length; i += 1) {
    doc.fillColor(noteRows[i].content[0].metadata.color ? noteRows[i].content[0].metadata.color : 'black')
    doc.font(FONTS[noteRows[i].content[0].metadata.fontFamily])
    doc.fontSize(noteRows[i].content[0].metadata.fontSize === 'big' ? FONT_SIZE.BIG : FONT_SIZE.TINY)
    doc.text(noteRows[i].content[0].text,
      noteRows[i].content[0].metadata.widthStart,
      noteRows[i].content[0].metadata.heightStart)
  }
}

const generateTitle = (doc, { header: { title } }) => {
  doc.fillColor(title[0].content[0].metadata.color ? title[0].content[0].metadata.color : 'black')
  doc.font(FONTS[title[0].content[0].metadata.fontFamily])
  doc.fontSize(FONT_SIZE[title[0].content[0].metadata.fontSize])
  doc.text(title[0].content[0].text,
    title[0].content[0].metadata.widthStart,
    title[0].content[0].metadata.heightStart)
}

module.exports = {
  generateBasicData,
  generateDosificationData,
  generateNote,
  generateTitle,
}
