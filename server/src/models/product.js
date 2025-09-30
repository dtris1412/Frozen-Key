import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      rate: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      type: DataTypes.ENUM("game", "software", "dlc"),
      release_date: DataTypes.DATE,
      platform: DataTypes.STRING,
      image: DataTypes.STRING,

      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "Products",
      freezeTableName: true,
      timestamps: false, // Nếu bạn không dùng createdAt/updatedAt mặc định
    }
  );
  return Product;
};
