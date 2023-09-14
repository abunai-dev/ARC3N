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
        "description": "",
        "keywords": [Keyword.Data],
        "definition": "If a software system allows SQL injections on its database, it might make itself vulnerable to attacks, depending on the configuration.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n Due to the fact, that the company sends the data via SQL injections, depending on how the database service is handling the injections, it might be vulnerable to disclosure of data through SQL injection attacks.",
        "exampleImagePath": "U1Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/1"
    },
    // {
    //     "id": 2,
    //     "name": "Are the access control rules correct?",
    //     "location": systemBehaviour,
    //     "architecturalType": interfaceManifestation,
    //     "type": recognizedIgnorance,
    //     "manageability": partialReducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 32,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //         ],
    //     "description": "This is a Test if the description of uncertainty two can be displayed correctly.",
    //     "keywords": [Keyword.AccessControl],
    //     "definition": "This is a Test if the definition of uncertainty two can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty two can be displayed correctly.",
    //     "exampleImagePath": "uncertaintytwo.jpg",
    //     "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/2"
    // },
    // {
    //     "id": 3,
    //     "name": "Can access control cover all matters?",
    //     "location": systemBehaviour,
    //     "architecturalType": interfaceManifestation,
    //     "type": recognizedIgnorance,
    //     "manageability": irreducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 32,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty three can be displayed correctly.",
    //     "keywords": [Keyword.AccessControl],
    //     "definition": "This is a Test if the definition of uncertainty three can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty three can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
            // {
            //     "relatedToId": 9,
            //     "positionInRelationship": RelationshipPosition.Parent
            // },
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
            // {
            //     "relatedToId": 28,
            //     "positionInRelationship": RelationshipPosition.Parent
            // },
            {
                "relatedToId": 1,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "",
        "keywords": [],
        "definition": "Communication between components can disclose data.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n For example the data between Mobile App and Company might not be encrypted, thus disclosing personal information of the user. ",
        "exampleImagePath": "U4Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/7"
    },
    // {
    //     "id": 5,
    //     "name": "How is data persisted?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 26
    //         },
    //         {
    //             "relatedToId": 34
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty five can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty five can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty five can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 6,
    //     "name": "How is metadata handled?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 27,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty six can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty six can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty six can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
        "description": "",
        "keywords": [Keyword.Trust],
        "definition": "Access to sensitive data should be secured by user identification methods.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n To access ones rental history and details, a user would need to identify himself first. \n To access the database through the database service, an employee of the company would need to identify themselves first.",
        "exampleImagePath": "U7Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/8"
    },
    // {
    //     "id": 8,
    //     "name": "How long is data being stored?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 22
    //         },
    //         {
    //             "relatedToId": 35
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty eight can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty eight can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty eight can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 9,
    //     "name": "Is communication intercepted?",
    //     "location": systemBehaviour,
    //     "architecturalType": connector,
    //     "type": recognizedIgnorance,
    //     "manageability": fullyReducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 4,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty nine can be displayed correctly.",
    //     "keywords": [Keyword.Trust],
    //     "definition": "This is a Test if the definition of uncertainty nine can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty nine can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
        "description": "",
        "keywords": [Keyword.Data],
        "definition": "Finding out the confidentiality grade of data that needs to be transmitted between components is essential for deciding on appropriate security measures.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n Users need to fill in personal information in the mobile app, upon starting the registration process. The data that needs to be transmitted can be classified as highly confidential, thus appropriate security measures need to be taken.",
        "exampleImagePath": "U10Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/9"
    },
    // {
    //     "id": 11,
    //     "name": "Is data manipulated?",
    //     "location": inputLocation,
    //     "architecturalType": interfaceManifestation,
    //     "type": recognizedIgnorance,
    //     "manageability": irreducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": direct,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 27,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty eleven can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty eleven can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty eleven can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
        "description": "",
        "keywords": [Keyword.Trust],
        "definition": "Finding out if any communication encryption technologies are already in place, helps in finding out the appropriate fit for the software system.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n For safety measures the communication between the mobile application is encrypted by RSA for a secure transfer of sensitive data from the mobile app to the company. The communication between the vehicle and company is not encrypted. Between the Company and the Database Service Provider the encryption is handled by AES. The communication within the Database Service and its databases remains unknown",
        "exampleImagePath": "U4Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/10"
    },
    // {
    //     "id": 13,
    //     "name": "Is the component currently compromised?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": recognizedIgnorance,
    //     "manageability": partialReducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": direct,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 39,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty thirteen can be displayed correctly.",
    //     "keywords": [Keyword.Trust],
    //     "definition": "This is a Test if the definition of uncertainty thirteen can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty thirteen can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 14,
    //     "name": "Is the component insecure due to software?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": statisticalUncertainty,
    //     "manageability": partialReducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": direct,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 39,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty fourteen can be displayed correctly.",
    //     "keywords": [Keyword.Trust],
    //     "definition": "This is a Test if the definition of uncertainty fourteen can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty fourteen can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n The company decided that they don't want to host their own database, but rather use a database service provider. \n The company has to decide on a database service provider with keeping in mind that they have to follow EU law, thus their data has to be stored in Europe.",
        "exampleImagePath": "U1Image.png",
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
        "description": "",
        "keywords": [Keyword.Data],
        "definition": "Systems may have anonymization methods already in place. If so, sensitive data is being anonymized and can be handled like non-sensitive data.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n The database service uses an anonymization mechanism to anonymize the data transmitted by the company to hthem and then save it in the database. Upon requesting data, it uses the same mechanism to request the data from the database.",
        "exampleImagePath": "U16Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/11"
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
        "description": "",
        "keywords": [Keyword.Data],
        "definition": "The user behavior is not known at design time. Thus filling in data can be done correctly or incorrectly, leading to disclosure of potential sensitive data.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n The user gets input fields to fill in his personal information including his address as well as free text fields to put in additional wishes and question for the car rental. \n At run time a user puts in all his information in the free text field, thus the mobility system needs to recognize the mistake and handle the data securely.",
        "exampleImagePath": "U17Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/12"
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
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n Within the mobility system, personal information and payment details are being send to the company as well as metadata and additional information. Personal information and payment details need to be persisted confidentially.",
        "exampleImagePath": "U18Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/13"
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
        "description": "",
        "keywords": [Keyword.Trust],
        "definition": "The deployment provider is able to make changes to the inital code of the software system. At design time the trustworthiness is unknown, but it is essential to take precautions since the provider might be able to create backdoors or other vulnerabilities for the data.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n When using an untrustworthy deployment provider there is a risk of the provider creating backdoors or other vulnerabilities for the data. ",
        "exampleImagePath": "U18Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/14"
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
        "description": "",
        "keywords": [Keyword.Trust],
        "definition": "Input validations can limit the abuse of using the system in an unintended way. Depending on the validation methods it may leave walk arounds.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n  If the input via the mobile app is not validated, the company might get inconclusive information leading to wrong handling of the data. For example they might misunderstand the users intention, offering him a different car",
        "exampleImagePath": "U20Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/15"
    },
    // {
    //     "id": 21,
    //     "name": "Is the storage encrypted?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": direct,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 33,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty twentyone can be displayed correctly.",
    //     "keywords": [Keyword.Trust],
    //     "definition": "This is a Test if the definition of uncertainty twentyone can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty twentyone can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 22,
    //     "name": "Is user data stored/processed?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": requirementsTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": direct,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 8
    //         },
    //         {
    //             "relatedToId": 35
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty twentytwo can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty twentytwo can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty twentytwo can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 23,
    //     "name": "Is virtualization used?",
    //     "location": systemEnvironment,
    //     "architecturalType": hardwareResource,
    //     "type": scenarioUncertainty,
    //     "manageability": partialReducible,
    //     "resolutionTime": realizationTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [],
    //     "description": "This is a Test if the description of uncertainty twentythree can be displayed correctly.",
    //     "keywords": [],
    //     "definition": "This is a Test if the definition of uncertainty twentythree can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty twentythree can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
        "description": "",
        "keywords": [Keyword.Data],
        "definition": "What a user types in as data is not known at design time. Data itself can be classified in different levels such as metadata, personal data, payment details... Depending on the sensitivity level of the data, the system should be able to handle the data with appropriate security measures.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n  At run time the user puts in personal data such as his address. Additionally the mobile app sends metadata including the time of the rental application creation. Personal data needs to be handled confidentially, while metadata can be handled like non-sensitive data.",
        "exampleImagePath": "U24Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/16"
    },
    // {
    //     "id": 25,
    //     "name": "What data is logged?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": direct,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 27,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty twentyfive can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty twentyfive can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty twentyfive can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
            // {
            //     "relatedToId": 5
            // },
            // {
            //     "relatedToId": 34
            // },
            {
                "relatedToId": 18,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "This is a Test if the description of uncertainty twentysix can be displayed correctly.",
        "keywords": [Keyword.Data],
        "definition": "This is a Test if the definition of uncertainty twentysix can be displayed correctly.",
        "exampleScenario": "This is a Test if the example scenario of uncertainty twentysix can be displayed correctly.",
        "exampleImagePath": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n At design time the data what type of data can be inside the mobile app can be identified. For example when designing the personal information section within the mobile app can be identified as highly confidential data.",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/17"
    },
    // {
    //     "id": 27,
    //     "name": "What data is provided?",
    //     "location": systemBehaviour,
    //     "architecturalType": interfaceManifestation,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 25,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         },
    //         {
    //             "relatedToId": 11,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         },
    //         {
    //             "relatedToId": 6,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty twentyseven can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty twentyseven can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty twentyseven can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 28,
    //     "name": "What is the behavior of the component?",
    //     "location": systemBehaviour,
    //     "architecturalType": component,
    //     "type": statisticalUncertainty,
    //     "manageability": partialReducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 4,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty twentyeight can be displayed correctly.",
    //     "keywords": [],
    //     "definition": "This is a Test if the definition of uncertainty twentyeight can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty twentyeight can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n At design time the company has decided to not run their own database service as well as maintaining the mobile app. Thus they decided to use a database service provider and a mobile app provider.",
        "exampleImagePath": "",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/18"
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
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n At design time the interface that needs to be used to send the data to the company is defined, thus stating all functions that can be used to send the data to the company.",
        "exampleImagePath": "",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/19"
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
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n At run time a user puts in his credit card information in the wrong input field.",
        "exampleImagePath": "",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/20"
    },
    // {
    //     "id": 32,
    //     "name": "What kind of access control is used?",
    //     "location": systemBehaviour,
    //     "architecturalType": interfaceManifestation,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 2,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         },
    //         {
    //             "relatedToId": 3,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         },
    //         {
    //             "relatedToId": 37,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         },
    //         {
    //             "relatedToId": 38,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty thirtytwo can be displayed correctly.",
    //     "keywords": [Keyword.AccessControl],
    //     "definition": "This is a Test if the definition of uncertainty thirtytwo can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty thirtytwo can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 33,
    //     "name": "What kind of storage is used?",
    //     "location": systemEnvironment,
    //     "architecturalType": hardwareResource,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [
    //         {
    //             "relatedToId": 21,
    //             "positionInRelationship": RelationshipPosition.Parent
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty thirtythree can be displayed correctly.",
    //     "keywords": [],
    //     "definition": "This is a Test if the definition of uncertainty thirtythree can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty thirtythree can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 34,
    //     "name": "Where is data persisted?",
    //     "location": systemEnvironment,
    //     "architecturalType": hardwareResource,
    //     "type": scenarioUncertainty,
    //     "manageability": partialReducible,
    //     "resolutionTime": realizationTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": direct,
    //     "severityOfImpact": high,
    //     "relations": [],
    //     "description": "This is a Test if the description of uncertainty thirtyfour can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty thirtyfour can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyfour can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
    // {
    //     "id": 35,
    //     "name": "Where is data processed?",
    //     "location": systemBehaviour,
    //     "architecturalType": hardwareResource,
    //     "type": scenarioUncertainty,
    //     "manageability": partialReducible,
    //     "resolutionTime": designTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 8
    //         },
    //         {
    //             "relatedToId": 22
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty thirtyfive can be displayed correctly.",
    //     "keywords": [Keyword.Data],
    //     "definition": "This is a Test if the definition of uncertainty thirtyfive can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyfive can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n At realization time the company decides to use a cloud provider to deploy their system.",
        "exampleImagePath": "",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/21"
    },
    // {
    //     "id": 37,
    //     "name": "Which access rights does a subject have?",
    //     "location": systemBehaviour,
    //     "architecturalType": connector,
    //     "type": scenarioUncertainty,
    //     "manageability": fullyReducible,
    //     "resolutionTime": requirementsTime,
    //     "reducibleByADD": reducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": high,
    //     "relations": [
    //         {
    //             "relatedToId": 32,
    //             "positionInRelationship": RelationshipPosition.Child
    //         }
    //     ],
    //     "description": "This is a Test if the description of uncertainty thirtyseven can be displayed correctly.",
    //     "keywords": [Keyword.AccessControl],
    //     "definition": "This is a Test if the definition of uncertainty thirtyseven can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty thirtyseven can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // },
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
            // {
            //     "relatedToId": 32,
            //     "positionInRelationship": RelationshipPosition.Child
            // },
            {
                "relatedToId": 7,
                "positionInRelationship": RelationshipPosition.Parent
            }
        ],
        "description": "",
        "keywords": [Keyword.Trust],
        "definition": "Authentication methods should be in place whenever dealing with sensitive data such as personal information and payment details.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n At design time the company decides to use a password authentication mechanism to authenticate the user.",
        "exampleImagePath": "U38Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/22"
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
            // {
            //     "relatedToId": 13,
            //     "positionInRelationship": RelationshipPosition.Parent
            // },
            // {
            //     "relatedToId": 14,
            //     "positionInRelationship": RelationshipPosition.Parent
            // },
            {
                "relatedToId": 15,
                "positionInRelationship": RelationshipPosition.Parent
            }

        ],
        "description": "This is a Test if the description of uncertainty thirtynine can be displayed correctly.",
        "keywords": [],
        "definition": "This is a Test if the definition of uncertainty thirtynine can be displayed correctly.",
        "exampleScenario": "Within a mobility system, a company might offer Vehicle rentals. \n A user can rent a vehicle via a mobile app. The company then collects all necessary information and saves it in a database by sending the data to the database service. \n \n At design time the company decides to use a database service provider to store the data.",
        "exampleImagePath": "U16Image.png",
        "communityAnnotationUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/23"
    }
    // ,
    // {
    //     "id": 40,
    //     "name": "Which subjects access the interface?",
    //     "location": inputLocation,
    //     "architecturalType": interfaceManifestation,
    //     "type": recognizedIgnorance,
    //     "manageability": partialReducible,
    //     "resolutionTime": runTime,
    //     "reducibleByADD": notReducible,
    //     "impactOnConfidentiality": indirect,
    //     "severityOfImpact": low,
    //     "relations": [],
    //     "description": "This is a Test if the description of uncertainty fourty can be displayed correctly.",
    //     "keywords": [Keyword.AccessControl],
    //     "definition": "This is a Test if the definition of uncertainty fourty can be displayed correctly.",
    //     "exampleScenario": "This is a Test if the example scenario of uncertainty fourty can be displayed correctly.",
    //     "exampleImagePath": "",
    //     "communityAnnotationUrl": ""
    // } 
]

export default uncertainties;