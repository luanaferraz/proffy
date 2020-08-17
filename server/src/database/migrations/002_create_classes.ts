import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();
    
    table.integer('profile_id').unsigned().references('id').inTable('profiles').onUpdate('CASCADE').onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}