 import { Testimonial } from "../models/testimoniales.js";
 const guardarTestimonial= async (req,res)=>{

    const {nombre, correo, mensaje}= req.body;
    const errores=[];
    if(nombre.trim()===""){

        errores.push({mensaje:"El nombre está vacío"});

    }
    if(correo.trim()===""){

        errores.push({mensaje:"El correo está vacío"});

    }
    if(mensaje.trim()===""){

        errores.push({mensaje:"El mensaje está vacío"});

    }
    
    if(errores.length>0){
        //consultar testimoniales existentes
        const testimoniales= await Testimonial.findAll();
        res.render("testimoniales",
        {
            pagina:"Testimonios",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        }
        )
    }else{
        try{

            //Al rellenar el formulario con el método create enviamos la info a la base de datos

            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            //Si no hacemos una redirección para temrinar el proceso se queda pensando

            res.redirect("/testimoniales")

        }catch(error){
            console.log(error);
        }
    }

}

export {
    guardarTestimonial
}