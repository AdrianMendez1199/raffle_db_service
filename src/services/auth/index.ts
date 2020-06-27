import path from 'path';
import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';

const proto = loadSync(path.resolve(__dirname, '../../../proto/user.proto'), {
  keepCase: true,
  enums: String,
  oneofs: true,
});

const authServiceClient: any = loadPackageDefinition(proto).auth;
const authService = authServiceClient.authService;
const authClient = new authService('0.0.0.0:50051', credentials.createInsecure());
