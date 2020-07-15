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
	var canvas_1_1 = document.getElementById("canvas-1-1") as HTMLCanvasElement;
    canvas_1_1.width = canvas_1_1.clientWidth;
	canvas_1_1.height = canvas_1_1.clientHeight;
	var ctx_1_1 = canvas_1_1.getContext("2d");
	// Def du tracé contour
	ctx_1_1.strokeStyle = "rgb(125,125,125)";
	//ctx_1_1.strokeStyle = "rgb(170,130,40)";
	ctx_1_1.lineWidth = 1.5;
	// Def du chemin contour pour l'animation
	var vertices_1_1=[];
	vertices_1_1.push({x:5, y:5, taille:0});
	vertices_1_1.push({x:canvas_1_1.width-50, y:5, taille:30});
	vertices_1_1.push({x:canvas_1_1.width-5, y:0+50, taille:5});
	vertices_1_1.push({x:canvas_1_1.width-5, y:canvas_1_1.height-5, taille:15});
	vertices_1_1.push({x:50, y:canvas_1_1.height-5, taille:30});
	vertices_1_1.push({x:5, y:canvas_1_1.height-50, taille:5});
	vertices_1_1.push({x:5, y:5, taille:15});
	// Récupération des points du tracé (défini dans utility.service) contour
	var points=this.util.calcWaypoints(vertices_1_1);
	// Démarrage de l'animation (défini dans utility.service) contour
	this.util.animateLine(1,points,ctx_1_1);
	// Def du chemin contour pour gérer le resize
	window.addEventListener('resize', () => {
		ctx_1_1.canvas.width = ctx_1_1.canvas.clientWidth;
    	ctx_1_1.canvas.height = ctx_1_1.canvas.clientHeight;
    	ctx_1_1.strokeStyle = "rgb(125,125,125)";
    	//ctx_1_1.strokeStyle = "rgb(170,130,40)";
		ctx_1_1.lineWidth = 1.5;
		var vertices_1_1=[];
		vertices_1_1.push({x:5, y:5, taille:0});
		vertices_1_1.push({x:canvas_1_1.width-50, y:5, taille:30});
		vertices_1_1.push({x:canvas_1_1.width-5, y:0+50, taille:5});
		vertices_1_1.push({x:canvas_1_1.width-5, y:canvas_1_1.height-5, taille:15});
		vertices_1_1.push({x:50, y:canvas_1_1.height-5, taille:30});
		vertices_1_1.push({x:5, y:canvas_1_1.height-50, taille:5});
		vertices_1_1.push({x:5, y:5, taille:15});
		this.util.drawLine(vertices_1_1,ctx_1_1);
	})
	

	// Def du canevas cercle 
	var canvas_1_2 = document.getElementById("canvas-1-2") as HTMLCanvasElement;
    canvas_1_2.width = 480;
	canvas_1_2.height = 480;
	canvas_1_2.getContext("2d").scale(2,2);
	var ctx_1_2 = canvas_1_2.getContext("2d");
	// Def du tracé cercle animé
	ctx_1_2.strokeStyle = "rgb(100,100,100)";
	ctx_1_2.lineWidth = 2.5;
	// Démarrage de l'animation (défini dans utility.service) contour
	this.util.animateCircle(1,ctx_1_2,120,120,117,50);





	// CANEVAS SECTION 2

  	/*// Def du canevas contour
	var canvas_2_1 = document.getElementById("canvas-2-1") as HTMLCanvasElement;
    canvas_2_1.width = canvas_2_1.clientWidth;
	canvas_2_1.height = canvas_2_1.clientHeight;
	var ctx_2_1 = canvas_2_1.getContext("2d");
	// Def du tracé contour
	ctx_2_1.strokeStyle = "rgb(125,125,125)";
	ctx_2_1.lineWidth = 5.5;
	// Def du chemin contour pour l'animation
	var vertices_2_1=[];
	vertices_2_1.push({x:1, y:1, taille:0});
	vertices_2_1.push({x:canvas_2_1.width-1, y:1, taille:30});
	// Récupération des points du tracé (défini dans utility.service) contour
	var points=this.util.calcWaypoints(vertices_2_1);
	// Démarrage de l'animation (défini dans utility.service) contour
	this.util.animateLine(1,points,ctx_2_1);*/
  }

}
