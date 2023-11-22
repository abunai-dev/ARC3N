import type { BaseUncertainty, Uncertainty } from '../uncertainty/Uncertainty'

/**
 * Abstract class for getting uncertainties from a resource
 */
export abstract class ResourceGetter {
  /**
   * Get the amount of uncertainties
   */
  public abstract getUncertaintyCount(): Promise<number>

  /**
   * Get the amount of uncertainties per page. Equals the maximum amount of uncertainties that can be retrieved at once by {@link getList}
   */
  public abstract getPerPageAmount(): number

  /**
   * Gets a list of uncertainties
   * @param page The page to get the uncertainties from. Starts at 1
   */
  public abstract getList(page: number): Promise<BaseUncertainty[]>

  /**
   * Gets a single uncertainty
   * @param id The id of the uncertainty to get
   */
  public abstract getUncertainty(id: number): Promise<Uncertainty>
}
