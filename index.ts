import path from 'path';
import glob from 'glob';
import { promisify } from 'util';

// path services
const servicePath = path.join(__dirname, 'src/services/');

// Converting glob in promise
const gb = promisify(glob);

// iter all service file to up gRPC servers
gb(`${servicePath}**/service.ts`)
  .then((resp: any) => {
    resp.forEach((file: string) => {
      const service = require(file);
      // start gRPC services
      service.server();
    });
  })
  .catch((err: any) => {
    console.log(err);
  });
