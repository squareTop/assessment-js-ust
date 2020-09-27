module.exports = (sequelize, DataTypes) => {

  const Teacher = sequelize.define('Teacher', {
    // Model attributes are defined here
    teacherEmail: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    teacherName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options
    timestamps: false
  });

  return Teacher;
}
