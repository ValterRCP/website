import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private util: UtilityService) { }

  ngOnInit(): void {

  	// CANEVAS SECTION 1

  	// Def du canevas contour
	var canvas_1 = document.getElementById("canvas-1") as HTMLCanvasElement;
    canvas_1.width = canvas_1.clientWidth;
	canvas_1.height = canvas_1.clientHeight;
	var ctx_1 = canvas_1.getContext("2d");
	// Def du tracé contour
	ctx_1.strokeStyle = "rgb(125,125,125)";
	ctx_1.lineWidth = 1.5;
	// Def du chemin contour pour l'animation
	var vertices=[];
	vertices.push({x:5, y:5, taille:0});
	vertices.push({x:canvas_1.width-50, y:5, taille:30});
	vertices.push({x:canvas_1.width-5, y:0+50, taille:5});
	vertices.push({x:canvas_1.width-5, y:canvas_1.height-5, taille:15});
	vertices.push({x:50, y:canvas_1.height-5, taille:30});
	vertices.push({x:5, y:canvas_1.height-50, taille:5});
	vertices.push({x:5, y:5, taille:15});
	// Récupération des points du tracé (défini dans utility.service) contour
	var points=this.util.calcWaypoints(vertices);
	// Démarrage de l'animation (défini dans utility.service) contour
	this.util.animateLine(1,points,ctx_1);
	// Def du chemin contour pour gérer le resize
	window.addEventListener('resize', () => {
		ctx_1.canvas.width = ctx_1.canvas.clientWidth;
    	ctx_1.canvas.height = ctx_1.canvas.clientHeight;
    	ctx_1.strokeStyle = "rgb(125,125,125)";
		ctx_1.lineWidth = 1.5;
		var vertices=[];
		vertices.push({x:5, y:5, taille:0});
		vertices.push({x:canvas_1.width-50, y:5, taille:30});
		vertices.push({x:canvas_1.width-5, y:0+50, taille:5});
		vertices.push({x:canvas_1.width-5, y:canvas_1.height-5, taille:15});
		vertices.push({x:50, y:canvas_1.height-5, taille:30});
		vertices.push({x:5, y:canvas_1.height-50, taille:5});
		vertices.push({x:5, y:5, taille:15});
		this.util.drawLine(vertices,ctx_1);
	})
	

	// Def du canevas cercle 
	var canvas_2 = document.getElementById("canvas-2") as HTMLCanvasElement;
    canvas_2.width = 480;
	canvas_2.height = 480;
	canvas_2.getContext("2d").scale(2,2);
	var ctx_2 = canvas_2.getContext("2d");
	// Def du tracé cercle animé
	ctx_2.strokeStyle = "rgb(100,100,100)";
	ctx_2.lineWidth = 2.5;
	// Démarrage de l'animation (défini dans utility.service) contour
	this.util.animateCircle(1,ctx_2,120,120,117,50);
  }

}
