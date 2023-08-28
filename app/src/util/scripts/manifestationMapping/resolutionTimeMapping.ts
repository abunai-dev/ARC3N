import designTime from "@/data/manifestations/resolutionTime/designTime";
import requirementsTime from "@/data/manifestations/resolutionTime/requirementsTime";
import runTime from "@/data/manifestations/resolutionTime/runTime";
import type { ResolutionTimeManifestation } from '@/util/types/Manifestation';

export function resolutionTimeMapping(resolutionTimeMappingName: String) : ResolutionTimeManifestation{
    switch (resolutionTimeMappingName.toLocaleLowerCase()) {
        case 'design time':
            return designTime;
        case 'requirements time':
            return requirementsTime;
        case 'run time':
            return runTime;
        default:
            throw new Error('Invalid Resolution Time Manifestation');
    }
}

export function getResolutionTimeNames() : string[]{
    return [ designTime.name, requirementsTime.name, runTime.name ];
}