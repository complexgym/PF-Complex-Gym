"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
// MODELS
const Activities_1 = __importDefault(require("./models/Activities"));
const Admin_1 = __importDefault(require("./models/Admin"));
const Blog_1 = __importDefault(require("./models/Blog"));
const Client_1 = __importDefault(require("./models/Client"));
const Payments_1 = __importDefault(require("./models/Payments"));
const Trainer_1 = __importDefault(require("./models/Trainer"));
// 5432
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
exports.db = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
(0, Activities_1.default)(exports.db);
(0, Admin_1.default)(exports.db);
(0, Blog_1.default)(exports.db);
(0, Client_1.default)(exports.db);
(0, Payments_1.default)(exports.db);
(0, Trainer_1.default)(exports.db);
const { activities, publication, client, payments, trainer } = exports.db.models;
activities.belongsToMany(client, { through: 'ActivitiesClient' });
client.belongsToMany(activities, { through: 'ActivitiesClient' });
client.hasMany(payments);
payments.belongsTo(client);
trainer.belongsToMany(activities, { through: 'ActivitiesTrainer' });
activities.belongsToMany(trainer, { through: 'ActivitiesTrainer' });
trainer.hasMany(publication);
publication.belongsTo(trainer);
exports.models = exports.db.models;
