import type { Uncertainty } from "@/util/types/Uncertainty";
import recognizedIgnorance from "./options/type/recognizedIgnorance";
import partialReducible from "./options/manageability/partialReducible";
import runTime from "./options/resolutionTime/runTime";
import notReducible from "./options/reducibleByADD/notReducible";
import indirect from "./options/impactOnConfidentiality/indirect";
import high from "./options/severityOfImpact/high";
import { Keyword } from "@/util/types/Keyword";
import inputLocation from "./options/location/input";
import usageBehaviour from "./options/architecturalElementType/usageBehaviour";
import systemBehaviour from "./options/location/systembehaviour";
import interfaceManifestation from "./options/architecturalElementType/interface";
import low from "./options/severityOfImpact/low";
import { RelationshipPosition } from "@/util/types/RelationshipPosition";
import irreducible from "./options/manageability/irreducible";
import connector from "./options/architecturalElementType/connector";
import scenarioUncertainty from "./options/type/scenarioUncertainty";
import fullyReducible from "./options/manageability/fullyReducible";
import designTime from "./options/resolutionTime/designTime";
import reducible from "./options/reducibleByADD/reducible";
import component from "./options/architecturalElementType/component";
import requirementsTime from "./options/resolutionTime/requirementsTime";
import direct from "./options/impactOnConfidentiality/direct";
import statisticalUncertainty from "./options/type/statisticalUncertainty";
import systemEnvironment from "./options/location/systemenvironment";
import hardwareResource from "./options/architecturalElementType/hardwareResource";
import realizationTime from "./options/resolutionTime/realizationTime";
import systemStructure from "./options/location/systemstructure";

