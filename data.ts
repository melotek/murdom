export type Offers = {
  image: string,
  meters: number,
  livingmeters: number, groundmeters: number, floors: number, underground: string, garage: string, carplaces: number, attic: string, bathrooms: number, rooms: number, heat: string
  livingspace: number
}

export type Content = {
  head: any,
  navbar: any,
  offers: Offers[]

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
    { text: 'Realizacje', href: '/realizacje' },
    { text: 'Opinie', href: '/opinie' },
    { text: 'O nas', href: '/o-nas' },
  ],
  offers: [
    {
      image: "/IMG-20220629-WA0004.jpg",
      meters: 260, livingmeters: 220, groundmeters: 4, floors: 2, underground: "tak", heat: "Gazowe", garage: "tak", carplaces: 1, attic: "tak", bathrooms: 2, rooms: 5, livingspace: 100
    },
    {
      image: "/IMG-20220629-WA0017.jpg",
      meters: 240, livingmeters: 190, groundmeters: 4, floors: 2, underground: "tak", heat: "Gazowe", garage: "tak", carplaces: 1, attic: "tak", bathrooms: 2, rooms: 5, livingspace: 100
    },
    {
      image: "/IMG-20220629-WA0026.jpg",
      meters: 220, livingmeters: 200, groundmeters: 4, floors: 2, underground: "tak", heat: "Gazowe", garage: "tak", carplaces: 1, attic: "tak", bathrooms: 2, rooms: 5, livingspace: 100
    },
    { image: "/IMG-20220629-WA0028.jpg", meters: 200, livingmeters: 180, groundmeters: 4, floors: 2, underground: "tak", heat: "Gazowe", garage: "tak", carplaces: 1, attic: "tak", bathrooms: 2, rooms: 5, livingspace: 100 }
  ]
};
export default content;
