import { Ticket } from '../../../models/tickets/index.mjs'

const DeletarTicketController = async (req, res) => {
  await Ticket.sync()

  const id = req.params.id

  await Ticket.destroy({
    where: { id: id },
    truncate: false
  })
  res.status(202).send('Item Deletado!')
}
export { DeletarTicketController }
