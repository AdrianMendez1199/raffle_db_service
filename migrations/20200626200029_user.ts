import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users', (table): void => {
    table.increments('id').unsigned().primary();
    table.string('name').notNullable();
    table.string('identificationCard').notNullable();
    table.integer('code').notNullable().unique();
    table.integer('winner').defaultTo(0);
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}

