//require('dotenv').config();
//const connectionString = process.env.DATABASE_URL;
const connectionString = 'http://10.0.2.2:3000/api/';


const routesSensor = connectionString + 'sensor/';
const routesEquipamento = '${connectionString}/routes/databaseEquipamento.js';
const routesCriticidade = connectionString + 'criticidade/';
const routesSetor = connectionString + 'setor/';
const routesStatus = '${connectionString}/routes/databaseStatus.js';

const rotas = {
    routesSensor: routesSensor,
    routesEquipamento: routesEquipamento,
    routesCriticidade: routesCriticidade,
    routesSetor: routesSetor,
    routesStatus: routesStatus
}

export default rotas;