const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado, 
  perimetroCuadrado, 
  areaCuadrado
});

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4; 

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * (((ladoTrianguloBase / 2)**2) + ((ladoTriangulo1)**2))) / 2;

function calcularTriangulo(a, b, base, altura){
  return {
    perimetro: a + b + base,
    area: (base * altura) / 2,
  };
}
/* triangulo isoseles */
function calcularAlturaTriangulo(ladoV, base){
  if(ladoV == base){
    console.warn('Este no es un triangulo isoseles');
  } else {
    /* Math.sqrt = la raiz cuadrada */
    /* formula; h = raizcuadrada(ladoV**2 - ((b**2) / 4)) */
    const altura = Math.sqrt(((ladoV**2) - ((b**2) / 4)))
  }
}