import Express from 'express';
import sequelize from '../config/database';
// import { OK } from 'http-status-codes';
import Model from '../models/model';

const RegistrationController = Express.Router();

const registrationHandler = async (req, res) => {
  try{
    res.status(204);
    try{
      // Teacher Table
      const [upsertTeacherModel, upsertTeacherResult] = await Model.Teacher.upsert({
        teacherEmail: req.body.teacher.email,
        teacherName: req.body.teacher.name
      });
    } catch(e){
      console.log('Error Teachers table: ', e);
      res.status(400);
    }
    try{
      // Subject Table
      const [upsertSubjectModel, upsertSubjectResult] = await Model.Subject.upsert({
        subjectCode: req.body.subject.subjectCode,
        subjectName: req.body.subject.name
      });
    } catch(e){
      console.log('Error Subject table: ', e);
      res.status(400);
    }
    try{
      // Class Table
      const [upsertClassModel, upsertClassResult] = await Model.Class.upsert({
        classCode: req.body.class.classCode,
        className: req.body.class.name
      });
    } catch(e){
      console.log('Error Class table: ', e);
      res.status(400);
    }
    try{
      // Student Table
      for (var i = 0; i < req.body.students.length; i++){
        const [m, r] = await Model.Student.upsert({
          studentEmail: req.body.students[i].email,
          studentName: req.body.students[i].name
        })
      }
    } catch(e){
      console.log('Error Student table: ', e);
      res.status(400);
    }
    try{
      // Workload Table
      const [upsertWorkloadModel, upsertWorkloadResult] = await Model.Workload.upsert({
        teacherEmail: req.body.teacher.email,
        subjectCode: req.body.subject.subjectCode,
        classCode: req.body.class.classCode
      });
    } catch(e){
      console.log('Error Workload table: ', e);
      res.status(400);
    }
    try{
      // Registration Table
      for (var i = 0; i < req.body.students.length; i++){
        const [m, r] = await Model.Registration.upsert({
          teacherEmail: req.body.teacher.email,
          subjectCode: req.body.subject.subjectCode,
          classCode: req.body.class.classCode,
          studentEmail: req.body.students[i].email
        })
      }
    } catch(e){
      console.log('Error Registration table: ', e);
      res.status(400);
    }
    // Will be set to 400 if any error
    return res.send('Updated')
  }
  catch(err) {
    return res.status(500).send(err);
  }
}

RegistrationController.post('/', registrationHandler);

export default RegistrationController;
