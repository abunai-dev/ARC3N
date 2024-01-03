import { AbstractParser } from './AbstractParser'

export abstract class AbstractIssueParser<T> extends AbstractParser<string, T> {
  protected extractContentFromIdComment(
    id: number,
    data: string,
    dataIsInsideComment: boolean = false
  ): string {
    const firstCut = RegExp(`(?:.|\n)*<!-- ${id}= ((?:.|\n)*) =${id} -->`, 'm').exec(data)?.[1]
    if (firstCut === undefined) {
      throw new Error(`Could not find id ${id} in data at 1`)
    }

    if (dataIsInsideComment) {
      return firstCut
    }

    const secondCut = RegExp(`-->((?:.|\n)*)<!--`, 'm').exec(firstCut)?.[1]
    if (secondCut === undefined) {
      throw new Error(`Could not find id ${id} in data at 2`)
    }

    return secondCut.replace(RegExp(`<!--((?:[^-]|\n)*)-->`, 'm'), '').trimStart().trimEnd()
  }
}
