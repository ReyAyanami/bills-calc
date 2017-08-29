import {
  check,
  report
} from './utils'

describe('basic', () => {
  it('1 person', () => {

    const persons = {
      'nick': {
        name: 'nick',
        sum: 0
      }
    }

    const expenditures = [
      {
        sum: 1000,
        owner: persons.nick,
        members: [persons.nick]
      }
    ]

    check(expenditures, '[{"name":"nick","sum":0}]')

  })
  it('2 person', () => {

    const persons = {
      'nick': {
        name: 'nick',
        sum: 0
      },
      'adilet': {
        name: 'adilet',
        sum: 0
      }
    }

    const expenditures = [
      {
        sum: 1000,
        owner: persons.nick,
        members: [persons.adilet, persons.nick]
      }
    ]

    check(expenditures, '[{"name":"nick","sum":-500},{"name":"adilet","sum":500}]')

  })
  it('report', () => {

    const persons = {
      'nick': {
        name: 'nick',
        sum: 0
      },
      'adilet': {
        name: 'adilet',
        sum: 0
      }
    }

    const expenditures = [
      {
        sum: 1000,
        owner: persons.nick,
        members: [persons.adilet, persons.nick]
      }
    ]

    report(expenditures, '["nick need to take 500 from bank","adilet owe 500 to bank"]')

  })
})
