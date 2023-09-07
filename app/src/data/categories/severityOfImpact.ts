import type { Category } from "@/util/types/Category"
import high from "../options/severityOfImpact/high";
import low from "../options/severityOfImpact/low";
import none from "../options/severityOfImpact/none";
const severityOfImpact : Category = {
    "name": "Severity of Impact",
    "definition": "Describes the severity if uncertainty is not mitigated.",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "options": [ high, low, none ],
    "imagePath": "severityOfImpact.jpg",
    "discussionUrl": ""
}

export default severityOfImpact;