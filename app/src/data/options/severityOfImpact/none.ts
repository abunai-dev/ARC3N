import type { SeverityOfImpactOption } from "@/util/types/Option"
const none : SeverityOfImpactOption =
{
    "type" : "severityOfImpact",
    "name": "None",
    "definition": "No loss of confidentiality expected at all",
    "exampleScenarios": [
        "The user somehow gets access to metadata when interacting with a system."
    ]
}
export default none;