let errado = document.getElementById('opcao')
let numeoro1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let numero3= document.getElementById('numero3')
let elementoInputResultado = document.getElementById('resultado2')


function MostravalorDaSelect(){
  elementoInputResultado.value = Number(numeoro1.value) + Number(numero2.value) + Number(numero3.value)

  if(elementoInputResultado.value == 3){
    alert('Parabéns você acertou todas!!')
  }

  else if (elementoInputResultado.value == 0){
    alert('Você errou todas.')
  }

  else if (elementoInputResultado.value == 1 || elementoInputResultado.value ==  2){
    alert('Você errou.')
  }

  else if(errado == numeoro1, numero2, numero3){
    alert('Selecione as Respostas.')
  }

}