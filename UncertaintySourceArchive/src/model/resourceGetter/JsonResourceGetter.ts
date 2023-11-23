import type { BaseUncertainty, Uncertainty } from '../uncertainty/Uncertainty'
import { ResourceGetter } from './ResourceGetter'
import testData from './testData.json'

/**
 * Gets uncertainties from a JSON file
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class JsonResourceGetter extends ResourceGetter {
  public getUncertaintyCount(): Promise<number> {
    return Promise.resolve(this.getPerPageAmount())
  }

  public getPerPageAmount(): number {
    return testData.uncertainties.length
  }

  public async getList(page: number): Promise<BaseUncertainty[]> {
    void page
    return testData.uncertainties as BaseUncertainty[]
  }

  public async getUncertainty(id: number): Promise<Uncertainty> {
    const uncertainty = (testData.uncertainties as Uncertainty[]).find(
      (uncertainty) => uncertainty.id === id
    ) as Uncertainty | undefined
    if (uncertainty) {
      return uncertainty
    }
    throw new Error(`Uncertainty with id ${id} not found`)
  }
}
