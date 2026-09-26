import desert from "@/assets/land-desert.jpg";
import coast from "@/assets/land-coast.jpg";
import forest from "@/assets/land-forest.jpg";
import architecture from "@/assets/land-architecture.jpg";
import himalaya from "@/assets/hero-himalaya.jpg";
import dance from "@/assets/culture-dance.jpg";
import craft from "@/assets/culture-craft.jpg";
import festival from "@/assets/culture-festival.jpg";

/**
 * Editorial state records for the dedicated state pages (`/states/:slug`).
 *
 * This is an *extension* of the lightweight `STATES` map in `@/data/atlas`
 * (which stays untouched for the homepage). Content is curated locally —
 * researched from Wikipedia and reference sources, then rewritten to stay
 * short, factual and editorial. Nothing is fetched at runtime.
 *
 * To add a state (or later, a union territory): append a record. The slug is
 * the URL segment, `id` matches the SVG shape ids in `india-map.ts`, and the
 * `image` field is optional — existing project assets are reused as stand-ins
 * until dedicated photography exists.
 */

export type StateDetail = {
  id: string;
  slug: string;
  name: string;
  region: string;
  capital: string;
  introduction: string;
  knownFor: string[];
  geography: string;
  history: string;
  culture: string;
  languages: string[];
  cuisine: string;
  festivals: string[];
  crafts: string[];
  heritage: string[];
  placesToKnow: string[];
  interestingFacts: string[];
  image?: string;
};

