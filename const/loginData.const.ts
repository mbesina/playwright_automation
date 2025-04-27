import Chance from 'chance'
const chance = new Chance()

export const invalidUser = {
    emailAddress: chance.email(),
    randomPassword: chance.string({ length: 8 }),
}

export const email = process.env.EMAIL!;
export const password = process.env.PASSWORD!;
