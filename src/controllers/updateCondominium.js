const { Condominium } = require('../models'); // Asegúrate de que los modelos están correctamente definidos en la carpeta models

// Controlador para actualizar un condominio
const updateCondominium = async (req, res) => {
  try {
    const { id } = req.params; // ID del condominio que se va a actualizar
    const { name, country, state, logo, apartmentsNumber, adminId } = req.body; // Datos actualizados

    // Verificar que todos los campos requeridos estén presentes
    if (!name || !country || !state || !logo || !apartmentsNumber || !adminId) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Buscar el condominio por ID
    const condominium = await Condominium.findByPk(id);

    if (!condominium) {
      return res.status(404).json({ message: 'El condominio no existe' });
    }

    // Verificar si el adminId coincide con el propietario del condominio
    if (condominium.adminId !== adminId) {
      return res.status(403).json({ message: 'No tienes permiso para modificar este condominio' });
    }

    // Actualizar los datos del condominio
    condominium.name = name;
    condominium.country = country;
    condominium.state = state;
    condominium.logo = logo;
    condominium.apartmentsNumber = apartmentsNumber;

    await condominium.save();

    return res.status(200).json({
      message: 'Condominio actualizado exitosamente',
      condominium
    });
  } catch (error) {
    console.error('Error al actualizar el condominio:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = updateCondominium;
