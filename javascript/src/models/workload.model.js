module.exports = (sequelize, DataTypes) => {

  const Workload = sequelize.define('Workload', {
    // Model attributes are defined here
    teacherEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    subjectCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    classCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    // Other model options
    timestamps: false
  });
  return Workload;
}

