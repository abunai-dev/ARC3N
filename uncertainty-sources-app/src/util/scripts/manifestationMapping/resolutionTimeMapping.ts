import designTime from "@/data/manifestations/resolutionTime/designTime";
import requirementsTime from "@/data/manifestations/resolutionTime/requirementsTime";
import runTime from "@/data/manifestations/resolutionTime/runTime";
import type { Manifestation } from '@/util/types/Manifestation';

export function resolutionTimeMapping(resolutionTimeMappingName: String) : Manifestation{
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