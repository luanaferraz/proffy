import Knex from 'knex';
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').primary();

    table.integer('profile_id').unsigned().references('id').inTable('profiles').onUpdate('CASCADE').onDelete('CASCADE');

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}