import fullyReducible from "@/data/options/manageability/fullyReducible";
import irreducible from "@/data/options/manageability/irreducible";
import partialReducible from "@/data/options/manageability/partialReducible";
import type { ManageabilityOption } from '../../types/Option';


export function manageabilityMapping(manageabilityMappingName: String) : ManageabilityOption{
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