import { Component, Input } from '@angular/core';
import { News } from '../../Models/News';

@Component({
  selector: 'app-aside-new',
  imports: [],
  templateUrl: './aside-new.component.html',
  styleUrl: './aside-new.component.scss'
})
export class AsideNewComponent {
  @Input('news')
  public news! : News ;
}
