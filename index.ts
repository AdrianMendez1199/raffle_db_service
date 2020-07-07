import path from 'path';
import glob from 'glob';
import { promisify } from 'util';

// path services
const servicePath = path.join(__dirname, 'src/services/');

// Converting glob in promise
const gb = promisify(glob);

let ext: string = '.ts';

if (process.env.NODE_ENV === 'production') {
  ext = '.js';
}
// iter all service file to up gRPC servers
gb(`${servicePath}**/service${ext}`)
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
