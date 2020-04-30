import {DefaultCrudRepository} from '@loopback/repository';
import {Stock, StockRelations} from '../models';
import {StockRecordingMariadbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StockRepository extends DefaultCrudRepository<
  Stock,
  typeof Stock.prototype.id,
  StockRelations
> {
  constructor(
    @inject('datasources.stock_recording_mariadb') dataSource: StockRecordingMariadbDataSource,
  ) {
    super(Stock, dataSource);
  }
}
