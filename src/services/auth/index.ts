import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';

import { GRPC_HOST_AUTH, PROTO_AUTH_PATH } from '../const';
import { convertCallbackClientToPromise } from '../../../utils';


const PROTO =
  loadSync(PROTO_AUTH_PATH, {
    keepCase: true,
    enums: String,
    oneofs: true,
  });

const authServiceClient: any = loadPackageDefinition(PROTO).auth;
const authService = authServiceClient.AuthService;

const authClient = new authService(GRPC_HOST_AUTH, credentials.createInsecure());

// Export authRpcClient convert in Promise
export default convertCallbackClientToPromise(authClient);
