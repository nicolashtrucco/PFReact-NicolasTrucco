import db from "../db/dbFireBase.js";
import { addDoc, collection } from "firebase/firestore";

const products  = [

    {
        id: 'a42metros',
        name: 'A 42 metros',
        price: 5,
        category: 'comprar',
        event: 'COMPRAR',
        img: '/img/a-47-metros-2.jpg',
        description: 'Durante una inmersión, dos hermanas que están de vacaciones en México, se quedan atrapadas en una jaula de avistamiento de tiburones, con el oxígeno agotándose y rodeadas de peligrosos tiburones blancos. Sin ayuda en la superficie, sin ayuda bajo la superficie.',
        stock: 4
    },
    {
        id: 'elfaro',
        name: 'El faro',
        price: 5.90,
        category: 'comprar',
        event: 'COMPRAR',
        img: '/img/el-faro.jpg',
        description: 'En la década de 1890, dos fareros que afrontan un turno de cuatro semanas juntos combaten la constante tentación de dejarse arrastrar por la locura en una isla remota y misteriosa de Nueva Inglaterra.',
        stock: 3
    },
    {
        id: 'prodigio',
        name: 'Prodigio',
        price: 5.50,
        category: 'comprar',
        event: 'COMPRAR',
        img: '/img/prodigio.webp',
        description: 'Una enfermera en la Irlanda del siglo XIX es contratada para investigar el caso de un niño que no ha comido durante cuatro meses.',
        stock: 1
    },
    {
        id: 'avatar2',
        name: 'Avatar 2',
        price: 4,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: '/img/avatar2.jpeg',
        description: "Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
        stock: 5
    },
    {
        id: 'avatar1',
        name: 'Avatar 1',
        price: 4,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: '/img/avatar1.jpg',
        description: "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.",
        stock: 1
    },
    {
        id: 'lacabañasiniestra',
        name: 'La cabaña siniestra',
        price: 4.50,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: '/img/la-cabana-siniestra.jpg',
        description: 'Una mujer, a punto de convertirse en madrastra, se encuentra atrapada, con los dos hijos de su futuro marido en una cabaña alejada de la civilización. Justo cuando la relación entre ellos comienza a florecer, la mujer adopta una actitud aterradora',
        stock: 3
    },
    {
        id: 'musicaamigosyfiesta',
        name: 'Música, amigos y fiesta',
        price: 3,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: '/img/musica-amigos-fiesta.jpg',
        description: 'Un aspirante a DJ se hace amigo de un colega veterano, pero la relación pende de un hilo cuando se enamora de su novia.',
        stock: 1
    },
    {
        id: 'deadpool3',
        name: 'DeadPool 3 ',
        price: 6,
        category: 'comprar',
        event: 'COMPRAR',
        img: '/img/deadpool3.jpg',
        description: 'Deadpool viaja en el tiempo con la intención de reclutar a Wolverine en la batalla contra un enemigo común: Paradox.',
        stock: 6
    },
]

const seedProducts = () => {
    const productsRef = collection(db, 'products')
    products.map(({id, ...dataProduct}) => {
        addDoc(productsRef, dataProduct)
    })

    console.log('Productos Subidos');
    return
}

seedProducts()