function gerar(){
  
  contador=1000000
  
  while(contador>0){
    contador=contador-1
    htmldocertificado=emitirCertificado(inputNome.value)   
  }
  
  nomes=[
    "Meu primeiro código",
    "Currículo",
    "Ficha academia",
    "App de transportes - sorteio",
    "App de transportes - valor corrida",
    "QuarentenaDev",
    "Calculadora IMC",
    "Botão de Like do Facebook",
    "Contador",
    "Olimpíadas",
    "Números pares",
    "Pokeball",
    "Batidas do coração",
    "Número do mês"
    
  ]
  
  listalinks=[             
    "https://codepen.io/isamarags/pen/LYVogJO",
    "https://codepen.io/isamarags/pen/rNVENpY",
    "https://codepen.io/isamarags/pen/WNQQgGa",
    "https://codepen.io/isamarags/pen/QWjNEbE",
    "https://codepen.io/isamarags/pen/GRpZVGm",
    "https://codepen.io/isamarags/pen/ZEbbjJj",
    "https://codepen.io/isamarags/pen/jObqBpQ",
    "https://codepen.io/isamarags/pen/QWjNRZL",
    "https://codepen.io/isamarags/pen/bGVpXoY",
    "https://codepen.io/isamarags/pen/zYvqgEX",
    "https://codepen.io/isamarags/pen/QWjNeQr",
    "https://codepen.io/isamarags/pen/XWmdMgw",
    "https://codepen.io/isamarags/pen/gOargRb",
    "https://codepen.io/isamarags/pen/ZEbQrQQ"
    
    
    
    
  ]
  
  contalink=0
  listalinkcomhtml=''
  while(contalink<7){
    
  link=listalinks[contalink]
  listalinkcomhtml=listalinkcomhtml+ `<li> ${nomes[contalink]}: <a target="_blank" href="${link}">

  ${link}
  </a>
  </li>`
    contalink=contalink+1
  }
  
  document.body.innerHTML=
   `${htmldocertificado}

<ol>
    ${listalinkcomhtml}
</ol>
    `
  
  print();
}