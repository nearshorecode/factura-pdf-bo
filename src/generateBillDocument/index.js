const PDFDocument = require('pdfkit')
const fs = require('fs')

const { dynamicTable } = require('../components/generateDynamicTable')
const {
  generateBasicData, generateDosificationData, generateNote, generateTitle,
} = require('../components/generateHeader')
const { generateCustomerInformation } = require('../components/generateContent')
const { generateFooter } = require('../components/generateFooter')
const { generateRectangle } = require('../components/generateRectangle')
const { generateTableBottom } = require('../components/generateInvoiceBottom')

const defaultOptions = {
  size: 'A4',
  margin: 50,
}
const generateBillDocument = (invoice, path, options = defaultOptions) => {
  const doc = new PDFDocument(options)
  generateRectangle(doc, invoice)
  generateBasicData(doc, invoice)
  generateDosificationData(doc, invoice)
  generateTitle(doc, invoice)
  generateNote(doc, invoice)
  generateCustomerInformation(doc, invoice)
  dynamicTable(doc, invoice)
  generateTableBottom(doc, invoice)
  generateFooter(doc, invoice)

  doc.end()
  doc.pipe(fs.createWriteStream(path))
}

module.exports = { generateBillDocument }
