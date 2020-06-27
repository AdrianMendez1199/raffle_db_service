import { Server, ServerCredentials, loadPackageDefinition } from 'grpc';
import { loadSync } from '@grpc/proto-loader';

const packageDefinition = loadSync(
  `${__dirname}/../../../proto/user.proto`,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });


const service: any = loadPackageDefinition(packageDefinition).user;

const createUser = (call: any, callback: CallableFunction) => {
  console.log(call.request);
};

const getWinner = (call: any, callback: CallableFunction) => {
};

/**
 * Start gRPC server
 *
 */
function server() {
  const server = new Server();
  server.addService(service.UserService.service, {
    createUser,
  });
  server.bind('0.0.0.0:50051', ServerCredentials.createInsecure());
  console.log('gRPC running on http://localhost:50051');
  server.start();
}

server();
