import Mali from 'mali';
import dotenv from 'dotenv';

dotenv.config({
  path: `${__dirname}/../../../.env`,
});

const GRPCHOST = `${process.env.GRPC_AUTH_SERVICE_HOST}:${process.env.GRPC_AUTH_SERVICE_PORT}`;
const PROTO_PATH = `${__dirname}/../../../proto/auth.proto`;

const auth = (call: any, callback: CallableFunction) => {
  console.log(call.request);
};

/**
 * Start gRPC server
 */
export function server() {
  const service = new Mali(PROTO_PATH, 'AuthService');
  service.use({ auth });
  service.start(GRPCHOST);
  console.log(`Service gRPC auth running on ${GRPCHOST}`);
}

