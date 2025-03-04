import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    title: '2019 Toyota Camry SE',
    price: 18500,
    year: 2019,
    mileage: 45000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    location: 'Shanghai',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Well-maintained Toyota Camry SE with low mileage. Features include backup camera, Bluetooth connectivity, and power seats.',
    features: ['Backup Camera', 'Bluetooth', 'Power Seats', 'Cruise Control', 'Alloy Wheels']
  },
  {
    id: '2',
    title: '2018 Honda Accord EX-L',
    price: 19800,
    year: 2018,
    mileage: 38000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    location: 'Beijing',
    imageUrl: 'https://images.unsplash.com/photo-1617624085810-3df2165bd11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Luxurious Honda Accord EX-L with leather seats and sunroof. Excellent condition with regular maintenance history.',
    features: ['Leather Seats', 'Sunroof', 'Heated Seats', 'Apple CarPlay', 'Android Auto']
  },
  {
    id: '3',
    title: '2020 Nissan Altima SR',
    price: 21500,
    year: 2020,
    mileage: 25000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    location: 'Guangzhou',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Sporty Nissan Altima SR with premium sound system and advanced safety features. One owner, no accidents.',
    features: ['Premium Sound', 'Lane Departure Warning', 'Blind Spot Monitoring', 'Remote Start', 'Sport Mode']
  },
  {
    id: '4',
    title: '2017 BMW 3 Series 320i',
    price: 22900,
    year: 2017,
    mileage: 52000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    location: 'Shenzhen',
    imageUrl: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Elegant BMW 3 Series with premium features and excellent performance. Well-maintained with service records available.',
    features: ['Leather Interior', 'Navigation System', 'Parking Sensors', 'Memory Seats', 'Dual Climate Control']
  },
  {
    id: '5',
    title: '2021 Hyundai Sonata Limited',
    price: 24500,
    year: 2021,
    mileage: 18000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    location: 'Chengdu',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Nearly new Hyundai Sonata Limited with hybrid efficiency and luxury features. Factory warranty still active.',
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Wireless Charging', 'Digital Instrument Cluster', '360-Degree Camera']
  },
  {
    id: '6',
    title: '2016 Mercedes-Benz C-Class C300',
    price: 23800,
    year: 2016,
    mileage: 65000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    location: 'Hangzhou',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Luxurious Mercedes-Benz C-Class with premium features and elegant design. Meticulously maintained by enthusiast owner.',
    features: ['Premium Audio', 'Ambient Lighting', 'Keyless Entry', 'Power Trunk', 'Driver Assistance Package']
  }
];