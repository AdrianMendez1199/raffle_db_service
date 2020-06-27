import dotenv from 'dotenv';
import Mali from 'mali';

dotenv.config({
  path: `${__dirname}/../../../.env`,
});

const PROTO_PATH = `${__dirname}/../../../proto/user.proto`;
const GRPCHOST = `${process.env.GRPC_USER_SERVICE_HOST}:${process.env.GRPC_USER_SERVICE_PORT}`;

const createUser = (ctx: any) => {
  console.log(ctx);
};

const getWinner = (ctx: any) => {
  console.log(ctx);
};

/**
 * Start gRPC server with Mali
 */
export function server() {
  const service = new Mali(PROTO_PATH, 'UserService');
  service.use({ createUser,  getWinner });
  service.start(GRPCHOST);
  console.info(`gRPC user service running on ${GRPCHOST}`);
}

