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

