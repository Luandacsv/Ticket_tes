import { DataTypes } from 'sequelize'
import { sequelize } from '../../database/ORM/index.mjs'

const TicketReplies = sequelize.define('ticket_Replies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ticket_id: {
    type: DataTypes.STRING
  },
  user_id: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  }
})

export { TicketReplies }
