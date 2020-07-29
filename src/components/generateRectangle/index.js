const generateRectangle = (doc, { rectangle: { rows } }) => {
  for (let i = 0; i < rows.length; i += 1) {
    doc.rect(rows[i].widthStart,
      rows[i].heightStart,
      rows[i].widthEnd,
      rows[i].heightEnd)
      .fillAndStroke(rows[i].backgroundColor, rows[i].borderColor)
  }
}

module.exports = {
  generateRectangle,
}
