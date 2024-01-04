/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import faker from 'faker';

const password = 'password1';

export default [
  {
    _id: mongoose.Types.ObjectId(),
    name: faker.name.findName(),
    email: faker.internet.email().toLowerCase(),
    password,
    role: 'user',
    isEmailVerified: false,
  },
];
