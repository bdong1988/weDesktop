import {Component, Output, EventEmitter, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss']
})
export class FileSelectorComponent {
    @Input() accept: string;
    @Output() onFileSelect: EventEmitter<string> = new EventEmitter();

    @ViewChild('inputFile') nativeInputFile: ElementRef;

    private _files: File[];
    private _fileName: string;

    get fileCount(): number { return this._files && this._files.length || 0; }

    onNativeInputFileSelect($event) {
        this._files = $event.target.files;
        this._fileName = $event.target.value;
        let fileReader = new FileReader();
        this.onFileSelect.emit(this._fileName);
    }

    selectFile() {
        this.nativeInputFile.nativeElement.click();
    }
}
