


module.exports = (admin1UUID, admin2UUID, condoMap) => [
  // Condominio Central - 5 apartamentos
  { name: 'Juan Pérez', email: 'juan.perez@example.com', vehicle_plate: 'ABC123', pet: 'Perro', apartmentNumber: '101', AdminId: admin1UUID, CondominiumId: condoMap['101'] },
  { name: 'María Gómez', email: 'maria.gomez@example.com', vehicle_plate: 'DEF456', pet: 'Gato', apartmentNumber: '102', AdminId: admin1UUID, CondominiumId: condoMap['102'] },
  { name: 'Carlos Sánchez', email: 'carlos.sanchez@example.com', vehicle_plate: 'GHI789', apartmentNumber: '103', AdminId: admin1UUID, CondominiumId: condoMap['103'] },
  { name: 'Ana Torres', email: 'ana.torres@example.com', apartmentNumber: '104', AdminId: admin1UUID, CondominiumId: condoMap['104'] },
  { name: 'Luis Díaz', email: 'luis.diaz@example.com', vehicle_plate: 'JKL012', apartmentNumber: '105', AdminId: admin1UUID, CondominiumId: condoMap['105'] },



  // Condominio Norte - 5 apartamentos
  { name: 'Pedro Herrera', email: 'pedro.herrera@example.com', apartmentNumber: '201', AdminId: admin1UUID, CondominiumId: condoMap['201']},
  { name: 'Laura Ruiz', email: 'laura.ruiz@example.com', pet: 'Gato', apartmentNumber: '202', AdminId: admin1UUID, CondominiumId: condoMap['202']},
  { name: 'David López', email: 'david.lopez@example.com', vehicle_plate: 'MNO345', apartmentNumber: '203', AdminId: admin1UUID, CondominiumId: condoMap['203']},
  { name: 'Andrea Ramírez', email: 'andrea.ramirez@example.com', apartmentNumber: '204', AdminId: admin1UUID, CondominiumId: condoMap['204']},
  { name: 'Ricardo Castillo', email: 'ricardo.castillo@example.com', pet: 'Perro', apartmentNumber: '205', AdminId: admin1UUID, CondominiumId: condoMap['205']},

  // Condominio Sur - 5 apartamentos
  { name: 'Sofía Vargas', email: 'sofia.vargas@example.com', apartmentNumber: '301', AdminId: admin2UUID, CondominiumId: condoMap['301']},
  { name: 'Miguel Ángel', email: 'miguel.angel@example.com', vehicle_plate: 'PQR678', apartmentNumber: '302', AdminId: admin2UUID, CondominiumId: condoMap['302']},
  { name: 'Verónica Cruz', email: 'veronica.cruz@example.com', pet: 'Gato', apartmentNumber: '303', AdminId: admin2UUID, CondominiumId: condoMap['303']},
  { name: 'Jorge López', email: 'jorge.lopez@example.com', apartmentNumber: '304', AdminId: admin2UUID, CondominiumId: condoMap['304']},
  { name: 'Patricia Medina', email: 'patricia.medina@example.com', vehicle_plate: 'STU901', apartmentNumber: '305', AdminId: admin2UUID, CondominiumId: condoMap['305']},

  // Condominio Este - 5 apartamentos
  { name: 'Oscar Fuentes', email: 'oscar.fuentes@example.com', apartmentNumber: '401', AdminId: admin2UUID, CondominiumId: condoMap['401']},
  { name: 'Gabriela Paredes', email: 'gabriela.paredes@example.com', pet: 'Perro', apartmentNumber: '402', AdminId: admin2UUID, CondominiumId: condoMap['402']},
  { name: 'Isabel Reyes', email: 'isabel.reyes@example.com', vehicle_plate: 'VWX234', apartmentNumber: '403', AdminId: admin2UUID, CondominiumId: condoMap['403']},
  { name: 'Felipe Rojas', email: 'felipe.rojas@example.com', apartmentNumber: '404', AdminId: admin2UUID, CondominiumId: condoMap['404']},
  { name: 'Silvia Morales', email: 'silvia.morales@example.com', apartmentNumber: '405', AdminId: admin2UUID, CondominiumId: condoMap['405']},

  // Condominio Oeste - 5 apartamentos
  { name: 'Emilia Fernández', email: 'emilia.fernandez@example.com', apartmentNumber: '501', AdminId: admin1UUID, CondominiumId: condoMap['501'] },
  { name: 'Rodrigo Castro', email: 'rodrigo.castro@example.com', vehicle_plate: 'YZA567', apartmentNumber: '502', AdminId: admin1UUID, CondominiumId: condoMap['502'] },
  { name: 'Mónica Valle', email: 'monica.valle@example.com', apartmentNumber: '503', AdminId: admin1UUID, CondominiumId: condoMap['503'] },
  { name: 'Esteban Acosta', email: 'esteban.acosta@example.com', pet: 'Gato', apartmentNumber: '504', AdminId: admin1UUID, CondominiumId: condoMap['504'] },
  { name: 'Lucía Rivas', email: 'lucia.rivas@example.com', vehicle_plate: 'BCD890', apartmentNumber: '505', AdminId: admin1UUID, CondominiumId: condoMap['505'] },

  // Condominio Montaña - 5 apartamentos
  { name: 'Álvaro Campos', email: 'alvaro.campos@example.com', apartmentNumber: '601', AdminId: admin2UUID, CondominiumId: condoMap['601']},
  { name: 'Victoria Blanco', email: 'victoria.blanco@example.com', pet: 'Perro', apartmentNumber: '602', AdminId: admin2UUID, CondominiumId: condoMap['602']},
  { name: 'Ignacio Flores', email: 'ignacio.flores@example.com', apartmentNumber: '603', AdminId: admin2UUID, CondominiumId: condoMap['603']},
  { name: 'Diana Ortiz', email: 'diana.ortiz@example.com', apartmentNumber: '604', AdminId: admin2UUID, CondominiumId: condoMap['604']},
  { name: 'Alejandro Gómez', email: 'alejandro.gomez@example.com', vehicle_plate: 'EFG123', apartmentNumber: '605', AdminId: admin2UUID, CondominiumId: condoMap['605'] }
];
