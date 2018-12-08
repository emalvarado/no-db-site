const express = require('express')
const PORT = 4000;
const ctrl = require('./controllers/mainController')

const app = express();
app.use(express.json());

app.get('/api/bucket', ctrl.getList)

app.post('/api/bucket', ctrl.addItem)

app.delete('/api/bucket/:id', ctrl.deleteItem)

app.put('/api/bucket/:id', ctrl.updateItem)



app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))