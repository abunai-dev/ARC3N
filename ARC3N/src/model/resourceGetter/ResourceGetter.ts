import type { BaseUncertainty, JsonUncertainty, Uncertainty } from '../uncertainty/Uncertainty'
import type { AbstractParser } from './parser/AbstractParser'
import { JsonParser } from './parser/JsonParser'

/**
 * Gets uncertainties from a JSON file
 */
abstract class ResourceGetter {
  private rawContent: Map<number, JsonUncertainty>
  private parser: AbstractParser<JsonUncertainty, Uncertainty>

  constructor() {
    this.rawContent = new Map()
    this.parser = new JsonParser()
  }

  /** @inheritdoc */
  public async getAll(): Promise<BaseUncertainty[]> {
    return this.getFileContent()
  }

  public async getUncertainty(id: number) {
    return this.parser.parse(await this.getJsonUncertainty(id))
  }

  public async getBaseUncertainty(id: number): Promise<BaseUncertainty> {
    return this.getJsonUncertainty(id)
  }

  public abstract getFileUrl(): string

  public async getFileContent() {
    if (this.rawContent.size > 0) {
      return Array.from(this.rawContent.values())
    }

    const content: JsonUncertainty[] = await fetch(this.getFileUrl())
      .then((r) => {
        return r.json()
      })
      .catch((e) => {
        console.error('Error fetching uncertainties', e)
      })

    content.forEach((c) => {
      this.rawContent.set(c.id, c)
    })

    return content
  }

  private async getJsonUncertainty(id: number) {
    if (!this.rawContent.has(id)) {
      await this.getFileContent()
    }
    return this.rawContent.get(id) as JsonUncertainty
  }
}

class DefaultResourceGetter extends ResourceGetter {
  public getFileUrl(): string {
    return window.location.origin + '/data.json'
  }
}

class TestingResourceGetter extends ResourceGetter {
  public getFileUrl(): string {
    return window.location.origin + '/test.json'
  }
}

export const resourceGetter =
  import.meta.env.MODE == 'dev' ? new TestingResourceGetter() : new DefaultResourceGetter()
