const personaje = {
    nombre: 'Laureano',
    apellido: 'Lopardi',
    profesion: 'Gamer',
    getDescription() {
        return `${nombre} ${apellido} es ${profesion}`
    }
}

// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion;

// const {nombre, apellido, profesion, edad = 5} = personaje

const imprimirPersonaje = ({nombre, apellido, profesion, edad = 5}) => {
    console.log(nombre, apellido, profesion, edad)
}
imprimirPersonaje(personaje)

const personajes = ['Laureano', 'nacho', 'cristian']
const [p1,p2,p3] = personajes;
console.log(p3)