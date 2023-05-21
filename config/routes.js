const express = require('express')
const routes = express.Router()

let db = [

    {'1':{Corpo: 'Alder', Braço: 'Maple', Escala: 'Rosewood', Trastes: '24', Tarraxas: 'Marvin blindadas', Ponte: 'Marvin mv', Captadores:'Marvin',Controles: 'Volume,Balance e tone'}},
    {'2':{Corpo: 'Poplar', Braço:'Maple', Escala: 'Techwood',Trastes: '24', Tarraxas: 'Marvin Blindadas', Ponte: 'Marvin ms',Captadores: 'Marvin', Controles: 'Volume, balance,grave e tone'}},
    {'3':{Corpo: 'Basswood',Braço:'Maple',Escala: 'Rosewood',Trastes: '22',Tarraxas: 'Marvin Blindadas', Ponte: 'Marvin mg',Captadores: 'Marvin', Controles: '1 volume e 2 tones'}}

]
//Buscar dados
routes.get('/',(req,res) =>{
    return res.json(db)
})
//Adicionar dados
routes.post('/add',(req,res) =>{
    const body = req.body

    if (!body)
        return res.status(400).end()

        db.push(body)
        return res.json(body)
})

routes.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
        return item
    })
    db= newDB
    return res.send(newDB)
})

module.exports = routes