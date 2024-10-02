import { Event } from "../types/Event";

const events: Event[] = [
  {
    id: 1,
    name: "Ноќ на рок легендите",
    date: "2024-10-08", // Updated date
    location: "Хавана, Скопје",
    city: "Скопје",
    tags: ['Live Music', 'Nights Out'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event1/275/175"
  },
  {
    id: 2,
    name: "Фестивал на виното",
    date: "2024-10-09", // Updated date
    location: "Сити Парк, Скопје",
    city: "Скопје",
    tags: ['Food Festival', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event2/275/175"
  },
  {
    id: 3,
    name: "Театарска претстава 'Сон на летната ноќ'",
    date: "2024-10-10", // Updated date
    location: "МНТ, Скопје",
    city: "Скопје",
    tags: ['Theater', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event3/275/175"
  },
  {
    id: 4,
    name: "Електронска журка под ѕвездите",
    date: "2024-10-11", // Updated date
    location: "Плажа Градиште, Охрид",
    city: "Охрид",
    tags: ['Clubbing', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event4/275/175"
  },
  {
    id: 5,
    name: "Фестивал на уличната храна",
    date: "2024-10-12", // Updated date
    location: "Широк Сокак, Битола",
    city: "Битола",
    tags: ['Food Festival'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event5/275/175"
  },
  {
    id: 6,
    name: "Концерт на филхармонија",
    date: "2024-10-10", // Updated date
    location: "Антички театар, Охрид",
    city: "Охрид",
    tags: ['Live Music', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event6/275/175"
  },
  {
    id: 7,
    name: "Ноќ на музеите",
    date: "2024-10-11", // Updated date
    location: "Музеј на современа уметност, Скопје",
    city: "Скопје",
    tags: ['Art Exhibition', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event7/275/175"
  },
  {
    id: 8,
    name: "Фестивал на пивото",
    date: "2024-10-10", // Updated date
    location: "Градски парк, Скопје",
    city: "Скопје",
    tags: ['Food Festival', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event8/275/175"
  },
  {
    id: 9,
    name: "Охридско лето - отворање",
    date: "2024-10-13", // Updated date
    location: "Самоилова тврдина, Охрид",
    city: "Охрид",
    tags: ['Live Music'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event9/275/175"
  },
  {
    id: 10,
    name: "Битолско културно лето",
    date: "2024-10-08", // Updated date
    location: "Центар, Битола",
    city: "Битола",
    tags: ['Live Music', 'Nights Out'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event10/275/175"
  },
  {
    id: 11,
    name: "Струмички карневал",
    date: "2024-10-14", // Updated date
    location: "Центар, Струмица",
    city: "Струмица",
    tags: ['Nights Out', 'Theater'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event11/275/175"
  },
  {
    id: 12,
    name: "Вевчански карневал",
    date: "2024-10-15", // Updated date
    location: "Вевчани",
    city: "Вевчани",
    tags: ['Nights Out', 'Theater'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event12/275/175"
  },
  {
    id: 13,
    name: "Џез фестивал",
    date: "2024-10-16", // Updated date
    location: "Македонска опера и балет, Скопје",
    city: "Скопје",
    tags: ['Live Music'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event13/275/175"
  },
  {
    id: 14,
    name: "Фестивал на комедијата",
    date: "2024-10-17", // Updated date
    location: "Драмски театар, Скопје",
    city: "Скопје",
    tags: ['Theater'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event14/275/175"
  },
  {
    id: 15,
    name: "Есенски базар на ракотворби",
    date: "2024-10-18", // Updated date
    location: "Стара чаршија, Скопје",
    city: "Скопје",
    tags: ['Art Exhibition'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event15/275/175"
  },
  {
    id: 16,
    name: "Новогодишен концерт",
    date: "2024-10-19", // Updated date
    location: "Плоштад Македонија, Скопје",
    city: "Скопје",
    tags: ['Live Music', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event16/275/175"
  },
  {
    id: 17,
    name: "Фестивал на класична музика",
    date: "2024-10-20", // Updated date
    location: "Хераклеја, Битола",
    city: "Битола",
    tags: ['Live Music'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event17/275/175"
  },
  {
    id: 18,
    name: "Балканска вечер",
    date: "2024-10-21", // Updated date
    location: "Кале, Скопје",
    city: "Скопје",
    tags: ['Live Music', 'Nights Out'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event18/275/175"
  },
  {
    id: 19,
    name: "Фолк фестивал",
    date: "2024-10-22", // Updated date
    location: "Центар, Прилеп",
    city: "Прилеп",
    tags: ['Live Music'],
    isWeekend: false,
    image: "https://picsum.photos/seed/event19/275/175"
  },
  {
    id: 20,
    name: "Галичка свадба",
    date: "2024-10-23", // Updated date
    location: "Село Галичник",
    city: "Галичник",
    tags: ['Nights Out', 'Theater'],
    isWeekend: true,
    image: "https://picsum.photos/seed/event20/275/175"
  },
];
export default events;