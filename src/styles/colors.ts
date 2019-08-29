const baseColors = {
  white00: '#fff',
  white10: '#fafafa',
  black10: '#161616',
  black20: '#2a2a2a',
  black30: '#333',
  gray20: '#fafbfa',
  gray30: '#f8f9f8',
  gray40: '#f1f2f1',
  gray50: '#e0e0e0',
  gray60: '#ccc',
  gray70: '#aaa',
  gray80: '#999',
  gray90: '#666',
  red50: '#ea6e67',
  red60: '#e7574f',
  blue50: '#337ab7',
  cyan10: '#f0f6f8',
  cyan40: '#a4dae6',
  cyan50: '#84cad9',
  blueGray30: '#e4e8e9',
  blueGray40: '#b8bec6',
  blueGray50: '#9ca4b0',
  blueGray60: '#7c838f',

  // SNS
  facebook: '#3b5998',
  twitter: '#1da1f2',
  hatena: '#00a4de',
  pocket: '#ef4056',
  newspicks: '#222',
}

// Graduation
const gradColors = {
  gradBlack: `linear-gradient(225deg, ${baseColors.black20} 0%, ${baseColors.black30} 62%, ${baseColors.black10} 100%)`,
  gradDeepGreen: `linear-gradient(225deg, #3ba395 0%, #21789a 100%)`,
  gradOrangePink: `linear-gradient(225deg, #d754ad 0%, #f96785 59%, #fe7333 100%)`,
  gradSilver: `linear-gradient(225deg, #e6e9ed 0%, #eef1f6 50%, #d1d8dc 100%)`,
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
  borderInvert: baseColors.white00,

  // background
  backgroundGray: baseColors.gray40,
}

export const colors = {
  ...baseColors,
  ...gradColors,
  ...aliasColors,
}
