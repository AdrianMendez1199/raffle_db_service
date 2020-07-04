import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('auth').del()
    .then(() => {
      // Inserts seed entries
      return knex('auth').insert([
        { username: 'amendez', password: '12345' },
        { username: 'wdelacruz', password: '12345' },
        { username: 'rguzman', password: '12345' },
      ]);
    });
}
