module.exports = (sequelize, DataTypes) => {

  const Class = sequelize.define('Class', {
    // Model attributes are defined here
    classCode: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options
    timestamps: false
  });

  return Class;

}
