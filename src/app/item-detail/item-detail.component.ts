import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent {
  @Input() item: string; // decorate the property with @Input()
}
