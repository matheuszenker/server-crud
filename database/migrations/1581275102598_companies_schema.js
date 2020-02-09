"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompaniesSchema extends Schema {
  up() {
    this.create("companies", table => {
      table.increments();
      table.string("title", 100).notNullable();
      table
        .string("cnpj", 100)
        .notNullable()
        .unique();
      table.integer("entity_type").notNullable();
      table.date("foundation_date").defaultTo(null);

      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompaniesSchema;
