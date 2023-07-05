import { Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';
import { generateRandomNumbers } from '../../helpers/helper';

const { User, Staff, Sample, Test, BookTests, LabTests } = require('../../database/models');
const db = require('../../database/models/index');

const { Op } = Sequelize;

const uuidv1 = require('uuid/v4');

/**
 * Save user details to the DB
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function createUser(data) {
  const { name, gender, email, address, phone, date_of_birth } = data;
  const username = `${name.split(' ')[0].toLowerCase()}${generateRandomNumbers(3)}`;

  const uniq = uuidv1();
  const tempPassword = uniq.substr(uniq.length - 7).toUpperCase();

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(tempPassword, salt);

  return User.create({
    name,
    gender,
    email,
    password,
    address,
    phone,
    username,
    date_of_birth,
  });
}

/**
 * query user details in the DB by phone or username
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function findUserByPhoneOrUsername(data) {
  return User.findOne({
    where: { [Op.or]: [{ phone: data.phone }, { username: data.username }] },
  });
}

/**
 * query user account in the DB by username
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function findUserByUsername(data, model) {
  return model.findOne({ where: { username: data.username } });
}

/**
 * query user account in the DB by phone
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function findUserByPhone(data) {
  return User.findOne({ where: { phone: data.phone } });
}

/**
 * query user account in the DB by user id
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function getUserById(data) {
  return User.findByPk(data);
}

/**
 * get users
 *
 * @function
 * @returns {json} json object with users data
 * @param currentPage
 * @param pageLimit
 */
export async function getUsers(currentPage = 1, pageLimit = 10) {
  return User.paginate({
    page: currentPage,
    paginate: pageLimit,
    order: [['createdAt', 'DESC']],
    attributes: { exclude: ['password'] },
  });
}

/**
 * search users
 *
 * @function
 * @returns {json} json object with users data
 * @param currentPage
 * @param pageLimit
 * @param search
 */
export async function searchUsers(currentPage = 1, pageLimit = 10, search) {
  return User.paginate({
    page: currentPage,
    paginate: pageLimit,
    order: [['createdAt', 'DESC']],
    attributes: { exclude: ['password'] },
    where: {
      [Op.or]: [
        {
          firstname: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          lastname: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          username: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          phone: {
            [Op.like]: `%${search}%`,
          },
        },
      ],
    },
  });
}

export async function createSample(data) {
  const { name, abbreviation, description } = data;
  return Sample.create({
    name,
    abbreviation,
    description,
  });
}

export async function createTest(data) {
  const { name, unit_of_measure, test_section, sample_type, description, price } = data;
  return Test.create({
    name,
    unit_of_measure,
    description,
    test_section,
    sample_type,
    price,
  });
}

export async function getSamples() {
  return Sample.findAll({
    order: [['createdAt', 'DESC']],
  });
}

export async function getTests() {
  return Test.findAll({
    order: [['createdAt', 'DESC']],
    include: [{ model: Sample }],
  });
}

export async function bookTest(data) {
  const { patient, tests } = data;
  const { name, gender, email, address, phone, date_of_birth } = patient;
  const result = await db.sequelize.transaction(async t => {
    const username = `${name.split(' ')[0].toLowerCase()}${generateRandomNumbers(3)}`;

    const uniq = uuidv1();
    const tempPassword = uniq.substr(uniq.length - 7).toUpperCase();

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(tempPassword, salt);

    const user = await User.create(
      {
        name,
        gender,
        email,
        password,
        address,
        phone,
        username,
        date_of_birth,
      },
      { transaction: t }
    );

    const bookedTest = await BookTests.create(
      {
        user_id: user.id,
        status: 'Pending',
      },
      { transaction: t }
    );

    const mapTest = tests.map(test => ({
      booked_test_id: bookedTest.id,
      test_id: test.id,
      price: test.price,
      name: test.name,
      sample_id: test.sample_type,
      user_id: user.id,
    }));

    await LabTests.bulkCreate(mapTest, { transaction: t });
    return user;
  });
  return result;
}

export async function getSamplesToCollect() {
  return BookTests.findAll({
    order: [['createdAt', 'DESC']],
    include: [{ model: LabTests, include: [{ model: Test }] }, { model: User }],
  });
}

export async function getSample(id) {
  return BookTests.findOne({
    where: { id },
    order: [['createdAt', 'DESC']],
    include: [{ model: LabTests, include: [{ model: Test }] }, { model: User }],
  });
}
