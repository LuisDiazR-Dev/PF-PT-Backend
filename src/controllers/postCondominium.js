const { Condominium, Admin } = require('../models'); // Asegúrate de que los modelos están correctamente definidos en la carpeta models

// Controlador para crear un nuevo condominio
const createCondominium = async (req, res) => {
  try {
    const { name, country, state, logo, apartmentsNumber, adminId } = req.body;

    // Verificar que todos los campos requeridos estén presentes
    if (!name || !country || !state || !logo || !apartmentsNumber || !adminId) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Verificar si ya existe un condominio con el mismo nombre en el mismo estado y país
    const existingCondominium = await Condominium.findOne({
      where: {
        name,
        country,
        state
      }
    });

    if (existingCondominium) {
      return res.status(409).json({ message: 'El condominio ya existe' });
    }

    // Verificar que el admin exista
    const admin = await Admin.findByPk(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'El administrador no existe' });
    }

    // Crear el nuevo condominio
    const newCondominium = await Condominium.create({
      name,
      country,
      state,
      logo,
      apartmentsNumber,
      adminId
    });

    // Relaciono el condominio con el administrador
    await admin.addCondominium(newCondominium);

    return res.status(201).json({
      message: 'Condominio creado exitosamente',
      condominium: newCondominium
    });
  } catch (error) {
    console.error('Error al crear el condominio:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = createCondominium;
