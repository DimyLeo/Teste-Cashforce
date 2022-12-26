module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cashforceAdm: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  return User;
};