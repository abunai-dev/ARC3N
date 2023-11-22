import type { ClassOption } from './ClassOption'

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
export const severityOfTheImpactClassOptions = {} as Record<
  SeverityOfTheImpactClassOptions,
  ClassOption
>
