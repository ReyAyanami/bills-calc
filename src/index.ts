/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import {Person} from './person'
import {Expenditure} from './expenditure'
import {ICalc} from './icalc'
import {IReporter} from './ireporter'

class Calc implements ICalc, IReporter {
  private persons: Set<Person>
  private expenditures: Expenditure[]

  constructor() {
    this.persons = new Set()
    this.expenditures = []
  }

  add(expenditures: Expenditure[]): this {
    this.persistPersons(expenditures)
    this.expenditures = this.expenditures.concat(expenditures)
    return this
  }

  calc(): Person[] {
    this.calculate()
    return Array.from(this.persons)
  }

  report(): string[] {
    return this.calc()
               .map(it => {
                 if (it.sum > 0) {
                   return `${it.name} owe ${it.sum} to bank`
                 } else {
                   return `${it.name} need to take ${-it.sum} from bank`
                 }
               })
  }

  private calculate() {
    this.resetPersonsLoan()
    this.expenditures.forEach(it => {
      const perPerson = it.sum / it.members.length
      it.owner.sum -= it.sum
      it.members.forEach(m => m.sum += perPerson)
    })
  }

  private resetPersonsLoan() {
    this.persons.forEach(it => it.sum = 0)
  }

  private persistPersons(expenditures: Expenditure[]) {
    expenditures.forEach(it => {
      this.addPerson(it.owner)
      this.addPersons(it.members)
    })
  }

  private addPerson(person: Person) {
    this.persons.add(person)
  }

  private addPersons(persons: Person[]) {
    persons.forEach(it => this.addPerson(it))
  }

}

export default Calc
