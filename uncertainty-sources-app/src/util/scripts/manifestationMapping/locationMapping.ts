import input from '@/data/manifestations/location/input'
import systemBehaviour from '@/data/manifestations/location/systembehaviour'
import systemEnvironment from '@/data/manifestations/location/systemenvironment'
import systemStructure from '@/data/manifestations/location/systemstructure'
import type { Manifestation } from '@/util/types/Manifestation';


export function locationMapping(locationName: String) : Manifestation{
    switch (locationName.toLocaleLowerCase()) {
        case 'input':
            return input;
        case 'system behaviour':
            return systemBehaviour;
        case 'system environment':
            return systemEnvironment;
        case 'system structure':
            return systemStructure;
        default:
            throw new Error('Invalid Location Manifestation');
    }
}
