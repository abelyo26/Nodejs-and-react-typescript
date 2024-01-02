/* module.exports.authController = require('./auth.controller');
module.exports.userController = require('./user.controller'); */

import authController from './auth.controller';
import userController from './user.controller';

export default { authController, userController };
// export * from './user.controller';
