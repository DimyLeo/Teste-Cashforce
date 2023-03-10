// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    tradingName: { type: DataTypes.STRING },
    cashforceTax: { type: DataTypes.STRING },
    responsibleName: { type: DataTypes.STRING },
    responsibleEmail: { type: DataTypes.STRING },
    responsiblePosition: { type: DataTypes.STRING },
    responsiblePhone: { type: DataTypes.STRING },
    responsibleMobile: { type: DataTypes.STRING },
    website: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    number: { type: DataTypes.STRING },
    complement: { type: DataTypes.STRING },
    neighborhood: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    situation: { type: DataTypes.STRING },
    situationDate: { type: DataTypes.STRING },
    cnpjId: { type: DataTypes.INTEGER },
    confirm: { type: DataTypes.BOOLEAN },
    email: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'buyers',
  });

  Buyer.associate = (models) => {
    Buyer.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId',
    });
  };

  return Buyer;
};