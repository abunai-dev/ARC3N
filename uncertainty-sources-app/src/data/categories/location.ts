import type { Category } from "@/util/types/Category"
import Input from "@/data/manifestations/location/input"
import systemBehaviour from "@/data/manifestations/location/systembehaviour"
import systemEnvironment from "../manifestations/location/systemenvironment";
import systemStructure from "../manifestations/location/systemstructure";

const location : Category = {
    "name": "Location",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [Input, systemBehaviour, systemEnvironment, systemStructure ],
    "imagePath": "location.jpg"
}

export default location;