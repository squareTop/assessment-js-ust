module.exports = (sequelize, DataTypes) => {

  const Subject = sequelize.define('Subject', {
    // Model attributes are defined here
    subjectCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options
    timestamps: false
  });
  return Subject;

}
