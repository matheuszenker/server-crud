"use strict";
const Chance = require("chance");

const Company = use("App/Models/Company");

class FakerController {
  index() {
    var chance = new Chance();

    const data = [];

    for (let index = 0; index < 100; index++) {
      data.push({
        title: chance.name(),
        cnpj: chance.integer({ min: 100000000000, max: 999999999999 }),
        entity_type: chance.integer({ min: 1, max: 2 }),
        foundation_date: chance.date()
      });
    }

    Company.createMany(data);
  }
}

module.exports = FakerController;
