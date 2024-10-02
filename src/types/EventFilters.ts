export interface EventFilters {
    selectedCity: string;
    selectedDate: string;
    selectedTag: string;
    isWeekendSelected: boolean;
}

export const initialFilters: EventFilters = {
    selectedCity: '',
    selectedDate: new Date().toISOString().split('T')[0],
    selectedTag: '',
    isWeekendSelected: false,
};