import type { Category } from "@/util/types/Category"
import designTime from "../options/resolutionTime/designTime";
import runTime from "../options/resolutionTime/runTime";
import requirementsTime from "../options/resolutionTime/requirementsTime";
import realizationTime from "../options/resolutionTime/realizationTime";
const resolutionTime : Category = {
    "name": "Resolution Time",
    "definition": "Time at which the uncertainty is expected to be fully resolved.",
    "description": "",
    "exampleScenario": '',
    "options": [ designTime, realizationTime, runTime, requirementsTime ],
    "imagePath": "resolutionTime.jpg",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/26"
}

export default resolutionTime;