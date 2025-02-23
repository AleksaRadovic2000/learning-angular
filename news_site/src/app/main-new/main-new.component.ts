import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../Models/News';

@Component({
  selector: 'app-main-new',
  imports: [],
  templateUrl: './main-new.component.html',
  styleUrl: './main-new.component.scss'
})
export class MainNewComponent implements OnInit{
  @Input('news')
  public news! : News;


  ngOnInit(): void {
  }

}
