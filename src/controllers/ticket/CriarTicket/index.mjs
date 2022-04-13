import { Ticket } from '../../../models/tickets/index.mjs'

const CriarTicketController = async (req, res) => {
  await Ticket.sync()

  const { titulo, descricao, user_id, prioridade, status } = req.body

  await Ticket.create({ titulo, descricao, user_id, prioridade, status })
  res.status(201).send('Item criado com sucesso!')
}
export { CriarTicketController }
