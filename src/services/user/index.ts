import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';

import { GRPC_HOST_USER, PROTO_PATH_USER  } from '../const';


const proto = loadSync(PROTO_PATH_USER, {
  keepCase: true,
  enums: String,
  oneofs: true,
});

const userServiceClient: any = loadPackageDefinition(proto).user;
const UserService = userServiceClient.UserService;
const userClient = new UserService(GRPC_HOST_USER, credentials.createInsecure());
