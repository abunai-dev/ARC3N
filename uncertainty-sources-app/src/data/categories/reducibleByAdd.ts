import type { Category } from "@/util/types/Category"
import notReducible from "../manifestations/reducibleByADD/notReducible";
import reducible from "../manifestations/reducibleByADD/reducible";
const reducibleByAdd : Category = {
    "name": "Reducible by Add",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [ notReducible, reducible ],
    "imagePath": "/images/categories/reducibleByAdd.jpg"
}

export default reducibleByAdd;