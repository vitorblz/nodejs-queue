import ServerConfig from './config/ServerConfig';
import app from './server';

app.listen(ServerConfig.PORT, () => console.log(`Servidor rodando na porta ${ServerConfig.PORT}`));
