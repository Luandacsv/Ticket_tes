import { Ticket } from '../../../models/tickets/index.mjs'

const AtualizarTicketController = async (req, res) => {
  const id = req.params.id
  const { titulo, descricao, user_id, prioridade, status } = req.body
  const item = await Ticket.findOne({ where: { id } })
  console.log(item)

  item.titulo = titulo
  item.descricao = descricao
  item.user_id = user_id
  item.prioridade = prioridade
  item.status = status

  await item.save()
  res.status(500).send('Atualizado com sucesso!')
}
export { AtualizarTicketController }
