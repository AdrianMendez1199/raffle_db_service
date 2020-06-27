import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('auth', (table): void => {
    table.increments('id').unsigned().primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('auth');
}

