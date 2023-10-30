export default {
  meta: {
    descriptions: {
      index:
        "Službene stranice Dobrovoljnog vatrogasnog društva Sikirevci i Vatrogasne zajednice općine Sikirevci.",
      dvd: {
        about:
          "Najbitnije informacije o Dobrovoljnom vatrogasnom društvu Sikirevci",
        history: "Bogata povijest Dobrovoljnog vatrogasnog društva Sikirevci",
        news: "Najnovije vijesti i događanja vezana za DVD Sikirevci",
        documents: "Arhiva službene dokumentacije DVD-a Sikirevci",
      },
      vzo: {
        about:
          "Najbitnije informacije o Vatrogasnoj zajednici općine Sikirevci",
        news: "Najnovije vijesti i događanja vezana za VZO Sikirevci",
        documents:
          "Arhiva službene dokumentacije Vatrogasne zajednice općine Sikirevci",
      },
      contact: {
        dvd: "Podaci za kontaktiranje DVD-a Sikirevci",
        vzo: "Podaci za kontaktiranje VZO Sikirevci",
      },
    },
    titles: {
      index: "Početna | DVD Sikirevci i VZO Sikirevci",
      dvd: {
        about: "O nama | DVD Sikirevci",
        history: "Povijest | DVD Sikirevci",
        news: "Novosti | DVD Sikirevci",
        documents: "Dokumenti | DVD Sikirevci",
      },
      vzo: {
        about: "O nama | VZO Sikirevci",
        news: "Novosti | VZO Sikirevci",
        documents: "Dokumenti | VZO Sikirevci",
      },
      contact: {
        dvd: "Kontakt | DVD Sikirevci",
        vzo: "Kontakt | VZO Sikirevci",
      },
    },
  },
  header: {
    menu: [
      { name: "Početna", url: "/", type: "url" },
      {
        name: "DVD",
        type: "submenu",
        submenu: [
          { name: "O nama", url: "/dvd/o-nama" },
          { name: "Povijest", url: "/dvd/povijest" },
          { name: "Novosti", url: "/dvd/novosti" },
          { name: "Dokumenti", url: "/dvd/dokumenti" },
        ],
      },
      {
        name: "VZO",
        type: "submenu",
        submenu: [
          { name: "O nama", url: "/vzo/o-nama" },
          { name: "Novosti", url: "/vzo/novosti" },
          { name: "Dokumenti", url: "/vzo/dokumenti" },
        ],
      },
      {
        name: "Kontakt",
        type: "submenu",
        submenu: [
          { name: "Kontakt DVD", url: "/dvd/kontakt" },
          { name: "Kontakt VZO", url: "/vzo/kontakt" },
        ],
      },
    ],
  },
  pages: {
    index: {
      alt: "Vozila i zgrada DVD-a Sikirevci",
      h1: "Službene stranice DVD-a Sikirevci",
    },
    dvd: {
      about: {
        alt: "Članovi DVD-a Sikirevci na intervenciji",
        h1: "O Dobrovoljnom vatrogasnom društvu Sikirevci",
      },
      history: {
        alt: "Svečano otvorenje novog vatrogasnog doma",
        h1: "Povijest DVD-a Sikirevci",
      },
      documents: {
        alt: "Svečna skupština DVD-a",
        h1: "Arhiva dokumentacije DVD-a Sikirevci",
      },
      news: {
        alt: "Članovi DVD-a Sikirevci mlaznicama pokazuju boje zastave RH",
        h1: "Najnovije iz DVD-a Sikirevci",
      },
      contact: {
        alt: "Kontaktirajte DVD Sikirevci",
        h1: "Kontakt podaci za DVD Sikirevci",
      },
    },
    vzo: {
      documents: {
        alt: "Svečna skupština VZO-a",
        h1: "Arhiva dokumentacije VZO Sikirevci",
      },
      news: {
        alt: "Članovi DVD-a Sikirevci na vježbi",
        h1: "Najnovije iz VZO Sikirevci",
      },
      contact: {
        alt: "Kontaktirajte VZO Sikirevci",
        h1: "Kontakt podaci za VZO Sikirevci",
      },
      about: {
        alt: "O VZO Sikirevci",
        h1: "O Vatrogasnoj zajednici općine Sikirevci",
      },
    },
  },
};
