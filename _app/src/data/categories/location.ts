import type { Category } from "@/util/types/Category"
import Input from "@/data/options/location/input"
import systemBehaviour from "@/data/options/location/systembehaviour"
import systemEnvironment from "../options/location/systemenvironment";
import systemStructure from "../options/location/systemstructure";

const location : Category = {
    "name": "Location",
    "definition": "Describes where an uncertainty manifests itself within the architecture.",
    "description": "",
    "exampleScenario": 'The system environment is outside of the system structure. Within the system structure resides the system behaviour. The system behaviour is influenced by the input.',
    "options": [Input, systemBehaviour, systemEnvironment, systemStructure ],
    "imagePath": "location.png",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/3"
}

export default location;