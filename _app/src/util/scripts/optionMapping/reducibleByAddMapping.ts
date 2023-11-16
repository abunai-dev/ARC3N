import notReducible from "@/data/options/reducibleByADD/notReducible";
import reducible from "@/data/options/reducibleByADD/reducible";
import type { ReducibleByADDOption } from '../../types/Option';

export function reducibleByAddMapping(reducibleByAddMappingName: String) : ReducibleByADDOption{
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
