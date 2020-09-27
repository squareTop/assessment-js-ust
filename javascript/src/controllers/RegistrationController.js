import Express from 'express';
import Model from '../models/model';
import Logger from '../config/logger';

const RegistrationController = Express.Router();
// const LOG = new Logger('RegistrationController.js');
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
      LOG.error('Error inserting into Teachers table');
      res.status(400);
    }
    try{
      // Subject Table
      const [upsertSubjectModel, upsertSubjectResult] = await Model.Subject.upsert({
        subjectCode: req.body.subject.subjectCode,
        subjectName: req.body.subject.name
      });
    } catch(e){
      LOG.error('Error inserting into Subject table');
      res.status(400);
    }
    try{
      // Class Table
      const [upsertClassModel, upsertClassResult] = await Model.Class.upsert({
        classCode: req.body.class.classCode,
        className: req.body.class.name
      });
    } catch(e){
      LOG.error('Error inserting into Class table');
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
      LOG.error('Error inserting into Student table');
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
      LOG.error('Error inserting into Workload table');
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
      LOG.error('Error inserting into Registration table');
      res.status(400);
    }
    // Will be set to 400 if any error
    return res.send();
  }
  catch(err) {
    return res.status(500).send(err);
  }
}

RegistrationController.post('/', registrationHandler);

export default RegistrationController;
