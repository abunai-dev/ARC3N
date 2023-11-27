import type { BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { AbstractIssueParser } from './AbstractIssueParser'
import { UncertaintyIssueEncoder } from '../encoder/UncertaintyIssueEncoder'

/**
 * Parses the machine-readable part of an issue body to get information about a uncertainty
 */
export class BaseUncertaintyIssueParser extends AbstractIssueParser<BaseUncertainty> {
  /** @inheritdoc */
  public parse(data: string): Promise<BaseUncertainty> {
    return Promise.resolve(
      JSON.parse(
        this.extractContentFromIdComment(UncertaintyIssueEncoder.BASE_UNCERTAINTY_ID, data, true)
      ) as BaseUncertainty
    )
  }
}
