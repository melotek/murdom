export type Offers = {
  image: string,
  meters: number,
  livingmeters: number, groundmeters: number, floors: number, underground: boolean, garage: boolean, carplaces: number, attic: boolean, bathrooms: number, rooms: number, heat: string,
  livingspace: number,
  title: string, type: string, description: string, carplacesDescription: string, kind: string
}

export type Testimony = {
  image: string,
  name: string,
  content: string
}

export type Content = {
  head: any,
  navbar: any,
  offers: Offers[],
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
    { text: 'Realizacje', href: '/realizacje' },
    { text: 'Opinie', href: '/opinie' },
    { text: 'O nas', href: '/o-nas' },
  ],
  offers: [
    {
      title: "Dwieście sześćdziesiąt", type: "260 metrow kadratowych",
      image: "/IMG-20220629-WA0004.jpg",
      meters: 260, livingmeters: 220, groundmeters: 5, floors: 2, underground: true, heat: "Gazowe", garage: true, carplaces: 2, carplacesDescription: "dwustanowiskowy", attic: true, bathrooms: 2, rooms: 5, livingspace: 100, description: "Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.",
      kind: "Dom wolnostojący"
    },
    {
      title: "Dwieście czterdzieści", type: "240 metrow kadratowych",
      image: "/IMG-20220629-WA0017.jpg",
      meters: 240, livingmeters: 190, groundmeters: 5, floors: 2, underground: true, heat: "Gazowe", garage: true, carplaces: 1, carplacesDescription: "jednostanowiskowy", attic: true, bathrooms: 2, rooms: 5, livingspace: 100, description: "Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.",
      kind: "Dom wolnostojący"
    },
    {
      title: "Dwieście dwadzieścia", type: "220 metrow kadratowych",
      image: "/IMG-20220629-WA0026.jpg",
      meters: 220, livingmeters: 200, groundmeters: 4, floors: 2, underground: true, heat: "Gazowe", garage: true, carplaces: 1, carplacesDescription: "jednostanowiskowy", attic: true, bathrooms: 2, rooms: 5, livingspace: 100, description: "Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.",
      kind: "Dom wolnostojący"
    },
    {

      title: "Dwieście", type: "200 metrow kadratowych",
      image: "/IMG-20220629-WA0028.jpg", meters: 200, livingmeters: 180, groundmeters: 4, floors: 2, underground: true, heat: "Gazowe", garage: true, carplaces: 1, carplacesDescription: "jednostanowiskowy", attic: true, bathrooms: 2, rooms: 5, livingspace: 100, description: "Największy z naszych oferowanych domów, posiada również duży ogródek, stan realizacji surowy, możemy jeszcze na życzenie zmodyfikować układ ścian działowych.",
      kind: "Dom wolnostojący"
    }
  ],
  testimonies: [
    {
      image: "/testimony1.jpg",
      name: "Maciej i Agnieszka",
      content: "Polecamy Państwu firmę Murdom, w 2018 roku kupiliślmy dom wolnostojący, deweloper dostosował nieruchomość do naszych indywidualnych potrzeb."
    },
    {
      image: "/testimony2.jpg",
      name: "Robert i Izabela", content: "Jesteśmy bardzo zadowoleni, z jakości materiałów, oraz solidności budynku."
    }
  ]
};
export default content;
