"use strict";
const Company = use("App/Models/Company");

class CompaniesController {
  // index: Listar todos registros;
  async index({ request, response }) {
    return await Company.all();
  }

  // show: Exibir um registro;
  async show({ params }) {
    return await Company.findOrFail(params.id);
  }

  // store: Criar novo registro;
  async store({ request }) {
    const data = request.only([
      "title",
      "cnpj",
      "entity_type",
      "foundation_date"
    ]);

    return await Company.create(data);
  }

  // update: Alterar um registro;
  async update({ params, request }) {
    const company = await Company.findOrFail(params.id);
    const data = request.only([
      "title",
      "cnpj",
      "entity_type",
      "foundation_date"
    ]);

    company.merge(data);
    await company.save();

    return company;
  }

  // destroy: Remover um registro;
  async destroy({ params, request, response }) {
    const company = await Company.findOrFail(params.id);

    await company.delete();

    return company;
  }
}

module.exports = CompaniesController;
