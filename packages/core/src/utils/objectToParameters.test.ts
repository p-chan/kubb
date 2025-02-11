import { objectToParameters } from './objectToParameters'

describe('objectToParameters', () => {
  test('if object is resolved to a string with parameters', async () => {
    expect(objectToParameters([['firstName', 'FirstName']], { typed: false })).toEqual('firstName')
    expect(
      objectToParameters(
        [
          ['firstName', 'FirstName'],
          ['lastName', 'LastName'],
        ],
        { typed: false }
      )
    ).toEqual('firstName, lastName')
  })

  test('if object is resolved to a string with typed parameters', async () => {
    expect(objectToParameters([['firstName', 'User']], { typed: true })).toEqual('firstName: User["firstName"]')
    expect(
      objectToParameters(
        [
          ['firstName', 'User'],
          ['lastName', 'User'],
        ],
        { typed: true }
      )
    ).toEqual('firstName: User["firstName"], lastName: User["lastName"]')
  })
})
