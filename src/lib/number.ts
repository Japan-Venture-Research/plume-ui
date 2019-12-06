import compact from 'lodash/compact'

type Options = {
  decimalPlace?: number
}

export const formatWithComma = (n: number, options?: Options) => {
  const { decimalPlace = 0 } = options || {}
  const [base, decimalDigits] = n.toFixed(decimalPlace).split('.')
  const formatted = base.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,')

  return compact([formatted, decimalDigits]).join('.')
}
