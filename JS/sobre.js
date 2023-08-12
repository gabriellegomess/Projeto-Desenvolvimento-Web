//js para expandir 
var titulo = document.getElementById('titulo'); //variavel e pegando o elemento que vai expandir ao passr em cima, no caso é o titulo (Projeto ...)
var expandableDiv = document.querySelector('.expandable'); //expandindo //seleciona a classe expandable  

//expandindo quando o mouse passar por cima
titulo.addEventListener('mouseenter', function() { 
  expandableDiv.classList.add('expanded'); // coloca a expansao qnd o mouse ta em cima
});

//tirar a expansão qnd o mouse nao estiver mais em cima
titulo.addEventListener('mouseleave', function() { //qnd n tem o mouse em cima ele some a expansão 
  expandableDiv.classList.remove('expanded'); // remove a expansão
});




//js do dark mode

//nome padrão da função
function toggleDarkMode() {
  var body = document.body; //varievel body e referencia o body do html

//método toggle() da propriedade classList do elemento body
// classList retorna uma coleção de todas as classes atribuídas ao elemento. 
//toggle() adiciona a classe especificada se ela não estiver presente e a remove se ela já estiver presente. 
// Adiciona ou remove a classe 'dark-mode' do elemento body
  body.classList.toggle('dark-mode'); //mudando para o modo dark //caso ja esteja no dark mode ela sai
}

