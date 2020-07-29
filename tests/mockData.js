const mockData = {
  header: {
    basicDataRows: [
      {
        content: [
          {
            metadata: {
              verticalPosition: 50,
              horizontalPosition: 110,
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'De: JUAN PEDRO MARTINEZ CHOQUE',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              verticalPosition: 58,
              horizontalPosition: 110,
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'Casa Matriz',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              verticalPosition: 66,
              horizontalPosition: 110,
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'Calle Libertador III Nro. 223',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              verticalPosition: 74,
              horizontalPosition: 110,
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'Zona/Barrio: Cala Cala',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              verticalPosition: 82,
              horizontalPosition: 110,
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'La Paz-Bolivia',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              verticalPosition: 90,
              horizontalPosition: 110,
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'Telefonos: 4444444-77777777',
          },
        ],
      },
    ],
    dosificationDataRows: [
      {
        content: [
          {
            metadata: {
              heightStart: 45,
              widthStart: 345,
              fontSize: 'big',
              color: 'black',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'NIT:',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 65,
              widthStart: 345,
              fontSize: 'big',
              color: 'black',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'FACTURA:',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 85,
              widthStart: 345,
              fontSize: 'big',
              color: 'black',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'AUTORIZACION:',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 45,
              widthStart: 480,
              fontSize: 'big',
              color: 'black',
              fontFamily: 'HELVETICA',
            },
            text: '694827364',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 65,
              widthStart: 480,
              fontSize: 'big',
              color: 'red',
              fontFamily: 'HELVETICA',
            },
            text: '111',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 85,
              widthStart: 480,
              fontSize: 'big',
              color: 'black',
              fontFamily: 'HELVETICA',
            },
            text: '12048593827',
          },
        ],
      },
    ],
    noteRows: [
      {
        content: [
          {
            metadata: {
              heightStart: 110,
              widthStart: 410,
              fontFamily: 'HELVETICA_BOLD',
              fontSize: 'big',
            },
            text: 'ORIGINAL',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 140,
              widthStart: 390,
              fontFamily: 'HELVETICA_BOLD',
              fontSize: 'tiny',
            },
            text: 'Alquiler de Bienes Inmuebles',
          },
        ],
      },
    ],
    title: [
      {
        content: [
          {
            metadata: {
              heightStart: 150,
              widthStart: 200,
              fontFamily: 'HELVETICA_BOLD',
              fontSize: 'huge',
            },
            text: 'RECIBO DE ALQUILER',
          },
        ],
      },
    ],
  },
  content: {
    customerInformationRows: [
      {
        content: [
          {
            metadata: {
              heightStart: 190,
              widthStart: 60,
              fontSize: 'tiny',
            },
            text: 'Lugar: LA PAZ, 4 de febrero de 2020',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 200,
              widthStart: 60,
              fontSize: 'tiny',
            },
            text: 'Señor(es): Empresa Boliviana SRL',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 190,
              widthStart: 320,
              fontSize: 'tiny',
            },
            text: 'NIT/CI: 502958273',
          },
        ],
      },
    ],
    dynamicTableRows: [
      {
        heightStart: 200,
      },
      {
        rowHeight: 20,
        content: [
          {
            metadata: {
              grow: 12,
              backgroundColor: '#99B4D1',
              borderColor: '#C0C0C0',
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
              color: 'black',
              textOnly: false,
            },
            text: 'DESCRIPCION',
          },
        ],
      },
      {
        rowHeight: 20,
        content: [
          {
            metadata: {
              grow: 3,
              backgroundColor: '#99B4D1',
              borderColor: '#C0C0C0',
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'PERIODO',
          },
          {
            metadata: {
              grow: 6,
              backgroundColor: '#99B4D1',
              borderColor: '#C0C0C0',
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'ESPECIFICACION',
          },
          {
            metadata: {
              grow: 3,
              backgroundColor: '#99B4D1',
              borderColor: '#C0C0C0',
              alignContent: 'center',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'SUBTOTAL',
          },
        ],
      },
      {
        rowHeight: 20,
        content: [
          {
            metadata: {
              grow: 3,
              backgroundColor: '#FFF',
              borderColor: '#C0C0C0',
              alignContent: 'center',
              fontFamily: 'HELVETICA',
            },
            text: 'FEBRERO 2020',
          },
          {
            metadata: {
              grow: 6,
              backgroundColor: '#FFF',
              borderColor: '#C0C0C0',
              alignContent: 'center',
              fontFamily: 'HELVETICA',
            },
            text: 'ALQUILER DE OFICINA',
          },
          {
            metadata: {
              grow: 3,
              backgroundColor: '#FFF',
              borderColor: '#C0C0C0',
              alignContent: 'right',
              fontFamily: 'HELVETICA',
            },
            text: '10,000.00',
          },
        ],
      },
      {
        rowHeight: 20,
        content: [
          {
            metadata: {
              grow: 8,
              backgroundColor: '#FFF',
              borderColor: '#C0C0C0',
              alignContent: 'right',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: 'TOTAL BS:',
          },
          {
            metadata: {
              grow: 4,
              backgroundColor: '#FFF',
              borderColor: '#C0C0C0',
              alignContent: 'right',
              fontFamily: 'HELVETICA_BOLD',
            },
            text: '10,000.00',
          },
        ],
      },
      {
        rowHeight: 20,
        content: [
          {
            metadata: {
              grow: 12,
              backgroundColor: '#FFF',
              borderColor: '#C0C0C0',
              alignContent: 'left',
              fontFamily: 'HELVETICA_BOLD',
              color: 'black',
              textOnly: false,
            },
            text: 'Son: DIEZ MIL 00/100 BOLIVIANOS',
          },
        ],
      },
    ],
    tableBottomRows: [
      {
        content: [
          {
            metadata: {
              heightStart: 350,
              widthStart: 100,
            },
            text: 'Codigo de Control: R3-Q4-12-4T-63',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              heightStart: 360,
              widthStart: 100,
            },
            text: 'Fecha Limite de Emision: 04/02/2020',
          },
        ],
      },
    ],
  },
  footer: {
    rows: [
      {
        content: [
          {
            metadata: {
              widthStart: 150,
              fontFamily: 'HELVETICA_BOLD_ITALIC',
            },
            text: 'Ley Nº 453: Tienes derecho a un trato equitativo sin discriminacion en la oferta de servicios.',
          },
        ],
      },
      {
        content: [
          {
            metadata: {
              widthStart: 100,
              fontFamily: 'HELVETICA_ITALIC',
            },
            text: 'ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PAIS, EL USO ILICITO DE ESTA SERA SANCIONADO DE ACUERDO A LEY.',
          },
        ],
      },
    ],
  },
  rectangle: {
    rows: [
      {
        heightStart: 30,
        widthStart: 325,
        heightEnd: 75,
        widthEnd: 225,
        backgroundColor: '#FFF5EE',
        borderColor: '#000',
      },
      {
        heightStart: 180,
        widthStart: 50,
        heightEnd: 35,
        widthEnd: 520,
        backgroundColor: '#FFF5EE',
        borderColor: '#C0C0C0',
      },
    ],
  },
}

module.exports = { mockData }
