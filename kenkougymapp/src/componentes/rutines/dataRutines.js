import Piernas from '../imagenes/rutines/piernas.jpg';
import Predicador from '../imagenes/rutines/predicador.jpg'
import Espalda from '../imagenes/rutines/espalda.jpg'
import Hombros from '../imagenes/rutines/hombros.jpg'
import Pectorales from '../imagenes/rutines/pectorales.jpg'
import Epiernas from '../imagenes/rutines/rutina_brazos.jpg'
import Ebrazos from '../imagenes/rutines/rutina_brazos.jpg'
import Eespalda from '../imagenes/rutines/rutina_espalda.jpg'
import Ehombros from '../imagenes/rutines/rutina_hombros.jpg'
import Epectorales from '../imagenes/rutines/rutina_pectorales.jpg'


const rutinesData = {
    cardRutines: [
        {
            id: 1,
            nombre: "Brazos",
            img: Predicador,
            objetivo: "Aumentar masa muscular",
            dificultad: "Avanzada",
            desc: "Rutina avanzada para hipertrofia en tríceps, bíceps y antebrazos",
            link: Ebrazos
        },
        {
            id: 2,
            nombre: "Piernas",
            img: Piernas,
            objetivo: "Definición",
            dificultad: "Intermedia",
            desc: "Rutina intermedia para definición de piernas",
            link: Epiernas
        },
        {
            id: 3,
            nombre: "Espalda",
            img: Espalda,
            objetivo: "Definición",
            dificultad: "Intermedia",
            desc: "Rutina nivel intermedio para definir los músculos de la espalda",
            link: Eespalda
        },
        {
            id: 4,
            nombre: "Hombros",
            img: Hombros,
            objetivo: "Aumentar masa muscular",
            dificultad: "Intermedia",
            desc: "Rutina nivel intermedio para hipertrofia de los hombros",
            link: Ehombros
        },
        {
            id: 5,
            nombre: "Pectorales",
            img: Pectorales,
            objetivo: "Aumentar masa muscular",
            dificultad: "Avanzada",
            desc: "Rutina nivel avanzado para hipertrofia de los pectorales",
            link: Epectorales
        },
        ,
    ],
};

export default rutinesData;