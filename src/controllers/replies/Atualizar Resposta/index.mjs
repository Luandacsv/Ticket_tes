import { TicketReplies } from '../../../models/TicketReplies/index.mjs'
import { Ticket } from '../../../models/tickets/index.mjs'

const AtualizarRespostaController = async (req, res) => {
  await TicketReplies.sync()

  const { replie_id } = req.params

  const { content } = req.body

  const exists = await TicketReplies.findOne({ where: { id: replie_id } })
  exists.content = content
  await exists.save()
  res.status(200).json({ message: 'Atualizado com sucesso!' })
}
export { AtualizarRespostaController }
