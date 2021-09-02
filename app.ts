
// Objetos
type movil = {
  carroceria: string;
  modelo: string;
  antibalas:boolean;
  pasajeros: number;
  disparar?: () => void
};

const batimovil : movil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: movil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villano = {nombre: string; edad?: number; mutante: boolean;};
const villanos : villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type charlesType = {poder: string; estatura: number;};
type apocalipsisType = {lider: boolean; miembros: string[];};
const charles : charlesType = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis:apocalipsisType = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// console.log(apocalipsis);
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (charlesType|apocalipsisType);

mystique = charles;
mystique = apocalipsis;
