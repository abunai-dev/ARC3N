import type { Category } from "@/util/types/Category"
import designTime from "../manifestations/resolutionTime/designTime";
import runTime from "../manifestations/resolutionTime/runTime";
import requirementsTime from "../manifestations/resolutionTime/requirementsTime";
const resolutionTime : Category = {
    "name": "Resolution Time",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [ designTime, runTime, requirementsTime ],
    "imagePath": "/api/images/categories/resolutionTime.jpg"
}

export default resolutionTime;