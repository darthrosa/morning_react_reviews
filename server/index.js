const express = require('express'),
      app = express(),
      data = require('./data.json'),
      ctrl = require('./controllers/people-controller')

app.use(express.json());

// ENPOINTS
app.get('/api/people', ctrl.getPeople);
app.delete('/api/people/:id', ctrl.deletePerson);
app.post('/api/people', ctrl.createPerson);
app.put('/api/people/:id', ctrl.editPerson);

const port = 6910
app.listen(port, () => console.log(`Server listening on port:${port}`))
