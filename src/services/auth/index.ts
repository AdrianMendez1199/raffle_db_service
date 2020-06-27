import path from 'path';
import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';

const PROTO_PATH =
  loadSync(path.resolve(__dirname, '../../../proto/auth.proto'), {
    keepCase: true,
    enums: String,
    oneofs: true,
  });

const authServiceClient: any = loadPackageDefinition(PROTO_PATH).auth;
const authService = authServiceClient.AuthService;

const authClient = new authService('0.0.0.0:9000', credentials.createInsecure());

console.log(credentials.createInsecure())
authClient.auth({ username: 'amendez', password: '12345' }, (err: any, resp: any) => {
  console.log('err', err);
  console.info(resp);
});
