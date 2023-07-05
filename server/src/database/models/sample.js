module.exports = (sequelize, DataTypes) => {
  const Sample = sequelize.define(
    'Sample',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      abbreviation: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Sample.associate = function(models) {
    // associations can be defined here
  };
  return Sample;
};
