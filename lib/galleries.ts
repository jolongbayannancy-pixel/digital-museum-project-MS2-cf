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
  future: string;
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
  prevArtifacts: Artifact[];
  currArtifacts: Artifact[];
  futureArtifacts: Artifact[];
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
    prevArtifacts: [
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
        image: "/images/campaign-song.jpg",
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
        image: "/images/tree-planting.jpg",
        alt: "A CRT television showing a public service announcement about proper waste segregation and recycling",
        description:
          "Broadcast television played a central role in raising ecological awareness through news segments, investigative documentaries, and government public service announcements. These programs educated households on proper waste disposal, recycling practices, and local conservation initiatives.",
        descriptionTaglish:
          "Telebisyon ang pangunahing daan upang ipahatid ang kaalaman tungkol sa kalikasan sa pamamagitan ng mga balita, dokumentaryo, at public service announcements. Tinuruan nito ang mga pamilya tungkol sa tamang pagtatapon ng basura, pagrerecycle, at pangangalaga sa kapaligiran.",
        caption:
          "Exhibit 1.5 — Television-led environmental public service announcements and educational programming.",
      },
      {
        id: "broadcast-devotion-and-fiestas",
        title: "Fiestas & Broadcast Devotion",
        subtitle: "Fiesta, Pasko, at Pananampalataya sa Telebisyon",
        date: "c. 2000–2010",
        image: "/images/fiestas.jpg",
        alt: "A family gathered in front of a CRT TV watching a Lenten special alongside a festive videoke setup",
        description:
          "Religious traditions and community celebrations were tightly tied to traditional media. Patron saint fiestas and Christmas gatherings centered around videoke carols and neighborhood singing, while broadcast television brought sacred devotions—such as Sunday masses and Holy Week specials—directly into Filipino living rooms.",
        descriptionTaglish:
          "Magkasama ang saya ng pagtitipon at ang pananampalataya sa tahanan. Ang mga fiesta at Pasko ay punong-puno ng videoke at kantahan, habang ang mga misa at Lenten specials naman sa telebisyon ang nagdadala ng debosyon sa loob ng sala.",
        caption:
          "Exhibit 1.6 — Traditional fiesta videoke singing and broadcast TV religious specials.",
      },
    ],
    currArtifacts: [
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
          "Exhibit 1.7 — Digital media streaming and subscription entertainment setup.",
      },
      {
        id: "smart-karaoke",
        title: "Smart & Portable Karaoke",
        subtitle: "Kantahan Kahit Saan",
        date: "c. 2016–2026",
        image: "/images/smart-karaoke.jpg",
        alt: "A modern portable Bluetooth microphone with built-in speakers resting next to a smart TV displaying a karaoke app interface",
        description:
          "Bulky videoke cabinets gave way to sleek, highly accessible technology as karaoke moved into the digital age. Portable Bluetooth microphones, smart TVs, and mobile sing-along apps allow people to turn any room into an instant stage without needing physical songbooks or coin slots.",
        descriptionTaglish:
          "Hindi na kailangan ng mabigat na videoke cabinet para mag-kantahan. Dahil sa mga portable Bluetooth microphone, smart TV, at online sing-along apps, kahit sino ay pwedeng mag-karaoke kahit saan at kahit kailan nang walang dalang songbook o barya.",
        caption:
          "Exhibit 1.8 — Modern portable Bluetooth microphone and smart karaoke setup.",
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
          "Exhibit 1.9 — Modern personalized media consumption through mobile streaming and smart apps.",
      },
      {
        id: "digital-politics-and-karaoke-culture",
        title: "Digital Politics & Viral Entertainment",
        subtitle: "Kampanya sa Media at Social Network",
        date: "c. 2016–2026",
        image: "/images/digital-campaign.jpg",
        alt: "A smartphone screen displaying a viral political karaoke parody video alongside a streaming news broadcast",
        description:
          "While broadcast television remains a vital source of election updates, political communication has expanded online through social media and digital platforms. Modern political parodies, online karaoke trends, and short viral videos show how contemporary Filipino entertainment and political discourse now continuously overlap.",
        descriptionTaglish:
          "Kahit na nagbabalita pa rin ang telebisyon tungkol sa eleksyon, mas lumawak ang kampanya sa online platforms. Ang mga political parody, video clips, at trending karaoke songs ay mabilis nang kumakalat sa internet, na nagpapakita kung paano nagkahalo ang libangan at pulitika sa modernong kultura.",
        caption:
          "Exhibit 1.10 — Social media streaming and viral political entertainment culture.",
      },
      {
        id: "digital-climate-action",
        title: "Digital Climate Action & Social Media",
        subtitle: "Advocacy sa Digital at Social Media",
        date: "c. 2016–2026",
        image: "/images/Sustainability-influencers.jpeg",
        alt: "A smartphone screen displaying a viral video campaign about climate change and sustainable living practices",
        description:
          "Environmental advocacy expanded beyond traditional TV broadcasts into digital spaces. High-definition web documentaries, YouTube educational channels, and short-form social media content now drive global conversations around climate change, sustainability, and eco-friendly lifestyles.",
        descriptionTaglish:
          "Mas lumawak ang kampanya para sa kalikasan dahil sa internet. Bukod sa telebisyon, ang mga online documentary, YouTube videos, at content sa social media ay mabilis nang nagpapakalat ng kaalaman tungkol sa climate change at mga paraan ng pamumuhay nang mas sustainable.",
        caption:
          "Exhibit 1.11 — Social media streams and digital content dedicated to climate awareness.",
      },
      {
        id: "digital-worship-and-streaming",
        title: "Digital Worship & On-Demand Devotion",
        subtitle: "Online Mass at Digital na Pagsamba",
        date: "c. 2016–2026",
        image: "/images/digital-worship.jpg",
        alt: "A tablet displaying an online livestreamed mass alongside a mobile phone playing worship songs on a streaming app",
        description:
          "Faith-based activities expanded seamlessly into the digital realm. Online masses and livestreamed novenas complement traditional TV broadcasts, while YouTube playlists and smart karaoke apps allow individuals to access worship songs and sing-along carols on demand anytime, anywhere.",
        descriptionTaglish:
          "Lumipat din sa digital space ang mga gawaing pananampalataya. May mga online mass at livestreamed novena na sa internet, habang ang mga worship songs at carols sa YouTube at smart karaoke apps ay madali nang ma-access at makantahan anumang oras.",
        caption:
          "Exhibit 1.12 — Livestreamed religious services and digital worship song streaming.",
      },
    ],
    futureArtifacts: [
      {
        id: "ai-karaoke-systems",
        title: "AI-Powered Karaoke Systems",
        subtitle: "Ang Bagong Mukha ng Pambansang Libangan",
        date: "c. 2030",
        image: "/images/future1.jpg",
        alt: "A lively family gathering around a smart AI karaoke system displaying personalized song recommendations, interactive voice visuals, and virtual duet avatars on a large screen",
        description:
          "Interactive home entertainment reached a new milestone with the integration of artificial intelligence into traditional singing setups. Moving beyond simple pitch correction and static song lists, modern AI karaoke systems deliver personalized song recommendations tailored to users' vocal ranges, enable seamless virtual duets, and create highly interactive singing experiences for families and friends gathering together.",
        descriptionTaglish:
          "Mas naging dynamic at interactive ang pambansang libangan sa pagdating ng artificial intelligence sa karaoke setups. Hindi na lang ito basta simpleng lyrics screen at minus-one; ngayon, ang mga AI karaoke systems ay nagbibigay na ng personalized song recommendations batay sa boses ng kumakanta, virtual duets, at interactive features na mas nagpapasaya sa bonding ng pamilya at magkakaibigan.",
        caption:
          "Exhibit 1.13 — Next-generation AI karaoke setup featuring interactive singing experiences and personalized recommendations.",
      },
      {
        id: "ai-monetized-karaoke-streaming",
        title: "Subscription-Based & AI-Driven Entertainment",
        subtitle: "Pinagsamang Streaming Bundles at AI Karaoke",
        date: "c. 2030",
        image: "/images/future2.jpg",
        alt: "A modern home media interface featuring bundled streaming packages alongside a dedicated AI karaoke app with real-time song recommendations and creator tipping features",
        description:
          "The modern digital entertainment ecosystem thrives on tiered subscription bundles, direct creator monetization, and specialized AI-driven applications. Beyond standard video and music streaming, interactive experiences like home karaoke have transitioned into subscription apps, leveraging artificial intelligence to analyze vocal profiles, curated personalized song selections, and seamlessly integrate into home entertainment platforms.",
        descriptionTaglish:
          "Patuloy ang pag-unlad ng digital entertainment gamit ang mga paid streaming bundles, creator income, at AI-driven apps. Hindi na lang basta palabas o musika ang kasama sa subscriptions; maging ang karaoke ay naging paid app na rin na gumagamit ng AI para magrekomenda ng tamang kanta batay sa boses at trip ng kumakanta, na mas nagpapadali sa bonding sa bahay.",
        caption:
          "Exhibit 1.14 — Integrated streaming subscription model showcasing AI-curated karaoke software.",
      },
      {
        id: "immersive-political-broadcasting",
        title: "Spatial Politics & Immersive Campaigns",
        subtitle: "3D Debates, Virtual Concerts, at Interaktibong Pulitika",
        date: "c. 2030",
        image: "/images/future3.jpg",
        alt: "A room-scale 3D hologram setup displaying candidates at a political debate alongside floating interactive policy evidence cards and a crowd engaged in a virtual campaign concert",
        description:
          "Political engagement evolved beyond 2D screens into room-scale, three-dimensional spatial experiences where voters feel directly present at debates and can examine interactive evidence in real time alongside candidates. Virtual campaign concerts bring remote supporters together into shared digital venues featuring spatial audio, synchronized multilingual karaoke, and transparently labeled AI performers. Viewers can seamlessly transition between live entertainment and interactive breakdowns of the policies backing each campaign message.",
        descriptionTaglish:
          "Mas naging personal at immersive ang politika sa pagpasok ng room-scale 3D experiences, kung saan nararamdaman ng mga botante na naroon sila sa mismong debate habang sinusuri ang mga interaktibong ebidensya sa tabi ng mga kandidato. Ang mga virtual campaign concerts naman ay nagbubuklod sa mga supporters gamit ang spatial sound, multilingual karaoke, at malinaw na nakatatak na AI performers, habang madaling nakakalipat ang audience mula sa aliw patungo sa malalim na paliwanag ng mga polisiya.",
        caption:
          "Exhibit 1.15 — Spatial political broadcasting and interactive virtual campaign concert ecosystem.",
      },
      {
        id: "global-ph-regional-immersive-media",
        title: "AI-Powered Regional Folklore & Holographic P-Pop",
        subtitle:
          "Pandaigdigang Pagkilala sa Wikang Rehiyonal at Mitolohiyang Pilipino",
        date: "c. 2030",
        image: "/images/future4.jpg",
        alt: "A high-tech venue displaying holographic P-Pop performers alongside interactive 3D mythology figures and localized multi-language regional subtitles",
        description:
          "Philippine regional culture achieved unprecedented global reach through AI-assisted content creation, volumetric P-Pop holographic concerts, and interactive regional folklore media. Advanced AI tools bridge language barriers while preserving local nuances, allowing global audiences to immerse themselves in rich indigenous mythology, vibrant regional dialects, and futuristic musical performances across spatial digital venues.",
        descriptionTaglish:
          "Naging mas kilala sa buong mundo ang kultura at sining ng iba't ibang rehiyon sa Pilipinas sa tulong ng AI-assisted content creation, holographic P-Pop concerts, at interactive folklore media. Dahil sa modernong teknolohiya, madali nang naa-access ng global audience ang mga mitolohiya, katutubong wika, at musika ng bansa sa isang makabagong at immersive na paraan.",
        caption:
          "Exhibit 1.16 — Global integration of Philippine regional culture via AI localization and holographic media.",
      },
      {
        id: "eco-friendly-smart-entertainment",
        title: "Green Media Tech & Solar Smart Devices",
        subtitle: "Makakalikasan at Matipid na Teknolohiya sa Tahanan",
        date: "c. 2030",
        image: "/images/future5.jpg",
        alt: "A solar-powered Filipino living room setup featuring an energy-efficient smart TV, low-power AI karaoke unit, and visible roof-mounted solar panel readouts",
        description:
          "Home entertainment systems pivoted toward sustainability with the rise of high-efficiency hardware and smart energy management. In Filipino households, solar-powered media setups and intelligent power-saving devices—capable of automatically switching off during idle periods—are becoming standard, lowering household energy costs while preserving the nation's beloved karaoke and viewing traditions.",
        descriptionTaglish:
          "Mas naging matipid at makakalikasan ang libangan sa bahay dahil sa mga energy-efficient na TV at karaoke systems. Sa mga tahanang Pilipino, mas lumalaganap na ang paggamit ng solar-powered entertainment systems at mga 'smart' devices na kusa at awtomatikong namamatay kapag hindi ginagamit—na nagpapababa ng gastos sa kuryente habang patuloy na nagbibigay-saya sa pamilya.",
        caption:
          "Exhibit 1.17 — Sustainable home entertainment integration featuring solar-powered energy-efficient electronics.",
      },
      {
        id: "ai-spatial-digital-worship",
        title: "AI-Enhanced Spatial & Immersive Devotion",
        subtitle: "Metaverse Mass at Interaktibong Pagsamba sa Henerasyong AI",
        date: "c. 2030",
        image: "/images/future6.jpg",
        alt: "A family wearing lightweight AR glasses sitting in a living room, participating in a 3D room-scale church service with spatial choir audio and real-time Tagalog and regional translation overlays",
        description:
          "Religious traditions evolved into fully immersive, spatial digital experiences powered by artificial intelligence. Believers across the globe can now gather in 3D room-scale virtual cathedrals for online worship, featuring real-time AI translation for regional dialects, interactive prayer networks, and spatial audio that recreates the acoustics of centuries-old churches from home.",
        descriptionTaglish:
          "Mas naging immersive at accessible ang pananampalataya sa tulong ng artificial intelligence at 3D spatial technology. Ang mga pamilya sa iba't ibang panig ng mundo ay maaari nang magkatabi na dumalo sa virtual Masses at worship services, na may real-time AI translation sa mga katutubong wika at spatial audio na nagpapadama ng tunay na kapaligiran ng simbahan mula sa sariling tahanan.",
        caption:
          "Exhibit 1.18 — Room-scale spatial worship and AI-assisted global religious services.",
      },
    ],
    timeline: [
      {
        year: "c. 2000–2003",
        text: "CRT televisions and coin-operated videoke cabinets become fixed centerpieces of Filipino living rooms and neighborhood celebrations, establishing shared household entertainment (Artifact 1 & 2).",
      },
      {
        year: "c. 2004–2008",
        text: "Primetime teleseryes become daily family rituals, while broadcast television acts as the primary medium for family bonding and shared viewing routines (Artifact 3).",
      },
      {
        year: "c. 2009–2015",
        text: "Filipino videoke culture gains global recognition. Broadcast television continues to anchor nationwide political campaigns, discourse, and local election engagement (Artifact 4).",
      },
      {
        year: "c. 2016–2020",
        text: "The media landscape shifts toward broadcast environmental awareness programs, public service announcements, and investigative climate documentaries (Artifact 5).",
      },
      {
        year: "c. 2021–2026",
        text: "Religious traditions, patron saint fiestas, Sunday masses, and community celebrations bridge traditional TV devotions with modern digital access (Artifact 6).",
      },
      {
        year: "c. 2026–Future",
        text: "Entertainment and cultural practices evolve into next-generation AI karaoke systems, spatial 3D political debates, sustainable green media tech, and holographic virtual worship across all artifacts.",
      },
    ],
    significance:
      "Television and karaoke served as the defining social technologies of Filipino life, bridging family bonding, political communication, environmental education, and spiritual devotion. In the 2000s, living rooms centered around heavy CRT TVs and neighborhood videoke cabinets that fostered collective participation and pakikisama. As technology shifted into portable screens, smart karaoke setups, and on-demand streaming, and onward to AI-driven spatial systems and green media technology, these core community practices continue to evolve while preserving Filipino traditions.",
    significanceTaglish:
      "Hindi lang simpleng libangan ang TV at karaoke — naging gabay at daluyan din ito ng pulitika, kaalaman sa kalikasan, at pananampalataya ng mga Pilipino. Noong 2000s, ang CRT TV at hulugang videoke sa sala at kanto ang nagbuklod sa pamilya at kapitbahayan. Ngayong patuloy na umuusbong ang AI-powered systems, spatial media, at makakalikasang teknolohiya, patuloy pa ring buhay at lumalawak ang ating mga tradisyon sa mas modernong paraan.",
    comparisons: [
      {
        aspect: "Primary Viewing Setup (Artifact 1)",
        past: "One CRT TV sitting on a decorated wooden cabinet, watched together in the sala during scheduled broadcast airtimes.",
        present: "Smart TVs, laptops, and smartphones streaming content on demand, often tailored to individual preferences.",
        future: "Room-scale spatial displays, AI-curated home hubs, and immersive volumetric media setups.",
      },
      {
        aspect: "Karaoke & Sing-Along System (Artifact 2)",
        past: "Coin-operated videoke cabinets with physical songbooks and wired microphones at fiestas and gatherings.",
        present: "Portable Bluetooth microphones, smart TV sing-along apps, and streaming lyric videos on mobile devices.",
        future: "AI-powered vocal coaching platforms, virtual duet avatars, and real-time personalized harmonic arrangements.",
      },
      {
        aspect: "Primetime & Family Viewing Rituals (Artifact 3)",
        past: "Evening teleseryes and shared daily family viewing routines centered around the living room television.",
        present: "On-demand streaming platforms, personalized watchlists, and mobile viewing anytime, anywhere.",
        future: "Interactive streaming environments, personalized character branching, and immersive co-viewing avatars.",
      },
      {
        aspect: "Political Communication & Campaigning (Artifact 4)",
        past: "Televised political ads, broadcast news debates, and traditional campaign songs played at local rallies.",
        present: "Viral political karaoke parodies, social media livestreams, and short-form video campaigns across digital platforms.",
        future: "3D holographic debates, room-scale virtual town halls, and transparently labeled AI-assisted campaign messaging.",
      },
      {
        aspect: "Environmental Awareness & PSAs (Artifact 5)",
        past: "Government PSAs and investigative environmental documentaries aired on traditional broadcast television.",
        present: "Web documentaries, social media sustainability content, and YouTube educational channels driving climate advocacy.",
        future: "Solar-powered smart media hardware, energy-efficient IoT home devices, and real-time carbon-tracked streaming networks.",
      },
      {
        aspect: "Religious Devotion & Festivities (Artifact 6)",
        past: "Broadcast Sunday masses, TV Lenten specials, and community videoke carols during Christmas and fiestas.",
        present: "Livestreamed online masses, mobile novena apps, and on-demand worship playlists on streaming services.",
        future: "Metaverse cathedrals, room-scale spatial audio worship, and real-time multi-language AI translation for global faith communities.",
      },
    ],
    sources: [
      {
        citation:
          "Roberto del Rosario — Inventor of the Sing-Along System (Karaoke).",
        note: "Patented sing-along system (U.S. Patent No. 4,387,617 / IPOPHL records) laying the foundation for Filipino videoke culture.",
      },
      {
        citation:
          "Philippine Media & Broadcast Television History (2000–2010).",
        note: "Archival studies on CRT television usage, primetime teleserye viewership, broadcast PSAs, and televised election campaigns.",
      },
      {
        citation:
          "Digital Entertainment, Streaming, & Emerging AI Media Reports (2016–2026+).",
        note: "Industry trends detailing the evolution from broadcast TV and analog videoke to mobile streaming, smart apps, and futuristic spatial technologies.",
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
    prevArtifacts: [
      {
        id: "jejemon-style",
        title: "Jejemon Streetwear Subculture",
        subtitle: "Ang Kultura ng Jejemon Fashion",
        date: "c. 2000–2010",
        image: "/images/jejemon.webp",
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
        image: "/images/bench.jpeg",
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
        image: "/images/arroyo.jpg",
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
        image: "/images/emo-era.jpg",
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
        image: "/images/ukay-ukay.jpg",
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
        image: "/images/devotional-shirt.webp",
        alt: "Devotees wearing maroon Black Nazarene shirts with religious towels, rosary bracelets, and medals",
        description:
          "Expressing faith through daily attire was deeply rooted in traditional religious practices. Devotees routinely wore signature maroon Black Nazarene shirts and matching towels during processions, while Sunday-best clothing, sacred medals, and rosary bracelets served as outward displays of personal devotion.",
        descriptionTaglish:
          "Ipinakita ang pananampalataya sa pamamagitan ng tradisyunal na kasuotan at accessories. Isinusuot ng mga deboto ang kulay-maroon na damit at bimpo ng Poong Hesus Nazareno sa mga prusisyon, habang ang mga damit pampasimba, medalya, at kwintas na rosaryo ay naging tanda ng pang-araw-araw na pananampalataya.",
        caption:
          "Exhibit 1.21 — Traditional devotional attire, Black Nazarene shirts, and sacred religious accessories.",
      },
    ],
    currArtifacts: [
      {
        id: "modern-curated-aesthetic",
        title: "Curated Digital Aesthetics & Streetwear",
        subtitle: "Modern Aesthetics at TikTok Trends",
        date: "c. 2016–2026",
        image: "/images/aesthetic.jpg",
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
        date: "c. 2016–2026",
        image: "/images/shein.jpg",
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
        date: "c. 2016–2026",
        image: "/images/bbm-merchandise.jpg",
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
        date: "c. 2016–2026",
        image: "/images/minimalist.jpg",
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
        date: "c. 2016–2026",
        image: "/images/online-selling.webp",
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
        date: "c. 2016–2026",
        image: "/images/religious-merch.jpg",
        alt: "A smartphone displaying an online store selling faith-themed graphic tees and crucifix accessories styled with modern streetwear",
        description:
          "Religious iconography evolved into modern lifestyle wear and digital commerce. Black Nazarene shirts retain their iconic status, while crucifix pendants and rosary bracelets are styled alongside contemporary streetwear, frequently marketed and sold through dedicated online stores and social media shops.",
        descriptionTaglish:
          "Naging bahagi na rin ng modernong pananamit at e-commerce ang mga simbolong pampanampalataya. Patuloy na sikat ang mga Nazareno shirts, habang ang mga krus at rosaryo ay ibinabagay na sa modernong streetwear at madaling nabibili sa mga online shop at social media.",
        caption:
          "Exhibit 1.22 — E-commerce platforms and social media shops selling faith-themed merchandise and modern streetwear.",
      },
    ],
    futureArtifacts: [
      {
        id: "ph-digital-sustainable-virtual-fashion",
        title: "Digital Trends, Sustainability & Virtual Fashion",
        subtitle: "Tradisyong Pinoy, Eco-Friendly Fashion, at Virtual Couture",
        date: "c. 2030",
        image: "/images/future7.jpg",
        alt: "A Filipino model wearing a modern outfit made of eco-friendly local textiles while floating AR virtual fashion overlays highlight futuristic digital patterns around the silhouette",
        description:
          "Filipino fashion evolves by seamlessly merging digital trends, sustainable clothing, and locally inspired designs. As virtual fashion becomes increasingly common, consumers mix eco-conscious physical garments made from indigenous textiles with augmented reality overlays and digital-only wearables for avatars and social platforms.",
        descriptionTaglish:
          "Nagbago ang modang Pilipino sa pamamagitan ng paghahalo ng digital trends, makakalikasan na pananamit, at mga lokal na disenyo. Habang mas dumadami ang gumagamit ng virtual fashion, pinagsasama na ng mga tao ang mga eco-friendly na damit mula sa katutubong habi at ang mga AR overlay o digital outfits para sa kanilang mga online avatars at social media.",
        caption:
          "Exhibit 2.2 — Integration of sustainable local fashion and interactive virtual garments.",
      },
      {
        id: "social-commerce-ar-tryons",
        title: "In-Video Social Commerce & AR Try-Ons",
        subtitle:
          "Direktang Pagbili sa Video, Virtual Fitting, at Cashless Checkout",
        date: "c. 2030",
        image: "/images/future8.jpg",
        alt: "A smartphone screen displaying a Filipino influencer video with interactive product tags, an AR virtual outfit preview, and a instant cashless checkout button",
        description:
          "Shopping becomes an integrated part of digital media as social commerce enables frictionless purchases directly within short-form videos and influencer posts. Local brands expand their online reach by implementing augmented reality (AR) virtual try-ons—allowing consumers to test fits digitally—and pairing them with seamless cashless checkouts for instant transactions.",
        descriptionTaglish:
          "Mas naging mabilis at direktang ang pagbili dahil pwede nang bumili nang diretso mula sa mga video at posts ng influencers. Mas malawak na ang naabot ng mga lokal na brand online sa tulong ng virtual try-ons para masubukan ang damit gamit ang AR, na kumokonekta agad sa mga cashless checkouts para sa mabilisang pagbabayad.",
        caption:
          "Exhibit 2.3 — Video-integrated social commerce with AR virtual try-on and instant cashless checkout.",
      },
      {
        id: "smart-textile-political-apparel",
        title: "Dynamic Smart Textiles & Mixed-Reality Political Fashion",
        subtitle:
          "Reusableng Smart Apparel, Digital Accessories, at AI Design Systems",
        date: "c. 2030",
        image: "/images/future9.jpg",
        alt: "A political supporter wearing a reusable smart-fabric t-shirt displaying dynamic e-ink political slogans, complemented by floating mixed-reality animated digital accessories visible through smart glasses",
        description:
          "Political campaign apparel transformed into a sustainable, tech-enabled canvas through washable, low-power display panels woven directly into smart textiles. Wearers can dynamically update slogans, colors, and candidate support with permission, eliminating single-use campaign shirts. Integrated with mixed-reality smart glasses, supporters display animated digital accessories in physical crowds, while centralized AI design systems synchronize physical textile displays and virtual AR overlays into a unified, customizable political identity.",
        descriptionTaglish:
          "Naging mas makakalikasan at makabago ang campaign clothing sa tulong ng washable at low-power display panels na nakahabi sa mga damit. Pwedeng palitan ng nagtataglay ang kulay at slogan ng shirt depende sa kampanya upang mabawasan ang basurang gawa ng single-use campaign shirts. Sa pamamagitan naman ng mixed-reality glasses, nakikita ang mga animated digital accessories sa paligid ng nagtataglay, habang pinag-uugnay ng AI ang physical at virtual styles sa iisang political identity.",
        caption:
          "Exhibit 2.4 — Washable smart-textile campaign apparel with integrated mixed-reality digital accessories.",
      },
      {
        id: "smart-heritage-textiles-ar-filipiniana",
        title: "Smart Heritage Textiles & AR Filipiniana",
        subtitle:
          "Tradisyunal na Habi, Sustainable Fibers, at Digital Wearables",
        date: "c. 2030",
        image: "/images/future10.jpg",
        alt: "A model wearing futuristic Filipiniana attire made from sustainable local fibers embedded with micro-threads, accented by floating AR augmented reality pattern overlays and virtual terno extensions",
        description:
          "Filipino fashion fuses ancestral roots with futuristic technology through smart heritage textiles, sustainable local fibers, and augmented reality (AR) Filipiniana wearables. Traditional indigenous weaving patterns are reimagined using eco-conscious natural fibers, while AR digital overlays allow wearers to project dynamic, interactive traditional motifs across both physical everyday wear and virtual environments.",
        descriptionTaglish:
          "Pinagsama ng modang Pilipino ang katutubong pamana at makabagong teknolohiya sa tulong ng smart heritage textiles, sustainable local fibers, at digital AR Filipiniana wearables. Ang mga tradisyunal na habi ay binubuhay gamit ang eco-friendly na materyales, habang ang mga AR overlay naman ay nagbibigay-daan upang maipakita ang mga dynamic na katutubong disenyo sa pang-araw-araw na suot at sa virtual world.",
        caption:
          "Exhibit 2.5 — Ancestral indigenous weaving patterns integrated with sustainable fibers and AR Filipiniana wearables.",
      },
      {
        id: "ph-sustainable-fashion-2030",
        title: "Sustainable Fashion & Circular Retailing",
        subtitle: "Ang Pagsikat ng Sustainable Fashion sa Pilipinas",
        date: "c. 2030",
        image: "/images/future11.jpg",
        alt: "Filipino shoppers browsing eco-friendly retail displays featuring upcycled clothing, secondhand ukay-ukay racks, and products made from local recycled fabrics",
        description:
          "By 2030, sustainable fashion becomes widespread across the Philippines as consumer habits shift toward eco-conscious choices. More Filipinos embrace secondhand shopping, recycled fabric garments, and locally made apparel. Concurrently, fashion brands adopt sustainable raw materials and circular manufacturing processes to significantly reduce textile waste and environmental impact.",
        descriptionTaglish:
          "Pinaigting ng taong 2030 ang pagsikat ng sustainable fashion sa Pilipinas. Mas maraming Pilipino ang bumibili ng secondhand o ukay-ukay, gumagamit ng damit na gawa sa recycled fabrics, at sumusuporta sa lokal na produkto. Ang mga fashion brand naman ay gumagamit na ng mas eco-friendly na materyales at makakalikasang paraan ng paggawa upang mabawasan ang basura.",
        caption:
          "Exhibit 2.6 — Widespread adoption of sustainable manufacturing, secondhand shopping, and eco-friendly local fashion in the Philippines by 2030.",
      },
      {
        id: "augmented-faith-wear-smart-iconography",
        title: "Augmented Faith Wear & Interactive Smart Iconography",
        subtitle:
          "AR Religious Apparel, Smart Crucifixes, at Digital Spirituality",
        date: "c. 2030",
        image: "/images/future12.jpg",
        alt: "A person wearing a modern streetwear hoodie featuring a minimalist embroidered cross that illuminates subtle interactive AR light patterns when viewed through smart glasses",
        description:
          "Faith-themed fashion evolved into an immersive, tech-integrated spiritual expression. Modern streetwear blends with responsive smart fabrics and augmented reality (AR) technology, allowing wearers to project interactive scripture verses, dynamic religious iconography, and digital prayer communities around their garments via spatial devices. Smart jewelry like connected crucifix pendants and interactive rosaries sync with spiritual apps for real-time communal devotions.",
        descriptionTaglish:
          "Umabot sa digital at immersive na antas ang faith-themed fashion sa pamamagitan ng smart fabrics at augmented reality. Pinagsama ang modern streetwear at interactive tech kung saan ang mga damit at accessories ay nagpapakita ng mga dynamic na religious iconography, scripture verses, at virtual prayer communities sa pamamagitan ng AR devices.",
        caption:
          "Exhibit 2.7 — Interactive augmented reality faith wear and smart spiritual accessories for modern digital devotion.",
      },
    ],
    timeline: [
      {
        year: "c. 2000–2005",
        text: "Homegrown mall brands like Bench and Penshoppe expand nationwide alongside shopping malls, while physical ukay-ukay stalls become budget shopping staples and Black Nazarene shirts anchor traditional devotional attire (Artifact 1 & 5).",
      },
      {
        year: "c. 2006–2010",
        text: "Jejemon trucker hats, layered graphic tees, and Emo side-swept bangs emerge as dominant youth subcultures, while election candidates refine their personal image through televised political coverage (Artifact 2 & 3).",
      },
      {
        year: "c. 2011–2016",
        text: "Social media networks begin reshaping fashion culture, and early e-commerce platforms take root in the Philippines while thrifting transitions from an economic necessity to an emerging youth aesthetic (Artifact 4).",
      },
      {
        year: "c. 2017–2021",
        text: "Global fast-fashion e-commerce apps (e.g., Shein, Shopee) and influencer marketing boom, while digital campaign merchandise and visual candidate branding dominate multi-platform political strategies (Artifact 2 & 3).",
      },
      {
        year: "c. 2022–2026",
        text: "TikTok-driven curated aesthetics, minimalist thrifted streetwear, upcycling trends, and online faith-themed streetwear merge personal style with digital self-expression and eco-conscious thrifting (Artifact 4, 5 & 6).",
      },
      {
        year: "c. 2026–Future",
        text: "Fashion evolves into immersive digital territory through AR virtual try-ons, smart textiles with e-ink political slogans, sustainable local heritage fibers, and augmented reality faith wear across all artifacts.",
      },
    ],
    significance:
      "Fashion and personal style in the Philippines have consistently reflected identity, socioeconomic accessibility, subcultural affiliation, and personal devotion. In the 2000s, local mall brands, physical ukay-ukay stalls, Jejemon/Emo youth aesthetics, candidate image branding, and devotional shirts defined everyday attire. Today, the rise of e-commerce apps, digital influencers, social media candidate merchandise, upcycling, and modern faith streetwear demonstrates how personal style has evolved into a curated, algorithmically driven form of self-expression and sustainable lifestyle choices.",
    significanceTaglish:
      "Ang porma at estilo ng damit ay naging salamin ng pagkatao, accessibility, subculture, at pananampalataya ng mga Pilipino. Noong 2000s, ang mga local mall brands, ukay-ukay, Jejemon at Emo style, candidate image sa telebisyon, at mga Nazareno shirt ang humubog sa pananamit. Ngayong digital era na, ang mga online shopping apps, TikTok aesthetic trends, upcycled fits, at online faith merchandise ay nagpapakita kung paano naging mas curated at sustainable ang porma ng kabataan ngayon.",
    comparisons: [
      {
        aspect: "Retail & Shopping Environment (Artifact 1)",
        past: "Physical shopping malls with homegrown brands (Bench, Penshoppe) alongside neighborhood ukay-ukay stalls.",
        present:
          "Hyper-competitive global e-commerce apps, algorithmically targeted shop feeds, and digital thrift resales.",
        future:
          "Immersive social commerce platforms with instant AR virtual try-ons and decentralized digital marketplaces.",
      },
      {
        aspect: "Youth Subcultures & Aesthetics (Artifact 2)",
        past: "Jejemon trucker hats, layered graphic tees, fitted caps, and Emo side-swept bangs born from early text/web trends.",
        present:
          "Curated digital aesthetics, minimalist streetwear, neutral tones, and TikTok-driven vintage Y2K revivals.",
        future:
          "Virtual-only avatar streetwear, AI-co-created digital apparel, and dynamic mixed-reality personal style layers.",
      },
      {
        aspect: "Political Image & Campaign Styling (Artifact 3)",
        past: "Televised candidate news appearances with signature shirt colors and groomed televised identities.",
        present:
          "Multi-platform visual branding, official digital campaign merchandise, and curated social media outfit feeds.",
        future:
          "Washable smart-textile e-ink political shirts and interactive mixed-reality holographic campaign supporters.",
      },
      {
        aspect: "Thrifting & Sustainability Practice (Artifact 4)",
        past: "Traditional ukay-ukay shopping driven primarily by budget considerations and practical clothing reuse.",
        present:
          "Intentional eco-friendly thrifting, content-driven thrift hauls, garment upcycling, and digital resale apps.",
        future:
          "Circular bio-textile economies, zero-waste smart-fiber garments, and fully traceable digital clothing passports.",
      },
      {
        aspect: "Sustainable Local Heritage (Artifact 5)",
        past: "Standard mass-market garment manufacturing focused heavily on global exports and basic domestic apparel.",
        present:
          "Resurgence of local upcycling trends, eco-conscious streetwear brands, and online sustainable small shops.",
        future:
          "Smart heritage textiles integrating ancestral indigenous weaving patterns with advanced eco-friendly performance fibers.",
      },
      {
        aspect: "Devotional Attire & Sacred Symbols (Artifact 6)",
        past: "Maroon Black Nazarene shirts, towels, and rosary beads worn strictly for physical religious processions and church.",
        present:
          "Faith-themed graphic tees and religious accessories integrated into modern streetwear and sold via online shops.",
        future:
          "Augmented reality (AR) faith wear and smart spiritual accessories projecting interactive scripture and devotions.",
      },
    ],
    sources: [
      {
        citation:
          "Philippine Retail Association & Retail Industry Reports (2000–2010).",
        note: "Historical documentation on the expansion of domestic fashion retailers (Bench, Penshoppe) within nationwide shopping malls.",
      },
      {
        citation:
          "Sociological Studies on Philippine Youth Subcultures (Jejemon & Emo Eras).",
        note: "Academic and journalistic analysis of 2000s youth street style, cellular text culture, and early internet fashion trends.",
      },
      {
        citation:
          "E-Commerce & Digital Fashion Market Reports in the Philippines (2016–2026+).",
        note: "Market data detailing the growth of online retail apps, influencer aesthetics, social media political merchandise, sustainable thrifting, and future smart wearables.",
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
    prevArtifacts: [
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
        image: "/images/load-card.jpg",
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
        image: "/images/sms-campaign.png",
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
        image: "/images/friendster.jpg",
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
        image: "/images/newspaper.jpg",
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
        image: "/images/sms-prayer.jpg",
        alt: "A keypad feature phone displaying a forwarded SMS prayer chain text beside a radio playing a religious broadcast",
        description:
          "Spiritual connection relied heavily on SMS text chains and traditional broadcast media. Believers routinely forwarded Bible verses and prayer requests through keypad phones, while broadcast radio and television served as the main channels for Sunday sermons, novenas, and official Church announcements.",
        descriptionTaglish:
          "Naging pangunahing daan ng pananampalataya ang mga SMS chain text at tradisyunal na media. Karaniwang ipinapasa sa cell phone ang mga Bible verse at dasal, habang ang radyo at telebisyon naman ang nakatutok sa pag-ere ng misa at anunsyo ng Simbahan.",
        caption:
          "Exhibit 1.33 — Forwarded SMS prayer chain texts on keypad phones alongside broadcast radio and television sermons.",
      },
    ],
    currArtifacts: [
      {
        id: "smartphones-and-instant-messaging",
        title: "Smartphones & Hyper-Connected Social Apps",
        subtitle: "Era ng Smartphone at Social Messaging",
        date: "c. 2016–2026",
        image: "/images/smartphones.jpg",
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
        date: "c. 2016–2026",
        image: "/images/mobile-data.jpg",
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
        date: "c. 2016–2026",
        image: "/images/viral-socialmedia.webp",
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
        date: "c. 2016–2026",
        image: "/images/messenger.jpg",
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
        date: "c. 2016–2026",
        image: "/images/modern-environment.jpg",
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
        date: "c. 2016–2026",
        image: "/images/digital-faith.avif",
        alt: "A modern smartphone screen showing a livestreamed mass on Facebook and short-form reflection videos on TikTok and Instagram",
        description:
          "Parishes and religious communities fully embraced digital connectivity. Mass livestreams and online prayer groups operate via Facebook, YouTube, and Zoom, while clergy and believers actively share daily reflections, faith-themed content, and spiritual guidance on platforms like TikTok and Instagram.",
        descriptionTaglish:
          "Mabilis na lumipat sa internet ang mga parokya at pamayanang relihiyoso. Gumagamit na ngayon ng Facebook, YouTube, at Zoom para sa online mass at prayer groups, habang ang mga pari at mamamayan ay nagbabahagi ng mga pagninilay sa TikTok at Instagram.",
        caption:
          "Exhibit 1.34 — Digital parish livestreams on Facebook and Zoom alongside short-form faith content on TikTok and Instagram.",
      },
    ],
    futureArtifacts: [
      {
        id: "immersive-virtual-spaces-ai-filipino-traditions",
        title: "Immersive Virtual Spaces & AI-Powered Social Tradition",
        subtitle:
          "Virtual Spaces, Wearable Tech, at Pagpapanatili ng Kultural na Kaugalian",
        date: "c. 2030",
        image: "/images/future13.jpg",
        alt: "Filipino families and friends interacting through immersive virtual reality spaces and wearable tech, bridging distances while celebrating traditional cultural gatherings",
        description:
          "Advanced artificial intelligence communication tools, immersive virtual reality spaces, and wearable technology redefine interpersonal connection while carefully preserving core Filipino social traditions like 'bayanihan' and family gatherings. Distance dissolves as spatial computing platforms enable multi-generational households separated by migration to share virtual fiestas, ancestral rituals, and real-time communal bonding with seamless emotional presence.",
        descriptionTaglish:
          "Pinagsama ang advanced AI communication tools, immersive virtual spaces, at wearable technology upang lumikha ng mga bagong paraan ng pakikipag-ugnayan habang pinapanatili ang mga tradisyunal na kaugaliang Pilipino tulad ng pagtitipon at bayanihan. Sa pamamagitan ng spatial computing, nagkakaroon ng paraan para sa mga pamilyang magkakalayo dahil sa migrasyon na magsama-sama sa mga virtual fiestas at selebrasyon nang may buong emosyonal na presensya.",
        caption:
          "Exhibit 2.8 — Immersive virtual spaces and wearable technology preserving Filipino social bonds and cultural traditions across distances.",
      },
      {
        id: "digital-cashless-economy-ai-jobs",
        title: "Cashless Economy & AI-Powered Micro-Employment",
        subtitle:
          "Digital Payments, Online Jobs, at Access sa Abot-Abot na Internet",
        date: "c. 2030",
        image: "/images/future14.jpg",
        alt: "Filipino small business vendors and independent remote workers using mobile digital payment scanners and advanced AI tools on laptops connected via high-speed community internet",
        description:
          "The Philippine economic landscape transitions into a largely cashless ecosystem where digital transactions power both micro-businesses and everyday retail sales. Concurrently, advanced artificial intelligence tools generate new opportunities for online employment and creative digital labor, though widespread success remains heavily dependent on expanding affordable, high-speed internet access across regional communities.",
        descriptionTaglish:
          "Ganap nang nakabase sa digital payments ang karamihan sa mga transaksiyon at benta ng mga maliit na negosyo. Lumilikha rin ang mga makabagong AI tools ng mga bagong online na trabaho para sa mga Pilipino, ngunit nakasalalay pa rin ito sa pagkakaroon ng abot-kayang internet para sa lahat.",
        caption:
          "Exhibit 2.9 — Cashless micro-business transactions and AI-driven digital employment enabled by accessible internet infrastructure.",
      },
      {
        id: "audited-civic-ai-public-information",
        title: "Audited Personal Civic AI & Integrated Public Information",
        subtitle:
          "Civic AI, Integrated Budgets, at Transparenteng Public Information",
        date: "c. 2030",
        image: "/images/future15.jpg",
        alt: "A Filipino citizen viewing an interactive holographic simulation on a device interface showing tracked campaign promises, legislative voting records, and audited budget allocations",
        description:
          "An independently audited personal civic AI system empowers citizens to rigorously examine competing political proposals through an integrated public-information network. By connecting political campaign promises directly to official budgets, historical voting records, and real-time implementation updates, the platform uses interactive simulations to project possible local community impacts. Authenticated records carry traceable digital credentials, ensuring transparency while clearly marking uncertain claims and gaps in verifiable evidence.",
        descriptionTaglish:
          "Isang independently audited personal civic AI ang tumutulong sa mga mamamayan na suriin ang mga panukalang pulitikal sa pamamagitan ng integrated public-information system. Iniuugnay nito ang mga campaign promises sa mga opisyal na badyet, voting records, at implementation updates, at gumagamit ng interactive simulations upang ipaliwanag ang epekto sa lokal na komunidad habang malinaw na minamarkahan ang mga kulang na ebidensya.",
        caption:
          "Exhibit 2.10 — Independently audited civic AI tracking campaign commitments, budgets, and local community impacts.",
      },
      {
        id: "ai-dialect-translators-holographic-museums",
        title:
          "Real-Time AI Dialect Translators & Holographic Heritage Museums",
        subtitle:
          "AI Dialect Translation, Holographic Museums, at Cultural Preservation",
        date: "c. 2030",
        image: "/images/future16.jpg",
        alt: "Filipino visitors experiencing an interactive holographic heritage museum while using real-time AI spatial audio translation earpieces to connect across different regional dialects",
        description:
          "Indigenous Philippine traditions and regional heritage are safeguarded and celebrated through cutting-edge technological innovations. Real-time AI dialect translators bridge linguistic gaps across diverse ethnolinguistic groups, while holographic heritage museums bring ancestral history, oral epics, and local folklore to life. Immersive language applications empower younger generations to learn indigenous mother tongues, fostering seamless cross-regional cultural exchange and deep-rooted preservation.",
        descriptionTaglish:
          "Pinoprotektahan at ipinagdiriwang ang mga katutubong tradisyon at rehiyunal na pamana ng Pilipinas sa tulong ng mga makabagong teknolohiya. Ang real-time AI dialect translators ay nag-uugnay sa iba't ibang wikang katutubo, habang ang mga holographic heritage museums naman ay nagpapakita ng kasaysayan at mga epiko sa mas buhay na paraan. Tinutulungan din ng mga immersive language apps ang mga kabataan na matutunan ang mga katutubong wika para sa mas malalim na cultural exchange.",
        caption:
          "Exhibit 2.11 — Real-time AI dialect translators and holographic heritage museums preserving indigenous Philippine traditions.",
      },
      {
        id: "ai-pollution-monitoring-flood-forecasting",
        title: "AI Pollution Monitoring, Flood Forecasting & Waste Management",
        subtitle:
          "AI Pollution Monitoring, Flood Forecasting, at E-Waste Reduction",
        date: "c. 2030",
        image: "/images/future17.jpg",
        alt: "Filipino communities and local officials using mobile apps connected to smart environmental sensors to monitor real-time air/water pollution metrics and early flood forecasting data",
        description:
          "Artificial intelligence, smart IoT sensors, and mobile applications empower Filipinos to actively monitor environmental pollution, forecast floods with high precision, and optimize waste management across urban and rural districts. Social media continues to serve as a powerful catalyst for grassroots environmental action and community mobilization, while improved recycling programs and specialized collection initiatives help mitigate the growing crisis of electronic waste (e-waste).",
        descriptionTaglish:
          "Tinutulungan ng artificial intelligence, smart sensors, at mobile apps ang mga Pilipino na subaybayan ang polusyon, mag-forecast ng baha, at pamahalaan ang basura. Patuloy na naging mabisang kasangkapan ang social media para sa environmental action, habang ang mga pinahusay na recycling programs ay nakatutulong din upang mabawasan ang e-waste.",
        caption:
          "Exhibit 2.12 — Smart sensors, AI flood forecasting, and digital waste management systems driven by community-led social media initiatives.",
      },
      {
        id: "spatial-parishes-ai-spiritual-guidance",
        title: "Spatial Parishes & AI-Powered Spiritual Guidance",
        subtitle:
          "Immersive Virtual Parishes, AI Confessors, at Spatial Devotions",
        date: "c. 2030",
        image: "/images/future18.jpg",
        alt: "A person wearing spatial computing mixed-reality glasses participating in a holographic church service with virtual parishioners and interactive spiritual avatars",
        description:
          "Digital parishes evolve into fully immersive spatial environments where believers worldwide gather in holographic cathedrals for synchronized religious services, virtual novenas, and communal fellowship. Clergy leverage advanced AI assistants to coordinate multi-lingual parishioner outreach, manage community welfare networks, and provide personalized spiritual counseling and scripture reflections across augmented reality platforms.",
        descriptionTaglish:
          "Ang mga digital parish ay naging mga immersive spatial environment kung saan ang mga mananampalataya ay nagtitipon sa mga holographic cathedral para sa mga sabay-sabay na misa, novena, at pagtitipon. Gumagamit na ang mga pari ng AI assistants para sa mas maayos na outreach, pag-abot sa mga komunidad, at pagbibigay ng gabay espirituwal sa pamamagitan ng augmented reality platforms.",
        caption:
          "Exhibit 2.13 — Holographic spatial parishes and AI-assisted spiritual guidance platforms connecting global congregations.",
      },
    ],
    timeline: [
      {
        year: "c. 2000–2005",
        text: 'Prepaid scratch load cards and unli-text promos transform keypad phones into household necessities, establishing the Philippines as the global "SMS Capital," alongside forwarded SMS prayer chains (Artifact 1 & 6).',
      },
      {
        year: "c. 2006–2010",
        text: "Neighborhood internet cafés flourish as portals for early social networks like Friendster and PC gaming, while SMS serves as a vital civic tool for political news and TV/radio broadcasts (Artifact 2 & 3).",
      },
      {
        year: "c. 2011–2016",
        text: "The telco landscape shifts toward 3G/4G mobile data and home broadband. Smartphones begin replacing keypad feature phones, transitioning personal messaging toward Facebook Messenger and instant chat apps (Artifact 1 & 4).",
      },
      {
        year: "c. 2017–2021",
        text: "High-speed fiber connectivity and widespread mobile data make internet cafés rare. Political campaigning moves to live video streams, while churches adopt Facebook and Zoom livestreams for digital masses (Artifact 2, 3 & 6).",
      },
      {
        year: "c. 2022–2026",
        text: "Hyper-connected smartphone social networks (TikTok, Facebook, YouTube) dominate daily interaction, driving viral environmental campaigns, digital parish communities, and an increased need for online fact-checking (Artifact 4, 5 & 6).",
      },
      {
        year: "c. 2026–Future",
        text: "Communication technology expands into immersive virtual spaces, cashless micro-economies, audited personal civic AI, real-time dialect translation, smart IoT environmental monitoring, and holographic spatial parishes across all artifacts.",
      },
    ],
    significance:
      "Technology and communication infrastructures have redefined how Filipinos organize, socialize, inform, and worship. In the 2000s, shared internet cafés, prepaid load cards, keypad phones, SMS prayer chains, and broadcast media formed a distinct culture of cost-effective, shared connection. Today, high-speed fiber broadband, smartphones, social media livestreams, interactive environmental campaigns, and digital parishes provide instant, hyper-connected communication—turning digital literacy and fact-checking into fundamental tools for civic and social life.",
    significanceTaglish:
      "Malaki ang naging papel ng teknolohiya sa pagbago ng paraan ng pakikipag-usap, pulitika, kalikasan, at pananampalataya ng mga Pilipino. Noong 2000s, ang mga keypad phone, unli-text load cards, internet café, at SMS chain messages ang naging tulay sa kapwa. Ngayong era ng smartphone at fiber data, ang mga online mass, viral climate campaigns, at social media livestreams na ang nagpapatakbo ng ating komunikasyon, kaya naging mahalaga rin ang pag-fact-check at maingat na paggamit ng internet.",
    comparisons: [
      {
        aspect: "Primary Mobile Device & Messaging (Artifact 1)",
        past: "Keypad feature phones relying on prepaid scratch load cards, SMS promos, GMs, and textmates.",
        present: "Smartphones powered by mobile data and fiber connectivity using instant messaging and video chat apps.",
        future: "Immersive spatial computing wearables, direct neural-interface links, and multi-generational virtual reality spaces.",
      },
      {
        aspect: "Internet Access & Social Networking (Artifact 2)",
        past: "Shared desktop computers in neighborhood internet cafés accessing early platforms like Friendster.",
        present: "Personal mobile devices and home fiber internet accessing real-time feeds on Facebook, TikTok, and YouTube.",
        future: "Ubiquitous high-speed satellite connectivity, decentralized Web3 networks, and AI-curated metaverse feeds.",
      },
      {
        aspect: "Political Communication & Civic Mobilization (Artifact 3)",
        past: "Broadcast TV/radio news paired with SMS text chains for candidate updates and rapid civic organizing.",
        present: "Social media livestreams, interactive candidate feeds, viral political videos, and digital fact-checking initiatives.",
        future: "Independently audited personal civic AI platforms, holographic town halls, and real-time blockchain policy verification.",
      },
      {
        aspect: "Environmental Campaigns & Information (Artifact 4)",
        past: "Traditional broadcast TV announcements, radio news segments, print newspapers, and school drives.",
        present: "Interactive social media infographics, digital video advocacy, and online environmental petitions.",
        future: "Smart IoT sensor networks, automated AI flood forecasting, and real-time community-driven pollution tracking apps.",
      },
      {
        aspect: "Faith & Spiritual Connection (Artifact 6)",
        past: "Forwarded SMS prayer chains on keypad phones combined with broadcast TV and radio sermons.",
        present: "Livestreamed masses via Facebook/Zoom, online prayer groups, and short-form digital faith reflections.",
        future: "Holographic spatial cathedrals, AI spiritual guidance assistants, and multi-lingual mixed-reality religious services.",
      },
      {
        aspect: "Digital Economy & Infrastructure (Artifact 5)",
        past: "Cash-based retail transactions and basic dial-up or early broadband shared through public internet hubs.",
        present: "Mobile digital wallets, QR code cashless payments, and widespread personal high-speed home fiber.",
        future: "Fully integrated cashless micro-economies, decentralized digital labor marketplaces, and AI-optimized community networks.",
      },
    ],
    sources: [
      {
        citation:
          'Telecommunications & Cellular SMS Market Reports ("SMS Capital of the World", c. 2000–2010).',
        note: "Historical subscriber metrics and research detailing the rise of prepaid load, unli-text promos, and mobile SMS adoption in the Philippines.",
      },
      {
        citation:
          "Philippine Internet Café & Early Social Network Studies (Friendster to Broadband Migration).",
        note: "Academic documentation on neighborhood internet cafe culture, early social networking, and the shift toward nationwide fiber and mobile data connectivity.",
      },
      {
        citation:
          "Digital Information, Social Media, & Civic Literacy Reports (2016–2026+).",
        note: "Studies on smartphone penetration, social media political livestreams, online fact-checking mechanisms, digital parish practices, and future spatial communication systems.",
      },
    ],
  },
];

export function getGallery(slug: string) {
  return galleries.find((g) => g.slug === slug);
}
