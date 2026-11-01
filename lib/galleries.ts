export type GallerySlug =
  | "tv-karaoke"
  | "fashion-trends"
  | "communication-technology";

export type Artifact = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  alt: string;
  description: string;
  descriptionTaglish: string;
  caption: string;
};

export type TimelineEntry = {
  year: string;
  text: string;
};

export type Comparison = {
  aspect: string;
  past: string;
  present: string;
};

export type Source = {
  citation: string;
  note?: string;
};

export type Gallery = {
  slug: GallerySlug;
  number: string;
  title: string;
  subtitle: string;
  doorDescription: string;
  doorDescriptionTaglish: string;
  intro: string;
  introTaglish: string;
  theme: "mahogany" | "teak" | "walnut";
  artifacts: Artifact[];
  hiddenArtifacts: Artifact[];
  timeline: TimelineEntry[];
  significance: string;
  significanceTaglish: string;
  comparisons: Comparison[];
  sources: Source[];
};

export const galleries: Gallery[] = [
  {
    slug: "tv-karaoke",
    number: "I",
    title: "TV & Karaoke",
    subtitle: "Tunog at Aliw ng Dekada 2000",
    doorDescription:
      "Discover how television programs, music, and karaoke became part of Filipino family and social life.",
    doorDescriptionTaglish:
      "Balikan ang mga palabas sa TV, kantahan, at karaoke moments na naging bahagi ng bonding ng pamilya at magkakaibigan.",
    intro:
      "In the 2000s, the television set was the heart of the Filipino sala. Families scheduled dinner around primetime teleseryes, neighbors crowded around noontime shows, and no birthday or fiesta felt complete without a rented videoke machine. This gallery revisits the screens and songs that brought people together.",
    introTaglish:
      "Noong 2000s, ang TV ang sentro ng sala. Sabay-sabay nanonood ang pamilya ng teleserye tuwing gabi, at walang birthday o fiesta na kumpleto kung walang videoke. Dito, babalikan natin ang mga palabas at kanta na nagbuklod sa atin.",
    theme: "mahogany",
    artifacts: [
      {
        id: "crt-tv",
        title: "The CRT Television",
        subtitle: "Ang TV sa Sala",
        date: "c. 2000–2010",
        image: "/images/tv-crt.png",
        alt: "A silver CRT television with a crocheted doily on top, sitting on a wooden cabinet",
        description:
          "Deep, heavy cathode-ray tube (CRT) televisions were common in Filipino homes throughout the decade, before flat-screen sets became widely affordable. The TV was often placed on a wooden cabinet and decorated with a doily or figurines — a sign that it was a prized household possession.",
        descriptionTaglish:
          "Mabigat at makapal ang mga CRT TV noon. Madalas itong nakapatong sa cabinet na may doily o maliliit na figurine sa ibabaw — tanda na isa itong mahalagang gamit sa bahay.",
        caption:
          "Exhibit 1.1 — Household CRT television setup, as commonly seen in the decade.",
      },
      {
        id: "videoke",
        title: "The Videoke Machine",
        subtitle: "Kantahan sa Kanto",
        date: "c. 2000–2010",
        image: "/images/videoke.png",
        alt: "A coin-operated videoke cabinet with a wired microphone and thick songbook on a plastic chair",
        description:
          "Rented or coin-operated videoke machines, with thick songbooks listing numbered songs, were a fixture at birthdays, fiestas, and neighborhood gatherings. Scoring screens added friendly competition. The sing-along system itself is credited to Filipino inventor Roberto del Rosario.",
        descriptionTaglish:
          "Rentahan man o hulugan ng barya, laging may videoke sa handaan. Hahanapin mo ang number ng kanta sa songbook, tapos aabangan ang score sa dulo. Ang sing-along system ay kinikilalang imbento ng Pilipinong si Roberto del Rosario.",
        caption: "Exhibit 1.2 — Videoke cabinet with microphone and songbook.",
      },
      {
        id: "primetime",
        title: "Primetime with the Family",
        subtitle: "Sabay-sabay sa Teleserye",
        date: "c. 2000–2010",
        image: "/images/tv-family.png",
        alt: "A family seen from behind on a rattan sofa watching television in a warmly lit living room",
        description:
          "Evening teleseryes, fantaseryes, and imported Asian dramas turned TV viewing into a shared ritual. Storylines were discussed the next day at school, at work, and in the neighborhood.",
        descriptionTaglish:
          "Tuwing gabi, sabay-sabay ang pamilya sa harap ng TV. Kinabukasan, pinag-uusapan sa school, sa trabaho, at sa kapitbahay kung ano ang nangyari sa teleserye.",
        caption: "Exhibit 1.3 — A family gathered for evening television.",
      },
      {
        id: "tv-and-karaoke-politics-era1",
        title: "Television & Campaign Songs in Politics",
        subtitle: "Telebisyon at Kantahang Pampulitika",
        date: "c. 2000–2010",
        image: "/images/tv-karaoke-politics.png",
        alt: "A television playing election news beside a neighborhood karaoke setup with campaign flyers nearby",
        description:
          "Television served as a primary bridge between politicians and voters through televised news, debates, and political advertisements. Meanwhile, familiar songs and catchy campaign jingles were integrated into public rallies and local karaoke gatherings to make political messages engaging and memorable for the electorate.",
        descriptionTaglish:
          "Malaki ang papel ng telebisyon sa pagpapakilala ng mga kandidato sa pamamagitan ng balita at political ads. Kasabay nito, ginamit din ang mga sikat na kanta at campaign jingles sa mga miting de avance at videokehan upang mas madaling matandaan ng mga tao ang mga mensaheng pampulitika.",
        caption:
          "Exhibit 1.4 — Traditional television broadcasts and campaign jingles in local politics.",
      },
      {
        id: "broadcast-environmental-awareness",
        title: "Broadcast Environmental Awareness",
        subtitle: "Kampanya sa Telebisyon Para sa Kalikasan",
        date: "c. 2000–2010",
        image: "/images/tv-environmental-awareness.png",
        alt: "A CRT television showing a public service announcement about proper waste segregation and recycling",
        description:
          "Broadcast television played a central role in raising ecological awareness through news segments, investigative documentaries, and government public service announcements. These programs educated households on proper waste disposal, recycling practices, and local conservation initiatives.",
        descriptionTaglish:
          "Telebisyon ang pangunahing daan upang ipahatid ang kaalaman tungkol sa kalikasan sa pamamagitan ng mga balita, dokumentaryo, at public service announcements. Tinuruan nito ang mga pamilya tungkol sa tamang pagtatapon ng basura, pagrerecycle, at pangangalaga sa kapaligiran.",
        caption:
          "Exhibit 1.7 — Television-led environmental public service announcements and educational programming.",
      },
      {
        id: "broadcast-devotion-and-fiestas",
        title: "Fiestas & Broadcast Devotion",
        subtitle: "Fiesta, Pasko, at Pananampalataya sa Telebisyon",
        date: "c. 2000–2010",
        image: "/images/fiesta-broadcast-devotion.png",
        alt: "A family gathered in front of a CRT TV watching a Lenten special alongside a festive videoke setup",
        description:
          "Religious traditions and community celebrations were tightly tied to traditional media. Patron saint fiestas and Christmas gatherings centered around videoke carols and neighborhood singing, while broadcast television brought sacred devotions—such as Sunday masses and Holy Week specials—directly into Filipino living rooms.",
        descriptionTaglish:
          "Magkasama ang saya ng pagtitipon at ang pananampalataya sa tahanan. Ang mga fiesta at Pasko ay punong-puno ng videoke at kantahan, habang ang mga misa at Lenten specials naman sa telebisyon ang nagdadala ng debosyon sa loob ng sala.",
        caption:
          "Exhibit 1.9 — Traditional fiesta videoke singing and broadcast TV religious specials.",
      },
    ],
    hiddenArtifacts: [
      {
        id: "subscription-entertainment",
        title: "Subscription & Digital Streaming",
        subtitle: "Ang Era ng Streaming at Subscriptions",
        date: "c. 2016–2026",
        image: "/images/subscription-streaming.jpg",
        alt: "A modern living room setup showing smart TV displays with streaming app icons like Netflix, YouTube Premium, and Spotify",
        description:
          "The entertainment landscape shifted dramatically as media consumption decentralized through the internet. Moving away from analog broadcasts, cable subscriptions, and physical rentals, audiences embraced digital streaming services and high-definition online platforms. Today, movies, music, TV series, and even karaoke tracks are accessed on demand through monthly subscriptions like Netflix, YouTube Premium, and Spotify.",
        descriptionTaglish:
          "Naging mas moderno ang panonood at pakikinig nang lumipat ang media sa internet. Mula sa lumang cable connection at DVD rentals, naging digital streaming na ang lahat. Ngayon, ang mga palabas, kanta, at maging karaoke songs ay madali nang naa-access gamit ang monthly subscriptions tulad ng Netflix, YouTube Premium, at Spotify.",
        caption:
          "Exhibit 1.2 — Digital media streaming and subscription entertainment setup.",
      },
      {
        id: "smart-karaoke",
        title: "Smart & Portable Karaoke",
        subtitle: "Kantahan Kahit Saan",
        date: "c. 2016–2026",
        image: "/images/smart-karaoke.jpg",
        alt: "A modern portable Bluetooth microphone with built-in speakers resting next to a smart TV displaying a karaoke app interface",
        description:
          "Bulky videoke cabinets gave way to sleek, highly accessible technology as karaoke moved into the digital age. Portable Bluetooth microphones, smart TVs, and mobile sing-along apps allow people to turn any room into a instant stage without needing physical songbooks or coin slots.",
        descriptionTaglish:
          "Hindi na kailangan ng mabigat na videoke cabinet para mag-kantahan. Dahil sa mga portable Bluetooth microphone, smart TV, at online sing-along apps, kahit sino ay pwedeng mag-karaoke kahit saan at kahit kailan nang walang dalang songbook o barya.",
        caption:
          "Exhibit 1.3 — Modern portable Bluetooth microphone and smart karaoke setup.",
      },
      {
        id: "digital-streaming-shift",
        title: "The Digital Streaming Shift",
        subtitle: "Personalized at Portable na Libangan",
        date: "c. 2016–2026",
        image: "/images/digital-streaming-shift.jpg",
        alt: "A person holding a mobile smartphone streaming a video, with a portable smart karaoke mic lying nearby",
        description:
          "On-demand streaming platforms and portable smart-karaoke apps replaced traditional broadcasts and bulky setups. This shift made media consumption highly personalized, allowing audiences to watch their favorite shows or sing along to music anytime, anywhere.",
        descriptionTaglish:
          "Pinalitan ng mga on-demand streaming platform at smart-karaoke apps ang mga lumang paraan ng panonood at pagkanta. Dahil dito, naging mas personal at mas madaling ma-access ang libangan saan man at kailan man gustuhin.",
        caption:
          "Exhibit 1.6 — Modern personalized media consumption through mobile streaming and smart apps.",
      },
      {
        id: "digital-politics-and-karaoke-culture",
        title: "Digital Politics & Viral Entertainment",
        subtitle: "Kampanya sa Media at Social Network",
        date: "c. 2016–2026",
        image: "/images/digital-politics-entertainment.png",
        alt: "A smartphone screen displaying a viral political karaoke parody video alongside a streaming news broadcast",
        description:
          "While broadcast television remains a vital source of election updates, political communication has expanded online through social media and digital platforms. Modern political parodies, online karaoke trends, and short viral videos show how contemporary Filipino entertainment and political discourse now continuously overlap.",
        descriptionTaglish:
          "Kahit na nagbabalita pa rin ang telebisyon tungkol sa eleksyon, mas lumawak ang kampanya sa online platforms. Ang mga political parody, video clips, at trending karaoke songs ay mabilis nang kumakalat sa internet, na nagpapakita kung paano nagkahalo ang libangan at pulitika sa modernong kultura.",
        caption:
          "Exhibit 1.5 — Social media streaming and viral political entertainment culture.",
      },
      {
        id: "digital-climate-action",
        title: "Digital Climate Action & Social Media",
        subtitle: "Advocacy sa Digital at Social Media",
        date: "c. 2016–2026",
        image: "/images/digital-environmental-media.png",
        alt: "A smartphone screen displaying a viral video campaign about climate change and sustainable living practices",
        description:
          "Environmental advocacy expanded beyond traditional TV broadcasts into digital spaces. High-definition web documentaries, YouTube educational channels, and short-form social media content now drive global conversations around climate change, sustainability, and eco-friendly lifestyles.",
        descriptionTaglish:
          "Mas lumawak ang kampanya para sa kalikasan dahil sa internet. Bukod sa telebisyon, ang mga online documentary, YouTube videos, at content sa social media ay mabilis nang nagpapakalat ng kaalaman tungkol sa climate change at mga paraan ng pamumuhay nang mas sustainable.",
        caption:
          "Exhibit 1.8 — Social media streams and digital content dedicated to climate awareness.",
      },
      {
        id: "digital-worship-and-streaming",
        title: "Digital Worship & On-Demand Devotion",
        subtitle: "Online Mass at Digital na Pagsamba",
        date: "c. 2016–2026",
        image: "/images/digital-worship-streaming.png",
        alt: "A tablet displaying an online livestreamed mass alongside a mobile phone playing worship songs on a streaming app",
        description:
          "Faith-based activities expanded seamlessly into the digital realm. Online masses and livestreamed novenas complement traditional TV broadcasts, while YouTube playlists and smart karaoke apps allow individuals to access worship songs and sing-along carols on demand anytime, anywhere.",
        descriptionTaglish:
          "Lumipat din sa digital space ang mga gawaing pananampalataya. May mga online mass at livestreamed novena na sa internet, habang ang mga worship songs at carols sa YouTube at smart karaoke apps ay madali nang ma-access at makantahan anumang oras.",
        caption:
          "Exhibit 1.10 — Livestreamed religious services and digital worship song streaming.",
      },
    ],
    timeline: [
      {
        year: "2003",
        text: 'The Taiwanese drama "Meteor Garden" airs on ABS-CBN, sparking a nationwide F4 craze.',
      },
      {
        year: "2003",
        text: 'GMA Network airs the Korean drama "Endless Love: Autumn in My Heart," part of the early Koreanovela wave.',
      },
      {
        year: "2005",
        text: 'GMA Network premieres the fantaserye "Encantadia."',
      },
      {
        year: "2005",
        text: 'ABS-CBN premieres "Pinoy Big Brother," popularizing reality TV in the country.',
      },
      {
        year: "2010",
        text: 'The New York Times reports on violence linked to karaoke performances of "My Way" in the Philippines — showing how seriously Filipinos took their singing.',
      },
    ],
    significance:
      "Television and karaoke were social technologies. They created shared stories, shared songs, and shared time. Imported Asian dramas widened Filipino audiences’ cultural tastes, while videoke made everyone a performer — reinforcing the Filipino value of pakikisama, or getting along together.",
    significanceTaglish:
      "Hindi lang libangan ang TV at karaoke — paraan din ito ng pagsasama-sama. Dahil sa mga Asianovela, lumawak ang hilig natin sa ibang kultura, at dahil sa videoke, lahat puwedeng maging singer. Pinatibay nito ang ating pakikisama.",
    comparisons: [
      {
        aspect: "Where we watch",
        past: "One CRT TV in the sala, watched together at scheduled airtimes.",
        present:
          "Phones, laptops, and smart TVs; streaming on demand, often individually.",
      },
      {
        aspect: "How we sing",
        past: "Rented videoke machines and printed songbooks at parties.",
        present:
          "Karaoke apps, online lyric videos, and home Bluetooth speakers.",
      },
      {
        aspect: "How we talk about shows",
        past: "Kuwentuhan the next day at school or work.",
        present: "Live reactions on social media while the episode airs.",
      },
    ],
    sources: [
      {
        citation:
          'Onishi, Norimitsu. "Sinatra Song Often Leads to Death in Philippines." The New York Times, February 7, 2010.',
      },
      {
        citation:
          "ABS-CBN Corporation and GMA Network — official program histories.",
        note: "Premiere years listed above should be cross-checked against each network’s archives.",
      },
      {
        citation:
          "Roberto del Rosario — inventor of the Sing-Along System (karaoke).",
        note: "Verify patent details with the Intellectual Property Office of the Philippines (IPOPHL).",
      },
    ],
  },
  {
    slug: "fashion-trends",
    number: "II",
    title: "Fashion & Trends",
    subtitle: "Porma at Estilo ng Panahon",
    doorDescription:
      "Explore the clothing, hairstyles, accessories, and trends that expressed the identity of Filipino youth during the decade.",
    doorDescriptionTaglish:
      "Silipin ang mga damit, hairstyle, accessories, at fashion trends na sumalamin sa estilo at pagkatao ng kabataang Pilipino noong panahong iyon.",
    intro:
      "From low-rise jeans and layered polos to rebonded hair and side-swept bangs, the 2000s were a decade of experimentation. Filipino youth mixed global trends with local flavor, using clothes and accessories to signal which barkada, music scene, or subculture they belonged to.",
    introTaglish:
      "Mula low-rise jeans at popped collar hanggang rebond at emo bangs — ito ang dekada ng pag-eeksperimento sa porma. Ginamit ng kabataan ang damit at accessories para ipakita kung sino sila at saang barkada sila kabilang.",
    theme: "teak",
    artifacts: [
      {
        id: "jejemon-style",
        title: "Jejemon Streetwear Subculture",
        subtitle: "Ang Kultura ng Jejemon Fashion",
        date: "c. 2000–2010",
        image: "/images/jejemon-fashion.png",
        alt: "A teen wearing a brightly colored sideways trucker hat, layered colorful shirts, and vivid street accessories",
        description:
          'Brightly colored trucker hats worn at jaunty angles, layered t-shirts, oversized shorts, and vivid accessories defined the iconic "Jejemon" subculture. Born alongside early text-messaging and internet trends, this expressive street style became an unmistakable pop-culture identity for youth during the decade.',
        descriptionTaglish:
          "Naging sikat na subculture ang Jejemon fashion noong 2000s. Nakilala ito sa pagsuot ng makukulay na trucker hat na nakatagilid, pinag-patong-patong na t-shirt, at maliliwanag na accessories na naging simbolo ng kabataang Pinoy noon.",
        caption:
          "Exhibit 1.11 — Jejemon subculture street fashion featuring iconic trucker hats and layered outfits.",
      },
      {
        id: "homegrown-retail-growth",
        title: "The Rise of Homegrown Mall Brands",
        subtitle: "Pag-usbong ng Local Mall Brands",
        date: "c. 2000–2010",
        image: "/images/homegrown-retail-brands.png",
        alt: "A busy shopping mall hallway featuring large storefront displays of homegrown Philippine retail brands",
        description:
          "The Philippine fashion economy evolved from being primarily a global garment manufacturing exporter into a landscape dominated by major domestic retail brands. Heavyweights like Bench and Penshoppe rapidly expanded their reach by leveraging the rapid growth of nationwide mall networks.",
        descriptionTaglish:
          "Lumipat ang ekonomiya ng fashion mula sa pagiging tagagawa lamang ng damit para sa ibang bansa tungo sa pagpapalago ng sariling local brands. Mabilis na lumaki ang mga kilalang brand tulad ng Bench at Penshoppe dahil sa pagdami ng mga mall sa buong bansa.",
        caption:
          "Exhibit 1.13 — Homegrown fashion retail brands expanding within nationwide shopping malls.",
      },
      {
        id: "broadcast-politics-and-celebrity-image",
        title: "Broadcast Politics & Candidate Image",
        subtitle: "Kultura ng Image sa Telebisyon at Politika",
        date: "c. 2000–2010",
        image: "/images/broadcast-politics-image.png",
        alt: "A television screen broadcasting a political candidate wearing branded campaign attire during a broadcast interview",
        description:
          "Widespread television coverage of elections and the rising visibility of celebrity politicians turned personal style and public image into vital campaign tools. Distinctive clothing, signature color schemes, and groomed appearances allowed political candidates to construct easily recognizable identities for the electorate.",
        descriptionTaglish:
          "Dahil sa mga balita sa telebisyon at ang pagpasok ng mga sikat na personalidad sa politika, naging mahalaga ang porma at pampublikong imahe ng mga kandidato. Ang mga partikular na kulay at istilo ng pananamit ay nakatulong upang mabilis silang makilala ng mga botante.",
        caption:
          "Exhibit 1.15 — Televised political coverage emphasizing candidate style and personal image branding.",
      },
      {
        id: "jejemon-emo-aesthetics",
        title: "Jejemon & Emo Subculture Styles",
        subtitle: "Ang Panahon ng Jejemon at Emo",
        date: "c. 2000–2010",
        image: "/images/jejemon-emo-style.png",
        alt: "Youths showcasing 2000s street fashion with oversized graphic tees, colorful trucker hats, and layered accessories",
        description:
          "Street fashion was heavily defined by early internet subcultures and youth movements. Signature looks featured oversized graphic tees, brightly colored trucker hats, fitted caps, and layered accessories, reflecting the expressive visual identities of the Jejemon and Emo eras.",
        descriptionTaglish:
          "Ang porma ng kabataan noon ay ginabayan ng mga maagang internet subculture. Nakilala ang panahon ng Jejemon at Emo sa pagsuot ng malalaking graphic tee, makukulay na trucker hat, at iba't ibang accessories na nagpapakita ng kanilang sariling istilo.",
        caption:
          "Exhibit 1.17 — Early internet subculture street fashion featuring Jejemon and Emo aesthetics.",
      },
      {
        id: "ukay-ukay-culture",
        title: "Ukay-Ukay & Practical Secondhand Fashion",
        subtitle: "Kultura ng Ukay-Ukay",
        date: "c. 2000–2010",
        image: "/images/ukay-ukay-culture.png",
        alt: "Racks of secondhand clothing inside a traditional local ukay-ukay shop with shoppers browsing options",
        description:
          "Secondhand garment stores, locally known as ukay-ukay, became a mainstream destination for budget-conscious Filipinos seeking affordable yet unique clothing. By extending the life cycle of imported garments, this practical shopping culture informally pioneered circular fashion long before sustainability became a global buzzword.",
        descriptionTaglish:
          "Naging sikat na choice ang ukay-ukay para sa mga Pilipinong naghahanap ng mura at magandang damit. Dahil sa muling paggamit ng mga lumang damit, naisulong ng ukay-ukay ang pagiging praktikal at re-use bago pa man naging malaking paksa ang sustainable fashion.",
        caption:
          "Exhibit 1.19 — Traditional ukay-ukay retail environment promoting practical clothing reuse.",
      },
      {
        id: "devotional-attire-and-tradition",
        title: "Devotional Attire & Traditional Religious Symbols",
        subtitle: "Kasuotan sa Pananampalataya at Debosyon",
        date: "c. 2000–2010",
        image: "/images/devotional-attire-tradition.png",
        alt: "Devotees wearing maroon Black Nazarene shirts with religious towels, rosary bracelets, and medals",
        description:
          "Expressing faith through daily attire was deeply rooted in traditional religious practices. Devotees routinely wore signature maroon Black Nazarene shirts and matching towels during processions, while Sunday-best clothing, sacred medals, and rosary bracelets served as outward displays of personal devotion.",
        descriptionTaglish:
          "Ipinakita ang pananampalataya sa pamamagitan ng tradisyunal na kasuotan at accessories. Isinusuot ng mga deboto ang kulay-maroon na damit at bimpo ng Poong Hesus Nazareno sa mga prusisyon, habang ang mga damit pampasimba, medalya, at kwintas na rosaryo ay naging tanda ng pang-araw-araw na pananampalataya.",
        caption:
          "Exhibit 1.21 — Traditional devotional attire, Black Nazarene shirts, and sacred religious accessories.",
      },
    ],
    hiddenArtifacts: [
      {
        id: "modern-curated-aesthetic",
        title: "Curated Digital Aesthetics & Streetwear",
        subtitle: "Modern Aesthetics at TikTok Trends",
        date: "c. 2010–Present",
        image: "/images/modern-aesthetic-fashion.png",
        alt: "A youth dressed in minimal streetwear and thrifted vintage clothing posing for a social media outfit-of-the-day photo",
        description:
          'Modern youth fashion shifted toward curated digital aesthetics, clean minimal streetwear, thrifted ("ukay-ukay") vintage fits, and viral TikTok trends. Driven by algorithmically curated social feeds, contemporary style prioritizes personal expression, retro revival, and effortless aesthetic coordination.',
        descriptionTaglish:
          "Ang fashion ng kabataan ngayon ay nakadepende na sa mga online aesthetic, minimal streetwear, ukay-ukay fits, at mga trending sa TikTok. Mas nakatutok na ang istilo ngayon sa malinis na porma, retro vibe, at pagbuo ng sariling ootd sa social media.",
        caption:
          "Exhibit 1.12 — Contemporary streetwear outfit showcasing curated digital trends and thrifted aesthetics.",
      },
      {
        id: "globalized-ecommerce-fashion",
        title: "Hyper-Competitive E-Commerce & Influencer Fashion",
        subtitle: "Global E-Commerce at Influencer Trends",
        date: "c. 2010–Present",
        image: "/images/global-ecommerce-fashion.png",
        alt: "A smartphone screen displaying an online shopping app feed with targeted fashion recommendations and social influencer promotions",
        description:
          "The contemporary fashion market transformed into a globalized, hyper-competitive ecosystem. Today, digital shopping platforms, dedicated brand apps, algorithmic advertising, and influencer-driven aesthetics serve as the primary economic drivers of the Philippine fashion industry.",
        descriptionTaglish:
          "Naging mas globalized at matindi ang kumpetisyon sa fashion ngayon. Ang mga online shopping platforms, brand apps, algorithmic ads, at mga porma ng social media influencers na ang pangunahing nagpapatakbo ng industriya ng damit sa Pilipinas.",
        caption:
          "Exhibit 1.14 — E-commerce apps, algorithmic marketing, and digital influencer fashion retail.",
      },
      {
        id: "multi-platform-visual-branding",
        title: "Multi-Platform Visual Branding & Social Media",
        subtitle: "Digital Image, Fashion, at Visual Branding",
        date: "c. 2010–Present",
        image: "/images/digital-political-branding.png",
        alt: "A curated social media page featuring a political figure wearing campaign merch alongside followers sharing branded outfit posts",
        description:
          "Political figures now leverage television broadcasts, official campaign merchandise, and curated social media feeds to carefully shape their visual identity. Fashion choices and cohesive visual branding allow political personalities to foster instant recognition and deeper personal alignment among supporters.",
        descriptionTaglish:
          "Gumagamit na ngayon ang mga politiko ng broadcast TV, campaign merch, at mga nakaplanong larawan sa social media upang buuin ang kanilang imahe. Ang porma at visual branding ay mas mabilis nang nakatutulong upang makilala at makakonekta sila sa kanilang mga tagasuporta.",
        caption:
          "Exhibit 1.16 — Social media visual branding, digital image curation, and political campaign merchandise.",
      },
      {
        id: "thrifted-minimalist-fits",
        title: "Thrifted & Minimalist Streetwear",
        subtitle: "Ukay-Ukay Hauls at Minimalist Fits",
        date: "c. 2010–Present",
        image: "/images/thrifted-minimalist-fashion.png",
        alt: "A teenager sporting a minimalist outfit composed of thrifted ukay-ukay pieces, curated for social media",
        description:
          'Contemporary youth style pivoted toward sustainability and refined simplicity. Driven by TikTok trends and Instagram influencers, current fashion revolves around vintage "ukay-ukay" thrift hauls, neutral color palettes, and clean, minimalist streetwear silhouettes.',
        descriptionTaglish:
          "Naging uso sa mga kabataan ngayon ang mas malinis at sustainable na pananamit. Dahil sa mga trend sa TikTok at Instagram, mas sikat na ang mga nakitang damit sa ukay-ukay, neutral na kulay, at simpleng minimalist streetwear.",
        caption:
          "Exhibit 1.18 — Sustainable thrifted fashion and contemporary minimalist streetwear trends.",
      },
      {
        id: "sustainable-fashion-and-thrifting",
        title: "Sustainable Fashion, Upcycling & Digital Thrifting",
        subtitle: "Sustainable Fashion at Upcycling Trend",
        date: "c. 2010–Present",
        image: "/images/sustainable-fashion-trend.png",
        alt: "A creator staging upcycled thrifted clothes for an online video shoot about eco-friendly fashion trends",
        description:
          "Thrifting transformed from an economic necessity into an intentional, trendsetting lifestyle. Influenced by social media awareness, younger generations actively champion sustainable fashion by pairing ukay-ukay finds with creative garment upcycling, eco-friendly brand choices, and vintage resale apps.",
        descriptionTaglish:
          "Naging malaking trend sa mga kabataan ang thrifting at upcycling dahil sa impluwensya ng social media. Ang pagbili ng ukay-ukay, paggawa ng bagong istilo mula sa lumang damit, at pagpili ng eco-friendly brands ay naging simbolo na ng modernong sustainable fashion.",
        caption:
          "Exhibit 1.20 — Social media-driven sustainable thrifting, upcycling, and eco-friendly fashion trends.",
      },
      {
        id: "faith-merch-and-modern-streetwear",
        title: "Faith-Themed Merch & Modern Expression",
        subtitle: "Religious Merch at Streetwear Trends",
        date: "c. 2010–Present",
        image: "/images/faith-merch-streetwear.png",
        alt: "A smartphone displaying an online store selling faith-themed graphic tees and crucifix accessories styled with modern streetwear",
        description:
          "Religious iconography evolved into modern lifestyle wear and digital commerce. Black Nazarene shirts retain their iconic status, while crucifix pendants and rosary bracelets are styled alongside contemporary streetwear, frequently marketed and sold through dedicated online stores and social media shops.",
        descriptionTaglish:
          "Naging bahagi na rin ng modernong pananamit at e-commerce ang mga simbolong pampanampalataya. Patuloy na sikat ang mga Nazareno shirts, habang ang mga krus at rosaryo ay ibinabagay na sa modernong streetwear at madaling nabibili sa mga online shop at social media.",
        caption:
          "Exhibit 1.22 — E-commerce platforms and social media shops selling faith-themed merchandise and modern streetwear.",
      },
    ],
    timeline: [
      {
        year: "Early 2000s",
        text: '"Jologs" circulates as slang for loud, flashy, mass-market style — a term later embraced with humor and pride.',
      },
      {
        year: "2004",
        text: "The yellow LIVESTRONG wristband is launched, inspiring a global trend of colored silicone bands.",
      },
      {
        year: "Mid-to-late 2000s",
        text: "Emo and scene styles — skinny jeans, band shirts, and side-swept bangs — spread among youth worldwide, including in the Philippines.",
      },
      {
        year: "c. 2010",
        text: 'The "Jejemon" phenomenon, known for stylized text spelling and distinct fashion, receives wide coverage in Philippine media.',
      },
    ],
    significance:
      'Fashion in the 2000s was a language of belonging. Labels like "jologs," "emo," or "jejemon" were sometimes used to mock, but they also show how young Filipinos built identities through style. Many of these looks are now returning through Y2K-inspired fashion.',
    significanceTaglish:
      'Ang porma ay paraan ng pagpapakilala sa sarili. Minsan ginagamit pang-asar ang "jologs" o "jejemon," pero ipinapakita rin nito kung paano binuo ng kabataan ang kanilang identity. Ngayon, bumabalik ang mga ito bilang "Y2K aesthetic."',
    comparisons: [
      {
        aspect: "Where trends start",
        past: "TV celebrities, magazines, and what classmates wore to school.",
        present: "Influencers, TikTok, and online fashion communities.",
      },
      {
        aspect: "Where we shop",
        past: "Malls, tiangge, and ukay-ukay stalls.",
        present: "Online shopping apps alongside ukay-ukay and thrift culture.",
      },
      {
        aspect: "Hair",
        past: "Rebonding, spiky gel, and emo bangs.",
        present: "More varied styles, natural textures, and color experiments.",
      },
    ],
    sources: [
      {
        citation:
          "LIVESTRONG Foundation — history of the yellow LIVESTRONG wristband (launched 2004).",
      },
      {
        citation:
          'Philippine news coverage of the "Jejemon" phenomenon, 2010 (e.g., GMA News, Philippine Daily Inquirer).',
        note: "Consult the original articles for specific dates and quotations.",
      },
      {
        citation:
          "Trend descriptions are based on general documented fashion of the period.",
        note: "Outfits shown are representative recreations, not specific historical garments.",
      },
    ],
  },
  {
    slug: "communication-technology",
    number: "III",
    title: "Communication & Technology",
    subtitle: "Mula Textmate Hanggang Online",
    doorDescription:
      "Explore how mobile phones, text messaging, computers, and the internet influenced communication and everyday life.",
    doorDescriptionTaglish:
      "Balikan ang panahon ng keypad phones, unli-text, computer shops, at unti-unting pag-usbong ng online communication.",
    intro:
      'The 2000s turned the Philippines into a nation of texters. Prepaid load and keypad phones made SMS cheaper than calling, and "GM" messages, textmates, and pasaload became part of daily life. Meanwhile, computer shops opened the door to online games, chat, and social networks.',
    introTaglish:
      "Noong 2000s, naging bansa tayo ng mga texter. Dahil sa prepaid load at keypad phones, mas mura mag-text kaysa tumawag. Uso ang GM, textmate, at pasaload. Sa computer shop naman natin unang naranasan ang online games, chat, at social networking.",
    theme: "walnut",
    artifacts: [
      {
        id: "keypad",
        title: "Keypad Phone & Prepaid Load",
        subtitle: "Ang Unang Cellphone",
        date: "c. 2000–2010",
        image: "/images/tech-phone.png",
        alt: "A small keypad mobile phone with a beaded charm next to a prepaid load card on a velvet pedestal",
        description:
          'Durable keypad phones with monochrome screens were many Filipinos’ first mobile devices. Prepaid load cards and text-based promos made messaging the most affordable way to keep in touch, giving rise to group messages ("GM") and textmates.',
        descriptionTaglish:
          "Matibay at simple ang mga keypad phone — ito ang unang cellphone ng marami. Dahil sa prepaid load at text promos, text ang pinakamurang paraan ng komunikasyon. Dito nagsimula ang GM at textmate.",
        caption: "Exhibit 3.1 — Keypad phone with prepaid load card.",
      },
      {
        id: "telecom-rivalry-load-cards- broadband",
        title: "Telecom Competition, Load Cards & Broadband Migration",
        subtitle: "Kompetisyon sa Telco, Load Cards, at Internet Cafe",
        date: "c. 2000–2010",
        image: "/images/telecom-load-broadband.png",
        alt: "A collection of prepaid scratch load cards next to an early broadband modem and an internet café storefront",
        description:
          'A fierce telco network rivalry defined the communication economy, centered on prepaid SIM cards, scratch load cards, and unlimited text subscriptions ("Unli-Text"). Internet connectivity remained largely fixed and shared, anchored by neighborhood internet cafés and the gradual migration to early home broadband.',
        descriptionTaglish:
          'Naging matindi ang kumpetisyon ng mga telco dahil sa prepaid load, scratch cards, at mga "Unli-Text" promo na naging pundasyon ng araw-araw na pagte-text. Samantala, ang internet ay nakatutok sa mga internet café at pausbong pa lamang na home broadband.',
        caption:
          "Exhibit 1.25 — Prepaid load cards, unlimited text promotions, and early internet café infrastructure.",
      },
      {
        id: "legacy-media-and-sms-politics",
        title: "Legacy Media & SMS Political Coordination",
        subtitle: "Balita sa TV, Radyo, at Text Messaging",
        date: "c. 2000–2010",
        image: "/images/legacy-media-sms-politics.png",
        alt: "A keypad phone displaying a forwarded political text message beside a broadcast TV and radio news report",
        description:
          "Television broadcasts, radio commentary, text messaging, and early digital platforms served as primary channels for political news, campaign announcements, and public debate. Mobile SMS emerged as a powerful tool, allowing citizens to rapidly share news updates and organize civic activities.",
        descriptionTaglish:
          "Telebisyon, radyo, at text messaging ang pangunahing daan ng balitang pampulitika at pampublikong talakayan noon. Naging mahalaga rin ang SMS upang mabilis na magpakalat ng impormasyon at mag-organisa ng mga gawaing sibil ang mga mamamayan.",
        caption:
          "Exhibit 1.27 — Television, radio news broadcasts, and early SMS political organizing.",
      },
      {
        id: "sms-capital-and-friendster",
        title: "The SMS Capital & Early Digital Socializing",
        subtitle: "SMS Capital at Internet Cafe Era",
        date: "c. 2000–2010",
        image: "/images/sms-capital-friendster.png",
        alt: "A keypad feature phone displaying an unli-text confirmation message sitting next to a computer monitor inside an internet café",
        description:
          "Keypad phones and unlimited texting promos cemented the Philippines’ global status as the SMS Capital, defining daily personal communication. Concurrently, neighborhood internet cafés and platforms like Friendster introduced Filipinos to early online social networking.",
        descriptionTaglish:
          'Dahil sa mga keypad phone at unli-text promos, nakilala ang bansa bilang "SMS Capital." Kasabay nito, ang mga internet café at Friendster ang naging paunang daan ng mga Pilipino sa digital na pakikipagkapwa-tao.',
        caption:
          "Exhibit 1.29 — Keypad phone text messaging culture and early internet café digital socializing.",
      },
      {
        id: "traditional-environmental-campaigns",
        title: "Traditional Environmental Campaigns",
        subtitle: "Tradisyunal na Kampanya Para sa Kalikasan",
        date: "c. 2000–2010",
        image: "/images/traditional-environmental-campaigns.png",
        alt: "A classroom setup with a CRT TV showing an educational broadcast on recycling alongside printed environmental posters and newspapers",
        description:
          "Information regarding pollution, recycling, and environmental protection was commonly disseminated through traditional channels such as television, radio broadcasts, print newspapers, and structured school programs.",
        descriptionTaglish:
          "Ang impormasyon tungkol sa polusyon, pagrerecycle, at pangangalaga sa kalikasan ay karaniwang ipinalalaganap noon gamit ang telebisyon, radyo, pahayagan, at mga programa sa paaralan.",
        caption:
          "Exhibit 1.31 — Traditional media broadcasts, print newspapers, and school-based environmental advocacy.",
      },
      {
        id: "sms-prayer-chains-and-broadcasts",
        title: "SMS Prayer Chains & Mass Broadcasts",
        subtitle: "Chain Texts at Balita sa Radyo at TV",
        date: "c. 2000–2010",
        image: "/images/sms-prayer-chains.png",
        alt: "A keypad feature phone displaying a forwarded SMS prayer chain text beside a radio playing a religious broadcast",
        description:
          "Spiritual connection relied heavily on SMS text chains and traditional broadcast media. Believers routinely forwarded Bible verses and prayer requests through keypad phones, while broadcast radio and television served as the main channels for Sunday sermons, novenas, and official Church announcements.",
        descriptionTaglish:
          "Naging pangunahing daan ng pananampalataya ang mga SMS chain text at tradisyunal na media. Karaniwang ipinapasa sa cell phone ang mga Bible verse at dasal, habang ang radyo at telebisyon naman ang nakatutok sa pag-ere ng misa at anunsyo ng Simbahan.",
        caption:
          "Exhibit 1.33 — Forwarded SMS prayer chain texts on keypad phones alongside broadcast radio and television sermons.",
      },
    ],
    hiddenArtifacts: [
      {
        id: "smartphones-and-instant-messaging",
        title: "Smartphones & Hyper-Connected Social Apps",
        subtitle: "Era ng Smartphone at Social Messaging",
        date: "c. 2010–Present",
        image: "/images/smartphones-social-apps.png",
        alt: "A modern smartphone screen showing active chat threads across mobile messaging apps and viral social feeds",
        description:
          "Smartphones, high-speed mobile data, and multi-platform messaging apps largely replaced traditional SMS for everyday interaction. Rich media sharing, group chats, and viral social platforms now define hyper-connected personal and professional communication.",
        descriptionTaglish:
          "Pinalitan ng mga smartphone at messaging apps ang lumang pagte-text gamit ang load. Dahil sa internet at mga bagong social platform, naging mas mabilis, libre, at puno ng photos at videos ang pang-araw-araw na pakikipag-usap.",
        caption:
          "Exhibit 1.24 — Contemporary smartphone communication via mobile messaging and viral social networks.",
      },
      {
        id: "mobile-data-and-fiber-connectivity",
        title: "Mobile Data & Fiber Connectivity",
        subtitle: "Mobile Data, High-Speed Fiber, at Personal Devices",
        date: "c. 2010–Present",
        image: "/images/mobile-data-fiber-era.png",
        alt: "A high-speed fiber optic router alongside a smartphone displaying mobile data speed test results",
        description:
          "The telecom industry pivoted completely toward high-speed mobile data and nationwide fiber optic broadband as its primary services. Widespread personal device ownership and mobile internet access drastically reduced reliance on physical internet cafés, bringing high-speed connectivity straight into individual hands and homes.",
        descriptionTaglish:
          "Lumipat ang pangunahing serbisyo ng mga telco sa mobile data at high-speed fiber internet. Dahil halos lahat ay may sarili nang smartphone at internet sa bahay, naging bihira na ang pangangailangan na pumunta sa mga internet café.",
        caption:
          "Exhibit 1.26 — High-speed fiber connections, 4G/5G mobile data, and personal mobile internet access.",
      },
      {
        id: "social-media-livestreams-and-factchecking",
        title: "Social Media, Livestreams & The Fact-Checking Era",
        subtitle: "Social Media, Livestreaming, at Fact-Checking",
        date: "c. 2010–Present",
        image: "/images/social-media-factchecking.png",
        alt: "A smartphone screen displaying a political livestream alongside digital fact-checking labels and social media posts",
        description:
          "Platforms like Facebook, YouTube, TikTok, and direct livestreams transformed political discourse, enabling instant two-way communication between candidates and citizens. However, the rapid proliferation of online misinformation and manipulated media made digital literacy and active fact-checking vital components of contemporary democracy.",
        descriptionTaglish:
          "Dahil sa Facebook, YouTube, TikTok, at livestreams, naging instant na ang usapang pampulitika sa pagitan ng mga politiko at mamamayan. Subalit dahil sa mabilis na pagkalat ng misinformation at pekeng balita, naging kritikal ang pag-fact-check sa internet.",
        caption:
          "Exhibit 1.28 — Social media campaign livestreams, viral political feeds, and online fact-checking tools.",
      },
      {
        id: "hyper-connected-smartphone-era",
        title: "The Hyper-Connected Smartphone Era",
        subtitle: "Era ng Smartphone at Viral Social Apps",
        date: "c. 2010–Present",
        image: "/images/hyper-connected-smartphones.png",
        alt: "A modern smartphone displaying active social media interfaces from Facebook and TikTok",
        description:
          "Smartphones and viral platforms like Facebook, TikTok, and instant messaging apps fully integrated into everyday life. Online interactions, video sharing, and group chats largely replaced traditional SMS as the standard for continuous daily communication.",
        descriptionTaglish:
          "Naging bahagi na ng araw-araw na buhay ang mga smartphone at mga platform tulad ng Facebook at TikTok. Pinalitan ng mabilisang online interaction at instant messaging ang lumang paraan ng pagte-text.",
        caption:
          "Exhibit 1.30 — Modern smartphone connectivity driven by Facebook, TikTok, and real-time messaging apps.",
      },
      {
        id: "digital-environmental-advocacy",
        title: "Digital Environmental Advocacy",
        subtitle: "Advocacy sa Facebook, TikTok, at YouTube",
        date: "c. 2010–Present",
        image: "/images/digital-environmental-advocacy.png",
        alt: "A smartphone displaying environmental campaign feeds, infographics, and awareness videos on Facebook, TikTok, and YouTube",
        description:
          "Environmental groups and passionate individuals raise awareness, launch campaigns, and mobilize public involvement directly through interactive social platforms like Facebook, TikTok, and YouTube.",
        descriptionTaglish:
          "Ang mga grupong pampaligid at indibidwal ay mabilis nang nakapagpapakalat ng kaalaman, nakapaglulunsad ng kampanya, at nakapagpapakilos ng publiko gamit ang Facebook, TikTok, at YouTube.",
        caption:
          "Exhibit 1.32 — Digital campaigns, interactive social posts, and online video advocacy for climate action.",
      },
      {
        id: "digital-parish-and-social-faith",
        title: "Digital Parishes & Social Media Faith",
        subtitle: "Online Mass at Faith Content sa Social Media",
        date: "c. 2010–Present",
        image: "/images/digital-parish-social-faith.png",
        alt: "A modern smartphone screen showing a livestreamed mass on Facebook and short-form reflection videos on TikTok and Instagram",
        description:
          "Parishes and religious communities fully embraced digital connectivity. Mass livestreams and online prayer groups operate via Facebook, YouTube, and Zoom, while clergy and believers actively share daily reflections, faith-themed content, and spiritual guidance on platforms like TikTok and Instagram.",
        descriptionTaglish:
          "Mabilis na lumipat sa internet ang mga parokya at pamayanang relihiyoso. Gumagamit na ngayon ng Facebook, YouTube, at Zoom para sa online mass at prayer groups, habang ang mga pari at mamamayan ay nagbabahagi ng mga pagninilay sa TikTok at Instagram.",
        caption:
          "Exhibit 1.34 — Digital parish livestreams on Facebook and Zoom alongside short-form faith content on TikTok and Instagram.",
      },
    ],
    timeline: [
      {
        year: "2000",
        text: "Nokia releases the 3310, one of the best-selling and most iconic keypad phones of the era.",
      },
      {
        year: "January 2001",
        text: "Text messages help mobilize crowds during EDSA II (People Power II), a widely studied example of SMS in Philippine politics.",
      },
      {
        year: "2002",
        text: "Friendster launches and soon becomes hugely popular among Filipino internet users.",
      },
      {
        year: "2003",
        text: '"Ragnarok Online" launches in the Philippines, fueling computer-shop gaming culture.',
      },
      {
        year: "c. 2008–2010",
        text: "Facebook grows rapidly among Filipino users, gradually overtaking Friendster.",
      },
    ],
    significance:
      "Texting and computer shops democratized communication. People who could not afford calls or home internet could still stay connected — with family, friends, and even political movements. The habits formed in this decade laid the foundation for the Philippines’ later reputation as one of the world’s most active social-media nations.",
    significanceTaglish:
      "Dahil sa text at computer shop, kahit walang landline o internet sa bahay, konektado pa rin ang mga tao — sa pamilya, kaibigan, at maging sa mga kilusang pampulitika. Dito nagsimula ang pagiging aktibo ng mga Pilipino online.",
    comparisons: [
      {
        aspect: "Messaging",
        past: "SMS limited to 160 characters, unli-text promos, and GMs.",
        present:
          "Messenger, Viber, and other apps with photos, voice, and video.",
      },
      {
        aspect: "Going online",
        past: "Hourly rental at computer shops or slow dial-up at home.",
        present: "Mobile data and Wi-Fi on smartphones, nearly anywhere.",
      },
      {
        aspect: "Social networks",
        past: "Friendster testimonials, Multiply pages, and Yahoo! Messenger.",
        present: "Facebook, Instagram, TikTok, and X.",
      },
    ],
    sources: [
      {
        citation:
          'Rafael, Vicente L. "The Cell Phone and the Crowd: Messianic Politics in the Contemporary Philippines." Public Culture 15, no. 3 (2003): 399–425.',
      },
      {
        citation:
          "Pertierra, Raul, et al. Txt-ing Selves: Cellphones and Philippine Modernity. Manila: De La Salle University Press, 2002.",
      },
      {
        citation:
          "Launch years for Nokia 3310, Friendster, and Ragnarok Online (PH) based on company and publisher records.",
        note: "Cross-check with the original company announcements.",
      },
    ],
  },
];

export function getGallery(slug: string) {
  return galleries.find((g) => g.slug === slug);
}
