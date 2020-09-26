module.exports = (sequelize, DataTypes) => {
  
  const Workload = sequelize.define('Workload', {
    // Model attributes are defined here
    teacherEmail: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    subjectCode: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    classCode: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    // Other model options
    timestamps: false
  });
  return Workload;
}

