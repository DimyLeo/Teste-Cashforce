'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('buyers', [{
      id: 1,
      name: 'SACADO 001',
      tradingName: 'SACADO 001 LTDA',
      cashforceTax: '0',
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      phoneNumber: null,
      situation: null,
      situationDate: null,
      cnpjid: 1,
      confirm: 1,
      email: null,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('buyers', null, {});
  }
};
