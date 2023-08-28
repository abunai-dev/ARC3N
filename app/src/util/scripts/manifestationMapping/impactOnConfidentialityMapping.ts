import direct from '@/data/manifestations/impactOnConfidentiality/direct'
import indirect from '@/data/manifestations/impactOnConfidentiality/indirect'

import type { ImpactOnConfidentialityManifestation } from 'src/util/types/Manifestation';


export function impactOnConfidentialityMapping(impactOnConfidentialityName: String) : ImpactOnConfidentialityManifestation {
    switch (impactOnConfidentialityName.toLocaleLowerCase()) {
        case 'direct':
            return direct;
        case 'indirect':
            return indirect;
        default:
            throw new Error('Invalid Impact on Confidentiality Manifestation');
    }
}

export function getImpactOnConfidentialityNames() : string[]{
    return [ direct.name, indirect.name ];
}