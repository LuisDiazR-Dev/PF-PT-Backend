const { Condominium, Admin } = require('../models'); // Asegúrate de que los modelos están correctamente definidos en la carpeta models

// Controlador para obtener todos los condominios
const getAllCondominiums = async (req, res) => {
  try {
    // Obtener todos los condominios, incluyendo la información del administrador
    const condominiums = await Condominium.findAll({
      include: {
        model: Admin,
        attributes: ['id', 'nombre', 'email']
      }
    });

    // Verificar si no hay condominios en la base de datos
    if (condominiums.length === 0) {
      return res.status(404).json({ message: 'No se encontraron condominios' });
    }

    // Responder con la lista de condominios
    return res.status(200).json(condominiums);
  } catch (error) {
    console.error('Error al obtener los condominios:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = getAllCondominiums;
