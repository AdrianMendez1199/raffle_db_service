import * as Knex from 'knex';

import { encryptPassword  } from '../utils';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('auth').del()
    .then(async () => {
      // Inserts seed entries
      return knex('auth').insert([
        { username: 'amendez', password: await encryptPassword('12345') },
        { username: 'wdelacruz', password: await encryptPassword('12345') },
        { username: 'rguzman', password: await encryptPassword('12345') },
      ]);
    });
}
