module.exports = (sequelize, DataTypes) => {
  const LabTests = sequelize.define(
    'LabTests',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      booked_test_id: DataTypes.INTEGER,
      test_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      sample_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(12, 2),
    },
    {}
  );
  LabTests.associate = ({ Sample, Test, BookTests }) => {
    // associations can be defined here
    LabTests.belongsTo(Sample, {
      foreignKey: 'sample_id',
    });
    LabTests.belongsTo(Test, {
      foreignKey: 'test_id',
    });

    LabTests.belongsTo(BookTests, {
      foreignKey: 'booked_test_id',
    });
  };
  return LabTests;
};
