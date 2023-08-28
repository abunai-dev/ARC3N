import notReducible from "@/data/manifestations/reducibleByADD/notReducible";
import reducible from "@/data/manifestations/reducibleByADD/reducible";
import type { Manifestation } from '@/util/types/Manifestation';

export function reducibleByAddMapping(reducibleByAddMappingName: String) : Manifestation{
    switch (reducibleByAddMappingName.toLocaleLowerCase()) {
        case 'no':
            return notReducible;
        case 'yes':
            return reducible;
        default:
            throw new Error('Invalid Reducible by ADD Manifestation');
    }
}

export function getReducibleByAddNames() : string[]{
    return [ notReducible.name, reducible.name ];
}