const express = require('express')
const controller = require('../controller/customer.controller')
const router = express.Router()

router.post('/', controller.createCust)
router.get('/', controller.listCust)
router.put('/:cpf', controller.updateCpf)
router.get('/:cpf', controller.listCpf)
router.delete('/:cpf', controller.deleteCust)
router.get('/:cpf/dependents', controller.listDependets)

module.exports = router