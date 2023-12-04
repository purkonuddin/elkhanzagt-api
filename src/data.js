const dSponsor = [
  { id: 1, name: "Taco", logo_url: "" },
  { id: 1, name: "Huben", logo_url: "" },
  { id: 1, name: "Propan", logo_url: "" },
  { id: 1, name: "Sanpolac", logo_url: "" },
  { id: 1, name: "Bintang Sakti", logo_url: "" },
];

const dMainContent = [
  {
    id: 1,
    title: "",
    description: "",
    img_url: "",
    page: "service",
  },
  {
    id: 2,
    title: "",
    description: "",
    img_url: "",
    page: "how-we-work",
  },
  {
    id: 3,
    title: "",
    description: "",
    img_url: "",
    page: "project",
  },
  {
    id: 4,
    title: "",
    description: "",
    img_url: "",
    page: "about",
  },
  {
    id: 5,
    title: "",
    description: "",
    img_url: "",
    page: "contact",
  },
  {
    id: 6,
    title: "",
    description: "",
    img_url: "",
    page: "tim",
  },
];

const dCostPerCategory = [
  {
    id: 1,
    category: "Design dan RAB",
    currency: "Rp.",
    cost_str: "150K",
    cost_min: 80000,
    cost_max: 3500000,
    products: [
      { sub_id: 1, prod_name: "3d Desain" },
      { sub_id: 2, prod_name: "2D Layout" },
      { sub_id: 3, prod_name: "RAB" },
    ],
    description:
      "Desain interior mulai 150K atau 5 - 10 % dari total nilai projek.",
    img_url:
      "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Produksi",
    currency: "Rp.",
    cost_str: "2Jt",
    cost_min: 1000000,
    cost_max: 3500000,
    products: [
      { sub_id: 1, prod_name: "Kitchen Set" },
      { sub_id: 2, prod_name: "Furniture" },
      { sub_id: 3, prod_name: "Apartment Set, dll" },
    ],
    description:
      "Pembuatan mebel custom termasuk kitchen set, furniture dan lainnya hingga instalasi mulai dari 2Jt, disesuaikan dengan harga dan qualitas material",
    img_url:
      "https://images.unsplash.com/photo-1615974679548-2fcfd4699f62?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    category: "Pemeliharaan",
    currency: "Rp.",
    cost_str: "1Jt",
    cost_min: 1000000,
    cost_max: 3500000,
    products: [
      { sub_id: 1, prod_name: "perbaikan" },
      { sub_id: 2, prod_name: "Pengecatan" },
      { sub_id: 3, prod_name: "Instalasi" },
    ],
    description:
      "Perbaikan furniture hingga finishing ulang mulai dari 1Jt, disesuaikan dengan harga dan qualitas material",
    img_url:
      "https://plus.unsplash.com/premium_photo-1664300522937-e4cb38b5a66c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const dTim = [
  {
    id: 1,
    nama: "H. Haris",
    jabatan: "Pimpinan",
    foto_profile:
      "https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    nama: "Mr. Bambang",
    jabatan: "Manajer Teknik",
    foto_profile:
      "https://plus.unsplash.com/premium_photo-1675884829500-72e4441e333b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    nama: "Mrs. Tyas",
    jabatan: "Interior Designer",
    foto_profile:
      "https://plus.unsplash.com/premium_photo-1682145923874-a40998cf831c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const dProfile = [
  {
    id: "1",
    name: "Elkhanza Griya Teknindo PT",
    username: "elkhanza griya teknindo",
    email_1: "workshopo@elkhanzagt.com",
    email_2: "workshop@uqonstd.xyz",
    phone_number: "088809132637",
    wa_number: "088809132637",
    address_office:
      "Jl. Kemakmuran raya no 08, kel. Margajaya, Bekasi Barat, Kota Bekasi",
    address_workshop:
      "Jl. Kemakmuran raya no 08, kel. Margajaya, Bekasi Barat, Kota Bekasi",
    password: "pass1234",
  },
];

const dKategory = [
  {
    id: "1",
    kode: "mckcs",
    name: "kitchen_set",
  },
  {
    id: "2",
    kode: "mcks",
    name: "kamar_set",
  },
  {
    id: "3",
    kode: "mcapts",
    name: "apartment_set",
  },
  {
    id: "4",
    kode: "mcofcs",
    name: "office_set",
  },
  {
    id: "5",
    kode: "mclvr",
    name: "living_room",
  },
  {
    id: "6",
    kode: "mcbtr",
    name: "bath_room",
  },
  {
    id: "7",
    kode: "mcll",
    name: "lain_lain",
  },
  {
    id: "8",
    kode: "frntrchc",
    name: "couch",
  },
  {
    id: "9",
    kode: "frntrchr",
    name: "chair",
  },
  {
    id: "10",
    kode: "frntrshf",
    name: "shelf",
  },
  {
    id: "11",
    kode: "frntrdcrtn",
    name: "decoration",
  },
  {
    id: "12",
    kode: "frntrdrwr",
    name: "drawer",
  },
  {
    id: "13",
    kode: "frntrlmp",
    name: "lamp",
  },
  {
    id: "14",
    kode: "frntrtbl",
    name: "table",
  },
  {
    id: "15",
    kode: "frntrvs",
    name: "vase",
  },
];

/**
 * mebel custom (mc)
 * - kitchen set (kcs)
 * - kamar set (kms)
 * - apartment set (apts)
 * - office set (ofcs)
 * - living room (lvr)
 * - bathroom (btr)
 * - lain-lain (ll)
 * furniture (frntr)
 * - couch (chc)
 * - chair
 * - shelf
 */

const dFurniture = [
  {
    id: "mkbtr1",
    type: "bathroom",
    name: "BedRoom",
    description:
      "Tempat tidur dan nakas dengan material multyplek dan dilaminasi HPL Taco dengan drawer sentuh slow motion ",
    currency: "Rp",
    price: 2500000,
    img_link:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mkbtr1",
    type: "living_room",
    name: "Bath Room",
    description: "Kabinet dan cermin pada ruang mandi ",
    currency: "Rp",
    price: 3000000,
    img_link:
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mklvr1",
    type: "living_room",
    name: "Living Room",
    description:
      "Ruang keluarga dengan sofa, meja, kabinet rak dan backdrop TV",
    currency: "Rp",
    price: 3000000,
    img_link:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mkapts1",
    type: "apartment_set",
    name: "Apartment Set",
    description:
      "Apartment Set meliputi kitchen set, lemari pakaian, meja, cabinet dan tempat tidur, dengan material flywood dan laminasi HPL",
    currency: "Rp",
    price: 3500000,
    img_link:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "mckcs1",
    type: "kitchen_set",
    name: "Kitchen Set",
    description:
      "kitchen, kitchen counter, cabinets and cabinetry. kitchen set dengan material flaywood dengan finishing duco putih dan hitam, kitchen atas dengan pintu kaca frame kayu.",
    currency: "Rp",
    price: 2500000,
    img_link:
      "https://images.unsplash.com/photo-1631048498692-af6262577031?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "frntrchc1",
    type: "couch",
    name: "Single Couch",
    description:
      "Sofa kecil untuk satu orang yang sangat cocok untuk santai serambi membaca buku atau menyeduh teh hangat",
    currency: "Rp",
    price: 1599000,
    img_link:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
  },
  {
    id: "frntrchc2",
    type: "couch",
    name: "Big Size Sofa",
    description:
      "Sofa dengan ukuran besar yang cocok untuk berkumpul dengan keluarga, menggunakan busa super-soft yang dilapisi dengan bahan yang halus dan lembut sehingga nyaman di kulit",
    currency: "Rp",
    price: 2599000,
    img_link:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80",
  },
  {
    id: "frntrchc3",
    type: "couch",
    name: "Big Size Leather Sofa",
    description:
      "Sofa dengan ukuran besar yang cocok untuk berkumpul dengan keluarga, menggunakan busa super-soft yang dilapisi dengan bahan kulit berkualitas sehingga nyaman di kulit dan tidak mudah retak",
    currency: "Rp",
    price: 4599000,
    img_link:
      "https://images.unsplash.com/photo-1628512743826-2c28a508ad5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    id: "frntrchr1",
    type: "chair",
    name: "Single Black Chair",
    description:
      "Bangku dengan bahan kayu sebagai kaki-kaki dan plastik berkualitas tinggi sebagai sandaran yang dilapisi dengan busa super-soft sehingga nyaman digunakan untuk waktu yang lama",
    currency: "Rp",
    price: 599000,
    img_link:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: "frntrchr2",
    type: "chair",
    name: "Simple Cafe Chair",
    description:
      "Bangku kayu tinggi yang cocok untuk dapur dengan gaya cafe, menggunakan kayu kualitas tinggi sehingga awet dan tidak mudah lapuk",
    currency: "Rp",
    price: 199000,
    img_link:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrchr3",
    type: "chair",
    name: "Simple Metal Chair",
    description:
      "Bangku yang terbuat dari material metal yang tidak mudah berkarat dan juga kuat",
    currency: "Rp",
    price: 299000,
    img_link:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrshlf1",
    type: "shelf",
    name: "Long Hanging Shelf",
    description:
      "Rak dinding minimalis berbahan kayu kualitas tinggi dengan ukuran yang panjang, cocok untuk menghias ruang tamu untuk terlihat lebih elegan",
    currency: "Rp",
    price: 159000,
    img_link:
      "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: "frntrshlf2",
    type: "shelf",
    name: "Trigonometri Hanging Shelf",
    description:
      "Rak dinding berbahan kayu kualitas tinggi dengan penyangga berbahan metal yang berbentuk trigonometri menjadikannya terlihat minimalis dan elegan untuk diletakkan di sisi ruangan manapun",
    currency: "Rp",
    price: 359000,
    img_link:
      "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80",
  },
  {
    id: "frntrshlf3",
    type: "shelf",
    name: "Bed-Side Shelf",
    description:
      "Rak kecil yang sekaligus adalah meja yang cocok diletakkan di sisi ranjang anda untuk menyimpan buku yang sedang anda baca sekaligus minuman dan makanan pendampingnya",
    currency: "Rp",
    price: 829000,
    img_link:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrlmp1",
    type: "lamp",
    name: "Architec Lamp",
    description:
      "Lampu arsitek elegan dengan desain minimalis yang cocok untuk memberikan efek ambience di sudut ruangan ataupun pada meja kerja anda",
    currency: "Rp",
    price: 329000,
    img_link:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrlmp2",
    type: "lamp",
    name: "Wooden Hanging Lamp",
    description:
      "Lampu gantung dengan gaya geometris dan menggunakan tekstur kayu sehingga menghasilkan desain yang elegan dan tentu saja minimalis",
    currency: "Rp",
    price: 289000,
    img_link:
      "https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrlmp3",
    type: "lamp",
    name: "Mini Arrchitec Lamp",
    description:
      "Lampu arsitek ukuran kecil dengan desain yang elegandan minimalis, cocok untuk diletakkan pada meja kerja atau belajar anda",
    currency: "Rp",
    price: 289000,
    img_link:
      "https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrvs1",
    type: "vase",
    name: "Clear Minimalist Vase",
    description:
      "Vas bunga kaca bening dengan desain elegan, cocok untuk diletakkan di ruang tamu",
    currency: "Rp",
    price: 249000,
    img_link:
      "https://images.unsplash.com/photo-1581912492723-688317ba2162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80",
  },
  {
    id: "frntrvs2",
    type: "vase",
    name: "Petal Vase",
    description:
      "Vas bunga kaca putih dengan desain unik yang melambangkan ketenangan dan kehangatan, dapat diletakkan pada meja keluarga",
    currency: "Rp",
    price: 289000,
    img_link:
      "https://images.unsplash.com/photo-1612620535624-f6695d4864bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: "frntrvs3",
    type: "vase",
    name: "Hanano Vase",
    description:
      "Vas bunga kaca bening dengan aksen smoke-brown dan desain tabung mengerucut yang menghasilkan efek full tetapi dengan gaya yang minimalis",
    currency: "Rp",
    price: 269000,
    img_link:
      "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrdrwr1",
    type: "drawer",
    name: "Single Drawer Set",
    description:
      "Laci single yang memiliki 3 tingkat dengan bagian bawah adalah laci yang terbesar, mengusung desain yang minimalis sehingga laci ini cocok untuk diletakkan di ruang keluarga maupun ruang tamu",
    currency: "Rp",
    price: 429000,
    img_link:
      "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrtbl1",
    type: "table",
    name: "Round Simple Table",
    description:
      "Meja dengan desain bulat yang minimalis, menggunakan kayu sebagai kaki-kakinya dan plastik berkualitas tinggi untuk daun mejanya menjadikan meja ini cocok untuk digunakan indoor maupun outdoor",
    currency: "Rp",
    price: 659000,
    img_link:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: "frntrdcr1",
    type: "decoration",
    name: "Artificial Succulen Plant Set",
    description:
      "Tumbuhan sukulen imitasi berbahan plastik dengan tingkat kemiripan 99% dengan yang asli, cocok untuk menghias meja kerja anda dan memberikan nuansa hijau untuk menyegarkan mata",
    currency: "Rp",
    price: 99000,
    img_link:
      "https://images.unsplash.com/photo-1595351475754-8a520e0bc3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: "frntrdcr2",
    type: "decoration",
    name: "Artificial Cactus Set",
    description:
      "Tumbuhan kaktus imitasi berbahan plastik dengan tingkat kemiripan 99% dengan yang asli, cocok untuk menghias ruang keluarga dan memberikan nuansa kesegaran ditengah gurun",
    currency: "Rp",
    price: 149000,
    img_link:
      "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "frntrdcr3",
    type: "decoration",
    name: `Poster "GET SHIT DONE"`,
    description: `Poster bertuliskan "GET SHIT DONE" dengan desain minimalis dan frame kayu berkualitas, cocok untuk dipajang di ruangan kerja anda`,
    currency: "Rp",
    price: 179000,
    img_link:
      "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

module.exports = {
  dFurniture,
  dProfile,
  dKategory,
  dMainContent,
  dCostPerCategory,
  dTim,
  dSponsor,
};
