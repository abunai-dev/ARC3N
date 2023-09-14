import { reactive } from 'vue';


export const tableState = reactive<TableState>({
    searchValue: '',
    selectedKeyword: 'all',
    selectedLocation: 'all',
    selectedArchitecturalType: 'all',
    selectedType: 'all',
    selectedManageability: 'all',
    selectedResolutionTime: 'all',
    selectedReducibleByAdd: 'all',
    selectedImpactOnConfidentiality: 'all',
    selectedSeverityOfImpact: 'all'
});

interface TableState {
    searchValue: string;
    selectedKeyword: string;
    selectedLocation: string;
    selectedArchitecturalType: string;
    selectedType: string;
    selectedManageability: string;
    selectedResolutionTime: string;
    selectedReducibleByAdd: string;
    selectedImpactOnConfidentiality: string;
    selectedSeverityOfImpact: string;
}