module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    'Test',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      unit_of_measure: DataTypes.STRING,
      test_section: DataTypes.STRING,
      sample_type: DataTypes.INTEGER,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {}
  );
  Test.associate = ({ Sample }) => {
    // associations can be defined here
    Test.belongsTo(Sample, {
      foreignKey: 'sample_type',
    });
  };
  return Test;
};
