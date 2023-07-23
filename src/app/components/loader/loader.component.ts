import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  standalone: true,
  imports: [
    NgIf
  ]
})
export class LoaderComponent {
  @Input() isLoading: boolean = false;
}
