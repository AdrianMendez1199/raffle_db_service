import Mali, { Context } from 'mali';

import db from '../../../database';
import { GRPC_HOST_AUTH, PROTO_AUTH_PATH } from '../const';

/**
 * this function check if user
 * exists into databases
 * @param ctx
 */
async function auth(ctx: Context) {
  const { username, password } = ctx.req;

  const user = await db('auth')
  .where({ username, password })
  .first();

  return ctx.res = { ...user };
}

/**
 * Start gRPC server
 */
export function server() {
  const service = new Mali(PROTO_AUTH_PATH, 'AuthService');
  service.use({ auth });
  service.start(GRPC_HOST_AUTH);
  console.log(`Service gRPC auth running on ${GRPC_HOST_AUTH}`);
}

