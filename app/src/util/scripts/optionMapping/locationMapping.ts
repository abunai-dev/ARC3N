import input from '@/data/options/location/input'
import systemBehaviour from '@/data/options/location/systembehaviour'
import systemEnvironment from '@/data/options/location/systemenvironment'
import systemStructure from '@/data/options/location/systemstructure'
import type { LocationOption } from '../../types/Option';


export function locationMapping(locationName: String) : LocationOption{
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

export function getLocationNames() : string[]{
    return [ input.name, systemBehaviour.name, systemEnvironment.name, systemStructure.name];
}
