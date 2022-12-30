'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com',
      phoneNumber: null,
      mobile: null,
      verificationCode: null,
      emailChecked: 1,
      cashForceAdm: 1,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
