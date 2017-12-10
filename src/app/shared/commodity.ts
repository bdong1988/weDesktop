export class Commodity {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  count: number;
  selected: boolean;
  bLack: boolean = false;
  currentAmount: number;
}
