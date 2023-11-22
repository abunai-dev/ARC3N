/**
 * Represents a value a class can have
 */
export interface ClassOption {
  name: string
  description: string
  example: string
  /** need to be insertable into the src of an img html tag */
  exampleImages: string[]
}
