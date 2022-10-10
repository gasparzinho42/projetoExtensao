
/* Mascara de telefone */

$("#telefone").mask("(99) 99999-9999");
                    
        

/* Não conter caractere especial no input endereço*/

const addressInput = document.querySelector("#endereço");

addressInput.addEventListener("keypress", function(e) {

if(!checkChar(e)){
  e.preventDefault();
}

});

function checkChar(e) {

const char = String.fromCharCode(e.keycode);
const pattern = '[a-zA-Z0-9]';

if(char.match(pattern)) {
  return true;
}
}




