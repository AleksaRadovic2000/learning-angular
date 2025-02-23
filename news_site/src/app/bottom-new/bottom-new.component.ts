import { Component, Input} from '@angular/core';
import { News } from '../../Models/News';

@Component({
  selector: 'app-bottom-new',
  imports: [],
  templateUrl: './bottom-new.component.html',
  styleUrl: './bottom-new.component.scss'
})
export class BottomNewComponent {
  @Input('news')
  public news! : News ;
}
