const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }

  return employees;
};
const text = (nome) => {
  return {
    nome: nome,
    email: `${nome}@trybe.com`,
  }
}

console.log(newEmployees(text));

//2

const sorteio = (numero, callback) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1
  return callback(numero, numeroSorteado)
}

const check = (numero, numeroSorteado) => {
  if (numero === numeroSorteado) {
    return "Parabéns você ganhou";
  } else {
    return "Tente novamente"
  }

}
console.log(sorteio(2, check));


