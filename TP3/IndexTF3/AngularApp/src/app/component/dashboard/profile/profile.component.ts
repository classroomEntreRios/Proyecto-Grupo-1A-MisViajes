import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {
  user_mail = "nacho@gmail.com";
  user_name = "nacho";
  user_img = "http://pbs.twimg.com/profile_images/722164198818627585/lyyqh02R_400x400.jpg"
  user_nom_com = "Nacho Cuatrin"
  constructor() {  
   }

  ngOnInit(): void {
    
  }

}