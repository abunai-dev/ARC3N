import type { Category } from "@/util/types/Category"
import Input from "@/data/options/location/input"
import systemBehaviour from "@/data/options/location/systembehaviour"
import systemEnvironment from "../options/location/systemenvironment";
import systemStructure from "../options/location/systemstructure";

const location : Category = {
    "name": "Location",
    "definition": "Describes where uncertainty manifests itself within the architecture.",
    "description": "",
    "exampleScenarios": [],
    "options": [Input, systemBehaviour, systemEnvironment, systemStructure ],
    "imagePath": "location.jpg",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/3"
}

export default location;