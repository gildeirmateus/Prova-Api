const my_database = new Map()


const createCust = (req, res)=>{
    const customer = req.body
    my_database.set(customer.cpf, customer)
    res.status(201).send(customer)

}
const listCust = (req, res)=>{
    const values = Array.from(my_database.values())
    res.status(200).send(values.cpf)
    
}

const updateCpf = (req, res)=>{
    const cpf = req.params.cpf

    if(my_database.has(cpf)){
        const customer = req.body
        customer.cpf = cpf
        my_database.set(cpf, customer)
        res.status(200).send(customer)
    }
    else{
        res.status(404).send({
            message: `customer with cpf (${cpf}) not found`
        })
    }
}

const listCpf = (req, res)=>{
    const cpf = req.params.cpf

    if(my_database.has(cpf)){
        const values = Array.from(my_database.values())
        res.status(200).send(values.cpf)
    }
}

const deleteCust = (req, res)=>{
    const cpf = req.params.cpf

    if(my_database.has(cpf)){
        const customer = my_database.get(cpf)
        my_database.delete(customer.cpf)
        res.status(200).send(customer)
    }
    else{
        res.status(404).send({
            message: `customer with cpf (${cpf}) not found`
        })
    }
}

const listDependets = (req, res)=>{
    const cpf = req.params.cpf

    if(my_database.has(cpf)){
        const values = Array.from(my_database.values())
        res.status(200).send(values.listCust())
    }
}
 

module.exports = {
    createCust,
    listCust,
    updateCpf,
    listCpf,
    deleteCust,
    listDependets
}