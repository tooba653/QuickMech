export type Mechanic = {
  id: string;
  name: string;
  rating: number;
  distanceKm: number;
  priceFrom: number;
  services: string[];
  img?: string;
}

export const mechanics: Mechanic[] = [
  {
    id: 'm1',
    name: 'Ali AutoFix',
    rating: 4.8,
    distanceKm: 1.2,
    priceFrom: 1500,
    services: ['Engine', 'Oil Change', 'Brake Repair'],
    img: '/6456846.png'
  },
  {
    id: 'm2',
    name: 'Karachi QuickMech',
    rating: 4.6,
    distanceKm: 2.4,
    priceFrom: 1200,
    services: ['Battery Check', 'Towing', 'AC Repair'],
    img: '/1494235.png'
  },
  {
    id: 'm3',
    name: 'Speedy Wrenches',
    rating: 4.7,
    distanceKm: 0.8,
    priceFrom: 1800,
    services: ['Diagnostics', 'Suspension', 'Tire Change'],
    img: '/placeholder-mark.png'
  }
]
