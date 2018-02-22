/* Código JavaScript ES6*/

const PI= 3.14;
let otra = "a";

var perros = [];

var malasPulgas = new Perro();
console.log (malasPulgas);

var milu = new Perro();
milu.nombre = 'Milu';
milu.raza = 'Fosterrier';
milu.foto = 'http://www.fonditos3d.com/Imagenes/milu-el-perro-de-tintin.jpg';

console.log(milu);

perros.push(malasPulgas);
perros.push(milu);


var listaPerros = document.getElementById("perros");
var lis =" ";
perros.forEach( perro => {
    lis += `<li>
                ${perro.nombre}
                <img src='${perro.foto}'/>
            </li>`;
});
listaPerros.innerHTML = lis;
