import Express from 'express';
import sequelize from '../config/database';
// import { OK } from 'http-status-codes';
import Model from '../models/model';

const WorkloadReportController = Express.Router();

const workloadReportHandler = async (req, res) => {
  try{
    const teachers = await Model.Teacher.findAll();
    const workloads = await Model.Workload.findAll({
      attributes: ['teacherEmail', 'subjectCode', [sequelize.Sequelize.fn('count', sequelize.Sequelize.col('classCode')), 'numberOfClasses']],
      group: ['teacherEmail', 'subjectCode'],
      include: [{
        model: Model.Teacher,
        attribute: ['teacherName']
      },
      {
        model: Model.Subject,
        attribute: ['subjectName']
      }],
      raw: true,
      nest: true
    });
    const result = formatResponse(teachers, workloads);
    return res.json(result);
  }
  catch(err) {
    return res.status(500).send(err);
  }
}

function formatResponse(t, w){
  var temp = {};
  for (var i = 0; i < t.length; i++){
    temp[t[i].teacherName] = [];
    for (var j = 0; j < w.length; j++){
      if(w[j].Teacher.teacherName == t[i].teacherName){
        temp[t[i].teacherName].push({
          subjectCode: w[j].subjectCode,
          subjectName: w[j].Subject.subjectName,
          numberOfClasses: w[j].numberOfClasses
        });
      }
    }
  }
  return temp;
}

WorkloadReportController.get('/', workloadReportHandler);

export default WorkloadReportController;
