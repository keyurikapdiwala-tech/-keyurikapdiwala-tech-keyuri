import { ServiceItem, PricingItem, FAQItem, TestimonialItem, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: 'Gargi Ladies Tailor',
  owner: 'Janak Kapadiwala',
  phone: '+91 6352902879',
  phoneFormatted: '+91 63529 02879',
  address: 'B-2 parekh mahel app near zapa bazar, moti tokish, Surat, Gujarat, India',
  instagram: 'kapadiwalajanak',
  hours: {
    weekdays: 'Monday - Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: Closed',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8248590832044!2d72.825832!3d21.199127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6c739d6771%3A0x67db45f5d81b2bfb!2sZampa%20Bazaar%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1719824859083!5m2!1sen!2sin'
};

export const PATTERN_CHARGES = [
  { name: 'Simple Dress', price: '₹350' },
  { name: 'Lined Dress (With Lining)', price: '₹600' },
  { name: 'Simple Blouse', price: '₹300' },
  { name: 'Lined Blouse (With Lining)', price: '₹450' },
  { name: 'Princess Cut Blouse', price: '₹600' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'blouse-stitching',
    title: 'Blouse Stitching',
    description: 'Perfect-fit custom blouse stitching with neat piping, invisible zippers, and customizable cups.',
    iconName: 'Scissors'
  },
  {
    id: 'designer-blouse',
    title: 'Designer Blouse',
    description: 'Trendy necklines, backless designs, balloon sleeves, bow-ties, and premium laced borders.',
    iconName: 'Palette'
  },
  {
    id: 'bridal-blouse',
    title: 'Bridal Blouse',
    description: 'Intricate zardozi, heavy aari embroidery, maggam work, stone styling, and customized tassels (latkans).',
    iconName: 'Sparkles'
  },
  {
    id: 'kurti-stitching',
    title: 'Kurti Stitching',
    description: 'A-line, flared, high-neck, collar-style, and traditional kurtis stitched with fine precision.',
    iconName: 'Shirt'
  },
  {
    id: 'dress-stitching',
    title: 'Dress Stitching',
    description: 'Custom designer dresses, long gowns, western-style maxis, and double-layered umbrella frocks.',
    iconName: 'Layers'
  },
  {
    id: 'lehenga-stitching',
    title: 'Lehenga Stitching',
    description: 'Flawless panel alignment, custom belt design, heavy cancan layering, and matching blouse setups.',
    iconName: 'Sparkle'
  },
  {
    id: 'salwar-suit-stitching',
    title: 'Salwar Suit Stitching',
    description: 'Classic Punjabi suits, heavy Patiala salwar, palazzo sets, and narrow straight pants.',
    iconName: 'Flower'
  },
  {
    id: 'alteration',
    title: 'Alteration',
    description: 'Premium adjustments and resizing of old/new apparel to hug your shape flawlessly.',
    iconName: 'Compass'
  },
  {
    id: 'fall-pico',
    title: 'Fall Pico',
    description: 'Secure, clean saree fall attachments and computerized pico rolling for flawless drapes.',
    iconName: 'Waves'
  },
  {
    id: 'custom-design',
    title: 'Custom Design',
    description: 'Co-create a garment from scratch. Bring raw fabrics, and we will sketch and stitch your vision.',
    iconName: 'Heart'
  },
  {
    id: 'wedding-collection',
    title: 'Wedding Collection',
    description: 'Grand bride and bridesmaids sets, customized ethnic coordinates, and cohesive theme tailoring.',
    iconName: 'Crown'
  },
  {
    id: 'kids-dress-stitching',
    title: 'Kids Dress Stitching',
    description: 'Skin-safe, soft-lined traditional lehengas, designer frocks, and ethnic coordinates for little girls.',
    iconName: 'Smile'
  }
];

export const PRICING_LIST: PricingItem[] = [
  { name: 'Simple Blouse', price: '₹300+', category: 'Blouse' },
  { name: 'Lined Blouse (With Lining)', price: '₹450+', category: 'Blouse' },
  { name: 'Princess Cut Blouse', price: '₹600+', category: 'Blouse' },
  { name: 'Designer Blouse (Custom Back/Neck)', price: '₹650+', category: 'Blouse' },
  { name: 'Bridal Blouse (Heavy Embroidery)', price: '₹1,500+', category: 'Bridal' },
  { name: 'Simple Kurti Stitching', price: '₹250+', category: 'Dress' },
  { name: 'Simple Dress', price: '₹350+', category: 'Dress' },
  { name: 'Lined Dress (With Lining)', price: '₹600+', category: 'Dress' },
  { name: 'Lehenga Stitching (Semi-Stitched)', price: '₹800+', category: 'Lehenga' },
  { name: 'Designer Lehenga Stitching (With Cancan)', price: '₹1,800+', category: 'Lehenga' },
  { name: 'Salwar Suit Stitching (Complete Set)', price: '₹650+', category: 'Suit' },
  { name: 'Anarkali Dress / Gown Stitched', price: '₹900+', category: 'Suit' },
  { name: 'Saree Fall & Pico Stitches', price: '₹100', category: 'Alterations' },
  { name: 'Dress / Blouse Alteration (Fitting)', price: '₹80+', category: 'Alterations' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Tailor',
    description: 'Headed by Janak Kapadiwala with years of mastered expertise in bridal and modern silhouettes.',
    icon: 'Award'
  },
  {
    title: 'Perfect Fitting',
    description: 'We believe a great dress starts with zero-error measuring. Fits beautifully on your first trial.',
    icon: 'CheckCircle'
  },
  {
    title: 'Affordable Price',
    description: 'Luxury tailoring that doesn’t drain your pocket. Completely transparent pricing structure.',
    icon: 'DollarSign'
  },
  {
    title: 'On-Time Delivery',
    description: 'We value your celebrations. Guaranteed deliveries on or before your promised date.',
    icon: 'Clock'
  },
  {
    title: 'Premium Finishing',
    description: 'Smooth seams, invisible zippers, balanced necklines, and premium inner piping work.',
    icon: 'Shield'
  },
  {
    title: 'Latest Fashion Designs',
    description: 'Continuously updated with celebrity trends, Instagram-viral necklines, and modern patterns.',
    icon: 'TrendingUp'
  },
  {
    title: 'Customized Stitching',
    description: 'Every garment is stitched according to your dynamic style preferences and lifestyle comfort.',
    icon: 'User'
  },
  {
    title: '100% Customer Satisfaction',
    description: 'Free post-stitching adjustments until you are completely in love with the fitting and finish.',
    icon: 'ThumbsUp'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Priyanka Patel',
    rating: 5,
    review: 'Gargi Ladies Tailor stitched my wedding reception lehenga blouse. The princess cut fits like a glove, and the hand-embroidered kundan detailing matches my necklace beautifully! Janakbhai is extremely patient.',
    date: 'June 2026',
    tag: 'Bridal Blouse'
  },
  {
    name: 'Anjali Shah',
    rating: 5,
    review: 'The fitting was absolutely perfect! I gave 4 simple kurtis and 2 lined blouses. All delivered within 4 days. The finishing is excellent, and the piping is super neat. Highly recommended ladies tailor in Surat.',
    date: 'May 2026',
    tag: 'Custom Stitching'
  },
  {
    name: 'Kajal Mehta',
    rating: 5,
    review: 'Outstanding craftsmanship. They transformed my raw banarasi fabric into an exquisite royal gown. Also, they did perfect alterations for three designer dresses I bought online. Truly professional.',
    date: 'April 2026',
    tag: 'Dress Stitching'
  },
  {
    name: 'Sneha Kapadia',
    rating: 5,
    review: 'Excellent bridal blouse work with amazing finishing. They added customized heavy latkans and did a princess-cut with cups. It was delivered 2 days before the wedding, which was such a relief!',
    date: 'March 2026',
    tag: 'Bridal Collection'
  },
  {
    name: 'Dhara Vasoya',
    rating: 5,
    review: 'Very professional stitching and timely delivery. I regularly get my kurtis and salwar suits stitched here. The princess cut blouse charges are very reasonable compared to expensive high-street boutiques.',
    date: 'February 2026',
    tag: 'Regular Wear'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How many days does stitching take?',
    answer: 'Our standard stitching time is 5 to 7 days for regular kurtis and simple blouses. For heavy bridal blouses, designer lehengas, or complex wedding orders, it takes around 10 to 15 days depending on the embroidery handwork required.'
  },
  {
    question: 'Do you stitch bridal wear and heavy wedding dresses?',
    answer: 'Yes! We specialize in premium bridal blouse stitching, wedding lehengas, designer reception gowns, and bridesmaid outfits. We do beautiful custom hand embroidery (zardozi, aari, kundan) to match your bridal themes.'
  },
  {
    question: 'Can I bring my own fabric and design references?',
    answer: 'Absolutely. You are welcome to bring your own raw dress materials, sarees, or fabrics. You can also show us any reference photo from Instagram, Pinterest, or celebrity outfits, and we will custom-stitch the exact same design for you.'
  },
  {
    question: 'Do you provide alteration and adjustment services?',
    answer: 'Yes, we do custom alterations for all types of ladies wear—including resizing readymade dresses, adjusting shoulders, tightening blouse chests, adding sleeve extensions, or inserting high-quality lining.'
  },
  {
    question: 'Do you accept urgent orders?',
    answer: 'Yes, we accept express/urgent orders (24 to 48 hours delivery) for simple dresses and regular blouses at a nominal premium charge. Please discuss the timeline with Janakbhai directly when dropping off your fabric.'
  },
  {
    question: 'Are design components like zippers, lining, and pads provided by you?',
    answer: 'Yes! We use high-quality cotton lining fabrics, premium YKK zippers, and breathable sewing pads. These can be supplied by us (billed extra as per actual costs) or you can provide your own along with the dress material.'
  }
];

export const GALLERY_CATEGORIES = [
  'All',
  'Designer Blouse',
  'Bridal Collection',
  'Lehenga',
  'Kurti',
  'Party Wear',
  'Traditional Wear',
  'Before & After Alteration'
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Intricate Gold Kundan & Zardozi Royal Blouse',
    category: 'Designer Blouse',
    imageUrl: '/src/assets/images/designer_blouse_1782902379449.jpg' // custom generated
  },
  {
    id: 'g2',
    title: 'Royal Deep Maroon Bridal Lehenga with Heavy Cancan',
    category: 'Bridal Collection',
    imageUrl: '/src/assets/images/bridal_lehenga_1782902395218.jpg' // custom generated
  },
  {
    id: 'g3',
    title: 'Luxury Velvet Saree Blouse with Floral Hand Embroidery',
    category: 'Designer Blouse',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g4',
    title: 'Golden Silk Lehenga Skirt with Custom Pleating',
    category: 'Lehenga',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g5',
    title: 'Elegant Pastel Pink Designer Georgette Anarkali Gown',
    category: 'Party Wear',
    imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g6',
    title: 'Contemporary Indigo Printed Cotton Kurti with Mandarin Collar',
    category: 'Kurti',
    imageUrl: '/src/assets/images/indigo_cotton_kurti_1782903532063.jpg'
  },
  {
    id: 'g7',
    title: 'Traditional Banarasi Brocade Blouse with Elbow Sleeves',
    category: 'Traditional Wear',
    imageUrl: '/src/assets/images/banarasi_brocade_blouse_1782903544048.jpg'
  },
  {
    id: 'g8',
    title: 'Bespoke Bridal Choli on Display - Premium Fitting Trial',
    category: 'Bridal Collection',
    imageUrl: '/src/assets/images/hero_tailor_shop_1782902365647.jpg' // custom generated
  },
  {
    id: 'g9',
    title: 'Precision Stitching adjustments & Seam Alignments',
    category: 'Before & After Alteration',
    imageUrl: '/src/assets/images/tailoring_workspace_1782902412008.jpg' // custom generated
  },
  {
    id: 'g10',
    title: 'Perfect Waist Alterations for Readymade Designer Outfits',
    category: 'Before & After Alteration',
    imageUrl: '/src/assets/images/waist_alterations_1782903556395.jpg'
  },
  {
    id: 'g11',
    title: 'Premium Handwoven Silk Lehenga with Gold Borders',
    category: 'Lehenga',
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g12',
    title: 'Heavy Zardozi Embellishments for Bridal Wear',
    category: 'Traditional Wear',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600'
  }
];
