const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const initialDestinations = [
  { id: 1, title: "Maldives", country: "Maldives", description: "Atolls immaculés et villas sur pilotis au-dessus d'un lagon turquoise.", price: 320, days: 7, rating: 5, image: u("photo-1514282401047-d79a71a590e8") },
  { id: 2, title: "Santorini", country: "Grèce", description: "Couchers de soleil et maisons blanches face à la mer Égée.", price: 1299, days: 7, rating: 4.9, image: u("photo-1570077188670-e3a8d69ac5ff") },
  { id: 3, title: "Bali", country: "Indonésie", description: "Temples anciens, rizières en terrasses et plages paisibles.", price: 899, days: 10, rating: 4.8, image: u("photo-1537996194471-e657df975ab4") },
  { id: 4, title: "Machu Picchu", country: "Pérou", description: "Citadelle inca perchée dans les nuages de la cordillère des Andes.", price: 1599, days: 5, rating: 4.9, image: u("photo-1526392060635-9d6019884377") },
  { id: 5, title: "Tokyo", country: "Japon", description: "Métropole électrique où traditions et modernité se croisent.", price: 1199, days: 8, rating: 4.7, image: u("photo-1540959733332-eab4deabeeaf") },
  { id: 6, title: "Paris", country: "France", description: "Tour Eiffel, bords de Seine, musées et cafés à chaque coin de rue.", price: 750, days: 5, rating: 4.5, image: u("photo-1502602898657-3e91760cbb34") },
  { id: 7, title: "New York", country: "États-Unis", description: "La ville qui ne dort jamais : Times Square, Central Park et skyline.", price: 1450, days: 6, rating: 4.4, image: u("photo-1496442226666-8d4d0e62e6e9") },
  { id: 8, title: "Dubaï", country: "Émirats arabes unis", description: "Gratte-ciel vertigineux, désert doré et shopping de luxe.", price: 1350, days: 6, rating: 4.3, image: u("photo-1512453979798-5ea266f8880c") },
  { id: 9, title: "Rome", country: "Italie", description: "Colisée, fontaines et pasta : l'histoire se visite à pied.", price: 690, days: 5, rating: 4.6, image: u("photo-1552832230-c0197dd311b5") },
  { id: 10, title: "Sydney", country: "Australie", description: "Opéra mythique, plages de surf et baie ensoleillée.", price: 1850, days: 12, rating: 4.5, image: u("photo-1506973035872-a4ec16b8e8d9") },
  { id: 11, title: "Istanbul", country: "Turquie", description: "Entre deux continents : mosquées, bazars et croisières sur le Bosphore.", price: 520, days: 5, rating: 4.4, image: u("photo-1541432901042-2d8bd64b4a9b") },
  { id: 12, title: "Le Caire", country: "Égypte", description: "Pyramides de Gizeh, Sphinx et croisière sur le Nil.", price: 640, days: 7, rating: 4.2, image: u("photo-1539650116574-8efeb43e2750") },
  { id: 13, title: "Marrakech", country: "Maroc", description: "Médina colorée, jardins secrets et souks parfumés.", price: 430, days: 4, rating: 4.3, image: u("photo-1597212618440-806262de4f6b") },
  { id: 14, title: "Rio de Janeiro", country: "Brésil", description: "Christ Rédempteur, plage de Copacabana et rythme de samba.", price: 980, days: 8, rating: 4.1, image: u("photo-1483729558449-99ef09a8c325") },
  { id: 15, title: "Reykjavik", country: "Islande", description: "Aurores boréales, geysers et cascades spectaculaires.", price: 1100, days: 6, rating: 4.7, image: u("photo-1504893524553-b855bce32c67") },
  { id: 16, title: "Barcelone", country: "Espagne", description: "Gaudí, tapas et plages au cœur de la Catalogne.", price: 560, days: 5, rating: 4.2, image: u("photo-1583422409516-2895a77efded") },
  { id: 17, title: "Interlaken", country: "Suisse", description: "Lacs cristallins et sommets enneigés au pied des Alpes.", price: 1250, days: 6, rating: 3.9, image: u("photo-1530122037265-a5f1f91d3b99") },
  { id: 18, title: "Djerba", country: "Tunisie", description: "Île douce aux ruelles blanches, plages dorées et médina de Houmt Souk.", price: 180, days: 7, rating: 3.6, image: u("photo-1572252009286-268acec5ca0a") },
];