const uncertainties : Uncertainty[] = [
    {
        "id": 1,
        "name": "Are SQL Injections performed?",
        "location": inputLocation,
        "architecturalType": usageBehaviour,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                relatedToId: 4,
                positionInRelationship: RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty two can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty two can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty two can be displayed correctly.",
        "exampleImagePath": "uncertaintyone.jpg",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/1"
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
                "relatedToId": 32,
                "positionInRelationship": RelationshipPosition.Child
            }
            ],
        "description": "This is a Test if the description of uncertainty two can be displayed correctly.",
        "keywords": [Keyword.AccessControl],
        "definition": "This is a Test if the definition of uncertainty two can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty two can be displayed correctly.",
        "exampleImagePath": "uncertaintytwo.jpg",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/2"
    },
    {
        "id": 3,
        "name": "Can access control cover all matters?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 32,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty three can be displayed correctly.",
        "keywords": [Keyword.AccessControl],
        "definition": "This is a Test if the definition of uncertainty three can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty three can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 4,
        "name": "How is communicated?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 9,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 10,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 12,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 16,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 28,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 1,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty four can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty four can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty four can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 5,
        "name": "How is data persisted?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 26
            },
            {
                "relatedToId": 34
            }
        ],
        "description": "This is a Test if the description of uncertainty five can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty five can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty five can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 6,
        "name": "How is metadata handled?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 27,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty six can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty six can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty six can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 7,
        "name": "How is user identification performed?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 38,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty seven can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty seven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty seven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 8,
        "name": "How long is data being stored?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": runTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 22
            },
            {
                "relatedToId": 35
            }
        ],
        "description": "This is a Test if the description of uncertainty eight can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty eight can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty eight can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 9,
        "name": "Is communication intercepted?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": recognizedIgnorance,
        "manageability": fullyReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 4,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty nine can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty nine can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty nine can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 10,
        "name": "Is confidential data transmitted?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 4,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty ten can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty ten can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty ten can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 11,
        "name": "Is data manipulated?",
        "location": inputLocation,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 27,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty eleven can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty eleven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty eleven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 12,
        "name": "Is the communication encrypted?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 4,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty twelve can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty twelve can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twelve can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 13,
        "name": "Is the component currently compromised?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 39,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty thirteen can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty thirteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 14,
        "name": "Is the component insecure due to software?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": statisticalUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 39,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty fourteen can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty fourteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty fourteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 15,
        "name": "Is the component's provider trustworthy?",
        "location": systemEnvironment,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 39,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "",
        "keywords": [Keyword.Trust],
        "definition": "Refers to the fact, that at design time it is not known which component provider will be chosen to provide a component. Thus the trustworthiness of the component provider is unknown.",
        "exampleScenario": "A relatively unknown component provider is chosen for the provision of a database for the software system.",
        "exampleImagePath": "",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/6"
    },
    {
        "id": 16,
        "name": "Is the data anonymized?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 4,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty sixteen can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty sixteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty sixteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 17,
        "name": "Is the data entered correct?",
        "location": inputLocation,
        "architecturalType": usageBehaviour,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 31,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty seventeen can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty seventeen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty seventeen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 18,
        "name": "Is the data to be persisted confidential?",
        "location": systemEnvironment,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 26,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "",
        "keywords": [Keyword.Data],
        "definition": "Refers to the different types of data that are being processed within a software system. Confidential data has to be persisted differently to other data.",
        "exampleScenario": "Credit card information is being processed within a software system. This data has to be persisted in an encrypted way.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 19,
        "name": "Is the deployment provider trustworthy?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": recognizedIgnorance,
        "manageability": irreducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 36,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty nineteen can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty nineteen can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty nineteen can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 20,
        "name": "Is the input validated?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 31,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty twenty can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty twenty can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twenty can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 21,
        "name": "Is the storage encrypted?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 33,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty twentyone can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty twentyone can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyone can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 22,
        "name": "Is user data stored/processed?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 8
            },
            {
                "relatedToId": 35
            }
        ],
        "description": "This is a Test if the description of uncertainty twentytwo can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty twentytwo can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentytwo can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 23,
        "name": "Is virtualization used?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": realizationTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty twentythree can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentythree can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentythree can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 24,
        "name": "What data is entered?",
        "location": inputLocation,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 31,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty twentyfour can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty twentyfour can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyfour can be displayed correctly.",
        "exampleImagePath": "uncertaintythree.jpg",
        "communityAnnotationUrl": ""
    },
    {
        "id": 25,
        "name": "What data is logged?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 27,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty twentyfive can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty twentyfive can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyfive can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 26,
        "name": "What data is persisted?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": recognizedIgnorance,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 5
            },
            {
                "relatedToId": 34
            },
            {
                "relatedToId": 18,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty twentysix can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty twentysix can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentysix can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 27,
        "name": "What data is provided?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 25,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 11,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 6,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty twentyseven can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty twentyseven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyseven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 28,
        "name": "What is the behavior of the component?",
        "location": systemBehaviour,
        "architecturalType": component,
        "type": statisticalUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 4,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty twentyeight can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty twentyeight can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentyeight can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 29,
        "name": "What is the distribution?",
        "location": systemStructure,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 30,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 39,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "",
        "keywords": [],
        "definition": "Refers to the different possibilities a software system might be allocated.",
        "exampleScenario": "A software system is deployed on a single server.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 30,
        "name": "What is the structure of the interface?",
        "location": systemStructure,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 29,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty thirty can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirty can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirty can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 31,
        "name": "What is the user behavior?",
        "location": inputLocation,
        "architecturalType": usageBehaviour,
        "type": statisticalUncertainty,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 24,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 17,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 20,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "",
        "keywords": [],
        "definition": "Refers to the fact that users might use a system in different ways.",
        "exampleScenario": "A user puts in his credit card information in the wrong input field.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 32,
        "name": "What kind of access control is used?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 2,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 3,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 37,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 38,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty thirtytwo can be displayed correctly.",
        "keywords": [Keyword.AccessControl],
        "definition": "This is a Test if the definition of uncertainty thirtytwo can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtytwo can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 33,
        "name": "What kind of storage is used?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 21,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty thirtythree can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtythree can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtythree can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 34,
        "name": "Where is data persisted?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": realizationTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [],
        "description": "This is a Test if the description of uncertainty thirtyfour can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty thirtyfour can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyfour can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 35,
        "name": "Where is data processed?",
        "location": systemBehaviour,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 8
            },
            {
                "relatedToId": 22
            }
        ],
        "description": "This is a Test if the description of uncertainty thirtyfive can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty thirtyfive can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyfive can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 36,
        "name": "Where is deployed?",
        "location": systemEnvironment,
        "architecturalType": hardwareResource,
        "type": scenarioUncertainty,
        "manageability": partialReducible,
        "resolutionTime": realizationTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": direct,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 19,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty thirtysix can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtysix can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtysix can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 37,
        "name": "Which access rights does a subject have?",
        "location": systemBehaviour,
        "architecturalType": connector,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": requirementsTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": high,
        "relations": [
            {
                "relatedToId": 32,
                "positionInRelationship": RelationshipPosition.Child
            }
        ],
        "description": "This is a Test if the description of uncertainty thirtyseven can be displayed correctly.",
        "keywords": [Keyword.AccessControl],
        "definition": "This is a Test if the definition of uncertainty thirtyseven can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyseven can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 38,
        "name": "Which authentication mechanisms are used?",
        "location": systemBehaviour,
        "architecturalType": interfaceManifestation,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 32,
                "positionInRelationship": RelationshipPosition.Child
            },
            {
                "relatedToId": 7,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty thirtyeight can be displayed correctly.",
        "keywords": [Keyword.Trust],
        "definition": "This is a Test if the definition of uncertainty thirtyeight can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyeight can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 39,
        "name": "Which component is chosen?",
        "location": systemStructure,
        "architecturalType": component,
        "type": scenarioUncertainty,
        "manageability": fullyReducible,
        "resolutionTime": designTime,
        "reducibleByADD": reducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [
            {
                "relatedToId": 29,
                "positionInRelationship": RelationshipPosition.Child
            },
            {
                "relatedToId": 13,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 14,
                "positionInRelationship": RelationshipPosition.Parent
            },
            {
                "relatedToId": 15,
                "positionInRelationship": RelationshipPosition.Parent
            }

        ],
        "description": "This is a Test if the description of uncertainty thirtynine can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtynine can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty thirtynine can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    },
    {
        "id": 40,
        "name": "Which subjects access the interface?",
        "location": inputLocation,
        "architecturalType": interfaceManifestation,
        "type": recognizedIgnorance,
        "manageability": partialReducible,
        "resolutionTime": runTime,
        "reducibleByADD": notReducible,
        "impactOnConfidentiality": indirect,
        "severityOfImpact": low,
        "relations": [],
        "description": "This is a Test if the description of uncertainty fourty can be displayed correctly.",
        "keywords": [Keyword.AccessControl],
        "definition": "This is a Test if the definition of uncertainty fourty can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty fourty can be displayed correctly.",
        "exampleImagePath": "",
        "communityAnnotationUrl": ""
    } 
]

export default uncertainties;