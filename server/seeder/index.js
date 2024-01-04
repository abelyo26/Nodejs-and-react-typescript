/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable security/detect-non-literal-require */
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import mongoose from 'mongoose';
import logger from '../src/config/logger';
import * as models from '../src/models';
import config from '../src/config/config';

async function seedData() {
  await mongoose.connect(config.mongoose.url, config.mongoose.options);
  logger.info('db connected!');
  const files = readdirSync(__dirname).filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== _basename(__filename) &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
  );

  const insertPromises = files.map(async (file) => {
    logger.info(`seeding ${file}`);
    const data = require(join(__dirname, file)).default;
    await models[file.replace('.js', '')].insertMany(data);
  });

  try {
    await Promise.all(insertPromises);
    logger.info('Seed successfully completed, db connection closed!');
  } catch (error) {
    logger.error('Error inserting data:', error);
  } finally {
    await mongoose.disconnect();
  }
}
seedData();
