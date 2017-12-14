import {Component, Output, EventEmitter, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss']
})
export class FileSelectorComponent {
    @Input() accept: string;
    @Output() onFileSelect: EventEmitter<File[]> = new EventEmitter();

    @ViewChild('inputFile') nativeInputFile: ElementRef;

    private _files: File[];

    get fileCount(): number { return this._files && this._files.length || 0; }

    onNativeInputFileSelect($event) {
        this._files = $event.srcElement.files;
        this.onFileSelect.emit($event.srcElement.value);
    }

    selectFile() {
        this.nativeInputFile.nativeElement.click();
    }
}
