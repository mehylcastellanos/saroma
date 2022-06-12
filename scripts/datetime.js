// Funciones para la actualizacion de la fecha y hora 
var timerId=null;
var timerRunning=false;
var Fecha;
var Hora;

function  stopClock()
{
   if(timerRunning) clearTimeout(timerId) ;
   timerRunning=false ;
}

function startClock()
{
   stopClock();
   showTime();
}

function showTime()
{
   // Operaciones para desplegar fecha actual
   var monthArray=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
   var date=new Date();
   var d=date.getDate();
   var day=(d<10)?'0'+d:d;
   var m=date.getMonth()+1;
   var month=monthArray[m-1];
   var yy=date.getYear();
   var year=(yy<1000)?yy+1900:yy;

   // Determinacion de horas. minutos y segundos
   var ss=date.getSeconds();			// Determina segundos de la fecha actual
   var mm=date.getMinutes();			// Determina minutos de la fecha actual
   var hh=date.getHours();			// Determina horas de la fecha actual
   var segundos=(ss<10)?'0'+ss:ss;		// Validación para la asignacion del cero a la izquierda en los segundos
   var minutos=(mm<10)?'0'+mm:mm;		// Validación para la asignacion del cero a la izquierda en los minutos
   if (hh>12)
   {
     var ampm="P.M.";
     var horas=hh-12;
     var horas=(horas<10)?'0'+horas:horas;	// Validación para la asignacion del cero a la izquierda en las horas
   }
   else
   {
     var ampm="A.M.";
     var horas=(hh<10)?'0'+hh:hh;			// Validación para la asignacion del cero a la izquierda en las horas
   }
   Fecha=(day+" de "+month+" de "+year) ;
   Hora=(horas+":"+minutos+":"+segundos+" "+ampm) ;
	document.FormFechaHora.TxtFechaHora.value=Fecha+" - "+Hora;
//   window.defaultStatus=Fecha+" - "+Hora;
   timerId=setTimeout("startClock()",1000) ;
   timerRunning=true;
}
