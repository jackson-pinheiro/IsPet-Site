/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validacao() {
    var btform = document.getElementById("btform");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var assunto = document.getElementById("assunto");
    var mensagem = document.getElementById("mensagem");
    var cont = 0 ;
    
    if (name.value == "") {
        alert("Insira um nome válido.");
        document.nome.focus();
        return false;
    }
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        document.email.focus();
        return false;
    }
    
    if(assunto.value == "" ||  assunto.value.length > 50){
        alert("Insira um assunto válido");
        document.senha1.focus();
        return false; 
    }
    
    if(mensagem.value == "" ||  mensagem.value.length > 150){
        alert("Insira uma mensagem válida");
        document.senha1.focus();
        return false; 
    }
    
    if(name.value!="" && email.value!="" && mensagem.value!="" && assunto.value!=""){
        alert("Mensagem Enviada com sucesso!")
        return false;
    }
  
}

