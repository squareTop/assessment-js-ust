import sequelize from '../config/database';
import DataTypes from 'sequelize';

const Model = {};
Model.sequelize = sequelize;

// Import models
Model.Teacher = require('./teacher.model')(sequelize, DataTypes);
Model.Subject = require('./subject.model')(sequelize, DataTypes);
Model.Class = require('./class.model')(sequelize, DataTypes);
Model.Workload = require('./workload.model')(sequelize, DataTypes);
Model.Student = require('./student.model')(sequelize, DataTypes);
Model.Registration = require('./registration.model')(sequelize, DataTypes);

// Create Associations
// Teacher hasMany Workloads and each Workload belongsTo one Teacher
// Model.Teacher.hasMany(Model.Workload, { foreignKey: 'teacherEmail', otherKey: 'teacherEmail'});
Model.Workload.belongsTo(Model.Teacher, { foreignKey: 'teacherEmail', otherKey: 'teacherEmail'});

// Subject hasMany Workloads and Workload belongsTo one Subject
// Model.Subject.hasMany(Model.Workload, { foreignKey: 'subjectCode', otherKey: 'subjectCode'});
Model.Workload.belongsTo(Model.Subject, { foreignKey: 'subjectCode', otherKey: 'subjectCode'});

// Class hasMany Workloads and Workload belongsTo one Class
// Model.Class.hasMany(Model.Workload, { foreignKey: 'classCode', otherKey: 'classCode'});
Model.Workload.belongsTo(Model.Class, { foreignKey: 'classCode', otherKey: 'classCode'});

// Student hasMany Registrations and Registration belongsTo one Student
// Model.Student.hasMany(Model.Registration, { foreignKey: 'studentEmail', otherKey: 'studentEmail'});
Model.Registration.belongsTo(Model.Student, { foreignKey: 'studentEmail', otherKey: 'studentEmail'});

// Registration belongsTo one Workload
Model.Registration.belongsTo(Model.Workload, { foreignKey: ['teacherEmail','subjectCode', 'classCode'], otherKey: ['teacherEmail','subjectCode', 'classCode']});

// Sync Tables after setting associations
Model.Teacher.sync();
Model.Student.sync();
Model.Class.sync();
Model.Subject.sync();
Model.Workload.sync();
Model.Registration.sync();

export default Model;
