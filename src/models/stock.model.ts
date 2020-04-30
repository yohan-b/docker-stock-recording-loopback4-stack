import {Entity, model, property} from '@loopback/repository';

@model()
export class Stock extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  time: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  volume: number;

  @property({
    type: 'string',
    required: true,
  })
  metric: string;


  constructor(data?: Partial<Stock>) {
    super(data);
  }
}

export interface StockRelations {
  // describe navigational properties here
}

export type StockWithRelations = Stock & StockRelations;
