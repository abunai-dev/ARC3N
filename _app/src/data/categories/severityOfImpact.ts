import type { Category } from "@/util/types/Category"
import high from "../options/severityOfImpact/high";
import low from "../options/severityOfImpact/low";
import none from "../options/severityOfImpact/none";
const severityOfImpact : Category = {
    "name": "Severity of Impact",
    "definition": "Describes the severity if uncertainty is not mitigated.",
    "description": "",
    "exampleScenario": '',
    "options": [ high, low, none ],
    "imagePath": "severityofimpact.png",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/29"
}

export default severityOfImpact;