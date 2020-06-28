import dotenv from 'dotenv';

dotenv.config({
  path: `${__dirname}/../../.env`,
});

export const GRPC_HOST_AUTH = `${process.env.GRPC_AUTH_SERVICE_HOST}:${process.env.GRPC_AUTH_SERVICE_PORT}`;
export const PROTO_AUTH_PATH = `${__dirname}/../../proto/auth.proto`;


export const PROTO_PATH_USER = `${__dirname}/../../proto/user.proto`;
export const GRPC_HOST_USER = `${process.env.GRPC_USER_SERVICE_HOST}:${process.env.GRPC_USER_SERVICE_PORT}`;
