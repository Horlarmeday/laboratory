import bcrypt from 'bcryptjs';
import {
  bookTest,
  createSample,
  createTest,
  createUser,
  findUserByPhoneOrUsername,
  findUserByUsername,
  getSamples, getSamplesToCollect,
  getTests,
  getUsers,
  searchUsers,
} from './user.repository';
import APIError from '../../utils/apiError';
import { sendUserMail } from '../../helpers/mail';

const { User, Staff } = require('../../database/models');

class UserService {
  /**
   * create user account
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @memberOf UserService
   */
  static async createUserService(body) {
    const user = await findUserByPhoneOrUsername({ phone: body.phone, username: body.username });
    if (user) throw new APIError('INVALID', 400, 'User already exists');

    sendUserMail(user);

    return createUser(body);
  }

  /**
   * login user account
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @memberOf UserService
   */
  static async userLoginService(body) {
    const user = await findUserByUsername(body, User);
    if (!user) throw new APIError('INVALID', 400, 'Invalid username or password');

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) throw new APIError('INVALID', 400, 'Invalid username or password');

    const token = user.generateAuthToken();

    return {
      token,
      user,
    };
  }

  /**
   * login user account
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @memberOf UserService
   */
  static async staffLoginService(body) {
    const staff = await findUserByUsername(body, Staff);
    if (!staff) throw new APIError('INVALID', 400, 'Invalid username or password');

    const validPassword = await bcrypt.compare(body.password, staff.password);
    if (!validPassword) throw new APIError('INVALID', 400, 'Invalid username or password');

    const token = staff.generateAuthToken();

    return {
      token,
      staff,
    };
  }

  /**
   * get users
   *
   * @static
   * @returns {json} json object with users data
   * @param body
   * @memberOf UserService
   */
  static async getUsers(body) {
    const { currentPage, pageLimit, search } = body;
    if (search) {
      return searchUsers(Number(currentPage), Number(pageLimit), search);
    }

    if (Object.values(body).length) {
      return getUsers(Number(currentPage), Number(pageLimit));
    }

    return getUsers();
  }

  static async getSamples() {
    return getSamples();
  }

  static async getTests() {
    return getTests();
  }

  static async createSample(body) {
    return createSample(body);
  }

  static async createTest(body) {
    return createTest(body);
  }

  static async bookTest(body) {
    const user = await bookTest(body);

    sendUserMail(user);

    return user;
  }

  static async getSampleToCollect() {
    return getSamplesToCollect();
  }
}
export default UserService;
