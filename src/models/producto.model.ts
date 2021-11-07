import {Entity, model, property, hasMany} from '@loopback/repository';
import {Pedido} from './pedido.model';
import {Cliente} from './cliente.model';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    Id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  Precio: number;

  @property({
    type: 'string',
    required: true,
  })
  Imagen: string;

  @property({
    type: 'string',
    required: true,
  })
  Especificaciones: string;

  @property({
    type: 'string',
  })
  pedidoId?: string;

  @hasMany(() => Pedido, {through: {model: () => Cliente}})
  pedidos: Pedido[];

  @hasMany(() => Pedido)
  pedido: Pedido[];

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
