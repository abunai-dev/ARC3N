import direct from '@/data/options/impactOnConfidentiality/direct'
import indirect from '@/data/options/impactOnConfidentiality/indirect'
import none from '@/data/options/impactOnConfidentiality/none';

import type { ImpactOnConfidentialityOption } from '../../types/Option';


export function impactOnConfidentialityMapping(impactOnConfidentialityName: String) : ImpactOnConfidentialityOption {
    switch (impactOnConfidentialityName.toLocaleLowerCase()) {
        case 'direct':
            return direct;
        case 'indirect':
            return indirect;
        case 'none':
            return none;
        default:
            throw new Error('Invalid Impact on Confidentiality Manifestation');
    }
}

export function getImpactOnConfidentialityNames() : string[]{
    return [ direct.name, indirect.name, none.name ];
}