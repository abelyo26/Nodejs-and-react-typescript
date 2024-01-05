/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';

const password = 'password1';

export default [
  {
    name: faker.name.findName(),
    email: faker.internet.email().toLowerCase(),
    password,
    role: 'user',
    isEmailVerified: false,
  },
];
