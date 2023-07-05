import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    'Staff',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      hooks: {
        // eslint-disable-next-line no-unused-vars
        async beforeCreate(staff, options) {
          const salt = await bcrypt.genSalt(10);
          staff.password = await bcrypt.hash(staff.password, salt);
        },
      },
    },
    {}
  );

  Staff.prototype.generateAuthToken = function() {
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
  Staff.associate = function(models) {
    // associations can be defined here
  };
  return Staff;
};
