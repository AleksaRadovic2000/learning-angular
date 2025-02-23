import { Component, OnInit, NgModule } from '@angular/core';
import { MainNewComponent } from '../main-new/main-new.component';
import { AsideNewComponent } from '../aside-new/aside-new.component';
import { BottomNewComponent } from '../bottom-new/bottom-new.component';

import { News } from '../../Models/News';

import data from '../../data/data.json' 
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MainNewComponent, AsideNewComponent, BottomNewComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public data : Array<News> = [];

  mainNews : News = new News(data[0].id, data[0].title,data[0].description,
                data[0].category, data[0].image);
  
  asidenews : Array<News> = [];
  
  asideNews() {
    for(let i = 1; i < 4; i++) {
      this.asidenews.push(new News(data[i].id, data[i].title,data[i].description,
        data[i].category, data[i].image));
    }
    return this.asidenews;
  }
  
  bottomnews : Array<News> = [];
  
  bottomNews() {
    for(let i = 4; i < data.length; i++) {
      this.bottomnews.push(new News(data[i].id, data[i].title,data[i].description,
        data[i].category, data[i].image));
    }
    return this.bottomnews;
  }
  ngOnInit(): void {
    console.log(data);
    console.log(this.mainNews)
    this.asideNews();
    this.bottomNews();
  }
}
