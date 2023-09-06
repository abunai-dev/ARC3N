import high from "@/data/options/severityOfImpact/high";
import low from "@/data/options/severityOfImpact/low";   
import type { SeverityOfImpactOption } from '../../types/Option';

export function severityOfImpactMapping(severityOfImpactMappingName: String) : SeverityOfImpactOption{
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