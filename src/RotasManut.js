//require('dotenv').config();
//const connectionString = process.env.DATABASE_URL;
const connectionString = 'localhost:3000/api/';


const routesSensor = 'localhost:3000/api/sensor/';
const routesEquipamento = '${connectionString}/routes/databaseEquipamento.js';
const routesCriticidade = '${connectionString}/routes/databaseCriticidade.js';
const routesSetor ='${connectionString}/routes/databaseSetor.js';
const routesStatus = '${connectionString}/routes/databaseStatus.js';

const rotas = {
    routesSensor:routesSensor,
    routesEquipamento:routesEquipamento,
    routesCriticidade: routesCriticidade,
    routesSetor:routesSetor,
    routesStatus:routesStatus
}

export default rotas;