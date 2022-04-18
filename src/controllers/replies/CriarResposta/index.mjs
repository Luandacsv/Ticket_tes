import { TicketReplies } from '../../../models/TicketReplies/index.mjs'
import { Ticket } from '../../../models/tickets/index.mjs'

const CriarRespostaController = async (req, res) => {
  await TicketReplies.sync()

  const { ticket_id } = req.params

  const { content } = req.body

  const exists = await Ticket.findOne({ where: { id: ticket_id } })
  if (!exists) {
    return res
      .status(404)
      .json({ error: true, message: 'Ticket não encontrado.' })
  }
  await TicketReplies.create({ ticket_id, content })
  res.status(201).json({ message: 'resposta enviada com sucesso' })
}
export { CriarRespostaController }
