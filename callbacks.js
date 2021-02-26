// setTimeout(() => {
//     console.log("hola mundo");
//   }, 3000);

//   const saludar = () => {
//     console.log("hola mundo");
//   };
//   setTimeout(saludar, 3000);

const getUsuarioByid = (id, callback) => {
  const user = {
    id,
    nombre: "Laureano",
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

// getUsuarioByid(1)

getUsuarioByid(1, ({nombre, id}) => {
  console.log(`El usuario con nombre: ${nombre.toLowerCase()} tiene el id: ${id}`);
});

// const usuario = getUsuarioByid(1)
// console.log(usuario)
