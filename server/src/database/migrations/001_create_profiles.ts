import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('profiles', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
        table.integer('user_id')
        .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('profiles');
}