import { ArchitecturalElementTypeOptionList } from './options/ArchitecturalElementTypeOptions'
import { ImpactOnConfidentialityOptionList } from './options/ImpactOnConfidentialityOptions'
import { LocationOptionList } from './options/LocationOptions'
import { ManageabilityOptionList } from './options/ManageabilityOption'
import { ReducibleByAddOptionList } from './options/ReducibleByAddOptions'
import { ResolutionTimeOptionList } from './options/ResolutionTimeOptions'
import { SeverityOfTheImpactOptionList } from './options/SeverityOfTheImpactOptions'
import { TypeOptionList } from './options/TypeOptions'
import StaticCategoryData from './StaticCategoryData.json'
import LocationExample1 from '@/assets/categories/location.png'
import ArchitecturelElementTypeExample1 from '@/assets/categories/architecturalelementtype.png'
import ImpactOnCnfidentialityExample1 from '@/assets/categories/impactonconfidentiality.png'
import ManagabilityExample1 from '@/assets/categories/managability.png'
import ReducibleByAddExample1 from '@/assets/categories/reduciblebyadd.png'
import ResolutionTimeExample1 from '@/assets/categories/resolutiontime.png'
import SeverityOfTheImpactExample1 from '@/assets/categories/severityofimpact.png'
import TypeExample1 from '@/assets/categories/type.png'

interface StaticCategory {
  name: string
  description: string
  exampleText: string
  /** need to be insertable into the src of an img html tag */
  exampleImages: string[]
}

/** Represents a category of the classification */
export interface Category<T> extends StaticCategory {
  /** This list implies a natural ordering from smallest to largest */
  options: T[]
}

/** List of all categories of the classification */
export enum CategoryList {
  LOCATION = 'Location',
  ARCHITECTURAL_ELEMENT_TYPE = 'ArchitecturalElementType',
  TYPE = 'Type',
  MANAGEABILITY = 'Manageability',
  RESOLUTION_TIME = 'ResolutionTime',
  REDUCIBLE_BY_ADD = 'ReducibleByADD',
  IMPACT_ON_CONFIDENTIALITY = 'ImpactOnConfidentiality',
  SEVERITY_OF_IMPACT = 'SeverityOfTheImpact'
}

/** List of all categories of the classification in the order they should be displayed */
export const categoryOrder = [
  CategoryList.LOCATION,
  CategoryList.ARCHITECTURAL_ELEMENT_TYPE,
  CategoryList.TYPE,
  CategoryList.MANAGEABILITY,
  CategoryList.RESOLUTION_TIME,
  CategoryList.REDUCIBLE_BY_ADD,
  CategoryList.IMPACT_ON_CONFIDENTIALITY,
  CategoryList.SEVERITY_OF_IMPACT
]

/** Map with detailed information about all categories of the classification */
export const categories = {
  [CategoryList.LOCATION]: {
    ...StaticCategoryData[CategoryList.LOCATION],
    options: [
      LocationOptionList.BEHAVIOR,
      LocationOptionList.ENVIRONMENT,
      LocationOptionList.INPUT,
      LocationOptionList.STRUCTURE
    ],
    exampleImages: [LocationExample1]
  } as Category<LocationOptionList>,
  [CategoryList.ARCHITECTURAL_ELEMENT_TYPE]: {
    ...StaticCategoryData[CategoryList.ARCHITECTURAL_ELEMENT_TYPE],
    options: [
      ArchitecturalElementTypeOptionList.BEHAVIOR_DESCRIPTION,
      ArchitecturalElementTypeOptionList.COMPONENT,
      ArchitecturalElementTypeOptionList.CONNECTOR,
      ArchitecturalElementTypeOptionList.EXTERNAL_RESOURCE,
      ArchitecturalElementTypeOptionList.INTERFACE
    ],
    exampleImages: [ArchitecturelElementTypeExample1]
  } as Category<ArchitecturalElementTypeOptionList>,
  [CategoryList.TYPE]: {
    ...StaticCategoryData[CategoryList.TYPE],
    options: [
      TypeOptionList.STATISTICAL_UNCERTAINTY,
      TypeOptionList.SCENARIO_UNCERTAINTY,
      TypeOptionList.RECOGNIZED_UNCERTAINTY
    ],
    exampleImages: [TypeExample1]
  } as Category<TypeOptionList>,
  [CategoryList.MANAGEABILITY]: {
    ...StaticCategoryData[CategoryList.MANAGEABILITY],
    options: [
      ManageabilityOptionList.FULLY_REDUCIBLE,
      ManageabilityOptionList.PARTIALLY_REDUCIBLE,
      ManageabilityOptionList.IRREDUCIBLE
    ],
    exampleImages: [ManagabilityExample1]
  } as Category<ManageabilityOptionList>,
  [CategoryList.RESOLUTION_TIME]: {
    ...StaticCategoryData[CategoryList.RESOLUTION_TIME],
    options: [
      ResolutionTimeOptionList.REQUIREMENTS_TIME,
      ResolutionTimeOptionList.DESIGN_TIME,
      ResolutionTimeOptionList.REALIZATION_TIME,
      ResolutionTimeOptionList.RUNTIME
    ],
    exampleImages: [ResolutionTimeExample1]
  } as Category<ResolutionTimeOptionList>,
  [CategoryList.REDUCIBLE_BY_ADD]: {
    ...StaticCategoryData[CategoryList.REDUCIBLE_BY_ADD],
    options: [ReducibleByAddOptionList.YES, ReducibleByAddOptionList.NO],
    exampleImages: [ReducibleByAddExample1]
  } as Category<ReducibleByAddOptionList>,
  [CategoryList.IMPACT_ON_CONFIDENTIALITY]: {
    ...StaticCategoryData[CategoryList.IMPACT_ON_CONFIDENTIALITY],
    options: [
      ImpactOnConfidentialityOptionList.DIRECT,
      ImpactOnConfidentialityOptionList.INDIRECT,
      ImpactOnConfidentialityOptionList.NONE
    ],
    exampleImages: [ImpactOnCnfidentialityExample1]
  } as Category<ImpactOnConfidentialityOptionList>,
  [CategoryList.SEVERITY_OF_IMPACT]: {
    ...StaticCategoryData[CategoryList.SEVERITY_OF_IMPACT],
    options: [
      SeverityOfTheImpactOptionList.HIGH,
      SeverityOfTheImpactOptionList.LOW,
      SeverityOfTheImpactOptionList.NONE
    ],
    exampleImages: [SeverityOfTheImpactExample1]
  } as Category<SeverityOfTheImpactOptionList>
}
