import * as fs from 'fs';
import * as path from 'path';
import type { Uncertainty } from '@/util/types/Uncertainty';

import { locationMapping } from './manifestationMapping/locationMapping';
import { architecturalTypeMapping } from './manifestationMapping/architecturalTypeMapping';
import { typeMapping } from './manifestationMapping/typeMapping';
import { manageabilityMapping } from './manifestationMapping/manageabilityMapping';
import { resolutionTimeMapping } from './manifestationMapping/resolutionTimeMapping';
import { reducibleByAddMapping } from './manifestationMapping/reducibleByAddMapping';
import { impactOnConfidentialityMapping } from './manifestationMapping/impactOnConfidentialityMapping';
import { severityOfImpactMapping } from './manifestationMapping/severityOfImpactMapping';

const filePath = path.join(__dirname, './app/src/data/uncertainties.ts');
const content = fs.readFileSync(filePath, 'utf8');

const payloadArg = process.argv[2];
if (!payloadArg) {
    console.error('Payload argument is missing!');
    process.exit(1);
}
const payload = JSON.parse(payloadArg);

const uncertainties = require(filePath).uncertainties;

const newUncertainty : Uncertainty = {
    "id": uncertainties.length,
    "name": payload.name,
    "location": locationMapping(payload.location),
    "architecturalType": architecturalTypeMapping(payload.architecturalType),
    "type": typeMapping(payload.type),
    "manageability": manageabilityMapping(payload.manageability),
    "resolutionTime": resolutionTimeMapping(payload.resolutionTime),
    "reducibleByADD": reducibleByAddMapping(payload.reducibleByADD),
    "impactOnConfidentiality": impactOnConfidentialityMapping(payload.impactOnConfidentiality),
    "severityOfImpact": severityOfImpactMapping(payload.severityOfImpact),
    "relations": [],
    "description": payload.description,
    "keywords": [],
    "definition": payload.definition,
    "exampleScenario": payload.exampleScenario,
    "exampleImagePath": "",
    "communityAnnotationUrl": ""
}

uncertainties.push(newUncertainty);

const updatedContent = `export const values = ${JSON.stringify(uncertainties, null, 2)} as const;\n`;
fs.writeFileSync(filePath, updatedContent, 'utf8');

console.log('Uncertainty added successfully to existing uncertainties list!')