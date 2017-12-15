import { Component, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss']
})
export class FileSelectorComponent {
  @Input() accept: string;
  @Output() onFileSelect: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputFile') nativeInputFile: ElementRef;

  activeColor: string = 'red';
  baseColor: string = '#ccc';
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string;

  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      return;
    }
    const pattern = /image-*/;
    let reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
    this.onFileSelect.emit(this.imageSrc);
  }

  selectFile() {
    this.nativeInputFile.nativeElement.click();
  }
}
