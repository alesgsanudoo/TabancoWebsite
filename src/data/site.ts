export const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.373228612871!2d-6.137871199999999!3d37.3810049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12130c2d20513d%3A0x95afc0939af5490d!2zVGFiYW5jbyBPbMOpIFTDug!5e0!3m2!1sen!2ses!4v1782302717900!5m2!1sen!2ses";

export const menuUrl = "https://menu.tabancooletu.com/";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tabancooletu/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Tabanco-Ol%C3%A9-T%C3%BA-61560859294070/",
  },
  {
    label: "Tripadvisor",
    href: "https://www.tripadvisor.es/Restaurant_Review-g776187-d27930785-Reviews-Tabanco_Ole_Tu-Espartinas_Province_of_Seville_Andalucia.html",
  },
] as const;

export const languages = ["es", "en"] as const;

export type Language = (typeof languages)[number];

export const featureKeys = ["wine", "tapas", "mood"] as const;

export const translations = {
  es: {
    meta: {
      title: "Tabanco Olé Tú | Vinos, tapas y buen ambiente",
      description:
        "Tabanco Olé Tú, vinos, tapas y buen ambiente en un espacio familiar, elegante y cercano.",
    },
    nav: {
      about: "Quiénes somos",
      menu: "Carta",
      location: "Ubicación",
      contact: "Contacto",
      reserve: "Reserva",
    },
    hero: {
      eyebrow: "Vinos, tapas y buen ambiente",
      lede: "Un tabanco familiar en Espartinas con alma de bodega: copas bien servidas, tapas para compartir y estanterías llenas de historias.",
      reserve: "Reservar",
      visit: "Cómo llegar",
      discover: "Ver la carta",
      note: "Centro Comercial Espartal · Espartinas",
    },
    about: {
      title: "Un negocio familiar con simpatía",
      body: "Somos un negocio familiar con simpatía. Nuestro mayor deseo es que el cliente disfrute con nuestra variedad de vinos, tapas y buen ambiente.",
      pull: "Aquí se viene a brindar, picar algo rico y quedarse a gusto.",
    },
    proposal: {
      title: "La carta, siempre a mano",
      body: "Comida, vinos, cervezas, alcohol, cafés, tés y refrescos reunidos en una carta digital clara para pedir sin complicarse.",
      cta: "Abrir carta digital",
    },
    features: {
      wine: {
        title: "Vinos y generosos",
        body: "Selección para descubrir copa a copa, desde referencias de la tierra hasta vinos de Jerez.",
      },
      tapas: {
        title: "Tapas y conservas",
        body: "Bocados sencillos, sabrosos y perfectos para acompañar una mesa compartida.",
      },
      mood: {
        title: "Ambiente con arte",
        body: "Trato cercano, buena música y ese punto de alegría que invita a volver.",
      },
    },
    visit: {
      title: "Ven a brindar con nosotros",
      body: "Estamos en el Centro Comercial Espartal, una parada fácil para una tapa rápida, una copa sin prisa o una noche con amigos.",
      addressLabel: "Dirección",
      address: "Centro Comercial Espartal, 41807 Espartinas, Sevilla, España",
      hoursLabel: "Horario",
      hours: "Consulta nuestro horario actualizado antes de venir",
    },
    contact: {
      title: "Reserva tu mesa",
      body: "Llámanos y te atendemos con gusto para guardar mesa, venir en grupo o preguntar por la carta.",
      action: "Llámanos",
      phoneOne: "+34 611 12 95 45",
      phoneTwo: "+34 693 32 76 90",
      phoneLabel: "Reserva por teléfono",
      socialTitle: "Síguenos en redes",
    },
    map: {
      title: "Mapa de Tabanco Olé Tú",
    },
    footer: {
      line: "Vinos, tapas, boutique de vinos y conservas.",
    },
  },
  en: {
    meta: {
      title: "Tabanco Olé Tú | Wine, tapas and good atmosphere",
      description:
        "Tabanco Olé Tú, wine, tapas and a good atmosphere in a warm, elegant family-run space.",
    },
    nav: {
      about: "About us",
      menu: "Menu",
      location: "Location",
      contact: "Contact",
      reserve: "Book",
    },
    hero: {
      eyebrow: "Wine, tapas and good atmosphere",
      lede: "A family-run tabanco in Espartinas with the soul of a wine bar: generous pours, tapas to share and shelves full of stories.",
      reserve: "Book",
      visit: "How to get here",
      discover: "Open the menu",
      note: "Centro Comercial Espartal · Espartinas",
    },
    about: {
      title: "A friendly family-run place",
      body: "We are a friendly family-run business. Our greatest wish is for every guest to enjoy our variety of wines, tapas and welcoming atmosphere.",
      pull: "Come for a glass, stay for a bite, and leave feeling at home.",
    },
    proposal: {
      title: "The menu, always close",
      body: "Food, wine, beer, spirits, coffee, tea and soft drinks gathered in a clear digital menu for easy ordering.",
      cta: "Open digital menu",
    },
    features: {
      wine: {
        title: "Wine and sherry",
        body: "A selection to discover glass by glass, from local labels to wines from Jerez.",
      },
      tapas: {
        title: "Tapas and preserves",
        body: "Simple, flavorful bites made for a shared table.",
      },
      mood: {
        title: "Atmosphere",
        body: "Warm service, good music and a lively touch that invites you back.",
      },
    },
    visit: {
      title: "Come raise a glass with us",
      body: "Find us at Centro Comercial Espartal, an easy stop for a quick tapa, an unhurried drink or a night out with friends.",
      addressLabel: "Address",
      address: "Centro Comercial Espartal, 41807 Espartinas, Seville, Spain",
      hoursLabel: "Hours",
      hours: "Check our latest opening hours before visiting",
    },
    contact: {
      title: "Book a table",
      body: "Call us and we will gladly help you reserve a table, visit as a group or ask about the menu.",
      action: "Call us",
      phoneOne: "+34 611 12 95 45",
      phoneTwo: "+34 693 32 76 90",
      phoneLabel: "Book by phone",
      socialTitle: "Follow us",
    },
    map: {
      title: "Map for Tabanco Olé Tú",
    },
    footer: {
      line: "Wine, tapas, wine boutique and preserves.",
    },
  },
} as const;

export const defaultLanguage: Language = "es";
