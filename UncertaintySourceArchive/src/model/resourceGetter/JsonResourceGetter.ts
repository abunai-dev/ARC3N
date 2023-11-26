import type { BaseUncertainty, Uncertainty } from '../uncertainty/Uncertainty'
import { ResourceGetter } from './ResourceGetter'
import testData from './testData.json'

type JsonUncertainty = BaseUncertainty & {
  description: string
  exampleText: string
  exampleImages: string[]
  relatedUncertainties: number[]
  children: number[]
  parent?: number
}

/**
 * Gets uncertainties from a JSON file
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class JsonResourceGetter extends ResourceGetter {
  public getUncertaintyCount(): Promise<number> {
    return Promise.resolve(this.getDefaultPerPageAmount())
  }

  public getDefaultPerPageAmount(): number {
    return testData.uncertainties.length
  }

  public async getList(page: number, perPage: number): Promise<BaseUncertainty[]> {
    void page, perPage
    return testData.uncertainties as BaseUncertainty[]
  }

  public getBaseUncertainty(id: number): BaseUncertainty {
    const uncertainty = (testData.uncertainties as BaseUncertainty[]).find(
      (uncertainty) => uncertainty.id === id
    ) as BaseUncertainty | undefined
    if (uncertainty) {
      return uncertainty
    }
    throw new Error(`Uncertainty with id ${id} not found`)
  }

  public async getUncertainty(id: number): Promise<Uncertainty> {
    const uncertainty = (testData.uncertainties as JsonUncertainty[]).find(
      (uncertainty) => uncertainty.id === id
    ) as JsonUncertainty | undefined
    if (uncertainty) {
      return {
        ...uncertainty,
        relatedUncertainties: uncertainty.relatedUncertainties.map((id) =>
          this.getBaseUncertainty(id)
        ),
        children: uncertainty.children.map((id) => this.getBaseUncertainty(id)),
        parent: uncertainty.parent ? this.getBaseUncertainty(uncertainty.parent) : undefined
      }
    }
    throw new Error(`Uncertainty with id ${id} not found`)
  }
}
