//Aquí configuramos qué vista queremos mostrar y con qué datos
//Importamos el modelo de viaje pra poder decir q datos queremos mostrar
import { Viaje } from "../models/viaje.js";
import { Testimonial } from "../models/testimoniales.js";


const paginaInicio= async (req,res)=>{
    const inicio="Página de inicio";

    //Consultar viajes en la base de datos para traerlos a la vista pero que solo nos traiga 3

    try{
        const consultasDB=[];
        consultasDB.push(Viaje.findAll({limit:3}));
        
        consultasDB.push(Testimonial.findAll({limit:3}));
        const result= await Promise.all(consultasDB);
        
        res.render("inicio", {
            pagina:inicio,
            clase:'home',
            viajes:result[0],
            testimoniales:result[1]
        });

    }catch(error){
        console.log(error);
    }


}

const paginaNosotros= (req,res)=>{
    
    res.render("nosotros",{
        pagina: "Nosotros"
    });
}

const paginaViajes= async (req,res)=>{
    //el método findall trae todos los datos del model que hemos creado
    const viajes= await Viaje.findAll();
    console.log(viajes);
    res.render("viajes",{
        pagina: "Próximos Viajes",
        viajes
    });
}

//Muestra un viaje por su slug

const paginaDetalleViaje= async (req,res)=>{
    const {slug}=req.params;

    try{
        const resultado= await Viaje.findOne({ where: {slug}})
        res.render("viaje", {
            pagina: "Información sobre el viaje",
            resultado
        })

    }catch(error){
        console.log(error);
    }
    
}

const paginaTestimoniales= async (req,res)=>{

    try{
        //Traemos los datos que hemos insertado en la bbdd para luego pasarlos a la vista
        const testimoniales= await Testimonial.findAll();
        res.render("testimoniales",{
            pagina:"Testimonios" ,
            testimoniales
         })

    }catch(error){
        console.log(error);
    }
   
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
    
}