'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        type: Sequelize.STRING
      },
      orderNumber: {
        type: Sequelize.STRING
      },
      orderPath: {
        type: Sequelize.STRING
      },
      orderFileName: {
        type: Sequelize.STRING
      },
      orderOriginalName: {
        type: Sequelize.STRING
      },
      emissionDate: {
        type: Sequelize.STRING
      },
      pdfFile: {
        type: Sequelize.STRING
      },
      emitedTo: {
        type: Sequelize.STRING
      },
      nNf: {
        type: Sequelize.STRING
      },
      CTE: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      cnpjid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model:'cnpjs', key: 'id' }
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model:'users', key: 'id' }
      },
      buyerid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model:'buyers', key: 'id' }
      },
      providerid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model:'providers', key: 'id' }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: Sequelize.STRING
      },
      cargoPackingList: {
        type: Sequelize.STRING
      },
      deliveryCtrc: {
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
