export interface BaseEntity {
    id: string;
    name: string;
    image: string;
    location: string;
}

export interface Event extends BaseEntity {
    date: string;
    // Add other event-specific fields
}

export interface Venue extends BaseEntity {
    capacity: number;
    // Add other venue-specific fields
}

export interface Artist extends BaseEntity {
    genre: string;
    city: string
    // Add other artist-specific fields
}
export type EntityType = 'events' | 'venues' | 'artists';