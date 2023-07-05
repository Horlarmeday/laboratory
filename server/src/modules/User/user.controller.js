/**
 * User controller handles all requests that has to do with users
 *
 * - getUsers - get all users
 */
import UserService from './user.service';
import { validateUser, validateUserLogin } from './validations';
import {getSample} from "./user.repository";

/**
 *
 *
 * @class UserController
 */
class UserController {
  /**
   * create a user record
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, user data and access token
   */
  static async createUser(req, res, next) {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
      const user = await UserService.createUserService(req.body);

      return res.status(201).json({
        message: 'Successful, account created!',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * login a user
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, user data and access token
   */
  static async loginUser(req, res, next) {
    const { error } = validateUserLogin(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
      const { token, user } = await UserService.userLoginService(req.body);

      return res.status(200).json({
        message: 'Login successful!',
        token,
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * login a user
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, user data and access token
   */
  static async loginStaff(req, res, next) {
    const { error } = validateUserLogin(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
      const { token, staff } = await UserService.staffLoginService(req.body);

      return res.status(200).json({
        message: 'Login successful!',
        token,
        data: staff,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * get all users
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with users data
   */
  static async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers(req.query);

      return res.status(200).json({
        message: 'Data retrieved',
        data: users,
      });
    } catch (e) {
      return next(e);
    }
  }

  static async createSample(req, res, next) {
    try {
      const sample = await UserService.createSample(req.body);

      return res.status(201).json({
        message: 'Successful, data saved!',
        data: sample,
      });
    } catch (e) {
      return next(e);
    }
  }

  static async createTest(req, res, next) {
    try {
      const test = await UserService.createTest(req.body);

      return res.status(201).json({
        message: 'Successful, data saved!',
        data: test,
      });
    } catch (e) {
      return next(e);
    }
  }

  static async getSamples(req, res, next) {
    try {
      const samples = await UserService.getSamples();

      return res.status(200).json({
        message: 'Data retrieved',
        data: samples,
      });
    } catch (e) {
      return next(e);
    }
  }

  static async getTests(req, res, next) {
    try {
      const tests = await UserService.getTests();

      return res.status(200).json({
        message: 'Data retrieved',
        data: tests,
      });
    } catch (e) {
      return next(e);
    }
  }

  static async bookTest(req, res, next) {
    try {
      const user = await UserService.bookTest(req.body.payload);

      return res.status(201).json({
        message: 'Successful, test booked',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }


  static async getSamplesToCollect(req, res, next) {
    try {
      const tests = await UserService.getSampleToCollect();

      return res.status(200).json({
        message: 'Data retrieved',
        data: tests,
      });
    } catch (e) {
      return next(e);
    }
  }

  static async getSample(req, res, next) {
    try {
      const test = await getSample(req.params.id);

      return res.status(200).json({
        message: 'Data retrieved',
        data: test,
      });
    } catch (e) {
      return next(e);
    }
  }
}
export default UserController;
