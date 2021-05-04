import 'dotenv/config';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';

import MailQueue from './queue/MailQueue';
import ServerConfig from './config/ServerConfig';
import app from './server';
import routes from './routes';

const { router } = createBullBoard([new BullAdapter(MailQueue)]);
app.use('/admin/queues', router);

app.use(routes);

app.listen(ServerConfig.PORT, () => console.log(`Servidor rodando na porta ${ServerConfig.PORT}`));
