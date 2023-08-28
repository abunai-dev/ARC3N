import fullyReducible from "@/data/manifestations/manageability/fullyReducible";
import irreducible from "@/data/manifestations/manageability/irreducible";
import partialReducible from "@/data/manifestations/manageability/partialReducible";
import type { ManageabilityManifestation } from '@/util/types/Manifestation';


export function manageabilityMapping(manageabilityMappingName: String) : ManageabilityManifestation{
    switch (manageabilityMappingName.toLocaleLowerCase()) {
        case 'fully reducible':
            return fullyReducible;
        case 'irreducible':
            return irreducible;
        case 'partial reducible':
            return partialReducible;
        default:
            throw new Error('Invalid Manageability Manifestation');
    }
}

export function getManageabilityNames() : string[]{
    return [ fullyReducible.name, irreducible.name, partialReducible.name ];
}