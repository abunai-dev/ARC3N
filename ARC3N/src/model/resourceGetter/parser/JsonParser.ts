import type { JsonUncertainty, Uncertainty } from '@/model/uncertainty/Uncertainty'
import { AbstractParser } from './AbstractParser'
import { resourceGetter } from '../ResourceGetter'

export class JsonParser extends AbstractParser<JsonUncertainty, Uncertainty> {
  public async parse(data: JsonUncertainty): Promise<Uncertainty> {
    const related = await Promise.all(
      data.relatedUncertainties.map((u) => resourceGetter.getBaseUncertainty(u))
    )
    const children = await Promise.all(
      data.children.map((u) => resourceGetter.getBaseUncertainty(u))
    )
    const parent = data.parent ? await resourceGetter.getBaseUncertainty(data.parent) : undefined
    return {
      id: data.id,
      name: data.name,
      classes: data.classes,
      keywords: data.keywords,
      description: data.description,
      exampleText: data.exampleText,
      exampleImages: data.exampleImages,
      relatedUncertainties: related,
      children: children,
      parent: parent,
      sourceReferenceLink: data.sourceReferenceLink
    }
  }
}
