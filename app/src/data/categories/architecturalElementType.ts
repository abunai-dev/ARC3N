import type { Category } from "@/util/types/Category"
import component from "../options/architecturalElementType/component";
import connector from "../options/architecturalElementType/connector";
import hardwareResource from "../options/architecturalElementType/hardwareResource";
import interfaceManifestation from "../options/architecturalElementType/interface";
import usageBehaviour from "../options/architecturalElementType/usageBehaviour";
const architecturalElementType : Category = {
    "name": "Architectural Element Type",
    "definition": "Elements to which an uncertainty can be assigned.",
    "description": "",
    "exampleScenario": '',
    "options": [ component, connector, hardwareResource, interfaceManifestation, usageBehaviour ],
    "imagePath": "architecturalelementtype.png",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/4"
}

export default architecturalElementType;