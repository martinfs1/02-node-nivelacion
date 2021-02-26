const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Manuel'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500        
    },
    {
        id: 2,
        sueldo: 2000        
    }

]

const getEmpleadoById = (id) => {
    return new Promise(( resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id )
        if (empleado) {
            resolve(empleado);           
            return
        }
        reject(`El empleado con ${id} no existe`)
        
    })
}

// const id = 5;

const getSueldoById = (id) => {
    return new Promise(( resolve, reject) => {
        const sueldo = sueldos.find((s) => s.id === id )
        if (empleado) {
            resolve(empleado);           
            return
        }
        reject(`El empleado con ${id} no existe`)
        
    })
}
// const id = 1;
// getSueldoById(1)


// const getEmpleadoById = (id, callback) => {
//     const empleado = empleados.find((e) => e.id === id )
//     if (empleado) {
//         callback(empleado);
//         return
//     }
//     callback(`El empleado con ${id} no existe`)
// }