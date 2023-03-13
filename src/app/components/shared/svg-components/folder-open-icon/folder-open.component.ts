import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-folder-open-svg',
  templateUrl: './folder-open.svg',
})
export class FolderOpenSvgComponent {

  @Input() color: string = '#fff'

}