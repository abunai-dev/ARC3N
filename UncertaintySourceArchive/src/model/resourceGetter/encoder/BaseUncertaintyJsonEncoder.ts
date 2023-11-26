import type { BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { AbstractEncoder } from './AbstractEncoder'

export class BaseUncertaintyJsonEncoder extends AbstractEncoder<BaseUncertainty> {
  public encode(data: BaseUncertainty): string {
    return JSON.stringify(data)
  }
}
