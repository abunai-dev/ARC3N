/**
 * Template for parsers
 */
export abstract class AbstractParser<T> {
  /**
   * Parses a given string into a given type
   * @param data Data to parse
   */
  public abstract parse(data: string): Promise<T>
}
