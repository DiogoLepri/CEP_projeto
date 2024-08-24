const express = require('express');
const enderecoController = require('./controllers/EnderecoController');

const router = express.Router();

router.post('/enderecos',  enderecoController.createEndereco);
router.get('/enderecos', enderecoController.getAllEnderecoes);
router.get('/enderecos/:Id', enderecoController.getEnderecoByID);
router.put('/enderecos/:Id', enderecoController.updateEndereco);
router.delete('/enderecos/:Id', enderecoController.deleteEndereco);

module.exports = router;