import express from "express"
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

//Solo puede haber un app porque si no iría independiente en el servidor

//req es lo que tú envías res es lo que express te envía
//yo estoy enviando un request porque estoy visitando esta página localhost:4000 y si rellenas un formulario
//en ese request iría lo que se rellena en ese formulario
//res es lo que node te envía, por ejempl oque has rellenado mal los datos o un mensaje que tú quieras enviar
//el método send hace que s emuestre un mensaje `prpantalla
//el método json es para mostrar un json
//el método render es para mostrar una vista

const router= express.Router();
router.get("/", paginaInicio)

//El segundo parámetro de render son las vairables que le voy a pasar a la vista principal ejemplo:
router.get("/nosotros", paginaNosotros )

router.get("/viajes", paginaViajes )

router.get("/viajes/:slug", paginaDetalleViaje)
//Esta ruta es la del formulario de testimoniales
router.get("/testimoniales", paginaTestimoniales)
//Esta ruta es a la que nos lleva cuando pulsamos enviar el formulario
router.post("/testimoniales", guardarTestimonial )



export default router;