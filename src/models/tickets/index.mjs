import { DataTypes } from 'sequelize'
import { sequelize } from '../../database/ORM/index.mjs'

const Ticket = sequelize.define('ticket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING
  },
  descricao: {
    type: DataTypes.STRING
  },
  user_id: {
    type: DataTypes.STRING
  },
  prioridade: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.STRING
  }
})
export { Ticket }
