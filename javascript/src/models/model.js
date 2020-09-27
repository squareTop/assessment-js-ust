import sequelize from '../config/database';
import DataTypes from 'sequelize';

const Model = {};
Model.sequelize = sequelize;

// Models
Model.Teacher = require('./teacher.model')(sequelize, DataTypes);
Model.Subject = require('./subject.model')(sequelize, DataTypes);
Model.Class = require('./class.model')(sequelize, DataTypes);
Model.Workload = require('./workload.model')(sequelize, DataTypes);
Model.Student = require('./student.model')(sequelize, DataTypes);
Model.Registration = require('./registration.model')(sequelize, DataTypes);

// Associations

// Workload belongsTo one Teacher
Model.Workload.belongsTo(Model.Teacher, { foreignKey: 'teacherEmail', otherKey: 'teacherEmail'});

// Workload belongsTo one Subject
Model.Workload.belongsTo(Model.Subject, { foreignKey: 'subjectCode', otherKey: 'subjectCode'});

// Workload belongsTo one Class
Model.Workload.belongsTo(Model.Class, { foreignKey: 'classCode', otherKey: 'classCode'});

// Registration belongsTo one Student
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
