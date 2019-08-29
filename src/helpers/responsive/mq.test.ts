import { mq } from './mq'

describe('min', () => {
  it('returns min-width media query statement from given number', () => {
    expect(mq.min(500)).toEqual(`@media (min-width: 500px)`)
  })
})

describe('max', () => {
  it('returns max-width media query statement from given number', () => {
    expect(mq.max(800)).toEqual(`@media (max-width: 800px)`)
  })
})

describe('between', () => {
  it('returns min-width adn max-width media query statement from given number', () => {
    expect(mq.between(500, 800)).toEqual(
      `@media (min-width: 500px) and (max-width: 800px)`
    )
  })
})
