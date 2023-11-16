import component from '../../../data/options/architecturalElementType/component'
import connector from '../../../data/options/architecturalElementType/connector'
import hardwareResource from '../../../data/options/architecturalElementType/hardwareResource'
import interfaceOption from '../../../data/options/architecturalElementType/interface'
import usageBehaviour from '../../../data/options/architecturalElementType/usageBehaviour'
import type { ArchitecturalElementTypeOption } from '../../types/Option';


export function architecturalTypeMapping(architecturalElementTypeName: String) : ArchitecturalElementTypeOption{
    switch (architecturalElementTypeName.toLocaleLowerCase()) {
        case 'component':
            return component;
        case 'connector':
            return connector;
        case 'hardware resource':
            return hardwareResource;
        case 'interface':
            return interfaceOption;
        case 'usage behaviour':
            return usageBehaviour;
        default:
            throw new Error('Invalid Architectural Element Type Manifestation');
    }
}

export function getArchitecturalTypeNames() : string[]{
    return [ component.name, connector.name, hardwareResource.name, interfaceOption.name, usageBehaviour.name ];
}