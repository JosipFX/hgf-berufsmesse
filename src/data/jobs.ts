export interface Job {
  id: string;
  title: string;
  image: string;
  description: string;
  cardDescription: string;
  profile: string[];
  profileImage: string;
  requirements: string;
  duration: {
    years: string;
    degree: string;
  };
  education: {
    type: string;
    details: string[];
  };
  salaries: {
    year: string;
    amount: number;
  }[];
}

export const jobs: Job[] = [
  {
    id: 'koch',
    title: 'Köchin / Koch EFZ',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Kochin_Koch_classic_4-v2.webp',
    cardDescription: 'Als Koch/Köchin kreierst du kulinarische Meisterwerke und lernst alle Aspekte der Küche kennen.',
    description: 'Wir sind das Herz jedes Restaurants - als Köchinnen und Köche EFZ zaubern wir täglich mit Pfannen und Töpfen und nehmen unsere Gäste auf kulinarische Abenteuer mit. Dafür organisieren wir den Tagesablauf und prüfen Produkte auf ihre Qualität. Unser Ziel: Den Gästen soll es schmecken. Deshalb erlernen wir die Kunst, aus hochwertigen, saisonalen Lebensmitteln köstliche Gerichte zuzubereiten und sie auf dem Teller so richtig in Szene zu setzen. Wir wissen genau, wie jedes Gericht zu einem besonderen Erlebnis wird. Dank uns ist Essen mehr als nur Ernährung!',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Kochin_Koch_bold_2.webp',
    profile: [
      'Ich liebe es, kreativ in der Küche zu sein',
      'Ich habe ein Auge fürs Detail und Präsentation',
      'Ich bin ein Teamplayer',
      'Ich punkte mit meinem guten Geschmackssinn',
      'Ich stehe auf Hygiene und Ordnung',
      'Ich bewahre auch bei Hochbetrieb einen kühlen Kopf'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 3 Jahre',
      degree: 'Abschluss mit eidg. Fähigkeitszeugnis EFZ'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Ausbildung im Betrieb',
        'Wöchentliche Berufsfachschule',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 },
      { year: '3. Lehrjahr', amount: 1550 }
    ]
  },
  {
    id: 'kuechenangestellte',
    title: 'Küchenangestellte / Küchenangestellter EBA',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Kochin_Koch_detail_1.webp',
    cardDescription: 'Als Küchenangestellte/r EBA unterstützt du das Küchenteam und lernst alle Grundkenntnisse der Küche kennen.',
    description: 'Wir sind das Herz jedes Restaurants – als Küchenangestellte EBA zaubern wir täglich mit Pfannen und Töpfen und nehmen unsere Gäste auf kulinarische Abenteuer mit. Deshalb erlernen wir die Kunst, aus hochwertigen, saisonalen Lebensmitteln köstliche Gerichte zuzubereiten und sie auf dem Teller so richtig in Szene zu setzen. Wir wissen genau, wie jedes Gericht zu einem besonderen Erlebnis wird. Dank uns ist Essen mehr als nur Ernährung!',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Kochin_Koch_bold_2.webp',
    profile: [
      'Ich liebe es, Neues in der Küche auszuprobieren',
      'Ich bin zuverlässig',
      'Ich blühe bei der Arbeit im Team auf',
      'Ich schätze Hygiene und Ordnung',
      'Ich bewahre auch bei Hochbetrieb einen kühlen Kopf'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 2 Jahre',
      degree: 'Abschluss mit eidg. Berufsattest EBA'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Ausbildung im Betrieb',
        'Wöchentliche Berufsfachschule',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 }
    ]
  },
  {
    id: 'systemgastronomie',
    title: 'Systemgastronomiefachfrau / Systemgastronomiefachmann EFZ',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Systemgastro.webp',
    cardDescription: 'Als Systemgastronomiefachfrau/-fachmann EFZ sorgst du für Qualität und Effizienz in der Gastronomie.',
    description: 'Wenn Qualität gefragt ist und es trotzdem schnell gehen muss, kommen wir ins Spiel. Wir Systemgastronomiefachfrauen und Systemgastronomiefachmänner EFZ sind die Allrounder der Gastroszene und oft in Selbstbedienungsrestaurants, Kantinen oder Catering-Unternehmen im Einsatz. Wir haben von der Küche bis zur Theke alles im Griff. Wir verarbeiten Lebensmittel, bereiten sie sorgfältig zu, und präsentieren sie mit einem Lächeln, wir beraten und verkaufen. Als Organisationstalente planen wir Arbeitseinsätze, koordinieren Abläufe und stellen sicher, dass alles nach einem präzisen System funktioniert. Auch in organisatorischen Positionen tragen wir Verantwortung und sind Schlüsselfiguren für einen reibungslosen Betrieb. So sorgen wir für kleine und grosse Highlights im Alltag unzähliger Menschen.',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Systemgastro.webp',
    profile: [
      'Ich liebe die gut organisierte Arbeit im Team',
      'Ich habe Freude am Berechnen und Budgetieren',
      'Ich interessiere mich für Speisen und deren Zubereitung',
      'Ich blühe im Kontakt mit Gästen auf',
      'Ich habe eine rasche Auffassungsgabe und bin flexibel',
      'Ich bin belastbar und bleibe so auch in hektischen Situationen ruhig'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 3 Jahre',
      degree: 'Abschluss mit eidg. Fähigkeitszeugnis EFZ'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Ausbildung im Betrieb',
        'Wöchentliche Berufsfachschule',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 },
      { year: '3. Lehrjahr', amount: 1550 }
    ]
  },
  {
    id: 'systemgastronomiepraktiker',
    title: 'Systemgastronomiepraktikerin / Systemgastronomiepraktiker­ EBA',
    image: 'https://berufehotelgastro.ch/assets/Berufe/Systemgastronomiefachfrau_mann_classic_3__FillWzkwMCwxMDYwXQ.jpg',
    cardDescription: 'Als Systemgastronomiepraktiker/in EBA sorgst du für Qualität und Effizienz in der Systemgastronomie.',
    description: 'Wenn Qualität gefragt ist und es trotzdem schnell gehen muss, kommen wir ins Spiel. Als Systemgastronomiepraktikerin / Systemgastronomiepraktiker EBA sind wir die Allrounder der Gastroszene und oft in Selbstbedienungsrestaurants, Kantinen oder Catering-Unternehmen im Einsatz. Wir haben von der Küche bis zur Theke alles im Griff. Wir verarbeiten Lebensmittel, bereiten sie sorgfältig zu, und präsentieren sie mit einem Lächeln, wir beraten und verkaufen. Als Mitwirkende für einen reibungslosen Betrieb sorgen wir für kleine und grosse Highlights im Alltag unzähliger Menschen.',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Systemgastro.webp',
    profile: [
      'Ich liebe die gut organisierte Arbeit im Team',
      'Ich interessiere mich für Speisen und deren Zubereitung',
      'Ich blühe im Kontakt mit Gästen auf',
      'Ich bin flexibel',
      'Ich bin belastbar und bleibe so auch in hektischen Situationen ruhig'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 2 Jahre',
      degree: 'Abschluss mit eidg. Berufsattest EBA'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Ausbildung im Betrieb',
        'Wöchentliche Berufsfachschule',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 }
    ]
  },
  {
    id: 'restaurantfachfrau',
    title: 'Restaurantfachfrau / Restaurantfachmann EFZ',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Restaurantfachfrau_mann_classic_6.webp',
    cardDescription: 'Als Restaurantfachfrau/-mann EFZ sorgst du für das Wohl der Gäste und kreierst eine perfekte Atmosphäre.',
    description: 'Wir sorgen dafür, dass sich unsere Gäste im Restaurant wohlfühlen. Als Restaurantfachfrau / Restaurantfachmann EFZ kreieren wir die perfekte Atmosphäre – vom liebevoll vorbereiteten Tisch bis zur herzlichen Begrüssung unserer Gäste. Wir sind ständig in Bewegung und immer im Austausch mit unseren Gästen. Bei uns sind sie in den besten Händen, denn wir wissen Bescheid: Die Speisekarte kennen wir in- und auswendig, wir haben die besten Tipps für Speisen und Getränke auf Lager. Aber auch hinter der Theke läufts mit uns wie geschmiert. Wir sorgen für einen reibungslosen Betrieb, indem wir einfache Gerichte zubereiten, Cocktails mixen oder Geräte und Maschinen pflegen. Mit unserer Ausbildung erlernen wir all die Skills, die unseren Gästen ein unvergessliches Erlebnis garantieren.',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Restaurantfachfrau_mann_classic_6.webp',
    profile: [
      'Ich bin kommunikativ und habe Freude am Kontakt mit Menschen',
      'Ich kann mir Dinge gut merken und habe eine rasche Auffassungsgabe',
      'Ich habe eine gepflegte Erscheinung und gute Umgangsformen',
      'Ich habe ein Auge fürs Detail und bin dienstleistungsorientiert',
      'Ich bleibe auch in hektischen Zeiten ruhig und freundlich'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 3 Jahre',
      degree: 'Abschluss mit eidg. Fähigkeitszeugnis EFZ'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Ausbildung im Betrieb',
        'Wöchentliche Berufsfachschule oder Blockunterricht',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    additionalSkills: [
      'Jung-Barista (Kaffee-Kreationen, Kaffee-Beratung)',
      'Jung-Barkeeperin / Barkeeper (Cocktails mixen, Spirituosen)',
      'Jung-Sommelière / Sommelier (vertiefte Weinkenntnisse)',
      'Jung-Chef de rang (Flambieren, Tranchieren)'
    ],
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 },
      { year: '3. Lehrjahr', amount: 1550 }
    ]
  },
  {
    id: 'restaurantangestellte',
    title: 'Restaurantangestellte / Restaurantangestellter EBA',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Restaurantfachfrau_mann_detail_3.webp',
    cardDescription: 'Als Restaurantangestellte/r EBA sorgst du für das Wohl der Gäste und kreierst eine perfekte Atmosphäre.',
    description: 'Wir sorgen dafür, dass sich unsere Gäste im Restaurant wohlfühlen. Als Restaurantangestellte kreieren wir die perfekte Atmosphäre – vom liebevoll vorbereiteten Tisch bis zur herzlichen Begrüssung unserer Gäste. Wir sind ständig in Bewegung und immer im Austausch mit unseren Gästen. Bei uns sind sie in den besten Händen, denn wir wissen Bescheid: Die Speisekarte kennen wir in- und auswendig, wir haben die besten Tipps für Speisen und Getränke auf Lager. Wir bewegen uns zwischen Gast und Küche hin und her und tragen mit unserem Können zu einem unvergesslichen Erlebnis bei.',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Restaurantfachfrau_mann_classic_6.webp',
    profile: [
      'Ich bin kommunikativ und habe Freude am Kontakt mit Menschen',
      'Ich kann mir Dinge gut merken und habe eine rasche Auffassungsgabe',
      'Ich habe eine gepflegte Erscheinung und gute Umgangsformen',
      'Ich habe ein Auge fürs Detail und bin dienstleistungsorientiert',
      'Ich bleibe auch in hektischen Zeiten ruhig und freundlich'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 2 Jahre',
      degree: 'Abschluss mit eidg. Berufsattest EBA'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Ausbildung im Betrieb',
        'Wöchentliche Berufsfachschule oder Blockunterricht',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 }
    ]
  },
  {
    id: 'fachfrau-hotellerie-hauswirtschaft',
    title: 'Fachfrau / Fachmann Hotellerie-Hauswirtschaft EFZ',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Hotelfachfrau_mann_classic_4.webp',
    cardDescription: 'Als Fachfrau/-mann Hotellerie-Hauswirtschaft EFZ sorgst du für ein sauberes und komfortables Umfeld für die Gäste.',
    description: 'Jedes Hotelzimmer ist wie eine kleine Welt, und wir sorgen dafür, dass sich die Gäste dort wohl fühlen. Mit Dekos schaffen wir richtig Atmosphäre. Zimmerreinigung und Wäscherei? Kein Ding, haben wir im Griff. Auch beim Frühstücksservice sind wir am Start und stellen sicher, dass der Tag für alle so beginnt, wie sich’s gehört: richtig gut. Im dritten Jahr unserer Ausbildung arbeiten wir sogar an der Réception mit und sind mit Begeisterung für die Gäste da. Und staunen, wie viel Spass es macht, anderen Leuten eine gute Zeit zu bereiten.',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Hotelfachfrau_mann_classic_4.webp',
    profile: [
      'Sauberkeit und Ordnung sind mir wichtig',
      'Ich liebe den Kontakt mit Menschen und verschiedenen Kulturen',
      'Ich habe ein Talent fürs Organisieren und Planen',
      'Ich arbeite gerne selbstständig und behalte den Überblick',
      'Ich bin gerne auf den Beinen – viel rumsitzen ist nicht mein Ding',
      'Ich bin geschickt und mag die Arbeit mit technischen Geräten',
      'Dank meiner Flexibilität und Belastbarkeit bleibe ich auch in hektischen Situationen ruhig'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 3 Jahre',
      degree: 'Abschluss mit eidg. Fähigkeitszeugnis EFZ'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Lehre im Betrieb',
        'Wöchentliche Berufsfachschule oder Blockunterricht',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    focus: [
      'Hotellerie',
      'Hauswirtschaft'
    ],
    notes: 'Du kannst die Ausbildung in einem Hotel, einem Spital, einem Alters- oder Pflegeheim absolvieren.',
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 },
      { year: '3. Lehrjahr', amount: 1550 }
    ]
  },
  {
    id: 'praktiker-hotellerie-hauswirtschaft',
    title: 'Praktikerin / Praktiker Hotellerie-Hauswirtschaft EBA',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Hotelfachfrau_mann_detail_1.webp',
    cardDescription: 'Als Praktiker/in Hotellerie-Hauswirtschaft EBA sorgst du für Sauberkeit und eine angenehme Atmosphäre.',
    description: 'Jedes Hotelzimmer ist wie eine kleine Welt, und wir sorgen dafür, dass sich die Gäste dort wohl fühlen. Mit Dekos schaffen wir richtig Atmosphäre. Zimmerreinigung und Wäscherei? Kein Ding, wir wissen genau, was es braucht, damit alles sauber wird. Auch beim Frühstücksservice sind wir am Start und stellen sicher, dass der Tag für alle so beginnt, wie sich’s gehört: richtig gut.',
    profileImage: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop928680/Hotelfachfrau_mann_classic_4.webp',
    profile: [
      'Ich mag es sauber und ordentlich',
      'Ich arbeite gerne im Team',
      'Ich bin gerne auf den Beinen – viel rumsitzen ist nicht mein Ding',
      'Ich bin geschickt und mag die Arbeit mit technischen Geräten',
      'Ich bin flexibel und belastbar und bleibe deswegen auch in hektischen Situationen ruhig'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 2 Jahre',
      degree: 'Abschluss mit eidg. Berufsattest EBA'
    },
    education: {
      type: 'Betrieblich organisiert',
      details: [
        'Ausbildung im Betrieb',
        'Wöchentliche Berufsfachschule oder Blockunterricht',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 }
    ]
  },
  {
    id: 'hotel-kommunikation',
    title: 'Hotel-Kommunikationsfachfrau / Hotel-Kommunikationsfachmann EFZ',
    image: 'https://berufehotelgastro.ch/assets/Berufe/biwaccrop9001060/Hotelkommunikation.webp',
    cardDescription: 'Als Hotel-Kommunikationsfachfrau/-mann EFZ repräsentierst du das Hotel nach aussen und betreust die Gäste.',
    description: 'Ob am Empfang, im Marketing oder bei organisatorischen Aufgaben – wir repräsentieren das Hotel nach aussen. Immer dann, wenn Gäste unser Hotel betreten, sehen sie nicht nur schöne Hotelzimmer oder die Lobby. Sie sehen auch uns und die Leidenschaft, die wir in unsere Arbeit stecken. Wir sind die ersten Ansprechpersonen für die Gäste. Bei der Ausbildung zur Hotel-Kommunikationsfachfrau / zum Hotel-Kommunikationsfachmann EFZ ist deshalb auch Kommunikation das grosse Thema. Macht Sinn, oder? Wir sind am Empfang, bringen frischen Wind ins Marketing und jonglieren mit organisatorischen Aufgaben. Bevor wir ins Rampenlicht treten, lernen wir den Hotelbetrieb von A bis Z kennen. Wir wollen schliesslich verstehen, wovon wir reden. Wir werfen einen Blick in die Küche, tauchen ins Housekeeping ein und sind vorne dabei, wenn’s im Service losgeht. So können wir unseren Gästen den Top-Service bieten, den sie verdienen.',
    profileImage: 'https://berufehotelgastro.ch/assets/Teaser/bhg_1__FillWzkyOCw2ODBd.jpg',
    profile: [
      'Ich trete selbstsicher auf',
      'Ich liebe den Kontakt mit Menschen und verschiedenen Kulturen',
      'Ich bin kommunikativ und sprachgewandt',
      'Ich bin flexibel und denke vernetzt',
      'Ich habe ein Händchen für administrative Aufgaben und liebe es, Dinge zu organisieren',
      'Ich bewahre auch bei Hochbetrieb die Ruhe'
    ],
    requirements: 'Abgeschlossene Volksschule',
    duration: {
      years: 'Ausbildungsdauer: 3 Jahre',
      degree: 'Abschluss mit eidg. Fähigkeitszeugnis EFZ'
    },
    education: {
      type: 'Betrieblich und schulisch organisiert',
      details: [
        'Lehre im Betrieb',
        'Wöchentliche Berufsfachschule oder Blockunterricht',
        'Überbetriebliche Kurse in Blockkursen'
      ]
    },
    additionalSchooling: {
      type: 'Schulisch organisiert',
      details: [
        'Kostenpflichtig',
        'Auf dem Campus der EHL Hotelfachschule Passugg',
        'Drei Semester Theorie-Unterricht',
        '1 1/2 Jahre Praxiseinsätze'
      ]
    },
    salaries: [
      { year: '1. Lehrjahr', amount: 1020 },
      { year: '2. Lehrjahr', amount: 1300 },
      { year: '3. Lehrjahr', amount: 1550 }
    ]
  }
];
