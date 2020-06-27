import Mali from 'mali';
import dotenv from 'dotenv';

// import db from '../../../database';

dotenv.config({
  path: `${__dirname}/../../../.env`,
});

const GRPCHOST = `${process.env.GRPC_AUTH_SERVICE_HOST}:${process.env.GRPC_AUTH_SERVICE_PORT}`;
const PROTO_PATH = `${__dirname}/../../../proto/auth.proto`;

const auth = (ctx: any) => {
  // console.log(db);
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

