/**
 * Template for parsers
 */
export abstract class AbstractParser<B, R> {
  /**
   * Parses a given string into a given type
   * @param data Data to parse
   */
  public abstract parse(data: B): Promise<R>
}
