export type GallerySlug = 'tv-karaoke' | 'fashion-trends' | 'communication-technology'

export type Artifact = {
  id: string
  title: string
  subtitle: string
  date: string
  image: string
  alt: string
  description: string
  descriptionTaglish: string
  caption: string
}

export type TimelineEntry = {
  year: string
  text: string
}

export type Comparison = {
  aspect: string
  past: string
  present: string
}

export type Source = {
  citation: string
  note?: string
}

export type Gallery = {
  slug: GallerySlug
  number: string
  title: string
  subtitle: string
  doorDescription: string
  doorDescriptionTaglish: string
  intro: string
  introTaglish: string
  theme: 'mahogany' | 'teak' | 'walnut'
  artifacts: Artifact[]
  timeline: TimelineEntry[]
  significance: string
  significanceTaglish: string
  comparisons: Comparison[]
  sources: Source[]
}



export const galleries: Gallery[] = [
  {
    slug: 'tv-karaoke',
    number: 'I',
    title: 'TV & Karaoke',
    subtitle: 'Tunog at Aliw ng Dekada 2000',
    doorDescription:
      'Discover how television programs, music, and karaoke became part of Filipino family and social life.',
    doorDescriptionTaglish:
      'Balikan ang mga palabas sa TV, kantahan, at karaoke moments na naging bahagi ng bonding ng pamilya at magkakaibigan.',
    intro:
      'In the 2000s, the television set was the heart of the Filipino sala. Families scheduled dinner around primetime teleseryes, neighbors crowded around noontime shows, and no birthday or fiesta felt complete without a rented videoke machine. This gallery revisits the screens and songs that brought people together.',
    introTaglish:
      'Noong 2000s, ang TV ang sentro ng sala. Sabay-sabay nanonood ang pamilya ng teleserye tuwing gabi, at walang birthday o fiesta na kumpleto kung walang videoke. Dito, babalikan natin ang mga palabas at kanta na nagbuklod sa atin.',
    theme: 'mahogany',
    artifacts: [
      {
        id: 'crt-tv',
        title: 'The CRT Television',
        subtitle: 'Ang TV sa Sala',
        date: 'c. 2000–2010',
        image: '/images/tv-crt.png',
        alt: 'A silver CRT television with a crocheted doily on top, sitting on a wooden cabinet',
        description:
          'Deep, heavy cathode-ray tube (CRT) televisions were common in Filipino homes throughout the decade, before flat-screen sets became widely affordable. The TV was often placed on a wooden cabinet and decorated with a doily or figurines — a sign that it was a prized household possession.',
        descriptionTaglish:
          'Mabigat at makapal ang mga CRT TV noon. Madalas itong nakapatong sa cabinet na may doily o maliliit na figurine sa ibabaw — tanda na isa itong mahalagang gamit sa bahay.',
        caption: 'Exhibit 1.1 — Household CRT television setup, as commonly seen in the decade.',
      },
      {
        id: 'videoke',
        title: 'The Videoke Machine',
        subtitle: 'Kantahan sa Kanto',
        date: 'c. 2000–2010',
        image: '/images/videoke.png',
        alt: 'A coin-operated videoke cabinet with a wired microphone and thick songbook on a plastic chair',
        description:
          'Rented or coin-operated videoke machines, with thick songbooks listing numbered songs, were a fixture at birthdays, fiestas, and neighborhood gatherings. Scoring screens added friendly competition. The sing-along system itself is credited to Filipino inventor Roberto del Rosario.',
        descriptionTaglish:
          'Rentahan man o hulugan ng barya, laging may videoke sa handaan. Hahanapin mo ang number ng kanta sa songbook, tapos aabangan ang score sa dulo. Ang sing-along system ay kinikilalang imbento ng Pilipinong si Roberto del Rosario.',
        caption: 'Exhibit 1.2 — Videoke cabinet with microphone and songbook.',
      },
      {
        id: 'primetime',
        title: 'Primetime with the Family',
        subtitle: 'Sabay-sabay sa Teleserye',
        date: 'c. 2000–2010',
        image: '/images/tv-family.png',
        alt: 'A family seen from behind on a rattan sofa watching television in a warmly lit living room',
        description:
          'Evening teleseryes, fantaseryes, and imported Asian dramas turned TV viewing into a shared ritual. Storylines were discussed the next day at school, at work, and in the neighborhood.',
        descriptionTaglish:
          'Tuwing gabi, sabay-sabay ang pamilya sa harap ng TV. Kinabukasan, pinag-uusapan sa school, sa trabaho, at sa kapitbahay kung ano ang nangyari sa teleserye.',
        caption: 'Exhibit 1.3 — A family gathered for evening television.',
      },
    ],
    timeline: [
      {
        year: '2003',
        text: 'The Taiwanese drama "Meteor Garden" airs on ABS-CBN, sparking a nationwide F4 craze.',
      },
      {
        year: '2003',
        text: 'GMA Network airs the Korean drama "Endless Love: Autumn in My Heart," part of the early Koreanovela wave.',
      },
      {
        year: '2005',
        text: 'GMA Network premieres the fantaserye "Encantadia."',
      },
      {
        year: '2005',
        text: 'ABS-CBN premieres "Pinoy Big Brother," popularizing reality TV in the country.',
      },
      {
        year: '2010',
        text: 'The New York Times reports on violence linked to karaoke performances of "My Way" in the Philippines — showing how seriously Filipinos took their singing.',
      },
    ],
    significance:
      'Television and karaoke were social technologies. They created shared stories, shared songs, and shared time. Imported Asian dramas widened Filipino audiences’ cultural tastes, while videoke made everyone a performer — reinforcing the Filipino value of pakikisama, or getting along together.',
    significanceTaglish:
      'Hindi lang libangan ang TV at karaoke — paraan din ito ng pagsasama-sama. Dahil sa mga Asianovela, lumawak ang hilig natin sa ibang kultura, at dahil sa videoke, lahat puwedeng maging singer. Pinatibay nito ang ating pakikisama.',
    comparisons: [
      {
        aspect: 'Where we watch',
        past: 'One CRT TV in the sala, watched together at scheduled airtimes.',
        present: 'Phones, laptops, and smart TVs; streaming on demand, often individually.',
      },
      {
        aspect: 'How we sing',
        past: 'Rented videoke machines and printed songbooks at parties.',
        present: 'Karaoke apps, online lyric videos, and home Bluetooth speakers.',
      },
      {
        aspect: 'How we talk about shows',
        past: 'Kuwentuhan the next day at school or work.',
        present: 'Live reactions on social media while the episode airs.',
      },
    ],
    sources: [
      {
        citation:
          'Onishi, Norimitsu. "Sinatra Song Often Leads to Death in Philippines." The New York Times, February 7, 2010.',
      },
      {
        citation: 'ABS-CBN Corporation and GMA Network — official program histories.',
        note: 'Premiere years listed above should be cross-checked against each network’s archives.',
      },
      {
        citation: 'Roberto del Rosario — inventor of the Sing-Along System (karaoke).',
        note: 'Verify patent details with the Intellectual Property Office of the Philippines (IPOPHL).',
      },
    ],
  },
  {
    slug: 'fashion-trends',
    number: 'II',
    title: 'Fashion & Trends',
    subtitle: 'Porma at Estilo ng Panahon',
    doorDescription:
      'Explore the clothing, hairstyles, accessories, and trends that expressed the identity of Filipino youth during the decade.',
    doorDescriptionTaglish:
      'Silipin ang mga damit, hairstyle, accessories, at fashion trends na sumalamin sa estilo at pagkatao ng kabataang Pilipino noong panahong iyon.',
    intro:
      'From low-rise jeans and layered polos to rebonded hair and side-swept bangs, the 2000s were a decade of experimentation. Filipino youth mixed global trends with local flavor, using clothes and accessories to signal which barkada, music scene, or subculture they belonged to.',
    introTaglish:
      'Mula low-rise jeans at popped collar hanggang rebond at emo bangs — ito ang dekada ng pag-eeksperimento sa porma. Ginamit ng kabataan ang damit at accessories para ipakita kung sino sila at saang barkada sila kabilang.',
    theme: 'teak',
    artifacts: [
      {
        id: 'outfit',
        title: 'Layered & Popped',
        subtitle: 'Ang Porma ng Barkada',
        date: 'c. mid-2000s',
        image: '/images/fashion-outfit.png',
        alt: 'A mannequin wearing a layered polo with popped collar, low-rise jeans, studded belt, wristbands, and trucker cap',
        description:
          'Layered polo shirts with popped collars, low-rise or bootcut jeans, studded belts, and trucker caps were common sights in malls and campuses. Later in the decade, skinny jeans and band shirts rose with emo and scene styles.',
        descriptionTaglish:
          'Patong-patong na polo na nakataas ang collar, low-rise jeans, studded belt, at trucker cap — ito ang porma sa mall at campus. Pagdating ng huling bahagi ng dekada, uso na ang skinny jeans at band shirts.',
        caption: 'Exhibit 2.1 — Representative youth outfit of the mid-2000s.',
      },
      {
        id: 'accessories',
        title: 'The Accessories Vitrine',
        subtitle: 'Mga Palamuti at Abubot',
        date: 'c. 2000–2010',
        image: '/images/fashion-accessories.png',
        alt: 'A display case with rubber wristbands, beaded phone charms, butterfly clips, a studded belt, flip-flops, and a cap',
        description:
          'Silicone wristbands spread worldwide after the yellow LIVESTRONG band appeared in 2004, and colorful versions quickly became fashion items. Butterfly clips, beaded phone charms, and rubber flip-flops completed the everyday look.',
        descriptionTaglish:
          'Sumikat ang rubber wristbands matapos lumabas ang dilaw na LIVESTRONG band noong 2004 — at ginawa itong fashion statement ng kabataan. Kasama rin ang butterfly clips, beaded phone charms, at tsinelas.',
        caption: 'Exhibit 2.2 — Everyday accessories of the decade.',
      },
      {
        id: 'salon',
        title: 'Rebond & Gel',
        subtitle: 'Sa Parlor ng Bayan',
        date: 'c. 2000–2010',
        image: '/images/fashion-hair.png',
        alt: 'A small neighborhood hair salon with styling chairs, mirrors, flat irons, and jars of hair gel',
        description:
          'Hair rebonding — a chemical straightening treatment — was widely popular among Filipinas who wanted sleek, straight hair. Young men favored spiky, gel-heavy styles, and side-swept "emo" bangs became a signature look later in the decade.',
        descriptionTaglish:
          'Uso ang rebond para sa unat at makintab na buhok. Ang mga lalaki naman, todo-gel para sa spiky hair. Pagdating ng late 2000s, sumikat ang emo bangs.',
        caption: 'Exhibit 2.3 — Neighborhood parlor with styling tools of the era.',
      },
    ],
    timeline: [
      {
        year: 'Early 2000s',
        text: '"Jologs" circulates as slang for loud, flashy, mass-market style — a term later embraced with humor and pride.',
      },
      {
        year: '2004',
        text: 'The yellow LIVESTRONG wristband is launched, inspiring a global trend of colored silicone bands.',
      },
      {
        year: 'Mid-to-late 2000s',
        text: 'Emo and scene styles — skinny jeans, band shirts, and side-swept bangs — spread among youth worldwide, including in the Philippines.',
      },
      {
        year: 'c. 2010',
        text: 'The "Jejemon" phenomenon, known for stylized text spelling and distinct fashion, receives wide coverage in Philippine media.',
      },
    ],
    significance:
      'Fashion in the 2000s was a language of belonging. Labels like "jologs," "emo," or "jejemon" were sometimes used to mock, but they also show how young Filipinos built identities through style. Many of these looks are now returning through Y2K-inspired fashion.',
    significanceTaglish:
      'Ang porma ay paraan ng pagpapakilala sa sarili. Minsan ginagamit pang-asar ang "jologs" o "jejemon," pero ipinapakita rin nito kung paano binuo ng kabataan ang kanilang identity. Ngayon, bumabalik ang mga ito bilang "Y2K aesthetic."',
    comparisons: [
      {
        aspect: 'Where trends start',
        past: 'TV celebrities, magazines, and what classmates wore to school.',
        present: 'Influencers, TikTok, and online fashion communities.',
      },
      {
        aspect: 'Where we shop',
        past: 'Malls, tiangge, and ukay-ukay stalls.',
        present: 'Online shopping apps alongside ukay-ukay and thrift culture.',
      },
      {
        aspect: 'Hair',
        past: 'Rebonding, spiky gel, and emo bangs.',
        present: 'More varied styles, natural textures, and color experiments.',
      },
    ],
    sources: [
      {
        citation: 'LIVESTRONG Foundation — history of the yellow LIVESTRONG wristband (launched 2004).',
      },
      {
        citation: 'Philippine news coverage of the "Jejemon" phenomenon, 2010 (e.g., GMA News, Philippine Daily Inquirer).',
        note: 'Consult the original articles for specific dates and quotations.',
      },
      {
        citation: 'Trend descriptions are based on general documented fashion of the period.',
        note: 'Outfits shown are representative recreations, not specific historical garments.',
      },
    ],
  },
  {
    slug: 'communication-technology',
    number: 'III',
    title: 'Communication & Technology',
    subtitle: 'Mula Textmate Hanggang Online',
    doorDescription:
      'Explore how mobile phones, text messaging, computers, and the internet influenced communication and everyday life.',
    doorDescriptionTaglish:
      'Balikan ang panahon ng keypad phones, unli-text, computer shops, at unti-unting pag-usbong ng online communication.',
    intro:
      'The 2000s turned the Philippines into a nation of texters. Prepaid load and keypad phones made SMS cheaper than calling, and "GM" messages, textmates, and pasaload became part of daily life. Meanwhile, computer shops opened the door to online games, chat, and social networks.',
    introTaglish:
      'Noong 2000s, naging bansa tayo ng mga texter. Dahil sa prepaid load at keypad phones, mas mura mag-text kaysa tumawag. Uso ang GM, textmate, at pasaload. Sa computer shop naman natin unang naranasan ang online games, chat, at social networking.',
    theme: 'walnut',
    artifacts: [
      {
        id: 'keypad',
        title: 'Keypad Phone & Prepaid Load',
        subtitle: 'Ang Unang Cellphone',
        date: 'c. 2000–2010',
        image: '/images/tech-phone.png',
        alt: 'A small keypad mobile phone with a beaded charm next to a prepaid load card on a velvet pedestal',
        description:
          'Durable keypad phones with monochrome screens were many Filipinos’ first mobile devices. Prepaid load cards and text-based promos made messaging the most affordable way to keep in touch, giving rise to group messages ("GM") and textmates.',
        descriptionTaglish:
          'Matibay at simple ang mga keypad phone — ito ang unang cellphone ng marami. Dahil sa prepaid load at text promos, text ang pinakamurang paraan ng komunikasyon. Dito nagsimula ang GM at textmate.',
        caption: 'Exhibit 3.1 — Keypad phone with prepaid load card.',
      },
      {
        id: 'computer-shop',
        title: 'The Computer Shop',
        subtitle: 'Isang Oras Pa, Ate',
        date: 'c. 2000–2010',
        image: '/images/tech-computer-shop.png',
        alt: 'Rows of CRT monitors and desktop computers in a small internet cafe with partitions and headsets',
        description:
          'Neighborhood computer shops rented PCs by the hour for school research, printing, chat, and online games. Massively multiplayer titles like "Ragnarok Online," launched locally in 2003, turned shops into social hubs for young players.',
        descriptionTaglish:
          'Sa computer shop tayo nagre-research, nagpi-print ng assignment, nagcha-chat, at naglalaro ng online games tulad ng Ragnarok. Para itong tambayan ng barkada.',
        caption: 'Exhibit 3.2 — Neighborhood computer shop interior.',
      },
      {
        id: 'desktop',
        title: 'The Family Desktop',
        subtitle: 'Dial-up at Webcam',
        date: 'c. 2000–2010',
        image: '/images/tech-desktop.png',
        alt: 'A beige desktop computer with CRT monitor, keyboard, ball mouse, webcam, and dial-up modem',
        description:
          'For households that could afford one, the family desktop — first on dial-up, later on broadband — connected Filipinos to email, instant messengers, and webcam calls with relatives working abroad.',
        descriptionTaglish:
          'Para sa mga pamilyang may computer sa bahay, ito ang daan para mag-email, mag-chat, at mag-webcam kasama ang kapamilyang OFW.',
        caption: 'Exhibit 3.3 — Home desktop computer setup.',
      },
    ],
    timeline: [
      {
        year: '2000',
        text: 'Nokia releases the 3310, one of the best-selling and most iconic keypad phones of the era.',
      },
      {
        year: 'January 2001',
        text: 'Text messages help mobilize crowds during EDSA II (People Power II), a widely studied example of SMS in Philippine politics.',
      },
      {
        year: '2002',
        text: 'Friendster launches and soon becomes hugely popular among Filipino internet users.',
      },
      {
        year: '2003',
        text: '"Ragnarok Online" launches in the Philippines, fueling computer-shop gaming culture.',
      },
      {
        year: 'c. 2008–2010',
        text: 'Facebook grows rapidly among Filipino users, gradually overtaking Friendster.',
      },
    ],
    significance:
      'Texting and computer shops democratized communication. People who could not afford calls or home internet could still stay connected — with family, friends, and even political movements. The habits formed in this decade laid the foundation for the Philippines’ later reputation as one of the world’s most active social-media nations.',
    significanceTaglish:
      'Dahil sa text at computer shop, kahit walang landline o internet sa bahay, konektado pa rin ang mga tao — sa pamilya, kaibigan, at maging sa mga kilusang pampulitika. Dito nagsimula ang pagiging aktibo ng mga Pilipino online.',
    comparisons: [
      {
        aspect: 'Messaging',
        past: 'SMS limited to 160 characters, unli-text promos, and GMs.',
        present: 'Messenger, Viber, and other apps with photos, voice, and video.',
      },
      {
        aspect: 'Going online',
        past: 'Hourly rental at computer shops or slow dial-up at home.',
        present: 'Mobile data and Wi-Fi on smartphones, nearly anywhere.',
      },
      {
        aspect: 'Social networks',
        past: 'Friendster testimonials, Multiply pages, and Yahoo! Messenger.',
        present: 'Facebook, Instagram, TikTok, and X.',
      },
    ],
    sources: [
      {
        citation:
          'Rafael, Vicente L. "The Cell Phone and the Crowd: Messianic Politics in the Contemporary Philippines." Public Culture 15, no. 3 (2003): 399–425.',
      },
      {
        citation:
          'Pertierra, Raul, et al. Txt-ing Selves: Cellphones and Philippine Modernity. Manila: De La Salle University Press, 2002.',
      },
      {
        citation: 'Launch years for Nokia 3310, Friendster, and Ragnarok Online (PH) based on company and publisher records.',
        note: 'Cross-check with the original company announcements.',
      },
    ],
  },
]

export function getGallery(slug: string) {
  return galleries.find((g) => g.slug === slug)
}
