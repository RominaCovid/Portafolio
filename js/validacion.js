const formulario=document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');
const activacion =document.getElementById('btn-enviar');
const mensaje_exito=document.getElementById('exito');


const expresiones={
  nombre:/^[ a-zA-Z]{1,20}$/,
  email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  asunto:/^[ a-zA-Z]{1,10}$/,
  mensaje:/^[ a-zA-Z0-9]{1,100}$/
}
const campos = {
	nombre: false,
	email:false,
  	asunto:false,
  	mensaje:false
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "asunto":
			validarCampo(expresiones.asunto, e.target, 'asunto');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}
const val=(campos)=>{
	if(campos.nombre && campos.email && campos.asunto && campos.mensaje){	
		activacion.disabled = false;				
	}
 };

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){		
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
	val(campos);
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	formulario.reset();	
	console.log("entro aqui");
	mensaje_exito.classList.add('mensaje-exito-activo');	
	setTimeout(() => {	
		
		mensaje_exito.classList.remove('mensaje-exito');	
		
	}, 10000);
	
});
