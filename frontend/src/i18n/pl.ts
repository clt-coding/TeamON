/** Polish UI strings — the source of truth for translation keys. */
export const pl = {
  // Topbar
  "topbar.gamesNav": "Gry",
  "topbar.addGame": "+ DODAJ GRĘ",
  "topbar.myProfile": "Mój profil: {name}",
  "topbar.loggedInAs": "ZALOGOWANO JAKO",

  // Shared UI
  "logo.home": "TeamON — strona główna",
  "languageToggle.label": "Wybierz język",

  // Sidebar
  "sidebar.expand": "Rozwiń filtry",
  "sidebar.collapse": "Zwiń filtry",
  "sidebar.filters": "FILTRY",
  "sidebar.kicker": "WYSZUKIWANIE",
  "sidebar.heading": "Czego szukasz?",
  "sidebar.searchPlayer": "Gracza",
  "sidebar.searchTournament": "Turnieju",
  "sidebar.position": "POZYCJA",
  "sidebar.language": "JĘZYK",
  "sidebar.anyLanguage": "Dowolny język",
  "sidebar.polish": "Polski",
  "sidebar.english": "Angielski",
  "sidebar.german": "Niemiecki",
  "sidebar.yes": "Tak",
  "sidebar.no": "Nie",
  "sidebar.clearFilters": "Wyczyść filtry",

  // Dashboard
  "dashboard.availablePlayers": "{count} DOSTĘPNYCH GRACZY",
  "dashboard.newest": "NAJNOWSZE",
  "listings.kicker": "01 / GRACZE",
  "listings.titleBefore": "Znajdź swój",
  "listings.titleAccent": "team.",
  "listings.subtitle": "Osoby, które pasują do Twojego stylu gry.",
  "listings.searchPlaceholder": "Szukaj gracza...",
  "listings.searchLabel": "Szukaj gracza",
  "listings.emptyTitle": "Brak graczy",
  "listings.emptyMessage": "Zmień filtry, aby zobaczyć więcej osób.",

  // Player card & listing modal
  "card.photoAlt": "Zdjęcie profilowe {name}",
  "modal.label": "Szczegóły ogłoszenia",
  "modal.close": "Zamknij",
  "modal.kicker": "OGŁOSZENIE GRACZA",
  "modal.experience": "DOŚWIADCZENIE",
  "modal.years": "{count} lat",
  "modal.currentRank": "AKTUALNA RANGA",
  "modal.favouriteChampions": "ULUBIENI BOHATEROWIE",
  "modal.sendRequest": "Wyślij prośbę o dołączenie",
  "modal.requestSent": "Prośba wysłana",
  "modal.viewProfile": "Zobacz profil",

  // Landing
  "landing.eyebrow": "TWOJA GRA. TWOJA EKIPA.",
  "landing.titleLine1": "Przestań grać",
  "landing.titleLine2": "z",
  "landing.titleAccent": "przypadkiem.",
  "landing.lead":
    "Masz dość grania z losowymi osobami? Tutaj znajdziesz swoje duo idealnie pasujące do Ciebie.",
  "landing.register": "Zarejestruj się",
  "landing.login": "Zaloguj się",
  "landing.caption":
    "Brakuje Wam ostatniej osoby w drużynie do zagrania na turnieju? W TeamON szybko znajdziesz brakującego gracza.",
  "heroCard.recentlyJoined": "OSTATNIO DOŁĄCZYŁA",
  "heroCard.photoAlt": "{name}, graczka League of Legends",
  "socialProof.text": "graczy już szuka drużyny",

  // Profile
  "profile.back": "← WRÓĆ DO OGŁOSZEŃ",
  "profile.mine": "MÓJ PROFIL",
  "profile.player": "PROFIL GRACZA",
  "profile.edit": "Edytuj profil",
  "profile.invite": "Zaproś do drużyny",
  "profile.aboutKicker": "01 / O MNIE",
  "profile.aboutTitle": "Opis",
  "profile.interestsKicker": "02 / ZAINTERESOWANIA",
  "profile.interestsTitle": "Zainteresowania",
  "profile.gamesKicker": "03 / GRY",
  "profile.gamesTitle": "W co gram",
  "openListings.kicker": "04 / OGŁOSZENIA",
  "openListings.title": "Otwarte ogłoszenia",
  "openListings.listing": "OGŁOSZENIE · {position}",
  "openListings.details": "ZOBACZ SZCZEGÓŁY",

  // 404
  "notFound.title": "Nie znaleziono strony",
  "notFound.message": "Ta strona nie istnieje albo gracz usunął swój profil.",
  "notFound.back": "Wróć do ogłoszeń",
} as const;

export type TranslationKey = keyof typeof pl;
