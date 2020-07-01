import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';
import { promisify } from 'util';

import { GRPC_HOST_USER, PROTO_PATH_USER  } from '../const';


const proto = loadSync(PROTO_PATH_USER, {
  keepCase: true,
  enums: String,
  oneofs: true,
});

const userServiceClient: any = loadPackageDefinition(proto).user;
const UserService = userServiceClient.UserService;
const userClient = new UserService(GRPC_HOST_USER, credentials.createInsecure());


// TO REVIEW
const promises: any = {};
const functionsList = Object.keys(Object.getPrototypeOf(userClient));


//// TO REVIEW
const fn = functionsList.filter((functions: string) => {
  if (!functions.startsWith('$')) {
    return functions;
  }
});

fn.map((i: any) => {
  promises[i] = promisify(userClient[i]).bind(userClient);
  return Object.assign({}, promises);
});

export default promises;
