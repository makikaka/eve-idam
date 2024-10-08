export interface BaseFilters {
    selectedCity: string;
    selectedTag: string;
}

export interface EventFilters extends BaseFilters {
    selectedDate: string;
    isWeekendSelected: boolean;
}

export interface ArtistFilters extends BaseFilters {
    // No additional properties for now
}

export interface VenueFilters extends BaseFilters {
    // No additional properties for now
}

export const initialEventFilters: EventFilters = {
    selectedCity: '',
    selectedDate: new Date().toISOString().split('T')[0],
    selectedTag: '',
    isWeekendSelected: false,
}

export const initialArtistFilters: ArtistFilters = {
    selectedCity: '',
    selectedTag: '',
}

export const initialVenueFilters: VenueFilters = {
    selectedCity: '',
    selectedTag: '',
}