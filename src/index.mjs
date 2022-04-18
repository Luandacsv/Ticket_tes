import express from 'express'
import { CriarTicketController } from './controllers/ticket/CriarTicket/index.mjs'
import { ListarTicketController } from './controllers/ticket/ListarTicket/index.mjs'
import { DeletarTicketController } from './controllers/ticket/DeletarTicket/index.mjs'
import { AtualizarTicketController } from './controllers/ticket/AtualizarTicket/index.mjs'
import { CriarRespostaController } from './controllers/replies/CriarResposta/index.mjs'
import { AtualizarRespostaController } from './controllers/replies/Atualizar Resposta/index.mjs'

const app = express()
app.use(express.json())
const port = 3000

app.get('/tickets', ListarTicketController)
app.post('/tickets', CriarTicketController)
app.delete('/tickets/:id', DeletarTicketController)
app.post('/ticket/:id', AtualizarTicketController)
app.post('/ticket/:ticket_id/replies/new', CriarRespostaController)
app.post('/replie/:replie_id/update', AtualizarRespostaController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
