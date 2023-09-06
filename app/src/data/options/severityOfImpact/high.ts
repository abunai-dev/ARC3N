import type { SeverityOfImpactOption } from "../../../util/types/Option"
const high : SeverityOfImpactOption =
{
    "type": "severityOfImpact",
    "name": "High",
    "definition": "Total loss of confidentiality, or sensitive data",
    "exampleScenarios": [
        "an admin's password might get leaked"
    ]
}
export default high;