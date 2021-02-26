const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Marta",
  },
  {
    id: 3,
    nombre: "Manuel",
  },
];

const sueldos = [
  {
    id: 1,
    sueldo: 1500,
  },
  {
    id: 2,
    sueldo: 2000,
  },
];

const getEmpleadoById = async (id) => {
  try {
    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
      return empleado;
    }
    throw new Error(`El empleado con id ${id} no existe`)
  } catch (error) {
    throw error;
  }
};

const getSueldoById = async (id) => {
    try {
      const sueldo = sueldos.find((s) => s.id === id);
  
      if (sueldo) {
        return sueldo;
      }
    } catch (error) {
      throw error;
    }
  };

const getDatosCompletosEmpleado = async (id) => {
  try {
    const empleado = await getEmpleadoById(id);
    const sueldo = await getSueldoById(id);
    console.log(
      `el empleado con id ${id} es ${empleado.nombre} tiene el ${sueldo.sueldo}`
    );
  } catch (err) {
    throw err;
  }
};

getDatosCompletosEmpleado(id)
    .then(mensaje => console.log(mensaje));
    .catch(err => console.log(err.message))


