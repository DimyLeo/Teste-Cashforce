module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cnpj: { type: DataTypes.STRING },
    companyType: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'cnpjs',
  });

  return Cnpj;
};