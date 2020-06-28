import Mali from 'mali';

import db from '../../../database';
import { GRPC_HOST_AUTH, PROTO_AUTH_PATH } from '../const';

const auth = (ctx: any) => {
  ctx.res = { username : 'test', password: '1234' };
};

/**
 * Start gRPC server
 */
export function server() {
  const service = new Mali(PROTO_AUTH_PATH, 'AuthService');
  service.use({ auth });
  service.start(GRPC_HOST_AUTH);
  console.log(`Service gRPC auth running on ${GRPC_HOST_AUTH}`);
}

