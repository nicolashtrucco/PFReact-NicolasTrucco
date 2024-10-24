const products  = [

    //? COMPRAR
    {
        id: 'a42metros',
        name: 'A 42 metros',
        price: 5,
        category: 'comprar',
        event: 'COMPRAR',
        img: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-a-47-metros-2-1578395572.jpg?crop=1xw:1xh;center,top&resize=980:*',
        description: 'Durante una inmersión, dos hermanas que están de vacaciones en México, se quedan atrapadas en una jaula de avistamiento de tiburones, con el oxígeno agotándose y rodeadas de peligrosos tiburones blancos. Sin ayuda en la superficie, sin ayuda bajo la superficie.',
        stock: 2
    },
    {
        id: 'elfaro',
        name: 'El faro',
        price: 5.90,
        category: 'comprar',
        event: 'COMPRAR',
        img: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-el-faro-1578395575.jpg?crop=1xw:1xh;center,top&resize=980:*',
        description: 'En la década de 1890, dos fareros que afrontan un turno de cuatro semanas juntos combaten la constante tentación de dejarse arrastrar por la locura en una isla remota y misteriosa de Nueva Inglaterra.',
        stock: 2
    },
    {
        id: 'prodigio',
        name: 'Prodigio',
        price: 5.50,
        category: 'comprar',
        event: 'COMPRAR',
        img: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg',
        description: 'Una enfermera en la Irlanda del siglo XIX es contratada para investigar el caso de un niño que no ha comido durante cuatro meses.',
        stock: 2
    },

    //? ALQUILAR
    {
        id: 'avatar2',
        name: 'Avatar 2',
        price: 4,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: 'https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg',
        description: "Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
        stock: 2
    },
    {
        id: 'avatar1',
        name: 'Avatar 1',
        price: 4,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: 'https://pics.filmaffinity.com/Avatar-265462659-large.jpg',
        description: "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.",
        stock: 2
    },
    {
        id: 'lacabañasiniestra',
        name: 'La cabaña siniestra',
        price: 4.50,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-the-lodge-1578472483.jpg?crop=1xw:1xh;center,top&resize=980:*',
        description: 'Una mujer, a punto de convertirse en madrastra, se encuentra atrapada, con los dos hijos de su futuro marido en una cabaña alejada de la civilización. Justo cuando la relación entre ellos comienza a florecer, la mujer adopta una actitud aterradora',
        stock: 2
    },
    {
        id: 'musicaamigosyfiesta',
        name: 'Música, amigos y fiesta',
        price: 3,
        category: 'alquilar',
        event: 'ALQUILAR',
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRi6wrR4GCrhrdHV2K46rjdjPGPH-B2MPWkOQYdiRec_HIKnKsR',
        description: 'Un aspirante a DJ se hace amigo de un colega veterano, pero la relación pende de un hilo cuando se enamora de su novia.',
        stock: 2
    },
    {
        id: 'deadpool3',
        name: 'DeadPool 3 ',
        price: 6,
        category: 'comprar',
        event: 'COMPRAR',
        img: 'https://www.ecartelera.com/carteles/16600/16608/005_m.jpg',
        description: 'Deadpool viaja en el tiempo con la intención de reclutar a Wolverine en la batalla contra un enemigo común: Paradox.',
        stock: 2
    },
]

//* Obtener Productos

const getProducts = () => {
    return new Promise((res, rej) => {
        setTimeout( () => {
            res(products)
        }, 2000)
    })
}

const  getProduct = (productId) => {
    return new Promise( (res) => {
        setTimeout( ()=> {
            const product = products.find((product)=> product.id === productId)
            res(product)
        },2000)
    })
}

export {getProducts, getProduct}

