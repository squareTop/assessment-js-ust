import Express from 'express';
import HealthcheckController from './controllers/HealthcheckController';
import RegistrationController from './controllers/RegistrationController';
import WorkloadReportController from './controllers/WorkloadReportController';

const router = Express.Router();

router.use('/healthcheck', HealthcheckController);
router.use('/register', RegistrationController);
router.use('/reports/workload', WorkloadReportController);

export default router;
