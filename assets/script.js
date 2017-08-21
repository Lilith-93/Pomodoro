$(document).ready(function(){
var time = 0; //en sec
var inter = 0;
var min = 0;
var sec = 0;
	
//FONCTION POUR AFFICHER LE TEMPS DE TRAVAIL EN SECONDES AU CLICK DU BOUTON
	$("#boulot").click(function(){
		time = 1500; //25'
		min = 25;
		sec = 0;
		$("#temps").text(min+'min '+sec+'sec.');
	});

//FONCTION POUR AFFICHER LE TEMPS DE PETITE PAUSE EN SECONDES AU CLICK DU BOUTON
	$("#cafe").click(function(){
		time = 300; //5'
		min = 5;
		sec = 0;
		$("#temps").text(min+'min '+sec+'sec.');
	});
	
//FONCTION POUR AFFICHER LE TEMPS DE LONGUE PAUSE EN SECONDES AU CLICK DU BOUTON
	$("#sieste").click(function(){
		time = 600; //10'
		min = 10;
		sec = 0;
		$("#temps").text(min+'min '+sec+'sec.');
	});
	
//FONCTION POUR DEMARRER LE COMPTEUR AU CLICK DU BOUTON
	$("#start").click(function(){
		inter = setInterval(count,1000);
	});	
	//FONCTION POUR DECREMENTER LE TIMER ET CLEAR L'INTERVAL
		function count(){
			if(time<=0){
				document.getElementById('alarm').play();
				clearInterval(inter);
				alert('Ton temps est écoulé !');
			}
			time--;			
			sec--;
			if(sec<0){
				min--;
				sec = 59;
			}
			$("#temps").text(min+'min '+sec+'sec.');
			$(title).text(min+"'"+sec+'"');
			
			
		}
//FONCTION POUR METTRE EN PAUSE AU CLICK DU BOUTON
	$("#pause").click(function(){
		clearInterval(inter);
		inter = 0;
	});

//FONCTION POUR REMETTRE A 0 AU CLICK DU BOUTON
	$("#reset").click(function(){
		time=0;
		clearInterval(inter);	
		inter = 0;
		$("#temps").text(time);	
	});	
});
