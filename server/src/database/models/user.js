import sequelizePaginate from 'sequelize-paginate';
import bcrypt from 'bcryptjs';

import { sign } from 'jsonwebtoken';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    // {
    //   defaultScope: {
    //     attributes: {
    //       exclude: ['password'],
    //     },
    //   },
    // },
    {
      hooks: {
        // eslint-disable-next-line no-unused-vars
        async beforeCreate(user, options) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
    },
    {}
  );

  User.prototype.generateAuthToken = function() {
    return sign(
      {
        sub: this.id,
        name: this.name,
        username: this.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2 days',
      }
    );
  };

  User.associate = ({}) => {
    // associations can be defined here
  };

  sequelizePaginate.paginate(User);
  return User;
};
