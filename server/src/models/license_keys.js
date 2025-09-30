import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class License_Key extends Model {
    static associate(models) {
      // define association here
    }
  }
  License_Key.init(
    {
      key_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      key_code: DataTypes.STRING,
      is_used: DataTypes.BOOLEAN,
      assigned_to: DataTypes.INTEGER,
      product_id: {
        type: DataTypes.INTEGER,
        foreginKey: true,
        references: {
          model: "Product",
          key: "product_id",
        },
      },
    },
    {
      sequelize,
      modelName: "License_Key",
      tableName: "license_keys",
      freezeTableName: true,
      timestamps: false, // Nếu bạn không dùng createdAt/updatedAt mặc định
    }
  );
  return License_Key;
};
