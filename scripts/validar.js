// Funcion para verificar campos en el formulario de comentarios y sugerencias
function chk_campos()
{
	errores="";
	correctos=true;
	var dNom;
	var dApe;
	var dEmail;
	/* ****************************************
		Verficacion del vacio del campo Nombres
	****************************************** */
	if(document.FormSugCom.vNombres.value.length==0)					// Si esta vacío
	{
		errores+="Escriba su(s) nombre(s).\n";
		document.FormSugCom.vNombres.focus();
		correctos=false;
	}
	else																// En caso de no estar vacío
	{
		var I;
		var Cadena;
		Cadena=document.FormSugCom.vNombres.value.length;
		for(I=0;I<Cadena;I++)
		{
			Caracter=document.FormSugCom.vNombres.value.charAt(I);
			if(Caracter>=0 || Caracter<=9 && Caracter!=" ")
			{
				errores+='El campo \"Nombres\" no puede contener números.\n';
				document.FormSugCom.vNombres.focus();
				correctos=false;
				break;
			}
		}
	}
	/* ******************************************
		Verficacion del vacio del campo Apellidos
	******************************************* */
	if(document.FormSugCom.vApellidos.value.length==0)					// Si esta vacío
	{
		errores+="Escriba su(s) apellido(s).\n";
		document.FormSugCom.vApellidos.focus();
		correctos=false;
	}
	else																// En caso de no estar vacío
	{
		var I;
		var Cadena;
		Cadena=document.FormSugCom.vApellidos.value.length;
		for(I=0;I<Cadena;I++)
		{
			Caracter=document.FormSugCom.vApellidos.value.charAt(I);
			if(Caracter>=0 || Caracter<=9 && Caracter!=" ")
			{
				errores+='El campo \"Apellidos\" no puede contener números.\n';
				document.FormSugCom.vApellidos.focus();
				correctos=false;
				break;
			}
		}
	}
	/* ***********************************
		Validación del campo del e-mail
	************************************ */
	if(document.FormSugCom.vEmail.value.length==0)
	{
		errores+="Escriba su dirección de E-Mail.\n";
		document.FormSugCom.vEmail.focus();
		correctos=false;
	}
	else
	{
		var totalArrobas=0;
		var totalPuntos=0;
		var letraX;
		var simbPunto;
		var largoX;
		var I;
		largoX=document.FormSugCom.vEmail.value.length;
  
		for(I=0;I<largoX;I++)
		{
			letraX=document.FormSugCom.vEmail.value.charAt(I);
			if(letraX=="@" && I==0)
			{
				errores+="No ingrese el \"@\" de primero.\n";
				document.FormSugCom.vEmail.focus();
          		correctos=false;
				break;
       		}
			if(letraX=="." && I==0) 
			{
				errores+="No ingrese el \".\" de primero.\n";
				document.FormSugCom.vEmail.focus();
				correctos=false;
				break;
			}
			if(letraX==" " && I==0)
			{
				errores+="No ingrese espacios vacíos de primero.\n";
				document.FormSugCom.vEmail.focus();
				correctos=false;
				break;
			}
			if(letraX==" ")
			{
				errores+="No ingrese espacios vacíos.\n";
				document.FormSugCom.vEmail.focus();
				correctos=false;
				break;
			}
			if(letraX=="@") totalArrobas++;
			if(letraX==".")
			{
				totalPuntos++;
			}
		}
		if (totalArrobas!=1)
		{
			errores+="Escriba dirección completa de E-Mail. Ejemplo: sunombre@saromaitaly.com\n";
			document.FormSugCom.vEmail.focus();
			correctos=false;
		}
	}
	if (correctos)
	{
		if(confirm("¿Datos correctos?"))
		{
			dNom=document.FormSugCom.vNombres.value;
			dApe=document.FormSugCom.vApellidos.value
			dEmail=document.FormSugCom.vEmail.value
			MM_goToURL('parent','confirm.html');
			return document.MM_returnValue;
		}
		else
		{
		document.FormSugCom.vNombres.focus();
		return false;
		}
	}
	else
	{
		if (errores.length>0) alert(errores);
		return false;
	}
}