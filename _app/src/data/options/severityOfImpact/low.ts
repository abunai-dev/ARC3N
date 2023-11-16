import type { SeverityOfImpactOption } from "@/util/types/Option"
const low : SeverityOfImpactOption =
{
    "type" : "severityOfImpact",
    "name": "Low",
    "definition": "Access to restricted information could be obtained but the damage is limited",
    "exampleScenarios": [
        "User input is not validated before being processed by a software system."
    ]
}
export default low;