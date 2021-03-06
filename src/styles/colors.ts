const baseColors = {
  white00: '#fff',
  white10: '#fafafa',
  black10: '#161616',
  black20: '#2a2a2a',
  black30: '#333',
  gray30: '#f8f8f8',
  gray40: '#f1f1f1',
  gray50: '#e0e0e0',
  gray60: '#ccc',
  gray70: '#aaa',
  gray80: '#999',
  gray90: '#666',
  red50: '#ea6e67',
  red60: '#e7574f',
  red70: '#c7433c',
  brown30: '#ece8e7',
  blue50: '#337ab7',
  cyan10: '#f0f6f8',
  cyan40: '#a4dae6',
  cyan50: '#84cad9',
  cyan60: '#02B3C8',
  cyan70: '#0fa3b3',
  blueGray20: '#e7eeef',
  blueGray30: '#d2d6db',
  blueGray40: '#b5bbc4',
  blueGray50: '#9ca4b0',
  blueGray60: '#7c838f',

  // SNS
  facebook: '#3b5998',
  twitter: '#1da1f2',
  hatena: '#00a4de',
  pocket: '#ef4056',
  newspicks: '#222',
  wantedly: '#00aed1',
}

// Graduation
const gradColors = {
  gradBlack: `linear-gradient(225deg, ${baseColors.black20} 0%, ${baseColors.black30} 62%, ${baseColors.black10} 100%)`,
  gradDeepGreen: `linear-gradient(225deg, #3ba395 0%, #21789a 100%)`,
  gradOrangePink: `linear-gradient(225deg, #d754ad 0%, #f96785 59%, #fe7333 100%)`,
  gradSilver: `linear-gradient(225deg, #e6e9ed 0%, #eef1f6 50%, #d1d8dc 100%)`,
  gradPaleBlue: `linear-gradient(268deg, #c1dcf2 8%, #8db6e0 94%)`,
}

const aliasColors = {
  // text
  text: baseColors.black30,
  textInvert: baseColors.white00,
  textStrong: baseColors.black10,
  textLight: baseColors.gray80,
  link: baseColors.blue50,
  linkInvert: baseColors.white00,

  // border
  border: baseColors.gray50,
  borderLight: baseColors.gray40,
  borderInvert: baseColors.white00,
  borderStrong: baseColors.black10,

  // background
  backgroundGray: baseColors.gray40,
}

export const colors = {
  ...baseColors,
  ...gradColors,
  ...aliasColors,
}
