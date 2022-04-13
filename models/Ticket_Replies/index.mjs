import { DataTypes } from 'sequelize'
import { sequelize } from '../../database/ORM/index.mjs'

const Ticket_Replies = sequelize.define('ticket_Replies', {
  user_id: {
    "Nome": "STRING"
    "senha": "INTEGER"
  }

})
export { Ticket_Replies }
