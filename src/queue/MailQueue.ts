import Queue from 'bull';
import RedisConfig from '../config/RedisConfig';
import MailTrapService from '../service/MailTrapService';

const MailQueue = new Queue('mail', {
  limiter: {
    max: 90,
    duration: 1000,
  },
  redis: RedisConfig,
});

MailQueue.process(async (job, done) => {
  try {
    job.progress(0);
    const dados = job.data;
    await MailTrapService.sendMail(dados);
    job.progress(100);
    done();
  } catch (e) {
    done(e);
  }
});

export default MailQueue;
