import { FormControl, Validators } from '@angular/forms';

export class stringData {
  data: string;
  bDirty: boolean = false;
  control: FormControl;
  Changed(): void {
    this.bDirty = true;
  }
}

export class numberData {
  data: number;
  bDirty: boolean = false;
  control: FormControl;
    Changed(): void {
      this.bDirty = true;
    }
}
