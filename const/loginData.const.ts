import Chance from 'chance'
const chance = new Chance()

export const invalidUser = {
    emailAddress: chance.email(),
    randomPassword: chance.string({ length: 8 }),
}

export const randomName = chance.name()

export const validUserEmail = process.env.EMAIL!;
export const validPassword = process.env.PASSWORD!;
