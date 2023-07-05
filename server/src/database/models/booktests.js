module.exports = (sequelize, DataTypes) => {
  const BookTests = sequelize.define(
    'BookTests',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      accession_number: DataTypes.STRING,
    },
    {}
  );
  BookTests.associate = ({ LabTests, User }) => {
    // associations can be defined here
    BookTests.hasMany(LabTests, {
      foreignKey: 'booked_test_id',
    });

    BookTests.belongsTo(User, {
      foreignKey: 'user_id',
    });
  };
  return BookTests;
};
