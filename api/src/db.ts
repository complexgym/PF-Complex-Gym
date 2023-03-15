import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()

// MODELS
import Activities from './models/Activities'
import Admin from './models/Admin'
import Publication from './models/Blog'
import Client from './models/Client'
import Payments from './models/Payments'
import Trainer from './models/Trainer'

// 5432
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env

export const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
       logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

Activities(db)
Admin(db)
Publication(db)
Client(db)
Payments(db)
Trainer(db)

const {activities, publication, client, payments, trainer} = db.models

activities.belongsToMany(client, {through: 'ActivitiesClient'})
client.belongsToMany(activities, {through: 'ActivitiesClient'})

client.hasMany(payments)
payments.belongsTo(client)

trainer.belongsToMany(activities, {through: 'ActivitiesTrainer'})
activities.belongsToMany(trainer, {through: 'ActivitiesTrainer'})

trainer.hasMany(publication)
publication.belongsTo(trainer)

export const models = db.models