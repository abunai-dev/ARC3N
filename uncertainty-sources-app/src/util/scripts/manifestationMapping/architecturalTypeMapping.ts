import component from '@/data/manifestations/architecturalElementType/component'
import connector from '@/data/manifestations/architecturalElementType/connector'
import hardwareResource from '@/data/manifestations/architecturalElementType/hardwareResource'
import interfaceManifestation from '@/data/manifestations/architecturalElementType/interface'
import usageBehaviour from '@/data/manifestations/architecturalElementType/usageBehaviour'
import type { Manifestation } from '@/util/types/Manifestation';


export function architecturalTypeMapping(architecturalElementTypeName: String) : Manifestation{
    switch (architecturalElementTypeName.toLocaleLowerCase()) {
        case 'component':
            return component;
        case 'connector':
            return connector;
        case 'hardware resource':
            return hardwareResource;
        case 'interface':
            return interfaceManifestation;
        case 'usage behaviour':
            return usageBehaviour;
        default:
            throw new Error('Invalid Architectural Element Type Manifestation');
    }
}

export function getArchitecturalTypeNames() : string[]{
    return [ component.name, connector.name, hardwareResource.name, interfaceManifestation.name, usageBehaviour.name ];
}