import type { Category } from "@/util/types/Category"
import designTime from "../manifestations/resolutionTime/designTime";
import runTime from "../manifestations/resolutionTime/runTime";
import requirementsTime from "../manifestations/resolutionTime/requirementsTime";
import realizationTime from "../manifestations/resolutionTime/realizationTime";
const resolutionTime : Category = {
    "name": "Resolution Time",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [ designTime, realizationTime, runTime, requirementsTime ],
    "imagePath": "resolutionTime.jpg",
    "discussionUrl": ""
}

export default resolutionTime;