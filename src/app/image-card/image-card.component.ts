import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {

  @Input() receivedProducts:any= ""

  @Output() OnImgClick = new EventEmitter()

  onCardClick(id: number) {
    this.OnImgClick.emit(id);
  }


}
