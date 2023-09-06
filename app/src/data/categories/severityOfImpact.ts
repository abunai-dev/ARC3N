import type { Category } from "@/util/types/Category"
import high from "../options/severityOfImpact/high";
import low from "../options/severityOfImpact/low";
const severityOfImpact : Category = {
    "name": "Severity of Impact",
    "definition": "Describes the severity if uncertainty is not mitigated.",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "options": [ high, low ],
    "imagePath": "severityOfImpact.jpg",
    "discussionUrl": ""
}

export default severityOfImpact;