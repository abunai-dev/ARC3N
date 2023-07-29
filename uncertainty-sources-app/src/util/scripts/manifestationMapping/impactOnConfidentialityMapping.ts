import direct from '@/data/manifestations/impactOnConfidentiality/direct'
import indirect from '@/data/manifestations/impactOnConfidentiality/indirect'

import type { Manifestation } from 'src/util/types/Manifestation';


export function impactOnConfidentialityMapping(impactOnConfidentialityName: String) : Manifestation{
    switch (impactOnConfidentialityName.toLocaleLowerCase()) {
        case 'direct':
            return direct;
        case 'indirect':
            return indirect;
        default:
            throw new Error('Invalid Impact on Confidentiality Manifestation');
    }
}