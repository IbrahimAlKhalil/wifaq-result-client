export interface Select {
  id: number;
  name: string;
}

export class Input {
  public model;

  constructor(
    public label: string,
    public type: 'text' | 'select' | 'number',
    public data?: Select[]
  ) {
  }
}
