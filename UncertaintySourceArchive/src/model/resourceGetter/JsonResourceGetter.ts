import type { BaseUncertainty, Uncertainty } from '../uncertainty/Uncertainty'
import { ResourceGetter } from './ResourceGetter'
import data from '../../../public/data.json' assert { type: 'json' }

/**
 * Uncertainty format from testData.json
 */
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
export class JsonResourceGetter extends ResourceGetter {
  /** @inheritdoc */
  public getUncertaintyCount(): Promise<number> {
    return Promise.resolve(this.getDefaultPerPageAmount())
  }

  /** @inheritdoc */
  public getDefaultPerPageAmount(): number {
    return data.uncertainties.length
  }

  /** @inheritdoc */
  public async getPage(page: number, perPage: number): Promise<BaseUncertainty[]> {
    void page, perPage
    return data.uncertainties as BaseUncertainty[]
  }

  /** @inheritdoc */
  public async getAll(): Promise<BaseUncertainty[]> {
    return data.uncertainties as BaseUncertainty[]
  }

  private getBaseUncertainty(id: number): BaseUncertainty {
    const uncertainty = (data.uncertainties as BaseUncertainty[]).find(
      (uncertainty) => uncertainty.id === id
    ) as BaseUncertainty | undefined
    if (uncertainty) {
      return uncertainty
    }
    throw new Error(`Uncertainty with id ${id} not found`)
  }

  /** @inheritdoc */
  public async getUncertainty(id: number): Promise<Uncertainty> {
    const uncertainty = (data.uncertainties as JsonUncertainty[]).find(
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
