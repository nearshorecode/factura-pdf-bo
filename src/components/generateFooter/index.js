const { FONT_SIZE, FONTS } = require('../../common/constants')

const generateFooter = (doc, { footer: { rows } }) => {
  const bottomStart = doc.page.height
  let bottomTracker = 60
  for (let i = 0; i < rows.length; i += 1) {
    doc.font(FONTS[rows[i].content[0].metadata.fontFamily])
    doc.fontSize(FONT_SIZE.TINY)
    doc.text(rows[i].content[0].text,
      rows[i].content[0].metadata.widthStart,
      parseInt(bottomStart - bottomTracker, 10), { linebreak: false })
    bottomTracker += 10
  }
}

module.exports = { generateFooter }
