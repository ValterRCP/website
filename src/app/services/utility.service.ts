import { Injectable, Inject } from '@angular/core';

@Injectable()
export class UtilityService {

	// Fonction permettant de calculer les waypoints pour les tracés
	// On récupère la liste des vertices (sommets) en argument
	calcWaypoints(vertices){
		// On va utiliser ces vertices pour les transformer en waypoints sur le tracé
	    var waypoints=[];
	    for(var i=1;i<vertices.length;i++){
	        var pt0=vertices[i-1];
	        var pt1=vertices[i];
	        var dx=pt1.x-pt0.x;
	        var dy=pt1.y-pt0.y;
	        var taille=pt1.taille
	        for(var j=0;j<taille;j++){
	            var x=pt0.x+dx*j/(taille-1);
	            var y=pt0.y+dy*j/(taille-1);
	            waypoints.push({x:x,y:y});
	        }
	    }
	    return(waypoints);
	}


	// Fonction permettant d'utiliser les points calculés par clacWaypoints pour effectuer les animations des tracés linéaires
	// On récupères les waypoints, le canevas et la frame à laquelle nous sommes pour pouvoir effectuer la récursivité
	animateLine(frameElapsed,points,canevas){
		try {
			// On vérifie si on est arrivé au bout des waypoints
		    if(frameElapsed<points.length-1){ 
		    	// Si ce n'est pas le cas, on redéclenche la fonction pour la frame suivante
		    	requestAnimationFrame(()=> {
		    		this.animateLine(frameElapsed+1,points,canevas);
				}); 
			}
		    // On dessine le tracé pour cette frame
		    canevas.beginPath();
		    canevas.moveTo(points[frameElapsed-1].x,points[frameElapsed-1].y);
		    canevas.lineTo(points[frameElapsed].x,points[frameElapsed].y);
		    canevas.stroke();
		    // Si ça resize on provoque une erreur
		    window.addEventListener('resize', function(){
		    	frameElapsed=1000000;
			})
		    return;
		}
		catch (e) {
			if (e.error == undefined) {
				return;
			}
		}
	}


	// Fonction permettant de dessiner des tracés linéaires par défaut
	drawLine(vertices,canevas){
		canevas.beginPath();
		canevas.moveTo(vertices[0].x,vertices[0].y);
		for(var i=1;i<vertices.length;i++){
			canevas.lineTo(vertices[i].x,vertices[i].y);
		}
		canevas.stroke();
	}


	// Fonction permettant d'effectuer des animations de tracés circulaires
	animateCircle(frameElapsed,canevas,x,y,r,taille){
		if(frameElapsed<taille){ 
	    	// Si ce n'est pas le cas, on redéclenche la fonction pour la frame suivante
	    	requestAnimationFrame(()=> {
	    		this.animateCircle(frameElapsed+1,canevas,120,120,117,50);
			}); 
		}
		var delta = (frameElapsed*(2 * Math.PI))/400;
		// On dessine le tracé pour cette frame
	    canevas.beginPath();
	    canevas.arc(x, y, r, 0-delta, 0+delta);
	    canevas.stroke();
	    canevas.beginPath();
	    canevas.arc(x, y, r, (Math.PI/2)-delta, (Math.PI/2)+delta);
	    canevas.stroke();
	    canevas.beginPath();
	    canevas.arc(x, y, r, Math.PI-delta, Math.PI+delta);
	    canevas.stroke();
	    canevas.beginPath();
	    canevas.arc(x, y, r, (3*Math.PI/2)-delta, (3*Math.PI/2)+delta);
	    canevas.stroke();
	}

}