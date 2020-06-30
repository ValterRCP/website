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
	// Def du chemin contour
	var vertices=[];
	vertices.push({x:15, y:0, taille:0});
	vertices.push({x:canvas_1.width-15-50, y:0, taille:30});
	vertices.push({x:canvas_1.width-15, y:0+50, taille:5});
	vertices.push({x:canvas_1.width-15, y:canvas_1.height, taille:15});
	vertices.push({x:15+50, y:canvas_1.height, taille:30});
	vertices.push({x:15, y:canvas_1.height-50, taille:5});
	vertices.push({x:15, y:0, taille:15});
	// Récupération des points du tracé (défini dans utility.service) contour
	var points=this.util.calcWaypoints(vertices);
	// Création du compteur de frames
	var frameElapsed=1;
	// Démarrage de l'animation (défini dans utility.service) contour
	this.util.animate(1,points,ctx_1);

	// Def du canevas cercle
	var canvas_2 = document.getElementById("canvas-2") as HTMLCanvasElement;
    canvas_2.width = canvas_2.clientWidth;
	canvas_2.height = canvas_2.clientHeight;
	var ctx_2 = canvas_2.getContext("2d");
	// Def du tracé cercle
	ctx_2.strokeStyle = "rgb(100,100,100)";
	ctx_2.lineWidth = 1.2;
	// Def du chemin cercle
	ctx_2.beginPath();
	ctx_2.arc(120, 120, 117, 0, 2 * Math.PI);
	ctx_2.stroke();
  }

}
