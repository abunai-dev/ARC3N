import type { ClassOption } from './ClassOption'
import SeverityOfTheImpactClassStaticData from './SeverityOfTheImpactStaticData.json'

/**
 * List of all options of the Severity of the Impact Class
 */
export enum SeverityOfTheImpactClassOptions {
  HIGH = 'High',
  LOW = 'Low',
  NONE = 'None'
}

/**
 * Map of all options of the Severity of the Impact Class
 */
export const severityOfTheImpactClassOptions = SeverityOfTheImpactClassStaticData as Record<
  SeverityOfTheImpactClassOptions,
  ClassOption
>
