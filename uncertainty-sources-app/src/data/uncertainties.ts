import type { Uncertainty } from "@/util/types/Uncertainty";
import recognizedIgnorance from "./manifestations/type/recognizedIgnorance";
import partialReducible from "./manifestations/manageability/partialReducible";
import runTime from "./manifestations/resolutionTime/runTime";
import notReducible from "./manifestations/reducibleByADD/notReducible";
import indirect from "./manifestations/impactOnConfidentiality/indirect";
import high from "./manifestations/severityOfImpact/high";
import { Keyword } from "@/util/types/Keyword";
import inputLocation from "./manifestations/location/input";
import usageBehaviour from "./manifestations/architecturalElementType/usageBehaviour";
import systemBehaviour from "./manifestations/location/systembehaviour";
import interfaceManifestation from "./manifestations/architecturalElementType/interface";
import low from "./manifestations/severityOfImpact/low";
import { RelationshipPosition } from "@/util/types/RelationshipPosition";

const uncertainties : Uncertainty[] = [
    {
        "id": 1,
        "name": "Are SQL Injections performed?",
        "location": inputLocation,
        "architecturalType": usageBehaviour,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [],
        "url": "http://www.google.com",
        "description": "This is a Test if the description of uncertainty two can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty two can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty two can be displayed correctly.",
        "exampleImagePath": "uncertaintyone.jpg",
        "communityAnnotationUrl": "http://www.google.com"
    },
    {
        "id": 2,
        "name": "Are the access control rules correct?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
                {
                    "relatedToId": 1,
                    "positionInRelationship": RelationshipPosition.Parent
                },
                {
                    "relatedToId": 3
                }  
            ],
        "url": "http://www.google.com",
        "description": "This is a Test if the description of uncertainty two can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty two can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty two can be displayed correctly.",
        "exampleImagePath": "uncertaintytwo.jpg",
        "communityAnnotationUrl": "http://www.google.com"
    }
]

export default uncertainties;