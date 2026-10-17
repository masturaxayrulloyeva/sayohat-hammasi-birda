import type { Guesthouse } from '../types';

export const GUESTHOUSES_DATA: Guesthouse[] = [
  {
    id: 'gh-zomin-archazor',
    name: 'Zomin Archazor Eco-Uy',
    location: 'Zomin tumani, Duoba qishlog‘i',
    region: 'Jizzax viloyati',
    pricePerNight: 280000,
    rating: 4.9,
    reviewsCount: 52,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    hostName: 'Bahrom aka va Nilufar opa',
    phone: '+998 (90) 123-45-67',
    amenities: {
      hotWater: true,
      wifi: true,
      parking: true,
      homeMeal: true,
      familyRooms: true,
      mountainView: true
    },
    description: 'Archazorlar bag‘rida joylashgan shinam oilaviy guesthouse. Tog‘ tandiri, toza buloq suvi va doimiy issiq suv bilan taʼminlangan. Bolalar uchun xavfsiz hovli.'
  },
  {
    id: 'gh-samarqand-registan',
    name: 'Registan Heritage Family House',
    location: 'Samarqand shahri, Registon maydoniga 300 metr',
    region: 'Samarqand',
    pricePerNight: 350000,
    rating: 4.95,
    reviewsCount: 114,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    hostName: 'Sherzod aka',
    phone: '+998 (91) 456-78-90',
    amenities: {
      hotWater: true,
      wifi: true,
      parking: true,
      homeMeal: true,
      familyRooms: true,
      mountainView: false
    },
    description: 'Qadimiy Samarqand meʼmorchiligi uslubida bezatilgan shinam xonalar. Tongda issiq Samarqand noni va qaymoq beriladi. Registon maydoniga piyoda 5 daqiqa.'
  },
  {
    id: 'gh-buxoro-labihovuz',
    name: 'Labi Hovuz Karvonsaroy Uy-mehmonxonasi',
    location: 'Buxoro shahri, Labi Hovuz majmuasi yaqinida',
    region: 'Buxoro',
    pricePerNight: 320000,
    rating: 4.88,
    reviewsCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    hostName: 'Munira opa',
    phone: '+998 (93) 321-65-43',
    amenities: {
      hotWater: true,
      wifi: true,
      parking: false,
      homeMeal: true,
      familyRooms: true,
      mountainView: false
    },
    description: '19-asr milliy buxorocha hovli, o‘ymakor yog‘och ayvon va gullagan anjirzor. Qadimiy sokin muhit, shahar markazidagi barcha obidalarga juda yaqin.'
  },
  {
    id: 'gh-chimgan-breeze',
    name: 'Chorvoq Shamoli Cottages',
    location: 'Bo‘stonliq tumani, Yusufxona qishlog‘i',
    region: 'Toshkent viloyati',
    pricePerNight: 450000,
    rating: 4.75,
    reviewsCount: 67,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    hostName: 'Jamshid aka',
    phone: '+998 (97) 777-88-99',
    amenities: {
      hotWater: true,
      wifi: true,
      parking: true,
      homeMeal: true,
      familyRooms: true,
      mountainView: true
    },
    description: 'Chorvoq suv omboriga bevosita qaragan shinam kottejlar. Basseyn, mangal va milliy o‘choq mavjud. Katta oilalar va do‘stlar uchun ideal tanlov.'
  }
];
