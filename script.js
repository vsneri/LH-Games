// Efeito do botão Voltar ao topo.
function topo(){window.scrollTo({top:0,left:0,behavior:'smooth'});}

// Validação de login para a demonstração.
function login(){
  const campoUsuario = document.getElementById('usuario');
  const campoSenha = document.getElementById('senha');
  const usuario = campoUsuario ? campoUsuario.value.trim().toLowerCase() : '';
  const senha = campoSenha ? campoSenha.value.trim() : '';

  if (!usuario || !senha) {
    alert('Informe o usuário e a senha.');
    return false;
  }

  if (usuario === 'admin' && senha === '123456') {
    window.location.assign('./index.html');
    return true;
  }

  alert('Acesso Negado. Dados incorretos');
  return false;
}

// Simulação de cadastro concluído.
function cadastro(){const formulario=document.getElementById('form-registro');if(!formulario.checkValidity()){formulario.reportValidity();return;}alert('Cadastrado com sucesso!');window.location.href='index.html';}

document.addEventListener('DOMContentLoaded',function(){const busca=document.getElementById('form-busca');if(busca){busca.addEventListener('submit',function(event){event.preventDefault();const termo=document.getElementById('campo-busca').value.trim();alert(termo?'Buscando por: '+termo:'Digite um produto para buscar.');});}});
