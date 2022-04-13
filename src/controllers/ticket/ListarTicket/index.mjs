import { Ticket } from '../../../models/tickets/index.mjs'

const ListarTicketController = async (req, res) => {
  await Ticket.sync()

  const list = await Ticket.findAll()
  res.json(list)
}
export { ListarTicketController }
