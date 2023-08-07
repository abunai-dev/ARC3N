import type { Category } from "@/util/types/Category"
import high from "../manifestations/severityOfImpact/high";
import low from "../manifestations/severityOfImpact/low";
const severityOfImpact : Category = {
    "name": "Severity of Impact",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [ high, low ],
    "imagePath": "/images/categories/severityOfImpact.jpg"
}

export default severityOfImpact;