export const STATE_DETAILS: StateDetail[] = [
  {
    id: "AP",
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    region: "South-East India",
    capital: "Amaravati",
    introduction:
      "A long Bay of Bengal shoreline, the Godavari and Krishna deltas, and the dry uplands of Rayalaseema — a state whose Telugu language, temple towns and cinema carry far beyond its borders.",
    knownFor: ["Temples", "Telugu Language", "Coastline", "River Deltas"],
    geography:
      "The Eastern Ghats fold down into fertile river deltas that feed much of southern India's rice, before the land rises again into the granite uplands of Rayalaseema. The coast runs close to a thousand kilometres, with lagoons, salt flats and ports along the way.",
    history:
      "The Satavahanas ruled from these plains nearly two millennia ago, followed by the Ikshvakus, the Eastern Chalukyas of Vengi and the Vijayanagara kings. The Qutb Shahis, the Nawabs of Arcot and then the British layered over that inheritance. Coastal Andhra and Rayalaseema stayed with Madras Presidency until the Telugu regions were reorganised in the 1950s, and separated from Telangana again in 2014.",
    culture:
      "Kuchipudi, a classical dance that began in a single village, still performs its full dramatic repertoire. Annamacharya's keertanas, the harikatha storytelling tradition and a film industry that dubs into dozens of languages give the state a public culture heard everywhere in India.",
    languages: ["Telugu (official)", "Urdu"],
    cuisine:
      "Rice is the anchor, and the cooking leans generous with chilli, tamarind and sesame. Gongura leaves, pickles such as avakaya, pesarattu, and the layered biryanis of the old Muslim kitchens along the coast are the signature dishes.",
    festivals: ["Sankranti", "Ugadi", "Brahmotsavam at Tirumala", "Vinayaka Chavithi"],
    crafts: [
      "Kalamkari — Srikalahasti and Machilipatnam",
      "Kondapalli wooden toys",
      "Etikoppaka lacquer toys",
      "Mangalagiri handloom",
      "Tholu bommalata leather puppets",
    ],
    heritage: [
      "Tirumala Venkateswara Temple",
      "Lepakshi's hanging pillar and Nandi",
      "Amaravati stupa site",
      "Chandragiri Fort",
      "Simhachalam Temple",
    ],
    placesToKnow: ["Visakhapatnam", "Vijayawada", "Tirupati", "Araku Valley", "Gandikota"],
    interestingFacts: [
      "India's second-longest state coastline — roughly 974 km of Bay of Bengal shore.",
      "Tirumala draws one of the largest flows of pilgrims of any shrine in the world.",
      "Kuchipudi takes its name from the village where the dance form was shaped.",
    ],
    image: coast,
  },
  {
    id: "AR",
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    region: "North-East India",
    capital: "Itanagar",
    introduction:
      "The eastern edge of India, where the Himalaya turns toward the Brahmaputra — a state of snow passes, monastery towns and tribes whose languages come from a dozen different families.",
    knownFor: ["Eastern Himalaya", "Monasteries", "Tribal Culture", "Orchids"],
    geography:
      "Ridges rise from the Brahmaputra's southern bank to snow peaks above seven thousand metres, holding some of India's densest and least disturbed forest. The state is cut by deep river gorges — the Subansiri, the Dibang, the Lohit — and by passes like Sela that close under winter snow.",
    history:
      "The Monpas of Tawang, the Adi and the Apatani each governed their own territories through village councils and customary law. The Tawang Monastery was founded in the late seventeenth century, and the British administered the region as the North-East Frontier Agency after 1914. Long part of Assam, the territory became a state in 1987.",
    culture:
      "Every major tribe keeps its own dress, dialect and festival calendar, and community life still turns on the village institution. Buddhism shapes the west while older animist traditions hold elsewhere, and weaving, oral epic and group dances carry an identity that written records never held.",
    languages: ["English (official)", "Monpa", "Adi", "Mishmi", "Apatani", "Tangsa"],
    cuisine:
      "Food is light on spice and heavy on the staple: sticky rice, boiled greens, river fish and meats smoked over the kitchen fire. Momos and thukpa arrived with Tibetan influence, and apong — rice or millet beer — marks every celebration.",
    festivals: ["Losar", "Tawang Festival", "Mopin", "Solung", "Nyokum Yullo"],
    crafts: [
      "Handloom textiles with tribal motifs",
      "Bamboo and cane work",
      "Wood carving",
      "Thangka painting",
      "Bead and bone jewellery",
    ],
    heritage: [
      "Tawang Monastery",
      "Ita Fort",
      "Ziro Valley paddy fields",
      "Namdapha National Park",
      "Sela Pass",
    ],
    placesToKnow: ["Tawang", "Ziro", "Bomdila", "Itanagar", "Pasighat", "Mechuka"],
    interestingFacts: [
      "India's easternmost state — the sun reaches Arunachal before anywhere else in the country.",
      "Namdapha is one of the few places on earth where all four big cat species are recorded.",
      "Tawang Monastery, founded in the 1600s, is the largest Buddhist monastery in India.",
    ],
    image: himalaya,
  },
  {
    id: "AS",
    slug: "assam",
    name: "Assam",
    region: "North-East India",
    capital: "Dispur",
    introduction:
      "One river — the Brahmaputra — writes the shape of the state: a green valley of tea gardens, grassland reserves and river islands, with silk looms and monastery bells along its banks.",
    knownFor: ["Brahmaputra", "Tea", "Muga Silk", "One-Horned Rhino"],
    geography:
      "The Brahmaputra runs the length of Assam, spreading into braided channels and seasonal chars that flood and rebuild every monsoon. Hills ring the valley on three sides — the Karbi plateau, the Barail range and the Meghalaya fringe — while Kaziranga's grasslands sit almost at river level.",
    history:
      "The Ahom dynasty held the valley for some six hundred years and turned back Mughal expeditions, most famously at Saraighat in 1671. Tea was commercialised in the nineteenth century, the British annexed the region after the First Anglo-Burmese War, and the plains became the eastern wing of Bengal Presidency before a separate province in 1874.",
    culture:
      "The Vaishnavite sattras of Sankaradeva — monastery schools with their own music, dance and masked theatre — still shape village life across the valley. Bihu dancing marks the agricultural year, while Sattriya, one of India's classical dances, survives inside the monasteries that created it.",
    languages: ["Assamese (official)", "Bodo (official)", "Bengali (official)", "Bengali"],
    cuisine:
      "Assamese cooking is gently spiced and sour-forward: fish steamed in banana leaf, khar made from banana ash, duck with taro, and an endless rotation of rice patties and pickles. Tea is drunk strong, and betel nut with paan closes the meal.",
    festivals: ["Rongali Bihu", "Kongali Bihu", "Magh Bihu", "Ambubachi Mela", "Kati Bihu"],
    crafts: [
      "Muga silk — golden and unique to Assam",
      "Pat and eri silk weaving",
      "Bamboo and cane work",
      "Bell metal utensils",
      "Jaapi conical hats",
    ],
    heritage: [
      "Kamakhya Temple, Guwahati",
      "Kaziranga National Park",
      "Majuli's monasteries",
      "Sibsagar's Rang Ghar and Talatal Ghar",
      "Manas National Park",
    ],
    placesToKnow: ["Kaziranga", "Majuli", "Sibsagar", "Guwahati", "Dibrugarh", "Haflong"],
    interestingFacts: [
      "Kaziranga holds the world's largest population of the greater one-horned rhinoceros.",
      "Muga silk — prized for its natural gold colour — is reared only in Assam.",
      "Majuli, the Brahmaputra's river island, is counted among the world's largest river islands.",
    ],
    image: forest,
  },
  {
    id: "BR",
    slug: "bihar",
    name: "Bihar",
    region: "Eastern India",
    capital: "Patna",
    introduction:
      "The Gangetic plain at its widest and most historic — the seat of Magadha, the ground of the Buddha's awakening, and a state whose festivals still stop its rivers and roads.",
    knownFor: ["Buddhist Heritage", "Nalanda", "Chhath", "Mithila Art"],
    geography:
      "Bihar is almost entirely alluvial plain, formed by the Ganges and its north-bank tributaries, with the Rajgir hills and the Kaimur range interrupting the flatness in the south. The north floods every monsoon; the south dries into the red soil of Magadh and Bhojpur.",
    history:
      "From this plain the Mauryas and the Guptas governed much of India, and Pataliputra — modern Patna — was among the largest cities of the ancient world. Nalanda and Vikramashila drew scholars from across Asia. The region passed through Delhi sultanate, Mughal and Company hands, was carved out of Bengal in 1912, and saw one of the largest migrations of the Partition in 1947.",
    culture:
      "Bihar's grammar is its folk forms — Jat-Jatin and Jhijhiya sung through the night, Mithila's bridal-wall painting, the Bhojpuri film belt, and the Sufi shrines of Maner and Bihar Sharif where several traditions keep shared courtyards.",
    languages: ["Hindi (official)", "Urdu (official)", "Maithili", "Magahi", "Bhojpuri"],
    cuisine:
      "Litti chokha is the emblem — dough balls of sattu roasted over coal, served with mashed aubergine and tomato. Add dal-puri, thekua made at Chhath, the fish curries of the north, and a sweet tradition that runs from khaja to peda.",
    festivals: [
      "Chhath Puja",
      "Sama-Chakeva",
      "Pitripaksha at Gaya",
      "Saraswati Puja",
      "Makar Sankranti",
    ],
    crafts: [
      "Madhubani painting",
      "Sikki grass jewellery and toys",
      "Bhagalpuri tussar silk",
      "Wood and stone carving",
      "Manjusha art",
    ],
    heritage: [
      "Mahabodhi Temple, Bodh Gaya",
      "Nalanda University ruins",
      "Rajgir and the Vishwa Shanti Stupa",
      "Vaishali's Ashokan pillar",
      "Patna Sahib",
    ],
    placesToKnow: ["Bodh Gaya", "Nalanda", "Rajgir", "Vaishali", "Patna", "Sasaram"],
    interestingFacts: [
      "Nalanda, near Rajgir, was among the world's earliest residential universities.",
      "The Mahabodhi Temple at Bodh Gaya is a UNESCO World Heritage Site.",
      "Chhath — a thanks-giving to the Sun — is Bihar's most widely observed festival.",
    ],
    image: architecture,
  },
  {
    id: "CT",
    slug: "chhattisgarh",
    name: "Chhattisgarh",
    region: "Central India",
    capital: "Raipur",
    introduction:
      "A broad northern plain, deep sal forest and the Bastar plateau — a young state formed in 2000, with one of the country's longest festivals and a metalwork tradition far older than its borders.",
    knownFor: ["Bastar", "Waterfalls", "Bell Metal", "Tribal Art"],
    geography:
      "The Mahanadi and its tributaries water the northern plains, while the south rises into the Maikal hills and the Bastar plateau — a tableland of sal forest and river gorges. The Indravati and the Hasdeo hold some of central India's densest canopy, and Chitrakote falls mark where the Indravati leaves the plateau.",
    history:
      "This was Dakshin Kosala, ruled in turn by the Nala, Panduvanshi and Kalachuri kings whose capitals stood at Sirpur and Ratanpur. The Bastar kingdom kept its own dynasty through Mughal and Maratha centuries, folding into British Bengal only in 1854. A separate state of Chhattisgarh was carved out of Madhya Pradesh in 2000.",
    culture:
      "Pandwani — the sung telling of the Mahabharata, with one narrator and a crowd answering — is the state's great folk form, carried nationally by Teejan Bai. Raut Nacha, danced by farmers at Diwali, and the weekly haat markets of Bastar keep village culture public and seasonal.",
    languages: ["Chhattisgarhi", "Hindi (official)", "Gondi", "Halbi", "Kurukh"],
    cuisine:
      "Home cooking leans on rice, pulses and foraged greens: dubkana chutney, fara and muthia steamed in leaf, and the red ant chutney known as chapra that Bastar is famous for. Mahua flowers are distilled into the local spirit, and bora rice is the everyday staple.",
    festivals: ["Bastar Dussehra", "Hareli", "Pola", "Teeja", "Madai"],
    crafts: [
      "Dhokra bell-metal casting of Bastar",
      "Kosa silk from Champa",
      "Wood carving and wrought iron",
      "Terracotta modelling",
      "Bamboo and lac work",
    ],
    heritage: [
      "Sirpur's Buddha and Vishnu temples",
      "Bhoramdeo Temple",
      "Chitrakote Falls",
      "Danteshwari Temple, Dantewada",
      "Kanger Valley National Park",
    ],
    placesToKnow: ["Chitrakote Falls", "Bastar", "Sirpur", "Rajim", "Mainpat", "Barnawapara"],
    interestingFacts: [
      "Bastar Dussehra runs for around 75 days — one of the longest festivals in the country.",
      "The Dhokra lost-wax casting of Bastar has been practised without a break since antiquity.",
      "Chitrakote Falls, on the Indravati, is often called India's own Niagara.",
    ],
    image: forest,
  },
  {
    id: "GA",
    slug: "goa",
    name: "Goa",
    region: "Western Coast",
    capital: "Panaji",
    introduction:
      "India's smallest state, and its most layered — four and a half centuries of Portuguese rule, a Konkani kitchen, laterite churches and a coastline that keeps its own calendar.",
    knownFor: ["Beaches", "Portuguese Heritage", "Seafood", "Carnival"],
    geography:
      "A narrow coastal strip between the Arabian Sea and the Western Ghats, cut by the Mandovi and Zuari estuaries. The north is sand and shacks, the south rock and river mouth, and behind both rises a laterite plateau of coconut groves, spice farms and forested ghat country.",
    history:
      "Afonso de Albuquerque took Goa in 1510 and made it the capital of the Estado da India, turning Old Goa into one of Asia's grandest colonial cities. Portuguese rule survived to 1961, when India integrated the territory — ending more than four and a half centuries of European administration on the mainland.",
    culture:
      "The Latin Quarter of Fontainhas, Mando and Dekhni songs, the three-day Carnival and the feast of St. Francis Xavier sit alongside Ganesh Chaturthi, Shigmo and temple villages. Architecture is the clearest signature: baroque churches, azulejo tiles and courtyard houses.",
    languages: ["Konkani (official)", "Marathi (official)", "English"],
    cuisine:
      "Fish curry and rice is the everyday meal, cooked in coconut with kokum for sourness. Vindaloo descends from the Portuguese carne de vinha d'alhos, xacuti is a ground-spice roast, and bebinca is the layered pudding served at Christmas. Feni, distilled from cashew apple or coconut, is the local spirit.",
    festivals: [
      "Carnival",
      "Feast of St. Francis Xavier",
      "Shigmo",
      "Sao Joao",
      "Ganesh Chaturthi",
    ],
    crafts: [
      "Azulejo tile painting",
      "Coconut shell carving",
      "Brass and copper work",
      "Cashew and coconut crafts",
      "Shell and terracotta work",
    ],
    heritage: [
      "Basilica of Bom Jesus, Old Goa",
      "Se Cathedral",
      "Fort Aguada",
      "Tambdi Surla temple",
      "Fontainhas Latin Quarter",
    ],
    placesToKnow: ["Panjim and Fontainhas", "Old Goa", "Palolem", "Anjuna", "Dudhsagar Falls"],
    interestingFacts: [
      "Goa is India's smallest state by area.",
      "The Portuguese presence lasted more than 450 years — from 1510 to 1961.",
      "The Basilica of Bom Jesus holds the mortal remains of St. Francis Xavier.",
    ],
    image: coast,
  },
  {
    id: "GJ",
    slug: "gujarat",
    name: "Gujarat",
    region: "Western India",
    capital: "Gandhinagar",
    introduction:
      "The white expanse of the Rann, a coastline longer than any other state's, and a craft geography — Ajrakh, Patola, mirror work — that still supplies workshops across the subcontinent.",
    knownFor: ["Textiles", "Salt Desert", "Stepwells", "Asiatic Lions"],
    geography:
      "Three landscapes divide the state: the arid Rann of Kutch to the north-west, the central plain of the Sabarmati, Mahi and Narmada, and the Saurashtra peninsula reaching into the sea. The Rann floods with saline water after the monsoon and dries to a cracked white plain; the dry forests of Gir hold the last wild Asiatic lions.",
    history:
      "Lothal and Dholavira were trading cities of the Indus Valley civilisation more than four thousand years ago. After Mauryan and Scythian periods, the Solanki dynasty built the stepwells and temples, followed by the Sultanate, whose mosques still define Ahmedabad's old city, and then Mughal rule. Gandhi's Sabarmati Ashram and the Dandi March of 1930 gave the state its modern political identity.",
    culture:
      "Garba through nine nights of Navratri is the state's mass art form, danced in circles around a lamp, alongside dandiya raas and the devotional music of the temple paramparas. Kutch adds its own register — cattle herders, patchwork and border languages.",
    languages: ["Gujarati (official)", "Hindi", "Bhili", "Sindhi"],
    cuisine:
      "A thali built on dal, kadhi and roti with a sweet finish: dhokla, thepla, fafda with jalebi, undhiyu at Uttarayan, and the khandvi and muthia of the snack shops. Kutch adds ker sangri; Kathiawadi kitchens go hot with chilli and garlic.",
    festivals: [
      "Navratri",
      "Uttarayan — the kite festival",
      "Rann Utsav",
      "Makar Sankranti",
      "Shardiya Navratri",
    ],
    crafts: [
      "Ajrakh block printing of Kutch",
      "Patola double ikat of Patan",
      "Bandhani tie-dye",
      "Mirror-work embroidery",
      "Rogan painting and copper bells",
    ],
    heritage: [
      "Rani ki Vav, Patan",
      "Dholavira archaeological site",
      "Champaner-Pavagadh",
      "Somnath and Dwarka",
      "Adalaj stepwell",
    ],
    placesToKnow: [
      "Kutch and Bhuj",
      "Rann of Kutch",
      "Gir National Park",
      "Ahmedabad",
      "Somnath",
      "Dwarka",
    ],
    interestingFacts: [
      "Gujarat has India's longest coastline — close to 1,600 km.",
      "The Asiatic lion survives nowhere outside Gir's forests.",
      "Rani ki Vav, the queen's stepwell at Patan, is a UNESCO World Heritage Site.",
    ],
    image: craft,
  },
  {
    id: "HR",
    slug: "haryana",
    name: "Haryana",
    region: "North India",
    capital: "Chandigarh",
    introduction:
      "The plain between Delhi and the hills — the ground of the Mahabharata's battle, three battles that decided empires at Panipat, and the wheat belt that fed the Green Revolution.",
    knownFor: ["Green Revolution", "Panipat", "Dairy", "Wrestling"],
    geography:
      "Mostly flat alluvial plain, broken only by the Aravalli ridge at Delhi's edge and the Shivalik foothills around Morni. The Yamuna forms the eastern border and the Ghaggar-Hakra an interior channel that runs dry for much of the year. Rainfall drops toward the west, which makes irrigation the state's real geography.",
    history:
      "Kurukshetra is identified with the battlefield of the Mahabharata, and Panipat — where the first, second and third battles were fought in 1526, 1556 and 1761 — repeatedly decided who would rule the north. The region was part of Punjab until 1966, when its Hindi-speaking districts became the state of Haryana, and its countryside then drove the Green Revolution alongside Punjab's.",
    culture:
      "Wrestling akharas, a ghee-and-milk food culture and the folk forms of the Ahir and Jat communities define the rural register — the Faag songs of spring, Gugga worship, and group dances of harvest. Urban Haryana runs from Gurugram's glass towers to Panipat's handloom sheds.",
    languages: ["Hindi (official)", "Haryanvi dialects", "Punjabi", "Urdu"],
    cuisine:
      "Simple and hearty: kadhi pakora, bajra and maize rotis, singri ki sabzi, curd and lassi with every meal, and a sweet finish of gur and kheer. Mustard oil and wheat give the cooking its base notes.",
    festivals: ["Teej", "Gangaur", "Baisakhi", "Surajkund Crafts Mela", "Holi"],
    crafts: [
      "Phulkari embroidery",
      "Panipat's handloom and carpets",
      "Block printing",
      "Pottery and terracotta",
      "Silverwork of Narnaul",
    ],
    heritage: [
      "Kurukshetra",
      "Rakhigarhi Indus site",
      "Pinjore Gardens",
      "Surajkund reservoir",
      "Bhima Devi temple site",
    ],
    placesToKnow: ["Kurukshetra", "Gurugram", "Morni Hills", "Sohna", "Panipat", "Surajkund"],
    interestingFacts: [
      "Three decisive battles of Indian history were fought at Panipat.",
      "Rakhigarhi is among the largest known Indus Valley civilisation sites.",
      "Haryana's wheat and dairy output helped shape India's Green Revolution.",
    ],
    image: architecture,
  },
  {
    id: "HP",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "Himalayan North",
    capital: "Shimla",
    introduction:
      "Deodar forests, apple terraces and the cold desert of Spiti — a state where one road can carry you from cedar shade to the Tibetan plateau in a day.",
    knownFor: ["Hill Stations", "Spiti", "Shawls", "Apple Orchards"],
    geography:
      "Himachal rises from the Shivalik foothills through the Dhauladhar and Pir Panjal to the trans-Himalayan ranges of Spiti and Kinnaur, with altitudes swinging from a few hundred metres to over 6,500 m. The Beas, Sutlej, Ravi and Chenab all rise here, and the rain shadow behind the main divide leaves Spiti a cold desert.",
    history:
      "Ancient trade routes to Ladakh, Tibet and Yarkand passed through these valleys, and hill chiefdoms such as the Katoch held Kangra for centuries. The Mughals seized Kangra fort in the mid-1700s and the British made Shimla their summer capital in 1864. The princely states acceded to India in 1948, and Himachal became a separate state in 1971.",
    culture:
      "Chamba's folk theatre, the Nati dance of the Kullu valley and the mask dances of Lahaul-Spiti's monasteries give each valley its own register. Kinnauri and Kullu shawls carry a material culture tied closely to craft and to the hill climate.",
    languages: ["Hindi (official)", "Sanskrit (official)", "Kangri", "Kinnauri", "Pahari dialects"],
    cuisine:
      "Dham is the ceremonial meal — rice, lentils, kadi and sweets served on leaf plates in sequence. Add siddu steamed wheat buns, madra of chickpeas in yoghurt, the Himachali chha gosht, and trout farmed in the Kullu streams.",
    festivals: [
      "Kullu Dussehra",
      "Shivratri at Shimla",
      "Minjar Mela, Chamba",
      "Losar in Spiti",
      "Fagli",
    ],
    crafts: [
      "Kullu and Kinnauri shawls",
      "Chamba rumal embroidery",
      "Kinnauri caps",
      "Wood carving",
      "Metalwork and thangka painting",
    ],
    heritage: [
      "Kalka-Shimla Railway",
      "Great Himalayan National Park",
      "Jakhoo Temple",
      "Chamba's Lakshmi Narayan temples",
      "Key Monastery, Spiti",
    ],
    placesToKnow: ["Shimla", "Manali", "Dharamshala", "Spiti Valley", "Kullu", "Kinnaur"],
    interestingFacts: [
      "The Kalka-Shimla railway is a UNESCO World Heritage mountain line.",
      "The Great Himalayan National Park is inscribed on the UNESCO World Heritage List.",
      "Kullu Dussehra continues for seven days after Vijayadashami itself.",
    ],
    image: himalaya,
  },
  {
    id: "JH",
    slug: "jharkhand",
    name: "Jharkhand",
    region: "Eastern India",
    capital: "Ranchi",
    introduction:
      "Named for its forests — a mineral plateau of sal, waterfalls and Adivasi villages whose uprisings shaped the modern history of eastern India.",
    knownFor: ["Mineral Belt", "Tribal Heritage", "Waterfalls", "Sohrai Paintings"],
    geography:
      "The Chotanagpur plateau is a high tableland of granite and laterite, tilted west to east and cut by the Damodar and Subarnarekha. Forest cover is thick across its edges — Dalma, Rajmahal, Palamu — while the western districts rise to Ranchi's cool, boulder-strewn country.",
    history:
      "The Nagvanshi chiefs and then Munda and Santhal villages held this country long before it was mapped. The Sardari larai and Birsa Munda's Ulgulan uprising at the turn of the twentieth century forced colonial land policy into a retreat. The region stayed part of Bihar until 2000, when Jharkhand was formed as its own state.",
    culture:
      "Sohrai and Khovar painting — harvest and marriage murals made by women — are the state's best-known visual tradition. Sarhul and Karma are the great seasonal festivals, marked by sal blossom and community dance, and the music of the Mundas and Santhals still runs on drum and voice.",
    languages: [
      "Hindi (official)",
      "Santali (official)",
      "Bengali (official)",
      "Magahi",
      "Khortha",
      "Mundari",
      "Ho",
      "Nagpuri",
    ],
    cuisine:
      "Plains and forest cook differently: dhuska fried at the haat, rugra mushrooms gathered after rain, bamboo shoot and tubers in tribal kitchens, mahua flowers for sweets and spirit, and the rice beer handia brewed for festivals.",
    festivals: ["Sarhul", "Karma", "Tusu Parab", "Sohrai", "Holi"],
    crafts: [
      "Sohrai and Khovar painting",
      "Tussar silk weaving",
      "Bamboo and cane craft",
      "Tribal silver jewellery",
      "Lac and stone craft",
    ],
    heritage: [
      "Baidyanath Dham, Deoghar",
      "Maluti's terracotta temples",
      "Rajrappa",
      "Hundru Falls",
      "Netarhat",
    ],
    placesToKnow: [
      "Ranchi",
      "Deoghar",
      "Netarhat",
      "Jamshedpur",
      "Hazaribagh",
      "Dalma Wildlife Sanctuary",
    ],
    interestingFacts: [
      "Jharkhand means 'land of forests' — a name given when the state was formed in 2000.",
      "Baidyanath Dham at Deoghar is counted among India's twelve Jyotirlingas.",
      "Birsa Munda's early-twentieth-century uprising remains central to the state's memory.",
    ],
    image: forest,
  },
  {
    id: "KA",
    slug: "karnataka",
    name: "Karnataka",
    region: "South India",
    capital: "Bengaluru",
    introduction:
      "From the ruined capital of Hampi to the glass skyline of Bengaluru — a Deccan state of temple sculpture, coastal kitchens and India's technology capital.",
    knownFor: ["Hampi", "Western Ghats", "Carnatic Music", "Silk"],
    geography:
      "The state steps down in three: the dry northern plains, the central tableland of the Deccan, and the wet Western Ghats falling to the Karavali coast. The Kaveri rises here, and the Ghats catch the monsoon — feeding Jog Falls, the coffee country of Kodagu and Chikmagalur, and a coastline of temples and ports.",
    history:
      "The Kadambas, the Chalukyas of Badami and Aihole, and the Hoysalas of Belur and Halebidu made this one of the most sculpture-dense regions in India. Vijayanagara, with its capital at Hampi, governed the south for two centuries before falling in 1565. The Wodeyars of Mysore and Tipu Sultan followed, and Bengaluru grew from a fort town into the country's technology capital.",
    culture:
      "Yakshagana, a night-long dance-drama of the coastal belt, runs alongside Dollu Kunitha drum dances and the Mysore and Bengaluru schools of Bharatanatyam. Mysore's Dasara has been the state's ceremonial festival since the Wodeyar court, and Carnatic music keeps its concert seasons in both capitals.",
    languages: ["Kannada (official)", "Urdu", "Telugu", "Tamil", "Tulu", "Konkani", "Marathi"],
    cuisine:
      "The dosa's disputed homeland, and rightly so: bisi bele bath, the Mysore-style masala dosa, ragi mudde with saaru, and the coastal fish curries of Mangalore and Malpe. Sweets run to Mysore pak and Dharwad peda.",
    festivals: ["Mysore Dasara", "Ugadi", "Karaga at Bengaluru", "Hampi Utsav", "Kambala"],
    crafts: [
      "Mysore silk with zari",
      "Channapatna wooden toys",
      "Ilkal handloom sarees",
      "Bidriware of Bidar",
      "Kasuti embroidery",
    ],
    heritage: [
      "Hampi",
      "Pattadakal",
      "Somanathapura's Chennakeshava temple",
      "Mysore Palace",
      "Gol Gumbaz, Vijayapura",
    ],
    placesToKnow: ["Bengaluru", "Mysuru", "Hampi", "Coorg", "Jog Falls", "Chikmagalur"],
    interestingFacts: [
      "Hampi, capital of the Vijayanagara empire, is a UNESCO World Heritage Site.",
      "Channapatna toys are turned from wood and coloured with vegetable dyes — a GI-protected craft.",
      "Jog Falls, on the Sharavathi, is among the highest plunge waterfalls in India.",
    ],
    image: architecture,
  },
  {
    id: "KL",
    slug: "kerala",
    name: "Kerala",
    region: "South-West Coast",
    capital: "Thiruvananthapuram",
    introduction:
      "A narrow green strip between the Western Ghats and the Arabian Sea, threaded by lagoons and shaped by centuries of maritime exchange.",
    knownFor: ["Backwaters", "Kathakali", "Spice Trade", "Monsoon"],
    geography:
      "Much of the state is Western Ghats, falling steeply to a coast of coconut palm and laterite. Parallel to the shore runs a network of lagoons, lakes and canals — the backwaters — fed by rivers that descend from the hills in less than a hundred kilometres.",
    history:
      "Muziris, on this coast, was trading pepper and cloth with Rome before the common era. The Cheras, the Rajas of Cochin and Travancore, and then successive Portuguese, Dutch and British presences made Kerala a maritime frontier. Matrilineal Nair households and temple-governed economies gave society a shape unlike the north, and the state was formed in 1956 on language lines.",
    culture:
      "Kathakali's make-up and gesture, Mohiniyattam's sway, Kalaripayattu's forms and Theyyam's possession rituals give the state four distinct performance languages. Onam, unlike religious festivals, belongs to everyone — a homecoming measured by the pookalam and the sadya.",
    languages: ["Malayalam (official)", "English", "Tamil", "Kannada"],
    cuisine:
      "Coconut, rice and curry leaves are the base: appam with stew, puttu and kadala, the banana-leaf sadya of twenty or more dishes, and karimeen pollichathu wrapped in leaf. Seafood runs from meen moilee to fish fry, and the hills supply pepper, cardamom and tea.",
    festivals: ["Onam", "Vishu", "Thrissur Pooram", "Attukal Pongala", "Nehru Trophy Boat Race"],
    crafts: [
      "Coir and rope-making",
      "Kasavu sarees with gold border",
      "Kathakali masks and make-up",
      "Aranmula metal mirrors",
      "Kuthampally weaving",
    ],
    heritage: [
      "Mattancherry Palace, Kochi",
      "Fort Kochi's Chinese fishing nets",
      "Padmanabhaswamy Temple",
      "Edakkal caves",
      "Munnar's tea country",
    ],
    placesToKnow: ["Munnar", "Alleppey backwaters", "Fort Kochi", "Thekkady", "Varkala", "Wayanad"],
    interestingFacts: [
      "The backwaters form a connected network of around 900 km of canals, rivers and lakes.",
      "Mattancherry Palace is known as the Dutch Palace — though the Portuguese built it first.",
      "Kathakali make-up alone can take hours before a performance begins.",
    ],
    image: coast,
  },
  {
    id: "MP",
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    region: "Central India",
    capital: "Bhopal",
    introduction:
      "The Heart of India — three UNESCO sites, a thousand years of temple sculpture, tiger country, and a street-food tradition that begins before sunrise in Indore.",
    knownFor: ["UNESCO Sites", "Tigers", "Temples", "Handloom"],
    geography:
      "Two ranges — the Vindhyas and the Satpuras — divide the state into plateau country, with the Narmada cutting a rift valley west between them. Much of Madhya Pradesh is forest and hill: Kanha, Bandhavgarh, Panna and the Bhimbetka country in the centre, and the Bundelkhand and Gwalior plains in the north.",
    history:
      "The rock shelters at Bhimbetka carry paintings tens of thousands of years old. The Guptas raised the great stupa at Sanchi, the Chandellas carved Khajuraho, and Bundela and Maratha chiefs built Orchha and Gwalior. The Bhils and Gonds held the forests through it all, and the Nawabs of Bhopal ruled a princely state until 1949.",
    culture:
      "Gwalior's gharana gave Hindustani music one of its founding lineages — Tansen lies buried there. The art of the Gond and Bhil communities, now collected worldwide, began as wall and floor painting, and the Khajuraho dance festival, held against the lit temple at night, is the state's annual arts gathering.",
    languages: ["Hindi (official)", "Bhili", "Gondi", "Urdu"],
    cuisine:
      "Indore's chaat lane is the signature: poha-jalebi at dawn, bhutte ka kees, garadu in winter, and malpua for the sweet. Central and eastern districts go rustic with dal bafla — bread baked, then simmered in lentils — and mahua-flavoured cooking.",
    festivals: ["Khajuraho Dance Festival", "Bhagoria", "Navratri", "Makar Sankranti", "Diwali"],
    crafts: [
      "Chanderi and Maheshwari saris",
      "Gond and Bhil art",
      "Clay and terracotta modelling",
      "Lac bangles and beadwork",
      "Copper and bell-metal work",
    ],
    heritage: [
      "Khajuraho temples",
      "Sanchi Stupa",
      "Bhimbetka rock shelters",
      "Orchha",
      "Gwalior Fort",
    ],
    placesToKnow: ["Khajuraho", "Sanchi", "Orchha", "Gwalior", "Pachmarhi", "Ujjain"],
    interestingFacts: [
      "Madhya Pradesh holds three UNESCO World Heritage Sites — Khajuraho, Sanchi and Bhimbetka.",
      "Bhimbetka's rock shelters carry paintings stretching back tens of thousands of years.",
      "Sanchi's Great Stupa dates to the third century BCE and was commissioned by Ashoka.",
    ],
    image: architecture,
  },
  {
    id: "MH",
    slug: "maharashtra",
    name: "Maharashtra",
    region: "Western India",
    capital: "Mumbai",
    introduction:
      "Basalt plateaus falling into the Konkan coast, rock-cut viharas at Ajanta, and a modern cultural capital at the sea's edge.",
    knownFor: ["Sahyadri Ghats", "Cave Art", "Coastline", "Film Industry"],
    geography:
      "The Deccan's black basalt country is interrupted by the Western Ghats, which catch the monsoon and turn green for four months a year before drying to brown. The narrow Konkan strip runs south along the sea, while Vidarbha and Marathwada open into the drier east.",
    history:
      "The Satavahanas, Vakatakas, Chalukyas of Kalyani and the Yadava kings of Devagiri ruled in sequence, followed by the Bahmani and Deccan sultanates. Shivaji's Maratha kingdom reshaped the peninsula in the seventeenth century, and Bombay — ceded to the Portuguese, then given to Charles II — grew into the capital of Bombay Presidency and, after 1960, of a Marathi-speaking state.",
    culture:
      "Lavani and Tamasha, the Marathi stage, and the public Ganesh Chaturthi that Lokmanya Tilak turned into a mass festival define the state's performance traditions. Warli painting, made with white pigment on mud walls, carries an older visual language into galleries now.",
    languages: ["Marathi (official)", "Urdu", "Gujarati", "Kannada", "Hindi"],
    cuisine:
      "Fast, spiced and portable: vada pav, misal pav, the modak of Ganesh Chaturthi and puran poli for festivals. The Konkan belt cooks fish in coconut, while the inland Malvani kitchens go heavy on dried spice and coconut oil.",
    festivals: [
      "Ganesh Chaturthi",
      "Gudi Padwa",
      "Ashadhi Wari at Pandharpur",
      "Pola",
      "Nag Panchami",
    ],
    crafts: [
      "Paithani sarees",
      "Warli painting",
      "Kolhapuri chappals",
      "Himroo and Paithan weaving",
      "Kolhapuri jewellery",
    ],
    heritage: [
      "Ajanta and Ellora",
      "Elephanta Caves",
      "Chhatrapati Shivaji Terminus",
      "Raigad Fort",
      "Karla and Bhaja rock-cut caves",
    ],
    placesToKnow: ["Mumbai", "Pune", "Ajanta and Ellora", "Lonavala", "Nashik", "Mahabaleshwar"],
    interestingFacts: [
      "Ajanta and Ellora — Buddhist, Hindu and Jain rock-cut art — are both UNESCO World Heritage Sites.",
      "Lokmanya Tilak turned Ganesh Chaturthi into a public festival in the 1890s.",
      "The gateway island of Elephanta, an hour from Mumbai, is a UNESCO World Heritage Site.",
    ],
    image: forest,
  },
  {
    id: "MN",
    slug: "manipur",
    name: "Manipur",
    region: "North-East India",
    capital: "Imphal",
    introduction:
      "A valley floor ringed by hills, a lake that floats, and a classical dance inherited from Krishna — Manipur sits between the mountains and the plains of Myanmar.",
    knownFor: ["Ras Lila", "Loktak Lake", "Polo Origins", "Meitei Culture"],
    geography:
      "The flat Imphal valley, under a thousand square kilometres in area, is surrounded on all sides by hill ranges rising to over 2,500 m. Loktak Lake, the largest freshwater lake in the north-east, holds floating masses of vegetation called phumdis, and the hills step down toward the Chindwin basin in Myanmar.",
    history:
      "The Meitei kings ruled from the Kangla citadel for centuries, and the valley exchanged raids and alliances with the Ahom and Burmese kingdoms. The British defeated Manipur in the war of 1891, and during the Second World War Imphal was the site of one of the war's decisive battles. Manipur became a state in 1972.",
    culture:
      "Ras Lila, the Manipuri dance of Krishna and the gopis, is performed in full costume through the night, while Thang-ta keeps the martial tradition alive. Sagol kangjei, the valley's polo played on pony back, is widely credited as the precursor of the modern game.",
    languages: ["Meitei/Manipuri (official)", "Tangkhul", "Thadou", "Poumai", "Hmar"],
    cuisine:
      "Fermentation is the method: ngari, steamed fish cured for weeks, is the flavour base, served with eromba of mashed vegetables, kangshoi soup, singju salad and the smoked pork of the hills. Rice accompanies every meal.",
    festivals: ["Yaoshang", "Cheiraoba", "Lai Haraoba", "Sangai Festival", "Ningol Chakouba"],
    crafts: [
      "Manipuri weaving — phanek and innaphi",
      "Bamboo and cane work",
      "Khongjom black pottery",
      "Brassware",
      "Lotus fibre and shawl weaving",
    ],
    heritage: [
      "Kangla Fort",
      "Loktak Lake and Keibul Lamjao",
      "Imphal war cemeteries",
      "Moirang",
      "Shirui Kashung",
    ],
    placesToKnow: ["Imphal", "Loktak Lake", "Ukhrul", "Moirang", "Tamenglong", "Chandel"],
    interestingFacts: [
      "Keibul Lamjao, the floating park on Loktak Lake, is described as the world's only floating national park.",
      "The Sangai, a brow-antlered deer, is found nowhere outside this lake's phumdis.",
      "Manipuri polo traces to sagol kangjei, played in the valley for centuries.",
    ],
    image: dance,
  },
  {
    id: "ML",
    slug: "meghalaya",
    name: "Meghalaya",
    region: "North-East India",
    capital: "Shillong",
    introduction:
      "The abode of clouds — a plateau of living root bridges, clean villages and rain measured in metres, held between the Khasi, Garo and Jaintia hills.",
    knownFor: ["Living Root Bridges", "Rainfall", "Matrilineal Society", "Caves"],
    geography:
      "Three hill ranges — Garo, Khasi and Jaintia — form a plateau whose southern edge drops hundreds of metres into the plains of Bangladesh. The Khasi hills stand directly in the path of the Bay of Bengal monsoon, which is why Mawsynram and Cherrapunji record some of the heaviest rainfall anywhere on earth.",
    history:
      "The Khasi chiefdoms, the Jaintia kingdom and the Garo Hills each kept their own political forms until the British consolidated the region as part of Assam in the nineteenth century. Meghalaya was carved out of Assam in 1972, and its villages continue to govern land and lineage through traditional institutions.",
    culture:
      "Khasi and Garo society follows matrilineal inheritance — the clan name and property pass through the mother. The Wangala harvest dance of the Garos, Behdienkhlam of the Jaintias and the Nongkrem of the Khasis mark the year, and church singing has become a shared public tradition.",
    languages: ["Khasi (official)", "Garo (official)", "English (official)", "Pnar", "Biate"],
    cuisine:
      "Jadoh — rice cooked with meat — is the everyday plate, alongside tungrymbai of fermented soybean, dohneiiong with black sesame, and the puffed-rice sweet pukhlein. Smoked pork and dry fish dominate the hill kitchens.",
    festivals: ["Wangala", "Behdienkhlam", "Shad Sukhmi", "Nongkrem Dance Festival", "Christmas"],
    crafts: [
      "Khasi and Garo handloom",
      "Cane and bamboo basketry",
      "Wood carving",
      "Bead and horn jewellery",
      "Living root bridge building",
    ],
    heritage: [
      "Double-decker living root bridge, Nongriat",
      "Mawsmai caves",
      "Nohkalikai Falls",
      "Mawlynnong village",
      "Umiam Lake",
    ],
    placesToKnow: ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong", "Jowai", "Balpakram"],
    interestingFacts: [
      "Cherrapunji and Mawsynram are among the wettest places on earth.",
      "Khasi and Garo society follows matrilineal inheritance — lineage passes through the mother.",
      "Living root bridges are grown from rubber-fig roots rather than built.",
    ],
    image: forest,
  },
  {
    id: "MZ",
    slug: "mizoram",
    name: "Mizoram",
    region: "North-East India",
    capital: "Aizawl",
    introduction:
      "A long north-south range of forested hills, the country's highest tree cover, and a state that turns out for song, bamboo dance and Christmas.",
    knownFor: ["Forest Cover", "Cheraw Dance", "Handloom", "Music"],
    geography:
      "Parallel hill ranges run the length of the state, with narrow valleys between them and the Champhai valley opening toward the Myanmar border. Forest covers the great majority of Mizoram's area — the highest proportion of any Indian state — and the main crops of rice and maize are terraced across the slopes.",
    history:
      "The Mizo chiefs of the Lushei hills were consolidated under British administration in the late nineteenth century, and the Mizo Union won autonomy after the insurgency of the 1960s was settled by the Mizoram Peace Accord of 1986. Mizoram became a state the following year, the last of the north-east to join the Union in that era.",
    culture:
      "Cheraw — the bamboo dance in which dancers step between clapping poles — is the state's signature, but the deeper tradition is communal singing: Mizo choirs, gospel music and the Christmas season fill the hills. Festivals are democratic affairs, organised by villages and youth associations.",
    languages: ["Mizo (official)", "English (official)", "Hmar", "Lai", "Pawi"],
    cuisine:
      "Bai is the everyday dish — vegetables, herbs and meat steamed together with bamboo and pork. Zu, the rice beer of celebrations, accompanies festivals, and sawhchiar — rice slow-cooked with meat — is the comfort food of the hills.",
    festivals: ["Chapchar Kut", "Mim Kut", "Pawl Kut", "Christmas", "Thalfavang Kut"],
    crafts: [
      "Mizo handloom and puan shawls",
      "Bamboo and cane craft",
      "Beadwork",
      "Wood carving",
      "Traditional pottery",
    ],
    heritage: [
      "Phawngpui National Park",
      "Murlen National Park",
      "Reiek",
      "Vantawang Falls",
      "Aizawl",
    ],
    placesToKnow: ["Aizawl", "Champhai", "Lunglei", "Thenzawl", "Phawngpui", "Reiek"],
    interestingFacts: [
      "Mizoram has the highest proportion of forest cover of any Indian state.",
      "Cheraw, the bamboo dance, is recognised across India as the state's emblem.",
      "Mizoram's literacy rate stands among the highest in the country.",
    ],
    image: himalaya,
  },
  {
    id: "NL",
    slug: "nagaland",
    name: "Nagaland",
    region: "North-East India",
    capital: "Kohima",
    introduction:
      "The Naga hills — a dozen tribes, each with its own loom, language and festival, gathered each December at Kisama for the Hornbill.",
    knownFor: ["Hornbill Festival", "Naga Tribes", "Dzükou Valley", "WWII History"],
    geography:
      "Ranges rise from the Brahmaputra's edge to Saramati on the Myanmar border, cut by deep gorges and a chain of ridge-top villages. The Dzükou valley between Kohima and Manipur holds a seasonal meadow famous for its flowers, and the state's climate swings from wet subtropical to cold highland.",
    history:
      "Each Naga tribe governed itself through village councils and customary law, and headhunting shaped the martial reputation of the hills until the early twentieth century. The British administered the area from Assam; the Japanese advance was halted at Kohima and Imphal in 1944, and Nagaland became India's sixteenth state in 1963.",
    culture:
      "The morung — the communal youth house — was the centre of education and craft, and each tribe's textile motif once signalled achievement and identity. Christianity now shapes public life alongside tribal custom, and the Hornbill Festival at Kisama gathers every group in one place.",
    languages: [
      "English (official)",
      "Nagamese",
      "Ao",
      "Angami",
      "Sumi",
      "Tangkhul",
      "Konyak",
      "Lotha",
    ],
    cuisine:
      "Smoked pork with bamboo shoot is the defining dish, joined by axone — fermented soybean — and dried fish. Rice is the staple, zutho is the rice beer of festivals, and the food runs simple, sour and smoky.",
    festivals: ["Hornbill Festival", "Sekrenyi", "Moatsu", "Tuluni", "Aoleang"],
    crafts: [
      "Naga shawls and textiles with tribal motifs",
      "Wood carving",
      "Beadwork",
      "Cane and bamboo furniture",
      "Traditional blacksmithing",
    ],
    heritage: [
      "Kohima War Cemetery",
      "Dzükou Valley",
      "Kisama Heritage Village",
      "Japfu Peak",
      "Intanki National Park",
    ],
    placesToKnow: ["Kohima", "Mokokchung", "Mon", "Dimapur", "Tuensang", "Dzükou Valley"],
    interestingFacts: [
      "The battle of Kohima in 1944 turned the tide of the war in Asia.",
      "The Hornbill Festival brings the state's tribes together at Kisama every December.",
      "Dzükou Valley, on the Manipur border, is known for its seasonal flowers and lily.",
    ],
    image: himalaya,
  },
  {
    id: "OD",
    slug: "odisha",
    name: "Odisha",
    region: "Eastern India",
    capital: "Bhubaneswar",
    introduction:
      "A temple coast and a forested interior — sun chariots in stone, the oldest continuing Rath Yatra in the country, and a lagoon that fills with birds each winter.",
    knownFor: ["Temple Architecture", "Odissi", "Rath Yatra", "Chilika"],
    geography:
      "The Eastern Ghats run through the middle of the state, separating a coastal plain of the Mahanadi delta from the tribal hill country of Koraput and Kandhamal. Chilika, the brackish lagoon on the coast, is India's largest, and the 600-kilometre shoreline faces the Bay of Bengal.",
    history:
      "Kalinga's resistance and defeat by Ashoka in 261 BCE turned him toward Buddhism, and Kharavela's inscription at Hathigumpha records a later dynasty at its height. The Ganga kings built Konark and the Puri temples, the Marathas took the coast, and Orissa became a separate province in 1936 before forming a state in 1950.",
    culture:
      "Odissi, danced to the devotional texts of the Jagannath tradition, is one of India's eight classical forms, while Gotipua — young boys dancing in pairs — is its predecessor. Pattachitra scroll painting and the Sambalpuri dance forms of the western belt give the state two further visual and performance languages.",
    languages: ["Odia (official)", "Santali", "Kui", "Kolha", "Telugu", "Bengali"],
    cuisine:
      "Pakhala — rice soaked overnight in water — is the summer staple, eaten with fried fish and vegetables. Dalma, chhena poda baked cheese cake, the seafood of Chilika's prawn beds and the rasabali of the temples round out the menu.",
    festivals: [
      "Rath Yatra at Puri",
      "Raja Parba",
      "Konark Dance Festival",
      "Bali Jatra",
      "Durga Puja",
    ],
    crafts: [
      "Pattachitra painting",
      "Sambalpuri ikat weaving",
      "Tarakasi silver filigree of Cuttack",
      "Stone carving",
      "Bell-metal work",
    ],
    heritage: [
      "Jagannath Temple, Puri",
      "Konark Sun Temple",
      "Udayagiri and Khandagiri caves",
      "Lingaraj Temple, Bhubaneswar",
      "Chilika Lake",
    ],
    placesToKnow: ["Puri", "Konark", "Bhubaneswar", "Chilika Lake", "Similipal", "Jeypore"],
    interestingFacts: [
      "The chariot festival at Puri is among the oldest and most famous Rath Yatras in India.",
      "Odissi is counted among India's eight classical dance forms.",
      "Chilika is the largest coastal lagoon in India and a haven for migratory birds.",
    ],
    image: coast,
  },
  {
    id: "PB",
    slug: "punjab",
    name: "Punjab",
    region: "North-West India",
    capital: "Chandigarh",
    introduction:
      "The land of five rivers — a wheat plain that feeds the country, the golden shrine at Amritsar, and a music tradition that carries bhangra around the world.",
    knownFor: ["Golden Temple", "Wheat Belt", "Bhangra", "Sikh Heritage"],
    geography:
      "A fertile alluvial plain watered by the Sutlej, Beas and Ravi, rising in the north to the Shivalik foothills around Anandpur Sahib and Ropar. The Ghaggar-Hakra traces an older riverbed through the south, where the plain begins to dry toward the Rajasthan fringe.",
    history:
      "Harappan cities stood at Ropar and Harappa, and later the region passed through Mauryan, Kushan and Gupta hands. The Sikh Gurus founded Amritsar in the sixteenth century and built the Harmandir Sahib; Maharaja Ranjit Singh ruled a Sikh empire in the nineteenth, and the Partition of 1947 split Punjab in two along the new border. The state was reorganised again in 1966.",
    culture:
      "Bhangra and Giddha — men's and women's harvest dance — are the public face, but the deeper institutions are the langar, the community kitchen that feeds every visitor to the Golden Temple, and the gurdwara itself as a civic space. Lohri and Baisakhi keep the seasonal calendar.",
    languages: ["Punjabi (official, Gurmukhi script)", "Hindi", "Urdu"],
    cuisine:
      "Makki di roti with sarson da saag is the winter emblem, with lassi, tandoori grills, Amritsari fish and pinni for the sweet. Bread is central — tandoori, kulcha, paratha — and the dairy is generous.",
    festivals: ["Lohri", "Baisakhi", "Gurpurab", "Maghi", "Teej"],
    crafts: [
      "Phulkari embroidery",
      "Punjabi jutti leather footwear",
      "Handloom weaving",
      "Carpet making",
      "Woodwork and lacquerware",
    ],
    heritage: [
      "Golden Temple, Amritsar",
      "Jallianwala Bagh",
      "Wagah Border",
      "Anandpur Sahib",
      "Rock Garden, Chandigarh",
    ],
    placesToKnow: ["Amritsar", "Chandigarh", "Patiala", "Anandpur Sahib", "Ludhiana", "Ropar"],
    interestingFacts: [
      "The Golden Temple's community kitchen serves free meals to tens of thousands of people each day.",
      "Phulkari — 'flower work' — covers shawls and dupattas across the state.",
      "The Wagah border ceremony draws crowds on both sides every evening.",
    ],
    image: craft,
  },
  {
    id: "RJ",
    slug: "rajasthan",
    name: "Rajasthan",
    region: "North-West India",
    capital: "Jaipur",
    introduction:
      "Fort cities rising out of the Thar, mirror-work and block-print traditions, and a folk repertoire carried across generations of desert villages.",
    knownFor: ["Heritage", "Desert", "Crafts", "Folk Culture"],
    geography:
      "The Aravalli range, among the oldest folded mountains on earth, divides the state: the Thar desert runs west to the Sambhar lake and the Rann edge, while Mewar and Hadoti hold the lakes and forests of the south-east. Rainfall drops to almost nothing in the far west, which is why cities here were built around tanks, stepwells and fort reservoirs.",
    history:
      "Rajput clans — the Sisodia of Mewar, the Rathore of Marwar, the Kachwaha of Amber — held their forts through Delhi sultanate and Mughal centuries, and Akbar's alliances with them defined the empire's politics. Jai Singh II laid out Jaipur in 1727 on a grid plan; the princely states acceded to India between 1948 and 1949.",
    culture:
      "Manganiyar and Langa musicians carry patronised repertoires of war songs and love songs, Ghoomar spins through celebrations, and kathputli puppeteers still travel with string theatres. Miniature painting splits into the Mewar, Marwar and Jaipur schools, each with its own palette.",
    languages: ["Hindi (official)", "Marwari", "Mewari", "Dhundhari", "Shekhawati"],
    cuisine:
      "Dal baati churma is the emblem — hard wheat balls baked in sand, drowned in ghee and crushed with jaggery. Ker sangri survives desert heat in the pot, gatte are gram-flour dumplings, laal maas is the slow mutton of Marwar, and pyaaz kachori fills the morning streets.",
    festivals: [
      "Pushkar Camel Fair",
      "Gangaur",
      "Teej",
      "Desert Festival, Jaisalmer",
      "Mewar Festival",
    ],
    crafts: [
      "Block printing — Sanganer and Bagru",
      "Bandhani and Leheriya tie-dye",
      "Blue pottery of Jaipur",
      "Kundan and meenakari jewellery",
      "Leather jootis and hand-knotted carpets",
    ],
    heritage: [
      "Amber Fort, Jaipur",
      "Mehrangarh Fort, Jodhpur",
      "Jaipur's walled city",
      "Jaisalmer Fort",
      "Kumbhalgarh and Ranakpur",
    ],
    placesToKnow: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar", "Ranthambore"],
    interestingFacts: [
      "Rajasthan is India's largest state by area.",
      "Jaipur's walled city was inscribed as a UNESCO World Heritage Site in 2019.",
      "The fortification wall of Kumbhalgarh runs roughly 36 km — among the longest in India.",
    ],
    image: desert,
  },
  {
    id: "SK",
    slug: "sikkim",
    name: "Sikkim",
    region: "Eastern Himalaya",
    capital: "Gangtok",
    introduction:
      "A narrow state wedged between Nepal, Tibet and Bhutan, rising from subtropical river gorges to the third highest mountain on earth — and the country's first fully organic state.",
    knownFor: ["Kanchenjunga", "Monasteries", "Organic Farming", "Alpine Lakes"],
    geography:
      "Sikkim climbs from around 500 m to Kanchenjunga's 8,586 m within a few dozen kilometres — one of the steepest altitude gradients anywhere. The Teesta river cuts diagonally through the state, glaciers and alpine lakes sit above the tree line, and the north holds yak pasture under permanent snow.",
    history:
      "The Namgyal chogyals ruled from the seventeenth century, with Lepcha and Bhutia communities holding distinct territories. The British made Sikkim a protectorate in the late 1800s, and after a 1974 referendum the state voted to join India, becoming the twenty-second state of the Union in 1975.",
    culture:
      "Buddhist monasteries at Rumtek, Pemayangtse and Enchey anchor public life, and masked cham dances are performed through the winter. Losar and Pang Lhabsol — the mountain worship festival unique to Sikkim — belong to the whole state rather than one community.",
    languages: [
      "Nepali (official)",
      "English (official)",
      "Sikkimese",
      "Lepcha",
      "Gurung",
      "Magar",
      "Sherpa",
      "Tamang",
    ],
    cuisine:
      "The food is Tibetan in register: momos, thukpa noodle soup, sel roti, and phagshapa of pork with radish. Gundruk and sinki — fermented greens and radish — are the everyday pickle, and churpi, the hard yak cheese, is chewed for hours.",
    festivals: ["Losar", "Losoong", "Pang Lhabsol", "Buddha Purnima", "Dashain"],
    crafts: [
      "Thangka painting",
      "Carpet weaving",
      "Choktse carved tables",
      "Bamboo craft",
      "Traditional Lepcha and Bhutia weave",
    ],
    heritage: [
      "Rumtek Monastery",
      "Pemayangtse Monastery",
      "Tsomgo Lake",
      "Nathula Pass",
      "Kanchenjunga Biosphere",
    ],
    placesToKnow: [
      "Gangtok",
      "Pelling",
      "Lachung and Yumthang",
      "Nathula",
      "Tsomgo Lake",
      "Ravangla",
    ],
    interestingFacts: [
      "Sikkim was certified as India's first fully organic state in 2016.",
      "Kanchenjunga, on the northern border, is the highest peak in India.",
      "Sikkim became the twenty-second state of India in 1975.",
    ],
    image: himalaya,
  },
  {
    id: "TN",
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South-East India",
    capital: "Chennai",
    introduction:
      "Granite temple towns, an unbroken literary tradition, and a coastline that carried Chola craft and commerce across the Bay of Bengal.",
    knownFor: ["Temple Architecture", "Bharatanatyam", "Classical Tamil", "Carnatic Music"],
    geography:
      "The state runs from the Nilgiri hills in the west down the Coromandel coast, with the Kaveri delta forming one of the richest agricultural zones in the country. The Eastern Ghats fringe the interior, the Palk Strait faces Sri Lanka, and the Western Ghats edge near the Kerala border keeps the south-west wet.",
    history:
      "Sangam literature, composed more than two thousand years ago, records the Chera, Chola and Pandya kingdoms and a culture already literate and urban. The Pallavas carved Mamallapuram, the Cholas built the great temples of the delta and sent ships across the sea, and the Nayaks and Marathas followed before the British took Madras. The state was renamed Tamil Nadu in 1969.",
    culture:
      "Bharatanatyam, codified from temple dance, and the December Season of Carnatic concerts fill the sabhas of Chennai each winter. Tamil's literary language, the kolam drawn at thresholds every morning, and temple festivals with processional bronze icons keep the classical register in daily use.",
    languages: ["Tamil (official)"],
    cuisine:
      "The tiffin plate — idli, dosa, sambar and coconut chutney — and the full banana-leaf meal are both standard. Chettinad brings pepper and fennel-heavy meat curries, the coastal towns do meen kuzhambu, and filter coffee closes every meal.",
    festivals: ["Pongal", "Chithirai Festival, Madurai", "Thaipusam", "Natyanjali", "Mahamaham"],
    crafts: [
      "Kanchipuram silk sarees",
      "Tanjore painting",
      "Temple jewellery",
      "Bronze casting at Swamimalai",
      "Wood carving of Kumbakonam",
    ],
    heritage: [
      "Great Living Chola Temples",
      "Group of Monuments at Mamallapuram",
      "Nilgiri Mountain Railway",
      "Meenakshi Temple, Madurai",
      "Brihadeeswarar Temple, Thanjavur",
    ],
    placesToKnow: ["Chennai", "Madurai", "Mahabalipuram", "Kodaikanal", "Ooty", "Kanyakumari"],
    interestingFacts: [
      "Tamil's literary tradition reaches back roughly two thousand years, to the Sangam age.",
      "The Great Living Chola Temples are a UNESCO World Heritage Site.",
      "Mamallapuram's shore temple and rathas form a UNESCO monument group.",
    ],
    image: architecture,
  },
  {
    id: "TS",
    slug: "telangana",
    name: "Telangana",
    region: "South-Central India",
    capital: "Hyderabad",
    introduction:
      "Granite and golconda — a Deccan plateau state built around a pearl city, a fortress empire, and a floral festival that turns the streets pink and gold.",
    knownFor: ["Hyderabad", "Golconda", "Bathukamma", "Pearls"],
    geography:
      "The Deccan plateau's northern arm, drained by the Godavari and Krishna, with the Balaghat range dividing the uplands and the Nallamala forest running along the south-east. The granites around Hyderabad hold thin soils and large boulders, and the Nagarjunasagar reservoir feeds the irrigated districts.",
    history:
      "The Satavahanas and Ikshvakus ruled first, the Kakatiyas built Warangal and its reservoirs, and the Bahmani and Qutb Shahi sultans made Golconda and Hyderabad famous for diamonds. The Asaf Jahi nizams ran one of the richest princely states until 1948, when Hyderabad was integrated into India. Telangana was carved out of Andhra Pradesh as the twenty-ninth state in 2014.",
    culture:
      "Hyderabad's Deccani culture mixes Telugu and Urdu — a courtly language, a shared kitchen and a music tradition that runs from the gharana to qawwali. Bathukamma, the floral festival of stacked blossoms, belongs to Telangana specifically, and Bonalu marks the goddess temples of the old cities.",
    languages: ["Telugu (official)", "Urdu (second official)"],
    cuisine:
      "Hyderabadi biryani — kacchi style, sealed and steamed — is the famous dish, joined by haleem during Ramzan and the irani chai with osmania biscuits. The Telangana districts go earthier with sarva pindi, pachi pulusu and jonna rotte.",
    festivals: ["Bathukamma", "Bonalu", "Sammakka Saralamma Jatara", "Ugadi", "Ramzan"],
    crafts: [
      "Pochampally ikat weaving",
      "Cheriyal scroll painting",
      "Nirmal toys and painting",
      "Hyderabad silverware",
      "Bidri-inspired metalwork",
    ],
    heritage: [
      "Golconda Fort",
      "Charminar and the old city",
      "Qutb Shahi Tombs",
      "Ramappa Temple",
      "Bhongir Fort",
    ],
    placesToKnow: [
      "Hyderabad",
      "Warangal",
      "Ramappa Temple",
      "Pochampally",
      "Bhadrachalam",
      "Nagarjuna Sagar",
    ],
    interestingFacts: [
      "Telangana became India's twenty-ninth state on 2 June 2014.",
      "Golconda was the medieval world's great source of famous diamonds.",
      "The Charminar was built in 1591 at the centre of the new city of Hyderabad.",
    ],
    image: architecture,
  },
  {
    id: "TR",
    slug: "tripura",
    name: "Tripura",
    region: "North-East India",
    capital: "Agartala",
    introduction:
      "A small state ringed by hills and wrapped on three sides by Bangladesh, known for bamboo craft, the Hojagiri dance and a palace on a lake.",
    knownFor: ["Bamboo Craft", "Hills", "Manikya Dynasty", "Rubber"],
    geography:
      "Low hill ranges — Longtharai, Shakthan and Atharamura — curve around a central plain, and the state is bordered by Bangladesh on three sides. The climate is warm and humid, the forests are bamboo-heavy, and the terrain rises toward the Jampui hills in the north-east.",
    history:
      "The Manikya dynasty governed from the fourteenth century until 1947, shifting its capital to Agartala in the nineteenth century. Tripura acceded to India in 1949, became a union territory in 1956 and a full state in 1972, and the Bengali settlement of the plains since Partition has sat alongside the Kokborok-speaking tribal majority of the hills.",
    culture:
      "Hojagiri — a balancing dance performed by the Reang community on earthen pots — is the state's best-known export, alongside the Garia and Lebang dances of the tribal villages. Rabindranath Tagore visited repeatedly and the state's literature runs bilingually in Bengali and Kokborok.",
    languages: ["Bengali (official)", "Kokborok (official)", "Hindi"],
    cuisine:
      "Mui borok is the tribal cuisine — fermented bamboo shoot, smoked meat and fish, and boiled rice with minimal oil. Bengali cooking takes over in the plains with fish curry and rice, and chakhui — bamboo shoot curry — appears across both.",
    festivals: ["Garia Puja", "Ker Puja", "Kharchi Puja", "Hojagiri", "Durga Puja"],
    crafts: [
      "Cane and bamboo furniture",
      "Handloom — rignai, risha and rijamphain",
      "Terracotta",
      "Wood carving",
      "Brass and bell-metal work",
    ],
    heritage: [
      "Ujjayanta Palace",
      "Neermahal lake palace",
      "Tripura Sundari Temple, Matabari",
      "Unakoti rock reliefs",
      "Jampui Hills",
    ],
    placesToKnow: ["Agartala", "Udaipur", "Neermahal", "Unakoti", "Jampui Hills", "Dambur"],
    interestingFacts: [
      "Tripura is bordered by Bangladesh on three sides.",
      "Unakoti holds one of the largest rock-cut reliefs of Shiva in India.",
      "Tripura is India's second-largest rubber producer after Kerala.",
    ],
    image: forest,
  },
  {
    id: "UP",
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "North India",
    capital: "Lucknow",
    introduction:
      "The Gangetic heartland — the Taj Mahal at one end, the ghats of Varanasi at the other, and the plain between them where empires were made and unmade.",
    knownFor: ["Taj Mahal", "Varanasi", "Awadhi Cuisine", "Kumbh Mela"],
    geography:
      "An unbroken alluvial plain spread by the Ganges and the Yamuna, with the Terai forests along the Nepalese edge and the Bundelkhand plateau drying out in the south-west. Prayagraj sits where the two great rivers meet, and the whole state drains east toward the sea.",
    history:
      "Kosala, Kashi and the kingdom of Magadha's northern reach shaped the early period, and Sarnath — outside Varanasi — is where the Buddha gave his first sermon. The Mughals built Agra and Fatehpur Sikri, the nawabs of Awadh made Lucknow a centre of courtly culture, and the revolt of 1857 began at Meerut. The plain's size and its role in 1947 gave it a political weight it has never lost.",
    culture:
      "Kathak was shaped in the courts and temples of Lucknow and Banaras, and Hindustani classical music keeps two of its great gharanas here. Awadhi tehzeeb — etiquette, dance and the courts of Lucknow — meets the Braj culture of Mathura and the banarasi world of silk and paan.",
    languages: [
      "Hindi (official)",
      "Urdu (second official)",
      "Awadhi",
      "Braj Bhasha",
      "Bhojpuri",
      "Bundeli",
    ],
    cuisine:
      "Awadhi cooking is slow and perfumed: galouti and seekh kebabs, the dum biryani, and nihari. Agra sends petha, Varanasi sends malaiyo in winter and chaat, and the flat wheat-and-lentil breakfast of bedai-aloo runs across the west.",
    festivals: [
      "Kumbh Mela at Prayagraj",
      "Ram Navami at Ayodhya",
      "Holi at Mathura",
      "Dev Deepawali at Varanasi",
      "Janmashtami",
    ],
    crafts: [
      "Banarasi silk brocade",
      "Chikankari of Lucknow",
      "Moradabad brassware",
      "Terracotta and clay craft",
      "Leatherwork of Kanpur",
    ],
    heritage: [
      "Taj Mahal, Agra",
      "Agra Fort",
      "Fatehpur Sikri",
      "The ghats of Varanasi",
      "Bara Imambara, Lucknow",
    ],
    placesToKnow: ["Agra", "Varanasi", "Lucknow", "Mathura and Vrindavan", "Ayodhya", "Prayagraj"],
    interestingFacts: [
      "The Taj Mahal, commissioned by Shah Jahan, is a UNESCO World Heritage Site.",
      "The Kumbh Mela at Prayagraj was inscribed on UNESCO's intangible heritage list in 2017.",
      "Uttar Pradesh has more districts than any other Indian state.",
    ],
    image: architecture,
  },
  {
    id: "UK",
    slug: "uttarakhand",
    name: "Uttarakhand",
    region: "Himalayan North",
    capital: "Dehradun",
    introduction:
      "Ridge after ridge of the high Himalaya, river sources, and hill settlements terraced into slopes above the mist line.",
    knownFor: ["Himalayas", "Pilgrimage", "Alpine Meadows", "River Sources"],
    geography:
      "Two hill divisions — Kumaon and Garhwal — rise from the Shivalik and Terai belt to glacier country above 7,000 m. The Bhagirathi and Alaknanda form the Ganges at Devprayag, the Yamuna rises at Yamunotri, and the Terai below holds tall sal forest and grassland.",
    history:
      "The Katyuri and Chand dynasties ruled Kumaon and Garhwal for centuries before Gorkha expansion brought the hills under one power; the British took them after the Anglo-Nepalese War of 1815. The region stayed with Uttar Pradesh until 2000, when Uttarakhand was formed as a separate hill state.",
    culture:
      "Folk forms like the Jhoda and Jagar carry songs of the devi-devta, the local deity tradition in which each valley maintains its own shrine and procession. The Nanda Devi Raj Jat, a pilgrimage that walks to the goddess's high home every twelve years, is the region's great ritual journey.",
    languages: ["Hindi (official)", "Garhwali", "Kumaoni", "Sanskrit (second official)", "Nepali"],
    cuisine:
      "Mountain cooking is light and green: kafuli of spinach, phaanu and chainsoo of lentils, aloo gutke with jimbu, and bhatt ki churkani. Almora's bal mithai and the jamun-and-honey sweets of the hills close the meal.",
    festivals: ["Nanda Devi Raj Jat", "Harela", "Phool Dei", "Ganga Dussehra", "Makar Sankranti"],
    crafts: [
      "Aipan ritual painting",
      "Wood carving of Garhwal",
      "Wool shawls and blankets",
      "Bamboo and ringal craft",
      "Brass and copper vessels",
    ],
    heritage: [
      "Char Dham — Badrinath, Kedarnath, Gangotri, Yamunotri",
      "Valley of Flowers National Park",
      "Nanda Devi National Park",
      "Jim Corbett National Park",
      "Har Ki Pauri, Haridwar",
    ],
    placesToKnow: [
      "Nainital",
      "Mussoorie",
      "Rishikesh",
      "Haridwar",
      "Auli",
      "Jim Corbett National Park",
    ],
    interestingFacts: [
      "Nanda Devi, at 7,816 m, is the highest peak lying entirely within India.",
      "The Valley of Flowers and Nanda Devi together form a UNESCO World Heritage Site.",
      "Jim Corbett, established in 1936, is India's oldest national park.",
    ],
    image: himalaya,
  },
  {
    id: "WB",
    slug: "west-bengal",
    name: "West Bengal",
    region: "Eastern India",
    capital: "Kolkata",
    introduction:
      "From the Sundarbans delta to the Darjeeling hills, a state defined by rivers, print culture and an enormous public festival life.",
    knownFor: ["Delta", "Literature", "Festivals", "Terracotta"],
    geography:
      "The Ganges splits into the Sundarbans delta before reaching the sea, while the northern districts climb from the Rarh plains to the Darjeeling and Kalimpong ridges of the Eastern Himalaya. The Chota Nagpur fringe enters at Purulia, and the whole state is shaped by silt, monsoon and river movement.",
    history:
      "The Pala and Sena dynasties ruled Bengal, then the Mughals from Murshidabad, and Calcutta became the capital of British India in 1777. The Bengal Renaissance produced Bankim, Tagore and a print culture that outlasted empire; the Partition of 1947 divided the province along religious lines, and the present state was formed in 1950.",
    culture:
      "Rabindra Sangeet and Nazrul Geeti are sung in every household, the Baul singers of the rural east carry a mystical song tradition, and Durga Puja transforms Kolkata each autumn into an open-air gallery of temporary architecture. Santiniketan, Tagore's university town, keeps the arts-and-crafts lineage alive.",
    languages: ["Bengali (official)", "Nepali", "Santali", "Hindi", "Urdu"],
    cuisine:
      "Fish and rice is the base — shorshe ilish with mustard, machher jhol, and the panch phoron tempering. The sweet tradition is unmatched: rasgulla, sandesh, mishti doi, and the nolen gur of winter, with luchi-alur dom as the festive plate.",
    festivals: ["Durga Puja", "Poush Mela", "Poila Boishakh", "Saraswati Puja", "Rath Yatra"],
    crafts: [
      "Kantha embroidery",
      "Baluchari and Jamdani sarees",
      "Terracotta temples of Bishnupur",
      "Kumartuli idol-making",
      "Shantiniketan leather craft",
    ],
    heritage: [
      "Sundarbans National Park",
      "Darjeeling Himalayan Railway",
      "Santiniketan",
      "Bishnupur terracotta temples",
      "Victoria Memorial, Kolkata",
    ],
    placesToKnow: ["Kolkata", "Darjeeling", "Sundarbans", "Santiniketan", "Bishnupur", "Kalimpong"],
    interestingFacts: [
      "Kolkata's Durga Puja was inscribed on UNESCO's intangible heritage list in 2021.",
      "The Darjeeling Himalayan Railway is a UNESCO World Heritage Site.",
      "Santiniketan, Tagore's university town, became a UNESCO World Heritage Site in 2023.",
    ],
    image: festival,
  },
  {
    id: "JK",
    slug: "jammu-and-kashmir",
    name: "Jammu & Kashmir",
    region: "Himalayan North",
    capital: "Srinagar (summer) · Jammu (winter)",
    introduction:
      "Valleys, high pasture and lake towns beneath the western Himalaya, with a craft tradition of shawls, walnut wood and papier-mache.",
    knownFor: ["Valleys", "Shawls", "Alpine Lakes", "Houseboats"],
    geography:
      "Three regions divide the territory: the foothill country of Jammu, the Kashmir Valley ringed by the Pir Panjal and Great Himalayan ranges, and the high cold desert of Ladakh to the east. The Jhelum runs through Srinagar, and alpine meadows — gulmarg, pahalgam — open above the orchard belt.",
    history:
      "Kashmir was a centre of Shaivite philosophy and Sanskrit learning, ruled in turn by Hindu and Muslim dynasties before the Afghan and Sikh periods. The Dogra ruler Gulab Singh acquired the territory in 1846, and the state acceded to India in 1947. In 2019 the region was reorganised into union territories.",
    culture:
      "The wazwan — the elaborate multi-course feast — is the centre of Kashmiri Muslim hospitality, while the valley's Pandit tradition preserved Sanskrit learning and rituals. Chinar-lined gardens, shikara life on Dal Lake and saffron fields at Pampore give the culture its landscape.",
    languages: ["Kashmiri", "Urdu (official)", "Dogri", "Gojri", "Hindi"],
    cuisine:
      "Wazwan is the ceremonial meal: rogan josh, gustaba, tabak maaz and doh pyaza, all built on lamb. Dum aloo and nadru lotus stem fill the vegetarian side, and kahwa — green tea with saffron and almond — is poured through the day.",
    festivals: [
      "Eid",
      "Tulip Festival",
      "Mela Kheer Bhawani",
      "Urs at Charar-e-Sharif",
      "Shikara festivals",
    ],
    crafts: [
      "Pashmina shawls",
      "Kashmiri carpets",
      "Papier-mache",
      "Walnut wood carving",
      "Aari embroidery and tilla work",
    ],
    heritage: [
      "Dal Lake and the Mughal Gardens",
      "Jama Masjid, Srinagar",
      "Vaishno Devi, Katra",
      "Gulmarg",
      "Shankaracharya Temple",
    ],
    placesToKnow: ["Srinagar", "Gulmarg", "Pahalgam", "Jammu", "Sonamarg", "Patnitop"],
    interestingFacts: [
      "Dal Lake's shikaras and houseboats are a defining image of Srinagar.",
      "The Mughal gardens were laid out along the lake's edge in the seventeenth century.",
      "Srinagar's tulip garden, opened in 2008, is billed as Asia's largest.",
    ],
    image: himalaya,
  },
];

/** Case-insensitive slug lookup used by the `/states/:state` route. */
export function getStateBySlug(slug: string): StateDetail | undefined {
  const key = slug.trim().toLowerCase();
  return STATE_DETAILS.find((state) => state.slug === key);
}

/** Map SVG shape id (e.g. `RJ`) to its state record, if one exists. */
export function getStateDetailById(id: string): StateDetail | undefined {
  return STATE_DETAILS.find((state) => state.id === id);
}

/**
 * Map SVG shape id → URL slug. Returns `undefined` for shapes that have no
 * detail record yet (e.g. union territories), so callers can hide the link
 * instead of pointing at a dead page.
 */
export function stateSlugForId(id: string): string | undefined {
  return getStateDetailById(id)?.slug;
}

/** Next record in the atlas, used by "Explore another state". */
export function getNextStateDetail(slug: string): StateDetail {
  const index = STATE_DETAILS.findIndex((state) => state.slug === slug);
  const next = (index + 1) % STATE_DETAILS.length;
  return STATE_DETAILS[next] as StateDetail;
}
