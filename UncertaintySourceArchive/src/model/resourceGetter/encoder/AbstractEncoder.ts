export abstract class AbstractEncoder<T> {
  /**
   * Encodes a given type into a string
   * @param data Data to encode
   */
  public abstract encode(data: T): string
}
