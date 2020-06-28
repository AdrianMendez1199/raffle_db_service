import Mali from 'mali';

import db from '../../../database';
import { GRPC_HOST_USER, PROTO_PATH_USER  } from '../const';


const createUser = (ctx: any) => {
  ctx.res = { name: 'Prueba',  IdentificationCard: '1212', code: '1212' };
};

const getWinner = (ctx: any) => {
};

/**
 * Start gRPC server with Mali
 */
export function server() {
  const service = new Mali(PROTO_PATH_USER, 'UserService');
  service.use({ createUser,  getWinner });
  service.start(GRPC_HOST_USER);
  console.info(`gRPC user service running on ${GRPC_HOST_USER}`);
}

