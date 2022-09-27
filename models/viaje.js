//Aquí definimos los modelos que son los dtos que nos van a venir de la base de datos. Tiene que coincidir con los 
//campos de ls tablas
//importamos sequializey la db
import  Sequelize  from "sequelize";
import db from "../config/db.js";
//Viajes es el nombre de la tabla y luego definimos cada uno de los datos para poder hacer las consultas
export const Viaje= db.define("viajes", {
    titulo: {
        type: Sequelize.STRING
    },
    precio:{
        type:Sequelize.STRING
    },
    fecha_ida:{
        type:Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type:Sequelize.STRING
    },
    descripcion:{
        type:Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    }
})


