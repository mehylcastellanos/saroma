// Función para validar los campos del formulario
function validar_campos()
{
	errores="";
	correctos=true;
	// Verficacion del vacio del campo Nombres
		if(document.FormSugCom.vNombres.value.length==0)					// Si esta vacío
	{
		errores+="Escriba su nombre.\n";
		onFocus="vNombres";
		correctos=false;
	}
	else																	// En caso de no estar vacío
	{
		var I;
		var Cadena;
		Cadena=document.FormSugCom.vNombres.value.length;
		for(I=0;I<Cadena;I++)
		{
			Caracter=document.FormSugCom.vNombres.value.charAt(I);
			if(!(Caracter>=0 && Caracter<=9)) 
			{
				errores+="El nombre no puede contener números";
				onFocus="vNombres";
				break;
			}
/*			
			if(Caracter==" ")
			{
				errores+="Verificar numero de cedula");
				onFocus="vNombres";
				break;
				
			}
*/
		}
	}
	if (correctos) window.location.href="confirm.html"
}
