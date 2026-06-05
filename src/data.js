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
  email: 'booking@guitaristpauljohnson.com',
}

// Upcoming shows — edit / add entries here. Past dates can simply be removed.
// PLACEHOLDER DATA — replace with Paul's real calendar before launch.
export const shows = [
  {
    date: 'Fri · Jun 13, 2026',
    time: '7:00 PM',
    venue: 'Vino Aquino Wine Bar',
    city: 'Tacoma, WA',
    detail: 'Solo guitar',
  },
  {
    date: 'Sat · Jun 21, 2026',
    time: '6:30 PM',
    venue: "Anthony's HomePort",
    city: 'Gig Harbor, WA',
    detail: 'Trio w/ Darren Motamedy',
  },
  {
    date: 'Thu · Jul 3, 2026',
    time: '5:00 PM',
    venue: 'Chambers Bay Summer Series',
    city: 'University Place, WA',
    detail: 'Quartet · Outdoor concert',
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
    desc: 'A full, polished sound for concerts, galleries, and listening rooms across the Puget Sound.',
  },
  {
    title: 'Corporate & Private Events',
    desc: 'A smooth, professional presence for receptions, fundraisers, weddings, and celebrations.',
  },
  {
    title: 'Sideman & Collaborations',
    desc: 'Versatile support for vocalists, horn players, and bands that need a tasteful guitarist.',
  },
]

export const streaming = [
  { name: 'Spotify', href: links.spotify },
  { name: 'Apple Music', href: links.appleMusic },
  { name: 'YouTube', href: links.youtubeAlbum },
  { name: 'Amazon Music', href: links.amazon },
  { name: 'CD Baby', href: links.cdbaby },
]
