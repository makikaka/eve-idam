// types/Event.ts
export interface Event {
    _id: string;
    name: string;
    date: string;
    location: string;
    city: string;
    tags: string[];
    isWeekend: boolean;
    image: string;
  }