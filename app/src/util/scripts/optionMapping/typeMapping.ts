import recognizedIgnorance from "@/data/options/type/recognizedIgnorance";
import scenarioUncertainty from "@/data/options/type/scenarioUncertainty";
import statisticalUncertainty from "@/data/options/type/statisticalUncertainty";
import type { TypeOption } from '../../types/Option';

export function typeMapping(typeMappingName: String) : TypeOption {
    switch (typeMappingName.toLocaleLowerCase()) {
        case 'recognized ignorance':
            return recognizedIgnorance;
        case 'scenario uncertainty':
            return scenarioUncertainty;
        case 'statistical uncertainty':
            return statisticalUncertainty;
        default:
            throw new Error('Invalid Type Manifestation');
    }
}

export function getTypeNames() : string[]{
    return [ recognizedIgnorance.name, scenarioUncertainty.name, statisticalUncertainty.name ];
}