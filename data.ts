export type Offers = {
  image: string
  meters: number
  livingmeters: number
  groundmeters: number
  floors: number
  underground: boolean
  garage: boolean
  carplaces: number
  attic: boolean
  bathrooms: number
  rooms: number
  livingspace: number
  title: string
  type: string
  description: string
  carplacesDescription: string
  kind: string
  advantages: string[]
  otherImages: string[]
  coords: {
    lat: number
    long: number
  }
  kindergarten: {
    distance: string
  }
  school: {
    distance: string
  }
  hospital: {
    distance: string
  }
  grocery: { name: string; distance: string }[]
  hipermaket: { name: string; distance: string }[]
}

export type Testimony = {
  image: string
  name: string
  content: string
}

export type Content = {
  head: any
  navbar: any
  offers: Offers[]
  testimonies: Testimony[]
}

const content: Content = {
  head: [
    { name: 'lang', content: 'pl-PL' },
    {
      name: 'description',
      content:
        'Firma MurDom, to deweloper z uznaną marką, specjalizuje się w realizacji inwestycji domów jednorodzinnych',
    },
    {
      name: 'description',
      content: 'Domy wolnostojące w Rąbień AB, województwo Łódzkie.',
    },
  ],
  navbar: [
    { text: 'Strona główna', href: '/' },
    { text: 'Domy Rąbień AB', href: '/domy-rabien-ab' },
    // { text: 'Realizacje', href: '/realizacje' },
    { text: 'Opinie', href: '/opinie' },
    { text: 'O nas', href: '/o-nas' },
  ],
  offers: [
    {
      title: 'Dwieście sześćdziesiąt',
      type: '260 metrow kadratowych',
      otherImages: [
        '/IMG-20220629-WA0001.jpg',
        '/IMG-20220629-WA0002.jpg',
        '/IMG-20220629-WA0003.jpg',
        '/IMG-20220629-WA0013.jpg',
        '/IMG-20220629-WA0014.jpg',
      ],

      image: '/IMG-20220629-WA0004.jpg',
      meters: 260,
      livingmeters: 220,
      groundmeters: 5,
      floors: 2,
      advantages: [
        'Ogrzewanie gazowe',
        'Droga utwardzona',
        'Kostka brukowa na podjeździe',
      ],

      underground: true,

      garage: true,
      carplaces: 2,
      carplacesDescription: 'dwustanowiskowy',
      attic: true,
      bathrooms: 2,
      rooms: 5,
      livingspace: 100,
      description:
        'Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.',
      kind: 'Dom wolnostojący',
      coords: { lat: 19.2952482, long: 51.7870749 },
      kindergarten: {
        distance: '2.5 km',
      },
      school: { distance: '2.5 km' },
      hospital: { distance: '5 km' },
      grocery: [{ name: 'żabka', distance: '600 m' }],
      hipermaket: [{ name: 'macro', distance: '4.5 km' }],
    },
    {
      title: 'Dwieście czterdzieści',
      type: '240 metrow kadratowych',
      otherImages: [
        '/IMG-20220629-WA0029.jpg',
        '/IMG-20220629-WA0027.jpg',
        '/IMG-20220629-WA0038.jpg',
      ],

      image: '/IMG-20220629-WA0017.jpg',
      meters: 240,
      livingmeters: 190,
      groundmeters: 5,
      floors: 2,
      underground: true,
      advantages: [
        'Ogrzewanie gazowe',
        'Droga utwardzona',
        'Kostka brukowa na podjeździe',
      ],
      garage: true,
      carplaces: 1,
      carplacesDescription: 'jednostanowiskowy',
      attic: true,
      bathrooms: 2,
      rooms: 5,
      livingspace: 100,
      description:
        'Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.',
      kind: 'Dom wolnostojący',
      coords: { lat: 19.2952482, long: 51.7870749 },
      kindergarten: {
        distance: '2.5 km',
      },
      school: { distance: '2.5 km' },
      hospital: { distance: '5 km' },
      grocery: [{ name: 'żabka', distance: '600 m' }],
      hipermaket: [{ name: 'macro', distance: '4.5 km' }],
    },
    {
      title: 'Dwieście dwadzieścia',
      type: '220 metrow kadratowych',
      otherImages: [
        '/IMG-20220629-WA0022.jpg',
        '/IMG-20220629-WA0023.jpg',
        '/IMG-20220629-WA0024.jpg',
        '/IMG-20220629-WA0025.jpg',
      ],

      image: '/IMG-20220629-WA0026.jpg',
      meters: 220,
      livingmeters: 200,
      groundmeters: 4,
      floors: 2,
      underground: true,
      advantages: [
        'Ogrzewanie gazowe',
        'Droga utwardzona',
        'Kostka brukowa na podjeździe',
      ],
      garage: true,
      carplaces: 1,
      carplacesDescription: 'jednostanowiskowy',
      attic: true,
      bathrooms: 2,
      rooms: 5,
      livingspace: 100,
      description:
        'Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.',
      kind: 'Dom wolnostojący',
      coords: { lat: 19.2952482, long: 51.7870749 },
      kindergarten: {
        distance: '2.5 km',
      },
      school: { distance: '2.5 km' },
      hospital: { distance: '5 km' },
      grocery: [{ name: 'żabka', distance: '600 m' }],
      hipermaket: [{ name: 'macro', distance: '4.5 km' }],
    },
    {
      title: 'Dwieście',
      type: '200 metrow kadratowych',
      otherImages: [''],

      image: '/IMG-20220629-WA0019.jpg',
      meters: 200,
      livingmeters: 180,
      groundmeters: 4,
      floors: 2,
      underground: true,
      advantages: [
        'Ogrzewanie gazowe',
        'Droga utwardzona',
        'Kostka brukowa na podjeździe',
      ],
      garage: true,
      carplaces: 1,
      carplacesDescription: 'jednostanowiskowy',
      attic: true,
      bathrooms: 2,
      rooms: 5,
      livingspace: 100,
      description:
        'Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.',
      kind: 'Dom wolnostojący',
      coords: { lat: 19.2952482, long: 51.7870749 },
      kindergarten: {
        distance: '2.5 km',
      },
      school: { distance: '2.5 km' },
      hospital: { distance: '5 km' },
      grocery: [{ name: 'żabka', distance: '600 m' }],
      hipermaket: [{ name: 'macro', distance: '4.5 km' }],
    },
    {
      title: 'Dwieście',
      type: '200 metrow kadratowych',
      otherImages: [''],

      image: '/IMG-20220629-WA0019.jpg',
      meters: 200,
      livingmeters: 180,
      groundmeters: 4,
      floors: 2,
      underground: true,
      advantages: [
        'Ogrzewanie gazowe',
        'Droga utwardzona',
        'Kostka brukowa na podjeździe',
      ],
      garage: true,
      carplaces: 1,
      carplacesDescription: 'jednostanowiskowy',
      attic: true,
      bathrooms: 2,
      rooms: 5,
      livingspace: 100,
      description:
        'Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.',
      kind: 'Dom wolnostojący',
      coords: { lat: 19.2952482, long: 51.7870749 },
      kindergarten: {
        distance: '2.5 km',
      },
      school: { distance: '2.5 km' },
      hospital: { distance: '5 km' },
      grocery: [{ name: 'żabka', distance: '600 m' }],
      hipermaket: [{ name: 'macro', distance: '4.5 km' }],
    },
  ],
  testimonies: [
    {
      image: '/testimony1.jpg',
      name: 'Maciej i Agnieszka',
      content:
        'Polecamy Państwu firmę Murdom, w 2018 roku kupiliślmy dom wolnostojący, deweloper dostosował nieruchomość do naszych indywidualnych potrzeb.',
    },
    {
      image: '/testimony2.jpg',
      name: 'Robert i Izabela',
      content:
        'Jesteśmy bardzo zadowoleni, z jakości materiałów, oraz solidności budynku.',
    },
  ],
}
export default content
