module.exports = (sequelize, DataTypes) => {

  const Student = sequelize.define('Student', {
    // Model attributes are defined here
    studentEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    studentName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options
    timestamps: false
  });
  return Student;

}
