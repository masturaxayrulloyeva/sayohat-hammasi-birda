import type { TourPackage } from '../types';

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'samarqand-buxoro-express',
    title: 'Samarqand va Buxoro: Ipak Yo‘li Javohirlari',
    subtitle: 'Afrosiyob poyezdida qulay oilaviy sayohat, milliy guesthouse va tarixiy obidalar',
    destination: 'Samarqand — Buxoro',
    region: 'Samarqand / Buxoro',
    category: 'tarix',
    durationDays: 3,
    durationNights: 2,
    pricePerPerson: 1250000,
    originalPrice: 1450000,
    rating: 4.9,
    reviewsCount: 142,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1000&q=80',
    included: {
      transport: true,
      transportType: 'Afrosiyob tezyurar poyezdi (borish-qaytish)',
      hotel: true,
      hotelType: 'Milliy uslubdagi 3* mehmonxona (Labi Hovuz yonida)',
      meals: true,
      mealsCount: '3 mahal milliy taomlar (Samarqand palovi, Buxoro jizi)',
      guide: true,
      tickets: true,
    },
    highlights: [
      'Registon maydoni va Tillakori madrasasi',
      'Shohi Zinda meʼmoriy ansambli',
      'Labi Hovuz va Minorai Kalon tungi sayri',
      'Barcha muzey va obidalarga kirish chiptalari ichida'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Toshkent — Samarqand (Registondan Go‘ri Amirgacha)',
        description: 'Ertalab soat 07:30 da Afrosiyob poyezdida jo‘nash. Soat 09:45 da Samarqandga yetib kelish, kutib olish va mehmonxonaga joylashish.',
        activities: ['Registon maydoni ekskursiyasi', 'Bibixonim masjidi va Siypob bozori', 'Milliy restoranda Samarqandcha tushlik', 'Go‘ri Amir maqbarasi']
      },
      {
        day: 2,
        title: 'Samarqand — Buxoroi Sharif sari',
        description: 'Nonushtadan so‘ng Shohi Zinda ziyorati. Kunduzi Buxoroga yo‘l olamiz (qulay poyezdda).',
        activities: ['Shohi Zinda ziyoratgohi', 'Buxoroga yetib kelish va qadimiy karvonsaroy mehmonxonasiga joylashish', 'Labi Hovuzda kechki ovqat va choyxona suhbati']
      },
      {
        day: 3,
        title: 'Qadimiy Buxoro va Toshkentga qaytish',
        description: 'Ark qalʼasi, Somoniylar maqbarasi va gumbazli bozorlar bo‘ylab gid hamrohligida sayohat.',
        activities: ['Minorai Kalon va Masjidi Kalon', 'Ark qalʼasi tarixi', 'Esdalik sovg‘alari xaridi', 'Afrosiyob poyezdida qaytish']
      }
    ],
    accommodationDetails: {
      name: 'Old Bukhara Heritage & Guesthouse',
      type: 'Tarixiy milliy mehmonxona',
      amenities: ['Doimiy issiq suv', 'Bepul Wi-Fi', 'Milliy nonushta (shved stoli)', 'Konditsioner', 'Bolalar uchun qulay']
    },
    departureDates: ['24-Oktabr', '31-Oktabr', '07-Noyabr', '14-Noyabr'],
    groupSizeLimit: 16
  },
  {
    id: 'zomin-shveytsariya-tur',
    title: 'Zomin Tog‘lari: O‘zbekiston Shveytsariyasi',
    subtitle: 'Toza archazor havosi, mashhur osma ko‘prik, sharshara va tog‘ tandir go‘shti',
    destination: 'Zomin Milliy Bog‘i',
    region: 'Jizzax viloyati',
    category: 'tog',
    durationDays: 2,
    durationNights: 1,
    pricePerPerson: 780000,
    originalPrice: 890000,
    rating: 4.8,
    reviewsCount: 98,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    included: {
      transport: true,
      transportType: 'Konditsionerli qulay Mercedes Sprinter mikroavtobusi',
      hotel: true,
      hotelType: 'Zomin archazorlari bag‘ridagi ekologik mehmonxona',
      meals: true,
      mealsCount: '3 mahal taom (haqiqiy Jizzax tandir go‘shti bilan)',
      guide: true,
      tickets: true,
    },
    highlights: [
      '305 metrli Zomin shisha osma ko‘prigi (Glass Bridge)',
      'Ming yillik boboyong‘oq va sharsharalar',
      'Sulfat bulog‘i va toza tog‘ havosi',
      'Oila va do‘stlar uchun gulxan atrofidagi kecha'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Toshkentdan Zomin sari yo‘l va osma ko‘prik',
        description: 'Ertalab qulay mikroavtobusda jo‘nash. Zomin plato va kanyonlari bo‘ylab manzarali sayohat.',
        activities: ['Jizzax somsasidan tanovul qilish', 'Zomin milliy bog‘iga kirish va ro‘yxatdan o‘tish', 'Shisha osma ko‘prikdan o‘tish va fotosessiya', 'Milliy tandir go‘shti bilan kechki ovqat']
      },
      {
        day: 2,
        title: 'Sherbuloq va tabiat qo‘ynida dam olish',
        description: 'Tog‘dagi toza havoda tongi nonushta, dor yo‘li (kanatka) va sharshara sayohati.',
        activities: ['Zomin dor yo‘lida sayohat', 'Shifobaxsh Sherbuloq suvidan ichish', 'Tog‘ asali va dorivor o‘tlar yarmarkasi', 'Toshkentga qaytish']
      }
    ],
    accommodationDetails: {
      name: 'Zomin Pine Mountain Lodge',
      type: 'Tog‘ ekologik kottejlari',
      amenities: ['Doimiy issiq suv', 'Isitish tizimi', 'Tog‘ manzarali ayvon', 'Wi-Fi', 'Avtoturargoh']
    },
    departureDates: ['Har shanba-yakshanba', '25-Oktabr', '01-Noyabr'],
    groupSizeLimit: 18
  },
  {
    id: 'chortoq-amirsoy-nefrit',
    title: 'Bo‘stonliq & Amirsoy: Nefrit Ko‘llari va Tog‘ Shamoli',
    subtitle: 'Toshkentdan atigi 1.5 soat: 1 kunlik yorqin va byudjetli oilaviy hordiq',
    destination: 'Chorvoq — Amirsoy — Urungoch',
    region: 'Toshkent viloyati',
    category: 'tabiat',
    durationDays: 1,
    durationNights: 0,
    pricePerPerson: 320000,
    originalPrice: 380000,
    rating: 4.7,
    reviewsCount: 215,
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    included: {
      transport: true,
      transportType: 'Konditsionerli zamonaviy avtobus',
      hotel: false,
      hotelType: '1 kunlik tur (turar joy talab etilmaydi)',
      meals: true,
      mealsCount: 'Chorvoq bo‘yida tog‘cha tushlik',
      guide: true,
      tickets: true,
    },
    highlights: [
      'Amirsoy tog‘ kurorti va kanat yo‘li',
      'Chorvoq suv omborining panoramik nuqtalari',
      'Chinorlar soyasida choyxona dam olishi',
      'Kichik yoshdagi bolali oilalar uchun juda qulay'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Toshkent — Amirsoy — Chorvoq — Toshkent',
        description: 'Ertalab soat 08:00 da Toshkentdan jo‘nash. Amirsoyda kanatda 2290 metr balandlikka chiqish.',
        activities: ['Amirsoyda gondolali kanat sayri', 'Chorvoq manzarasi fonida esdalik suratlar', 'Shovur tog‘ soyida tushlik', 'Kechki 19:00 da Toshkentga yetib kelish']
      }
    ],
    accommodationDetails: {
      name: 'Bir kunlik marshrut',
      type: 'Qaytish bilan',
      amenities: ['Qulay o‘rindiqlar', 'Konditsioner', 'Ichimlik suvi beriladi']
    },
    departureDates: ['Har kun', 'Har yakshanba'],
    groupSizeLimit: 25
  },
  {
    id: 'xiva-ichan-qala',
    title: 'Xiva: Ochiq Osmon Ostidagi Afsonaviy Shahar',
    subtitle: 'Ming bir kecha ertaklaridagi Ichan Qalʼa, xorazmcha lazgi va shivit oshi',
    destination: 'Xiva — Urganch',
    region: 'Xorazm',
    category: 'tarix',
    durationDays: 2,
    durationNights: 1,
    pricePerPerson: 1100000,
    originalPrice: 1300000,
    rating: 4.95,
    reviewsCount: 84,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
    included: {
      transport: true,
      transportType: 'Qulay kupe poyezdi yoki samolyot varianti',
      hotel: true,
      hotelType: 'Ichan Qalʼa ichidagi milliy naqshli mehmonxona',
      meals: true,
      mealsCount: '3 mahal Xorazm milliy taomlari (shivit oshi, tuxumbarak)',
      guide: true,
      tickets: true,
    },
    highlights: [
      'Kalta Minor va Islom Xo‘ja minorasi manzarasi',
      'Kunya-Ark saroyidan botayotgan quyosh tomoshasi',
      'Juma masjidi (218 ta o‘ymakor yog‘och ustunlar)',
      'Tungi chiroqlar bilan yoritilgan sehrli Ichan Qalʼa'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Xiva shahriga kelish va Ichan Qalʼaga sho‘ng‘ish',
        description: 'Kutib olish, qalʼa ichidagi guesthousega joylashish va piyoda ekskursiya.',
        activities: ['Kalta Minor va Muhammad Aminxon madrasasi', 'Kunya-Ark saroyi tomosha maydonchasi', 'Milliy Xorazm taomlari bilan tushlik', 'Tungi sehrli sayr']
      },
      {
        day: 2,
        title: 'Hunarmandlar ustaxonalari va Nurullaboy saroyi',
        description: 'Yog‘och o‘ymakorligi va gilamdo‘zlik bilan tanishish, yangi shahar saroylarini ziyorat qilish.',
        activities: ['Islom Xo‘ja minorasiga chiqish', 'Xorazmcha tuxumbarak pishirish master-klassi', 'Esdalik sovg‘alar va suvenirlar bozori', 'Poyezd orqali qaytish']
      }
    ],
    accommodationDetails: {
      name: 'Khiva Silk Road Boutique Guesthouse',
      type: 'Qadimiy qalʼa ichidagi guesthouse',
      amenities: ['Issiq dush va toza sochiqlar', 'Wi-Fi', 'Milliy nonushta', 'Konditsioner', 'Tom ustidagi choyxona']
    },
    departureDates: ['26-Oktabr', '02-Noyabr', '09-Noyabr'],
    groupSizeLimit: 14
  },
  {
    id: 'boysun-omonxona-surxon',
    title: 'Boysun & Omonxona: Sirli Kanyonlar va Shifobaxsh Buloq',
    subtitle: 'YuNESKO merosi bo‘lgan Boysun madaniyati, qoyatoshlar va shifobaxsh tabiat',
    destination: 'Boysun — Omonxona — Termiz',
    region: 'Surxondaryo',
    category: 'ziyorat',
    durationDays: 3,
    durationNights: 2,
    pricePerPerson: 1350000,
    originalPrice: 1550000,
    rating: 4.85,
    reviewsCount: 63,
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    included: {
      transport: true,
      transportType: 'Poyezd + tog‘li yo‘llar uchun qulay transport',
      hotel: true,
      hotelType: 'Omonxona shifobaxsh pansionati yoki milliy uy-mehmonxona',
      meals: true,
      mealsCount: '3 mahal Surxoncha tandir va organik tabiiy taomlar',
      guide: true,
      tickets: true,
    },
    highlights: [
      'Omonxona shifobaxsh mineral bulog‘i',
      'Qizil kanyon (Darbant darasi) manzaralari',
      'Boysun folklori va hunarmandchilik anʼanalari',
      'Termiz qadimiy budda ibodatxonalari (Fayoztepa)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Toshkent — Termiz poyezdi va Boysunga yo‘l',
        description: 'Tog‘li yo‘llar orqali Boysun daryolari va kanyonlariga qadam qo‘yish.',
        activities: ['Darbant darasi ziyorati', 'Omonxona bulog‘i suvidan tatib ko‘rish', 'Tog‘ qishlog‘i mehmondo‘stligini his qilish']
      },
      {
        day: 2,
        title: 'Sirli kanyonlar va tog‘ qishloqlari',
        description: 'Tog‘ bag‘ridagi qadimiy qishloqlarda sayr, surxoncha gilamdo‘zlik bilan tanishuv.',
        activities: ['Kanyonlar bo‘ylab yengil treking', 'Shifobaxsh o‘tlar yig‘ish', 'Surxon tandir go‘shti degustatsiyasi']
      },
      {
        day: 3,
        title: 'Termiz ziyoratgohlari va qaytish',
        description: 'Al-Hakim at-Termiziy majmuasi va Qirqqiz qalʼasi bilan tanishuv.',
        activities: ['At-Termiziy majmuasi ziyorati', 'Arxeologiya muzeyi', 'Poyezdda qaytish']
      }
    ],
    accommodationDetails: {
      name: 'Omonxona Eco Springs & Lodge',
      type: 'Tog‘ shifobaxsh maskani',
      amenities: ['Shifobaxsh mineral dush', 'Doimiy issiq suv', 'Shinam xonalar', 'Tabiiy parhez taomlar']
    },
    departureDates: ['28-Oktabr', '05-Noyabr'],
    groupSizeLimit: 12
  },
  {
    id: 'vodiy-rishton-qoqon',
    title: 'Farg‘ona Vodiysi: Qo‘qon O‘rdasi va Rishton Kulollari',
    subtitle: 'Xudoyorxon saroyi, Ipak fabrikasi, Rishton sirlangan sopollari va Marg‘ilon atlasi',
    destination: 'Qo‘qon — Rishton — Marg‘ilon',
    region: 'Farg‘ona vodiysi',
    category: 'oilaviy',
    durationDays: 2,
    durationNights: 1,
    pricePerPerson: 850000,
    originalPrice: 980000,
    rating: 4.88,
    reviewsCount: 77,
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1000&q=80',
    included: {
      transport: true,
      transportType: 'Kamchiq dovonidan tezyurar qulay poyezd yoki mikroavtobus',
      hotel: true,
      hotelType: 'Qo‘qon markazidagi qulay oilaviy mehmonxona',
      meals: true,
      mealsCount: '3 mahal vodiycha taomlar (Qo‘qon patiri, chust palovi)',
      guide: true,
      tickets: true,
    },
    highlights: [
      'Xudoyorxon o‘rdasi (saroy meʼmorchiligi)',
      'Rishtonda Usta kulollar qo‘lida loydan kosa yasash master-klassi',
      'Marg‘ilon "Yodgorlik" ipak fabrikasida xonatlas to‘qilishi',
      'Qo‘qon shirinliklari va mashhur patirlari'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Toshkent — Qo‘qon (Xonlar poytaxti)',
        description: 'Kamchiq poyezdida Farg‘ona vodiysiga kirib kelish. Xudoyorxon o‘rdasi va Jome masjidi.',
        activities: ['Xudoyorxon saroyi bo‘ylab ekskursiya', 'Qo‘qon milliy taomlari va mashhur holvasi', 'Dasturxonchi madrasasi ziyorati']
      },
      {
        day: 2,
        title: 'Rishton kulolligi va Marg‘ilon ipakchilik sanʼati',
        description: 'Kulolchilik dastgohida o‘z qo‘lingiz bilan sopol buyum yaratish va ipak gilamlar yaratilishini ko‘rish.',
        activities: ['Rishton kulolchilik markazida amaliy mashg‘ulot', 'Marg‘ilon xonatlas muzeyi va ishlab chiqarish jarayoni', 'Toshkentga qaytish']
      }
    ],
    accommodationDetails: {
      name: 'Kokand Palace & Family Suites',
      type: 'Qulay shahar mehmonxonasi',
      amenities: ['Issiq suv', 'Wi-Fi', 'Konditsioner', 'Milliy nonushta', 'Bolalar maydonchasi']
    },
    departureDates: ['25-Oktabr', '01-Noyabr', '08-Noyabr'],
    groupSizeLimit: 15
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', label: 'Barcha turlar', icon: 'Sparkles' },
  { id: 'tarix', label: 'Tarixiy shaharlar', icon: 'Landmark' },
  { id: 'tog', label: 'Tog‘ va kanyonlar', icon: 'Mountain' },
  { id: 'tabiat', label: 'Tabiat va ko‘llar', icon: 'Trees' },
  { id: 'ziyorat', label: 'Ziyorat va shifo', icon: 'Compass' },
  { id: 'oilaviy', label: 'Oilaviy xavfsiz', icon: 'Users' },
];
