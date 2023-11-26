import type { Uncertainty } from '@/model/uncertainty/Uncertainty'
import { AbstractParser } from './AbstractParser'
import { BaseUncertaintyIssueParser } from './BaseUncertaintyIssueParser'

/**
 * Parses an issue body to get information about a uncertainty
 */
export class UncertaintyIssueParser extends AbstractParser<Uncertainty> {
  /** @inheritdoc */
  parse(data: string): Uncertainty {
    // TODO: Implement
    return {
      ...new BaseUncertaintyIssueParser().parse(data),
      description: '',
      exampleText: '',
      exampleImages: [],
      relatedUncertainties: [],
      children: []
    }
  }
}
