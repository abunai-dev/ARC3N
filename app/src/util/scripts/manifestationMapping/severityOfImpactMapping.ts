import high from "@/data/manifestations/severityOfImpact/high";
import low from "@/data/manifestations/severityOfImpact/low";   
import type { Manifestation } from '@/util/types/Manifestation';

export function severityOfImpactMapping(severityOfImpactMappingName: String) : Manifestation{
    switch (severityOfImpactMappingName.toLocaleLowerCase()) {
        case 'high':
            return high;
        case 'low':
            return low;
        default:
            throw new Error('Invalid Severity of Impact Manifestation');
    }
}

export function getSeverityOfImpactNames() : string[]{
    return [ high.name, low.name ];
}