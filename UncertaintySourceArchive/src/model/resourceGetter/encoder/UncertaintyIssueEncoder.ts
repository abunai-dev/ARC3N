import type { Uncertainty, BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { AbstractEncoder } from './AbstractEncoder'
import { BaseUncertaintyJsonEncoder } from './BaseUncertaintyJsonEncoder'
import { categoryOrder, type CategoryList, categories } from '../../categories/Category'
import { categoryOptions, type CategoryOptionList } from '../../categories/options/CategoryOption'

export class UncertaintyIssueEncoder extends AbstractEncoder<Uncertainty> {
  public static readonly BASE_UNCERTAINTY_ID = 8672
  public static readonly DESCRIPTION_ID = 6725
  public static readonly EXAMPLE_ID = 4369
  public static readonly EXAMPLE_IMAGE_ID = 9265
  public static readonly PARENT_ID = 8570
  public static readonly CHILD_ID = 1324
  public static readonly RELATED_ID = 8623
  public static readonly KEYWORD_ID = 1835
  private static readonly BASE_COMMENT =
    '<!-- Please do not change any content except where comments explizitly allow you too -->'

  public encode(data: Uncertainty): string {
    return `${UncertaintyIssueEncoder.BASE_COMMENT}\n\n${this.formatBaseUncertainty(
      data as BaseUncertainty
    )}\n<h1>${data.name}</h1>\n${this.formatDescription(
      data.description
    )}\n${this.formatClassifications(data.classes)}\n${this.formatExample(
      data.exampleText
    )}\n${this.formatKeywords(
      data.keywords
    )}\n${this.formatExampleImageSection()}${this.formatRelatedUncertainties(data)}\n`
  }

  private formatBaseUncertainty(uncertainty: BaseUncertainty): string {
    return `<!-- ${
      UncertaintyIssueEncoder.BASE_UNCERTAINTY_ID
    }= ${new BaseUncertaintyJsonEncoder().encode(uncertainty)} =${
      UncertaintyIssueEncoder.BASE_UNCERTAINTY_ID
    } -->`
  }

  private formatDescription(description: string): string {
    return `<h2>Description</h2>\n<!-- ${UncertaintyIssueEncoder.DESCRIPTION_ID}= -->\n ${description}\n <!-- =${UncertaintyIssueEncoder.DESCRIPTION_ID} -->`
  }

  private formatClassifications(classifications: Record<CategoryList, CategoryOptionList>): string {
    let result = '<h2>Classifications</h2>\n\n'
    result += '| Category | Option |\n|--|--|\n'
    result += categoryOrder
      .map((category) => {
        return `| ${categories[category].name} | ${
          categoryOptions[classifications[category]].name
        } |`
      })
      .join('\n')
    return result
  }

  private formatKeywords(keywords: string[]): string {
    return `<h2>Keywords</h2>\n<!-- ${UncertaintyIssueEncoder.KEYWORD_ID}= -->\n${keywords.join(
      ', '
    )}\n<!-- =${UncertaintyIssueEncoder.KEYWORD_ID} -->`
  }

  private formatExample(example: string): string {
    return `<h2>Example</h2>\n<!-- ${UncertaintyIssueEncoder.EXAMPLE_ID}= -->\n${example}\n<!-- =${UncertaintyIssueEncoder.EXAMPLE_ID} -->`
  }

  private formatExampleImageSection(): string {
    return `<!-- ${UncertaintyIssueEncoder.EXAMPLE_ID}= -->\n<!-- YOU CAN INSERT IMAGES FOR THE EXAMPLE BELOW THIS COMMENT -->\n\n<!-- YOU CAN INSERT IMAGES FOR THE EXAMPLE ABOVE THIS COMMENT --><!-- =${UncertaintyIssueEncoder.EXAMPLE_ID} -->`
  }

  private formatRelatedUncertainties(uncertainty: {
    parent?: BaseUncertainty
    children: BaseUncertainty[]
    relatedUncertainties: BaseUncertainty[]
  }): string {
    if (
      !uncertainty.parent &&
      uncertainty.children.length === 0 &&
      uncertainty.relatedUncertainties.length === 0
    ) {
      return ''
    }
    let result = '<h2>Related Uncertainties</h2>\n'
    if (uncertainty.parent) {
      result += `<h3>Parent:</h3>\n<!-- ${UncertaintyIssueEncoder.PARENT_ID}= -->#${uncertainty.parent.id}<!-- =${UncertaintyIssueEncoder.PARENT_ID} -->\n`
    }
    if (uncertainty.children.length > 0) {
      result += `<h3>Children:</h3>\n<!-- ${
        UncertaintyIssueEncoder.CHILD_ID
      }= -->\n ${uncertainty.children.map((c) => `#${c.id}`).join(', ')}<!-- =${
        UncertaintyIssueEncoder.CHILD_ID
      } -->\n`
    }
    if (uncertainty.relatedUncertainties.length > 0) {
      result += `<h3>Related Uncertainties:</h3>\n<!-- ${
        UncertaintyIssueEncoder.RELATED_ID
      }= -->\n${uncertainty.relatedUncertainties.map((c) => `#${c.id}`).join(', ')}<!-- =${
        UncertaintyIssueEncoder.RELATED_ID
      } -->`
    }
    return result
  }
}