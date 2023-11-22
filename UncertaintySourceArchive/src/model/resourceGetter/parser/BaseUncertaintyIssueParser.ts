import type { BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { AbstractParser } from './AbstractParser'

/**
 * Parses the machine-readable part of an issue body to get information about a uncertainty
 */
export class BaseUncertaintyIssueParser extends AbstractParser<BaseUncertainty> {
  public parse(data: string): BaseUncertainty {
    void data
    throw new Error('Method not implemented.')
  }
}
