import knex from 'knex';

import knexFile from '../knexfile';

const configOptions = knexFile.development;
export default knex(configOptions);
