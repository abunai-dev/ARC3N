import { ArchitecturalElementTypeClassOptions } from './options/ArchitecturalElementTypeClassOptions'
import { ImpactOnConfidentialityClassOptions } from './options/ImpactOnConfidentialityClassOptions'
import { LocationClassOptions } from './options/LocationClassOptions'
import { ManagabilityClassOptions } from './options/ManagabilityClassOption'
import { ReducibleByAddClassOptions } from './options/ReducibleByAddClassOptions'
import { ResolutionTimeClassOptions } from './options/ResolutionTimeClassOptions'
import { SeverityOfTheImpactClassOptions } from './options/SeverityOfTheImpactClassOptions'
import { TypeClassOptions } from './options/TypeClassOptions'
import StaticClassData from './StaticClassData.json'

interface StaticClass {
  name: string
  description: string
  exampleText: string
  /** need to be insertable into the src of an img html tag */
  exampleImages: string[]
}

/**
 * Represents a class of the classification
 */
export interface Class<T> extends StaticClass {
  /** This list implies a natural ordering from smallest to largest */
  options: T[]
}

/**
 * List of all classes of the classification
 */
export enum Classes {
  LOCATION = 'Location',
  ARCHITECTURAL_ELEMENT_TYPE = 'ArchitecturalElementType',
  TYPE = 'Type',
  MANAGABILITY = 'Managability',
  RESOLUTION_TIME = 'ResolutionTime',
  REDUCIBLE_BY_ADD = 'ReducibleByADD',
  IMPACT_ON_CONFIDENTIALITY = 'ImpactOnConfidentiality',
  SEVERITY_OF_IMPACT = 'SeverityOfTheImpact'
}

export const classesValues = [
  Classes.LOCATION,
  Classes.ARCHITECTURAL_ELEMENT_TYPE,
  Classes.TYPE,
  Classes.MANAGABILITY,
  Classes.RESOLUTION_TIME,
  Classes.REDUCIBLE_BY_ADD,
  Classes.IMPACT_ON_CONFIDENTIALITY,
  Classes.SEVERITY_OF_IMPACT
]

/**
 * Map of all classes of the classification
 */
export const classes = {
  [Classes.LOCATION]: {
    ...StaticClassData[Classes.LOCATION],
    options: [
      LocationClassOptions.STRUCTURE,
      LocationClassOptions.BEHAVIOR,
      LocationClassOptions.ENVIRONMENT,
      LocationClassOptions.INPUT
    ]
  } as Class<LocationClassOptions>,
  [Classes.ARCHITECTURAL_ELEMENT_TYPE]: {
    ...StaticClassData[Classes.ARCHITECTURAL_ELEMENT_TYPE],
    options: [
      ArchitecturalElementTypeClassOptions.COMPONENT,
      ArchitecturalElementTypeClassOptions.CONNECTOR,
      ArchitecturalElementTypeClassOptions.INTERFACE,
      ArchitecturalElementTypeClassOptions.EXTERNAL_RESOURCE,
      ArchitecturalElementTypeClassOptions.BEHAIOUR_DESCRIPTION
    ]
  } as Class<ArchitecturalElementTypeClassOptions>,
  [Classes.TYPE]: {
    ...StaticClassData[Classes.TYPE],
    options: [
      TypeClassOptions.STATISTICAL_UNCERTAINTY,
      TypeClassOptions.SCENARIO_UNCERTAINTY,
      TypeClassOptions.RECOGNIZED_UNCERTAINTY
    ]
  } as Class<TypeClassOptions>,
  [Classes.MANAGABILITY]: {
    ...StaticClassData[Classes.MANAGABILITY],
    options: [
      ManagabilityClassOptions.FULLY_REDUCIBLE,
      ManagabilityClassOptions.PARTIALLY_REDUCIBLE,
      ManagabilityClassOptions.IRRIDUCIBLE
    ]
  } as Class<ManagabilityClassOptions>,
  [Classes.RESOLUTION_TIME]: {
    ...StaticClassData[Classes.RESOLUTION_TIME],
    options: [
      ResolutionTimeClassOptions.REQUIREMENTS_TIME,
      ResolutionTimeClassOptions.DESIGN_TIME,
      ResolutionTimeClassOptions.REALITAION_TIME,
      ResolutionTimeClassOptions.RUNTIME
    ]
  } as Class<ResolutionTimeClassOptions>,
  [Classes.REDUCIBLE_BY_ADD]: {
    ...StaticClassData[Classes.REDUCIBLE_BY_ADD],
    options: [ReducibleByAddClassOptions.YES, ReducibleByAddClassOptions.NO]
  } as Class<ReducibleByAddClassOptions>,
  [Classes.IMPACT_ON_CONFIDENTIALITY]: {
    ...StaticClassData[Classes.IMPACT_ON_CONFIDENTIALITY],
    options: [
      ImpactOnConfidentialityClassOptions.DIRECT,
      ImpactOnConfidentialityClassOptions.INDIRECT,
      ImpactOnConfidentialityClassOptions.NONE
    ]
  } as Class<ImpactOnConfidentialityClassOptions>,
  [Classes.SEVERITY_OF_IMPACT]: {
    ...StaticClassData[Classes.SEVERITY_OF_IMPACT],
    options: [
      SeverityOfTheImpactClassOptions.HIGH,
      SeverityOfTheImpactClassOptions.LOW,
      SeverityOfTheImpactClassOptions.NONE
    ]
  } as Class<SeverityOfTheImpactClassOptions>
}
