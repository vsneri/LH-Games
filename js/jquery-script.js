// Exibe o cadastro e oculta o login com uma transição suave.
$(document).ready(function(){$('#botao-cadastrar').click(function(){$('#form-cadastrar').slideDown('slow');$('#section-login').slideUp('slow');$('#botao-cadastrar').hide();});});
