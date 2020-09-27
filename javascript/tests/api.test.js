const request = require('supertest')
import Express from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from '../src/router';
import globalErrorHandler from '../src/config/globalErrorHandler';

const app = Express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use('/api', router);
app.use(globalErrorHandler);

describe('Registration API', () => {
  it('GET /api/healthcheck', async () => {
    const res = await request(app)
        .get('/api/healthcheck')
    expect(res.statusCode).toEqual(200)
  }),
  it('POST /api/register', async () => {
    const res = await request(app)
        .post('/api/register')
        .send({
          "teacher": {
          "name": "Teacher 3",
          "email": "teacher3@gmail.com"
          },
          "students": [{
          "name": "Student 4",
          "email": "student4@gmail.com"
          }, {
          "name": "Student 5",
          "email": "student5@gmail.com"
          }],
          "subject": {
          "subjectCode": "ENG",
          "name": "English"
          },
          "class": {
          "classCode": "P1-4",
          "name": "P1 Gratitude"
          }
         })
    expect(res.statusCode).toEqual(204)
  }),
  it('GET /api/reports/workload', async () => {
    const res = await request(app)
        .get('/api/reports/workload')
    expect(res.statusCode).toEqual(200)
  })
})
