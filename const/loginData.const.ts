import Chance from 'chance'
const chance = new Chance()

export const loginData = {
  validUser: {
    username: 'testuser',
    randomPassword: chance.string({ length: 8 }),
  },
}
