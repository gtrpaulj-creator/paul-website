// Central content store — edit text here to update the whole site.

export const links = {
  facebook: 'https://www.facebook.com/guitaristpauljohnson',
  youtube: 'https://www.youtube.com/channel/UC7rW9LAAN1qIrxrN_zZkm0A',
  youtubeAlbum:
    'https://www.youtube.com/playlist?list=OLAK5uy_lnkKo0nXhS2rJ7B1OgPSreTAFaV4EIzD4',
  spotify: 'https://open.spotify.com/album/3iZZJh2szB11NsToThpUt9',
  appleMusic: 'https://itunes.apple.com/us/album/coming-home/id401291685',
  amazon:
    'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Ddigital-music&field-keywords=paul+johnson+coming+home',
  cdbaby: 'http://www.cdbaby.com/pjohnsonmusic',
  spotifyEmbed: 'https://open.spotify.com/embed/album/3iZZJh2szB11NsToThpUt9?theme=0',
  email: 'gtrpaulj@gmail.com',
}

// Upcoming shows — edit / add entries here. Past dates can simply be removed.
// PLACEHOLDER DATA — replace with Paul's real calendar before launch.
export const shows = [
  {
    date: 'Sat · Nov 14, 2026',
    time: '6:00 - 8:00 PM',
    venue: 'Ristrettos',
    city: 'Covington, WA',
    detail: 'Solo show',
  },
  {
    date: 'Fri · Dec 4, 2026',
    time: '4:00 PM',
    venue: "Private Event",
    city: 'Covington, WA',
    detail: 'Private event with Darren Motamedy',
  },
  {
    date: 'Sat · Dec 5, 2026',
    time: '6:00 PM',
    venue: "Private Event",
    city: 'Seattle, WA',
    detail: 'Private event with Darren Motamedy',
  },
  {
    date: 'Fri · Dec 11, 2026',
    time: '7:00 - 9:00 PM',
    venue: 'Vintage Vino and Espresso',
    city: 'Maple Valley, WA',
    detail: 'Vintage Christmas Show #1!',
  },
  {
    date: 'Sat · Dec 12, 2026',
    time: '7:00 - 9:00 PM',
    venue: 'Vintage Vino and Espresso',
    city: 'Maple Valley, WA',
    detail: 'Vintage Christmas Show #2!',
  },
  {
    date: 'Fri · Dec 18, 2026',
    time: '2:00 - 4:00 PM',
    venue: 'Wesley Homes',
    city: 'Des Moines, WA',
    detail: 'Private event, with Richard Perry and Wayne Ledbetter',
  },
]

export const bands = [
  'Darren Motamedy',
  'Gruv Collective',
  'Cosmic Vinyl',
  'Wally and the Beaves',
]

export const services = [
  {
    title: 'Solo Guitar',
    desc: 'Just guitar and atmosphere — perfect for intimate dinners, wine bars, and coffee houses.',
  },
  {
    title: 'Trio & Quartet',
    desc: 'A full, polished sound for concerts, galleries, and listening rooms.',
  },
  {
    title: 'Corporate & Private Events',
    desc: 'A smooth, professional presence for receptions, fundraisers, weddings, and celebrations.',
  },
]

export const streaming = [
  { name: 'Spotify', href: links.spotify },
  { name: 'Apple Music', href: links.appleMusic },
  { name: 'YouTube', href: links.youtubeAlbum },
  { name: 'Amazon Music', href: links.amazon },
  { name: 'CD Baby', href: links.cdbaby },
]
