const formulario=document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');
const expresiones={
  nombre:/^[ a-zA-Z]{1,20}$/,
  asunto:/^[ a-zA-Z]{1,10}$/,
  mensaje:/^[ a-zA-Z0-9]{1,100}$/
}
const campos = {
	nombre: false,
  	asunto:false,
  	mensaje:false
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "asunto":
			validarCampo(expresiones.asunto, e.target, 'asunto');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		console.log(campo);
		document.getElementById(`${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {	
	formulario.reset();
});