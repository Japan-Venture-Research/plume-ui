import { mq } from './mq'

describe('mq', () => {
  it('returns media query statement from given breakpoint name', () => {
    expect(mq('medium')).toEqual(`@media (min-width: 420px)`)
  })

  it('returns media query statement from given number', () => {
    expect(mq(500)).toEqual(`@media (min-width: 500px)`)
  })
})
