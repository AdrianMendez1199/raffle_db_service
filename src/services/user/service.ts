import Mali from 'mali';

import db from '../../../database';
import { GRPC_HOST_USER, PROTO_PATH_USER } from '../const';

interface User {
  name: string;
  identificationCard: string;
  code: number;
}

/**
 * this function create user into db
 * @param ctx 
 * @returns @promise
 */
const createUser = async (ctx: any): Promise<User> => {
  const { name, identificationCard, code }: User = ctx.req;

  const user: User[] = await db('users')
    .insert({ name, identificationCard, code: Number(code) })
    .returning(['name', 'identificationCard', 'code']);

  return ctx.res = {
    ...user[0],
  };
};

const getWinner = async (ctx: any) => {
  const winner = await db
  .select('name', 'identificationCard', 'code')
  .from<User>('users')
  .orderByRaw('RANDOM()')
  .limit(1);

  return ctx.res = { ...winner[0] };
};

/**
 * Start gRPC server with Mali
 */
export function server() {
  const service = new Mali(PROTO_PATH_USER, 'UserService');
  service.use({ createUser, getWinner });
  service.start(GRPC_HOST_USER);
  console.info(`gRPC user service running on ${GRPC_HOST_USER}`);
}

