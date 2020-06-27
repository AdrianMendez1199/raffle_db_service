import path from 'path';
import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';
import { promisify } from 'util';

const proto = loadSync(path.resolve(__dirname, '../../../proto/user.proto'), {
  keepCase: true,
  enums: String,
  oneofs: true,
});

const userServiceClient: any = loadPackageDefinition(proto).user;
const UserService = userServiceClient.UserService;
const userClient = new UserService('0.0.0.0:50051', credentials.createInsecure());

export default {
  createUser: promisify(userClient.createUser).bind(userClient),
};
