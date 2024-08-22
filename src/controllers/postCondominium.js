const { Condominium } = require('../db')

const postNewCondominium = async (req, res) => {
    const {name, country, state, logo, apartmentsNumber, adminId} = req.body

    if(!name || !country || !state || !logo || !apartmentsNumber) {
        return {error: "Faltan datos obligatorios"}
    }
    
    try {
        const [newCondominium, created] = await Condominium.findOrCreate({
            where: {name: name, 
                country: country, 
                state: state, 
                logo: logo},
        })

        if(created) {

        }
    } catch (error) {
        return 
    }
}