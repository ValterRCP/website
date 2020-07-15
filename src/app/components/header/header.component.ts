import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  	// HOVER SUR LES SECTIONS DE LA NAVBAR
  	let navbar_main = document.getElementById("navbar-main");
  	let under_navbar_pro = document.getElementById("under-navbar-pro");
  	let under_navbar_perso = document.getElementById("under-navbar-perso");
  	let btn_section_pro = document.getElementById("btn-section-pro");
  	let btn_section_perso = document.getElementById("btn-section-perso");

  		// BOX SHADOW
  	btn_section_pro.addEventListener("mouseover", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(30,120,255)";
    })
    btn_section_pro.addEventListener("mouseout", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(25,25,25)";
    })
    under_navbar_pro.addEventListener("mouseover", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(30,120,255)";
    })
    under_navbar_pro.addEventListener("mouseout", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(25,25,25)";
    })

    btn_section_perso.addEventListener("mouseover", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(255,80,1)";
    })
    btn_section_perso.addEventListener("mouseout", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(25,25,25)";
    })
    under_navbar_perso.addEventListener("mouseover", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(255,80,1)";
    })
    under_navbar_perso.addEventListener("mouseout", function( event ) {   
  		navbar_main.style.boxShadow = "0 0px 7px rgb(25,25,25)";
    })

    	// MARGIN-TOP
    btn_section_pro.addEventListener("mouseover", function( event ) {   
  		under_navbar_pro.style.marginTop = "80px";
    })
    under_navbar_pro.addEventListener("mouseover", function( event ) {   
  		under_navbar_pro.style.marginTop = "80px";
    })
    btn_section_pro.addEventListener("mouseout", function( event ) {   
  		under_navbar_pro.style.marginTop = "0px";
    })
    under_navbar_pro.addEventListener("mouseout", function( event ) {   
  		under_navbar_pro.style.marginTop = "0px";
    })

    btn_section_perso.addEventListener("mouseover", function( event ) {   
  		under_navbar_perso.style.marginTop = "80px";
    })
    btn_section_perso.addEventListener("mouseout", function( event ) {   
  		under_navbar_perso.style.marginTop = "0px";
    })
    under_navbar_perso.addEventListener("mouseover", function( event ) {   
  		under_navbar_perso.style.marginTop = "80px";
    })
    under_navbar_perso.addEventListener("mouseout", function( event ) {   
  		under_navbar_perso.style.marginTop = "0px";
    })

  }

}