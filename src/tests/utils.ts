import {Expenditure} from '../expenditure'
import Calc from '../index'
import {assert} from 'chai'

export const check = (expenditures: Expenditure[], expected: string) => {
  const result = JSON.stringify(
    new Calc().add(expenditures)
              .calc()
  )

  assert.equal(result, expected)
}
export const report = (expenditures: Expenditure[], expected: string) => {
  const result = JSON.stringify(
    new Calc().add(expenditures)
              .report()
  )

  assert.equal(result, expected)
}