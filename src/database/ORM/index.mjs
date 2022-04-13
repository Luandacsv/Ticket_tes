import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize('ticket', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export { sequelize }
