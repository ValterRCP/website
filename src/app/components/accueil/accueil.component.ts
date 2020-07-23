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

  	//----- CANEVAS SECTION 1 -----

  	// Def du canevas contour
	var canvas_1_1 = document.getElementById("canvas-1-1") as HTMLCanvasElement;
    canvas_1_1.width = canvas_1_1.clientWidth;
	canvas_1_1.height = canvas_1_1.clientHeight;
	var ctx_1_1 = canvas_1_1.getContext("2d");
	// Def du tracé
	ctx_1_1.strokeStyle = "rgb(125,125,125)";
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
	// Récupération des points du tracé (défini dans utility.service) 
	var points_1_1=this.util.calcWaypoints(vertices_1_1);
	// Démarrage de l'animation (défini dans utility.service) 
	this.util.animateLine(1,points_1_1,ctx_1_1);
	// Def du chemin pour gérer le resize
	window.addEventListener('resize', () => {
		ctx_1_1.canvas.width = ctx_1_1.canvas.clientWidth;
    	ctx_1_1.canvas.height = ctx_1_1.canvas.clientHeight;
    	ctx_1_1.strokeStyle = "rgb(125,125,125)";
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
	// Def du tracé animé
	ctx_1_2.strokeStyle = "rgb(100,100,100)";
	ctx_1_2.lineWidth = 2;
	// Démarrage de l'animation (défini dans utility.service)
	this.util.animateCircle(1,ctx_1_2,120,120,117,50);





	//----- CANEVAS SECTION 2 -----

  	// Def du séparateur
	var canvas_2_1 = document.getElementById("canvas-2-1") as HTMLCanvasElement;
    canvas_2_1.width = canvas_2_1.clientWidth;
	canvas_2_1.height = canvas_2_1.clientHeight;
	var ctx_2_1 = canvas_2_1.getContext("2d");
	// Def du tracé
	ctx_2_1.strokeStyle = "rgba(120,120,120,0.6)";
	ctx_2_1.lineWidth = 2;
	// Def du chemin pour l'animation
	var vertices_2_1=[];
	vertices_2_1.push({x:canvas_2_1.width/2, y:1, taille:0});
	vertices_2_1.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
	vertices_2_1.push({x:(canvas_2_1.width/2)-45, y:canvas_2_1.height/2, taille:10});
	vertices_2_1.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:10});
	vertices_2_1.push({x:(canvas_2_1.width/2), y:canvas_2_1.height, taille:30});
	var vertices_2_2=[];
	vertices_2_2.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:0});
	vertices_2_2.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
	vertices_2_2.push({x:(canvas_2_1.width/2)+45, y:canvas_2_1.height/2, taille:10});
	vertices_2_2.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:10});
	var vertices_2_3=[];
	vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:0});
	vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
	vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65+35, taille:5});
	vertices_2_3.push({x:(canvas_2_1.width/2)-20, y:(canvas_2_1.height/2), taille:10});
	vertices_2_3.push({x:(canvas_2_1.width/2), y:(canvas_2_1.height/2)+65-35, taille:10});
	vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:5});
	var vertices_2_4=[];
	vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:0});
	vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
	vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65+35, taille:5});
	vertices_2_4.push({x:(canvas_2_1.width/2)+20, y:(canvas_2_1.height/2), taille:10});
	vertices_2_4.push({x:(canvas_2_1.width/2), y:(canvas_2_1.height/2)+65-35, taille:10});
	vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:5});
	// Récupération des points du tracé (défini dans utility.service)
	var points_2_1=this.util.calcWaypoints(vertices_2_1);
	var points_2_2=this.util.calcWaypoints(vertices_2_2);
	var points_2_3=this.util.calcWaypoints(vertices_2_3);
	var points_2_4=this.util.calcWaypoints(vertices_2_4);
	// Démarrage de l'animation (défini dans utility.service)
	this.util.animateLine(1,points_2_1,ctx_2_1);
	this.util.animateLine(1,points_2_2,ctx_2_1);
	this.util.animateLine(1,points_2_3,ctx_2_1);
	this.util.animateLine(1,points_2_4,ctx_2_1);
	// Def du chemin pour gérer le resize
	window.addEventListener('resize', () => {
		ctx_2_1.canvas.width = ctx_2_1.canvas.clientWidth;
    	ctx_2_1.canvas.height = ctx_2_1.canvas.clientHeight;
    	ctx_2_1.strokeStyle = "rgba(120,120,120,0.6)";
		ctx_2_1.lineWidth = 2;
		var vertices_2_1=[];
		vertices_2_1.push({x:canvas_2_1.width/2, y:1, taille:0});
		vertices_2_1.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
		vertices_2_1.push({x:(canvas_2_1.width/2)-45, y:canvas_2_1.height/2, taille:10});
		vertices_2_1.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:10});
		vertices_2_1.push({x:(canvas_2_1.width/2), y:canvas_2_1.height, taille:30});
		var vertices_2_2=[];
		vertices_2_2.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:0});
		vertices_2_2.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
		vertices_2_2.push({x:(canvas_2_1.width/2)+45, y:canvas_2_1.height/2, taille:10});
		vertices_2_2.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:10});
		var vertices_2_3=[];
		vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:0});
		vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
		vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65+35, taille:5});
		vertices_2_3.push({x:(canvas_2_1.width/2)-20, y:(canvas_2_1.height/2), taille:10});
		vertices_2_3.push({x:(canvas_2_1.width/2), y:(canvas_2_1.height/2)+65-35, taille:10});
		vertices_2_3.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:5});
		var vertices_2_4=[];
		vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:0});
		vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65, taille:30});
		vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)-65+35, taille:5});
		vertices_2_4.push({x:(canvas_2_1.width/2)+20, y:(canvas_2_1.height/2), taille:10});
		vertices_2_4.push({x:(canvas_2_1.width/2), y:(canvas_2_1.height/2)+65-35, taille:10});
		vertices_2_4.push({x:canvas_2_1.width/2, y:(canvas_2_1.height/2)+65, taille:5});
		this.util.drawLine(vertices_2_1,ctx_2_1);
		this.util.drawLine(vertices_2_2,ctx_2_1);
		this.util.drawLine(vertices_2_3,ctx_2_1);
		this.util.drawLine(vertices_2_4,ctx_2_1);
	})


  	// Def des contours
  	var canvas_2_2 = document.getElementById("canvas-2-2") as HTMLCanvasElement;
    canvas_2_2.width = canvas_2_2.clientWidth;
	canvas_2_2.height = canvas_2_2.clientHeight;
	var ctx_2_2 = canvas_2_2.getContext("2d");
	// Def du tracé
	ctx_2_2.strokeStyle = "rgba(90,90,90,0.8)";
	ctx_2_2.lineWidth = 1.5;
	// Def du chemin pour l'animation
	var vertices_2_11=[];
	vertices_2_11.push({x:20, y:75, taille:0});
	vertices_2_11.push({x:(canvas_2_1.width/2)-20-50, y:75, taille:30});
	vertices_2_11.push({x:(canvas_2_1.width/2)-20, y:75+50, taille:5});
	vertices_2_11.push({x:(canvas_2_1.width/2)-20, y:canvas_2_1.height-75, taille:15});
	vertices_2_11.push({x:20+50, y:canvas_2_1.height-75, taille:30});
	vertices_2_11.push({x:20, y:canvas_2_1.height-75-50, taille:5});
	vertices_2_11.push({x:20, y:75, taille:15});
	var vertices_2_21=[];
	vertices_2_21.push({x:canvas_2_1.width-20, y:75, taille:0});
	vertices_2_21.push({x:(canvas_2_1.width/2)+20+50, y:75, taille:30});
	vertices_2_21.push({x:(canvas_2_1.width/2)+20, y:75+50, taille:5});
	vertices_2_21.push({x:(canvas_2_1.width/2)+20, y:canvas_2_1.height-75, taille:15});
	vertices_2_21.push({x:canvas_2_1.width-20-50, y:canvas_2_1.height-75, taille:30});
	vertices_2_21.push({x:canvas_2_1.width-20, y:canvas_2_1.height-75-50, taille:5});
	vertices_2_21.push({x:canvas_2_1.width-20, y:75, taille:15});
	// Récupération des points du tracé (défini dans utility.service) 
	var points_2_11=this.util.calcWaypoints(vertices_2_11);
	var points_2_21=this.util.calcWaypoints(vertices_2_21);
	// Démarrage de l'animation (défini dans utility.service) 
	this.util.animateLine(1,points_2_11,ctx_2_2);
	this.util.animateLine(1,points_2_21,ctx_2_2);
	// Def du chemin pour gérer le resize
	window.addEventListener('resize', () => {
		ctx_2_2.canvas.width = ctx_2_2.canvas.clientWidth;
    	ctx_2_2.canvas.height = ctx_2_2.canvas.clientHeight;
    	ctx_2_2.strokeStyle = "rgba(90,90,90,0.8)";
	ctx_2_2.lineWidth = 1.5;
		var vertices_2_11=[];
		vertices_2_11.push({x:20, y:75, taille:0});
		vertices_2_11.push({x:(canvas_2_1.width/2)-20-50, y:75, taille:30});
		vertices_2_11.push({x:(canvas_2_1.width/2)-20, y:75+50, taille:5});
		vertices_2_11.push({x:(canvas_2_1.width/2)-20, y:canvas_2_1.height-75, taille:15});
		vertices_2_11.push({x:20+50, y:canvas_2_1.height-75, taille:30});
		vertices_2_11.push({x:20, y:canvas_2_1.height-75-50, taille:5});
		vertices_2_11.push({x:20, y:75, taille:15});
		var vertices_2_21=[];
		vertices_2_21.push({x:canvas_2_1.width-20, y:75, taille:0});
		vertices_2_21.push({x:(canvas_2_1.width/2)+20+50, y:75, taille:30});
		vertices_2_21.push({x:(canvas_2_1.width/2)+20, y:75+50, taille:5});
		vertices_2_21.push({x:(canvas_2_1.width/2)+20, y:canvas_2_1.height-75, taille:15});
		vertices_2_21.push({x:canvas_2_1.width-20-50, y:canvas_2_1.height-75, taille:30});
		vertices_2_21.push({x:canvas_2_1.width-20, y:canvas_2_1.height-75-50, taille:5});
		vertices_2_21.push({x:canvas_2_1.width-20, y:75, taille:15});
		this.util.drawLine(vertices_2_11,ctx_2_2);
		this.util.drawLine(vertices_2_21,ctx_2_2);
	})




	// ----- HOVER SECTION 2 -----

	// Afficher le texte quand on passe la souris sur la section pro ou perso
  	let pro = document.getElementById("section-2-img-pro");
  	let perso = document.getElementById("section-2-img-perso");
  	let text_pro = document.getElementById("section-2-text-pro");
  	let text_perso = document.getElementById("section-2-text-perso");
  	let title_pro = document.getElementById("section-2-title-pro");
  	let title_perso = document.getElementById("section-2-title-perso");

  	pro.addEventListener("mouseover", function( event ) {   
  		text_pro.style.opacity = "100%";
  		title_pro.style.marginTop = "0px";
    })
    pro.addEventListener("mouseout", function( event ) {   
  		text_pro.style.opacity = "0%";
  		title_pro.style.marginTop = "125px";
    })
    perso.addEventListener("mouseover", function( event ) {   
  		text_perso.style.opacity = "100%";
  		title_perso.style.marginTop = "0px";
    })
    perso.addEventListener("mouseout", function( event ) {   
  		text_perso.style.opacity = "0%";
  		title_perso.style.marginTop = "125px";
    })




	}
}