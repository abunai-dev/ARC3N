import { ArchitecturalElementTypeOptionList } from './options/ArchitecturalElementTypeOptions'
import { ImpactOnConfidentialityOptionList } from './options/ImpactOnConfidentialityOptions'
import { LocationOptionList } from './options/LocationOptions'
import { ManagabilityOptionList } from './options/ManagabilityOption'
import { ReducibleByAddOptionList } from './options/ReducibleByAddOptions'
import { ResolutionTimeOptionList } from './options/ResolutionTimeOptions'
import { SeverityOfTheImpactOptionList } from './options/SeverityOfTheImpactOptions'
import { TypeOptionList } from './options/TypeOptions'
import StaticCategoryData from './StaticCategoryData.json'

interface StaticCategory {
  name: string
  description: string
  exampleText: string
  /** need to be insertable into the src of an img html tag */
  exampleImages: string[]
}

/**
 * Represents a class of the classification
 */
export interface Category<T> extends StaticCategory {
  /** This list implies a natural ordering from smallest to largest */
  options: T[]
}

/**
 * List of all classes of the classification
 */
export enum CategoryList {
  LOCATION = 'Location',
  ARCHITECTURAL_ELEMENT_TYPE = 'ArchitecturalElementType',
  TYPE = 'Type',
  MANAGABILITY = 'Managability',
  RESOLUTION_TIME = 'ResolutionTime',
  REDUCIBLE_BY_ADD = 'ReducibleByADD',
  IMPACT_ON_CONFIDENTIALITY = 'ImpactOnConfidentiality',
  SEVERITY_OF_IMPACT = 'SeverityOfTheImpact'
}

export const categoryOrder = [
  CategoryList.LOCATION,
  CategoryList.ARCHITECTURAL_ELEMENT_TYPE,
  CategoryList.TYPE,
  CategoryList.MANAGABILITY,
  CategoryList.RESOLUTION_TIME,
  CategoryList.REDUCIBLE_BY_ADD,
  CategoryList.IMPACT_ON_CONFIDENTIALITY,
  CategoryList.SEVERITY_OF_IMPACT
]

/**
 * Map of all classes of the classification
 */
export const categories = {
  [CategoryList.LOCATION]: {
    ...StaticCategoryData[CategoryList.LOCATION],
    options: [
      LocationOptionList.STRUCTURE,
      LocationOptionList.BEHAVIOR,
      LocationOptionList.ENVIRONMENT,
      LocationOptionList.INPUT
    ]
  } as Category<LocationOptionList>,
  [CategoryList.ARCHITECTURAL_ELEMENT_TYPE]: {
    ...StaticCategoryData[CategoryList.ARCHITECTURAL_ELEMENT_TYPE],
    options: [
      ArchitecturalElementTypeOptionList.COMPONENT,
      ArchitecturalElementTypeOptionList.CONNECTOR,
      ArchitecturalElementTypeOptionList.INTERFACE,
      ArchitecturalElementTypeOptionList.EXTERNAL_RESOURCE,
      ArchitecturalElementTypeOptionList.BEHAIOUR_DESCRIPTION
    ]
  } as Category<ArchitecturalElementTypeOptionList>,
  [CategoryList.TYPE]: {
    ...StaticCategoryData[CategoryList.TYPE],
    options: [
      TypeOptionList.STATISTICAL_UNCERTAINTY,
      TypeOptionList.SCENARIO_UNCERTAINTY,
      TypeOptionList.RECOGNIZED_UNCERTAINTY
    ]
  } as Category<TypeOptionList>,
  [CategoryList.MANAGABILITY]: {
    ...StaticCategoryData[CategoryList.MANAGABILITY],
    options: [
      ManagabilityOptionList.FULLY_REDUCIBLE,
      ManagabilityOptionList.PARTIALLY_REDUCIBLE,
      ManagabilityOptionList.IRRIDUCIBLE
    ]
  } as Category<ManagabilityOptionList>,
  [CategoryList.RESOLUTION_TIME]: {
    ...StaticCategoryData[CategoryList.RESOLUTION_TIME],
    options: [
      ResolutionTimeOptionList.REQUIREMENTS_TIME,
      ResolutionTimeOptionList.DESIGN_TIME,
      ResolutionTimeOptionList.REALITAION_TIME,
      ResolutionTimeOptionList.RUNTIME
    ]
  } as Category<ResolutionTimeOptionList>,
  [CategoryList.REDUCIBLE_BY_ADD]: {
    ...StaticCategoryData[CategoryList.REDUCIBLE_BY_ADD],
    options: [ReducibleByAddOptionList.YES, ReducibleByAddOptionList.NO]
  } as Category<ReducibleByAddOptionList>,
  [CategoryList.IMPACT_ON_CONFIDENTIALITY]: {
    ...StaticCategoryData[CategoryList.IMPACT_ON_CONFIDENTIALITY],
    options: [
      ImpactOnConfidentialityOptionList.DIRECT,
      ImpactOnConfidentialityOptionList.INDIRECT,
      ImpactOnConfidentialityOptionList.NONE
    ]
  } as Category<ImpactOnConfidentialityOptionList>,
  [CategoryList.SEVERITY_OF_IMPACT]: {
    ...StaticCategoryData[CategoryList.SEVERITY_OF_IMPACT],
    options: [
      SeverityOfTheImpactOptionList.HIGH,
      SeverityOfTheImpactOptionList.LOW,
      SeverityOfTheImpactOptionList.NONE
    ]
  } as Category<SeverityOfTheImpactOptionList>
}