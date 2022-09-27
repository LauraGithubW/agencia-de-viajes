import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv"
const app=express();
dotenv.config();
console.log(process.env.DB_HOST);
db.authenticate()
  .then(()=>console.log("Base de datos conectada"))
  .catch(error=>console.log(error));
const port=process.env.PORT || 4000;

//Podemos crear nuestro propio middleware pero al final tendremos que llamar a next porque si no no pasa al siguiente proceso

//El middleware tiene que estar definido antes de definir las rutas
app.use((req,res,next)=>{
    
    //VAMOS A CREAE una nueva variable en res.locals para poder usarña después, al compilar ya nos aparecerá en la consola de visual
    
    res.locals.actualYear= "2022";
    res.locals.nombrePagina="Agencia de viajes";
    
    next();
});
//Agregar body-parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Para importar el router que hemos creado enel otro fichero, lo importamos ariba y luego lo usamos con app.use
//Esto nos dice que desde / que es la home nos importe las rutascreadas
app.use("/", router);

//Instalamos pug por npm porque vamos a usar ese motor para las vistas aunque hay otros
//la extensión de las vistas será pug y tiene sintaxis diferente

app.set("view engine", "pug");





//Para definir la carpeta pública que esla que se usarápara poder recuperar imagenes y estilos se tiene que poner
app.use(express.static("public"))



app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port} `);
})