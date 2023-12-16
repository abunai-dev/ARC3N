import type { Uncertainty } from '@/model/uncertainty/Uncertainty'
import { BaseUncertaintyIssueParser } from './BaseUncertaintyIssueParser'
import { UncertaintyIssueEncoder } from '../encoder/UncertaintyIssueEncoder'
import { AbstractIssueParser } from './AbstractIssueParser'
import { JsonResourceGetter } from '../JsonResourceGetter'

/**
 * Parses an issue body to get information about a uncertainty
 */
export class UncertaintyIssueParser extends AbstractIssueParser<Uncertainty> {
  /** @inheritdoc */
  public async parse(data: string) {
    const childIds = data.includes(UncertaintyIssueEncoder.CHILD_ID.toString())
      ? this.transformIdListToIdArray(
          this.extractContentFromIdComment(UncertaintyIssueEncoder.CHILD_ID, data)
        )
      : []
    const relatedIds = data.includes(UncertaintyIssueEncoder.RELATED_ID.toString())
      ? this.transformIdListToIdArray(
          this.extractContentFromIdComment(UncertaintyIssueEncoder.RELATED_ID, data)
        )
      : []
    const parentId = data.includes(UncertaintyIssueEncoder.PARENT_ID.toString())
      ? parseInt(
          this.extractContentFromIdComment(UncertaintyIssueEncoder.PARENT_ID, data)
            .replace('\n', '')
            .replace(' ', '')
            .trim()
            .substring(1)
        )
      : undefined

    const uncertainties = await this.getUncertaintiesFromIdList([
      ...childIds,
      ...relatedIds,
      ...(parentId ? [parentId] : [])
    ])

    return {
      ...(await new BaseUncertaintyIssueParser().parse(data)),
      description: this.extractContentFromIdComment(UncertaintyIssueEncoder.DESCRIPTION_ID, data),
      exampleText: this.extractContentFromIdComment(UncertaintyIssueEncoder.EXAMPLE_ID, data),
      exampleImages: this.extractImageList(
        this.extractContentFromIdComment(UncertaintyIssueEncoder.EXAMPLE_IMAGE_ID, data)
      ),
      relatedUncertainties: relatedIds.map((id) =>
        uncertainties.find((uncertainty) => uncertainty.id === id)
      ) as Uncertainty[],
      children: childIds.map((id) =>
        uncertainties.find((uncertainty) => uncertainty.id === id)
      ) as Uncertainty[],
      parent: parentId
        ? uncertainties.find((uncertainty) => uncertainty.id === parentId)
        : undefined
    }
  }

  private transformIdListToIdArray(idList: string): number[] {
    return idList
      .replace('\n', '')
      .replace(' ', '')
      .split(',')
      .map((id) => parseInt(id.trim().substring(1)))
  }

  private getUncertaintiesFromIdList(ids: number[]): Promise<Uncertainty[]> {
    return Promise.all(ids.map((id) => new JsonResourceGetter().getUncertainty(id)))
  }

  private extractImageList(imageList: string): string[] {
    const regexp = RegExp(`[^\\]]*\\]\\(([^)]*)\\)`, 'm')
    const potentialImages = imageList.split(/!?\[/)
    const imageLinks = []
    for (const potentialImage of potentialImages) {
      const result = regexp.exec(potentialImage)
      if (result) {
        imageLinks.push(result[1])
      }
    }
    return imageLinks
  }
}
