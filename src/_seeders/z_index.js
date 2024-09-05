const { Admin, Suscription, Condominium, Apartment, CommonArea, Resident } = require('../db');
const bcrypt = require('bcrypt');
const plans = require('./1plans');
const admins = require('./2admins');
const condominiums = require('./3condominium');
const apartments = require('./4apartments')
const commonAreas = require('./5commonArea')
const residents = require('./6residents')

const loadInitialData = async () => {
  try {

    // Crear suscripciones iniciales si no existen
    await Promise.all(plans.map(async (plan) => {
      const [suscription, created] = await Suscription.findOrCreate({
        where: { id: plan.id },
        defaults: plan,
      });
      if (created) {
        console.log(`Suscription ${plan.name} created.`);
      } else {
        console.log(`Suscription ${plan.name} already exists.`);
      }
    }));


    // Cifrar contraseñas y crear administradores
    const createdAdmins = await Promise.all(admins.map(async (admin) => {
      admin.password = await bcrypt.hash(admin.password, 10); // Cifrado de la contraseña
      const [createdAdmin] = await Admin.findOrCreate({
        where: { email: admin.email },
        defaults: admin,
      });
      return createdAdmin;
    }));



    // Asignar condominios a admin1 y admin2
    const admin1 = createdAdmins.find(admin => admin.username === 'admin1');
    const admin2 = createdAdmins.find(admin => admin.username === 'admin2');
    if (!admin1 || !admin2) {
      throw new Error("No se encontraron los administradores admin1 o admin2");
    }

    const admin1Condominiums = condominiums.slice(0, 3).map(condo => ({
      ...condo,
      AdminId: admin1.id,
    }));
    const admin2Condominiums = condominiums.slice(3, 6).map(condo => ({
      ...condo,
      AdminId: admin2.id,
    }));
    await Promise.all([...admin1Condominiums, ...admin2Condominiums].map(async (condo) => {
      await Condominium.create(condo);
    }));

    
    // Asignar apartamentos a cada condominio
    await Promise.all(apartments.map(async (apartment) => {
      await Apartment.create(apartment);}));
    console.log('Apartments created successfully!');

    
    // Asignar áreas comunes a cada condominio
    await Promise.all(commonAreas.map(async (commonArea) => {
      await CommonArea.create(commonArea);}));
    console.log('CommonAreas created successfully!');


    
    // Crear residentes para cada apartamento      

                      // asignando el id admin al resident
    const admin11 = await Admin.findOne({ where: { username: 'admin1' } });
    const admin22 = await Admin.findOne({ where: { username: 'admin2' } });
    const admin1UUID = admin11.id;
    const admin2UUID = admin22.id;

     // Mapeo de apartamentos a sus condominios
    // const condoMap = {};
    // const condoList = await Condominium.findAll();

    // apartments.forEach((apartment) => {
    //   const condo = condoList.find((condo) => condo.id === apartment.CondominiumId);
    //   if (!condo) {
    //     throw new Error(`No se encontró un condominio para el apartamento ${apartment.numberApartment}`);
    //   }
    //   condoMap[apartment.numberApartment] = condo.id;
    // });

    // const residentsData = residents(admin1UUID, admin2UUID, condoMap);

    // await Promise.all(
    //   residentsData.map(async (resident) => {
    //     await Resident.create(resident);
    //   })
    // );
    // console.log('Residents created successfully!');


      // 
    console.log('Initial data loaded successfully!');
  } catch (error) {
    console.error('Error cargando datos iniciales:', error.message);
  }
};

module.exports = loadInitialData;
