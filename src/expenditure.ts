import {Person} from './person'

export interface Expenditure {
  sum: number
  owner: Person
  members: Person[]
}