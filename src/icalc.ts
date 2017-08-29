import {Expenditure} from './expenditure'
import {Person} from './person'

export interface ICalc {
  add(a: Expenditure[]): this

  calc(): Person[]
}