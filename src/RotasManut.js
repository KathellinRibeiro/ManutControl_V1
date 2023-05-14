//require('dotenv').config();
//const connectionString = process.env.DATABASE_URL;
const connectionString = 'http://10.0.2.2:3000/api/';


const routesSensor = connectionString + 'sensor/';
const routesEquipamento = connectionString + 'equipamento/';
const routesCriticidade = connectionString + 'criticidade/';
const routesSetor = connectionString + 'setor/';
const routesStatus = connectionString + 'status/';
const routesAlerta = connectionString + 'alerta/';
const routesIndicadores = connectionString + 'indicadores/';
const routesUsuario = connectionString + 'usuario/';

const rotas = {
    routesSensor: routesSensor,
    routesEquipamento: routesEquipamento,
    routesCriticidade: routesCriticidade,
    routesSetor: routesSetor,
    routesStatus: routesStatus,
    routesAlerta: routesAlerta,
    routesIndicadores: routesIndicadores,
    routesUsuario: routesUsuario

}

export default rotas;