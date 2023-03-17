function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

function somar(n1, n2){
  return(n1 + n2) 
}

function subtrair(n1, n2){
  return(n1 - n2);
}

function multiplicar(n1, n2){
  return(n1 * n2); 
}

function dividir(n1, n2){
  return(n1 / n2).toFixed(2);
}

function reiniciar(operacao){
  var operacao = Number (prompt('Escolha uma das opções: 1- Soma 2- Subtração 3- Multiplicação 4- Divisão 0- Sair: '))
  var opcao = operacao;

  if(operacao == 0){
    alert('FIM')
    mostra(`<h2> Fim Programa `)
  }else if(operacao == 1){
      n1 = Number(prompt('Digite o primeiro número: '))
      n2 = Number(prompt('Digite o segundo número: '))
      mostra(`<h2> Você escolheu Soma `)
      mostra(`<h2> Somando ${n1} + ${n2} = ${somar(n1, n2)}`)
      // reiniciar()
  }else if(operacao == 2){
      n1 = Number(prompt('Digite o primeiro número: '))
      n2 = Number(prompt('Digite o segundo número: '))
      mostra(`<h2> Você escolheu Subtração `)
      mostra(`<h2> Subtraindo ${n1} - ${n2} = ${subtrair(n1, n2)}`)
      // reiniciar()
  }else if(operacao == 3){
      n1 = Number(prompt('Digite o primeiro número: '))
      n2 = Number(prompt('Digite o segundo número: '))
      mostra(`<h2> Você escolheu Multiplicação `)
      mostra(`<h2> Multiplicando ${n1} X ${n2} = ${multiplicar(n1, n2)}`)
  }else if(operacao == 4){
    n1 = Number(prompt('Digite o primeiro número: '))
    n2 = Number(prompt('Digite o segundo número: ')) 
    while(n2 == 0){
      alert('É impossível dividir por "Zero" tente novamente ')
      n1 = Number(prompt('Digite o primeiro número: '))
      n2 = Number(prompt('Digite o segundo número: '))
    } if (n2 != 0){
      mostra(`<h2> Você escolheu Divisão `)
      mostra(`<h2> Dividindo ${n1} / ${n2} = ${dividir(n1, n2)}`)
    }
  }else{
    alert('Opção inválida')
    reiniciar()
  }
}

reiniciar()