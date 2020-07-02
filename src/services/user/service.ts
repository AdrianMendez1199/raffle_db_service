import Mali, { Context } from 'mali';

import db from '../../../database';
import { GRPC_HOST_USER, PROTO_PATH_USER } from '../const';

export interface User {
  id?: number;
  name: string;
  identificationCard: string;
  code: number;
  winner?: number;
}

/**
 * this function create user into db
 * @param ctx
 * @returns @promise
 */
async function createUser(ctx: Context): Promise<User> {
  const { name, identificationCard, code }: User = ctx.req;
  const user: User[] = await db('users')
    .insert({ name, identificationCard, code: Number(code) })
    .returning(['name', 'identificationCard', 'code']);

  return ctx.res = {
    ...user[0],
  };
}

/**
 * this function select winner from database
 * @param ctx
 * @return @promise
 */
async function getWinner(ctx: Context): Promise<User> {
  const winner: any = await db
  .select('id', 'name', 'code', 'identificationCard')
  .from<User>('users')
  .where({ winner: 0 })
  .orderByRaw('RANDOM()')
  .limit(1)
  .first();

  await db('users')
  .where({ id: winner.id })
  .update({ winner: 1 });

  return ctx.res = { ...winner };
}

/**
 * Start gRPC server with Mali
 */
export function server() {
  const service = new Mali(PROTO_PATH_USER, 'UserService');
  service.use({ createUser, getWinner });
  service.start(GRPC_HOST_USER);
  console.info(`gRPC user service running on ${GRPC_HOST_USER}`);
}

