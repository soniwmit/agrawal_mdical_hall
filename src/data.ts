import { 
  FAQItem, 
  TestimonialItem, 
  ServiceItem, 
  CategoryItem, 
  GalleryItem, 
  TimelineItem, 
  ValueItem,
  MedicineSearchItem
} from './types';

export const BUSINESS_INFO = {
  name: "AGRAWAL MEDICAL HALL",
  legalName: "Agrawal Medical Hall",
  category: "Pharmacy | Medical Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  address: "AGARWAL MEDICAL HALL, Pai Bigha, Bihar 804424",
  googleMapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1584872167733!2d85.03154817537637!3d25.028678238505517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2eb5aa882dfbf%3A0xc6a8040449d0342b!2sAGARWAL%20MEDICAL%20HALL!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.app.goo.gl/9ZpZJz82P85v6DqS7",
  phone: "07480860951",
  formattedPhone: "+91 74808 60951",
  whatsapp: "917480860951",
  email: "agrawalmedicalhall@gmail.com",
  owner: "Mr. Agrawal & Family",
  foundedYear: "1998",
  workingHours: [
    { days: "Monday - Saturday", hours: "08:00 AM - 09:30 PM" },
    { days: "Sunday", hours: "09:00 AM - 04:00 PM" }
  ],
  emergencyPhone: "07480860951"
};

export const VALUES: ValueItem[] = [
  {
    id: "v1",
    title: "100% Genuineness",
    description: "Every strip, bottle, and equipment we sell is sourced directly from certified pharmaceutical distributors with strict quality checks.",
    iconName: "ShieldAlert"
  },
  {
    id: "v2",
    title: "Community First",
    description: "Serving Pai Bigha and surrounding villages with care, warmth, and reliable medical guidance for over two decades.",
    iconName: "Heart"
  },
  {
    id: "v3",
    title: "Affordable Access",
    description: "We work diligently to ensure maximum discounts on essential life-saving medicines for our customers.",
    iconName: "BadgeIndianRupee"
  },
  {
    id: "v4",
    title: "Reliable Support",
    description: "Available for consultation, emergency requests, and convenient WhatsApp ordering for elders and busy families.",
    iconName: "MessageCircle"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    year: "1998",
    title: "The Humble Beginning",
    description: "Agrawal Medical Hall was founded in Pai Bigha with a simple vision: to make genuine life-saving medicines accessible to our local rural and semi-urban communities."
  },
  {
    id: "t2",
    year: "2008",
    title: "Expanded Catalog",
    description: "Introduced dedicated baby care, surgical items, and essential diagnostic devices like BP monitors and Glucometers to the store."
  },
  {
    id: "t3",
    year: "2018",
    title: "Modernized Inventory",
    description: "Upgraded to cold-chain refrigeration units for sensitive vaccines and insulin, guaranteeing temperature-controlled storage."
  },
  {
    id: "t4",
    year: "2026",
    title: "Going Digital with Care",
    description: "Launched easy digital prescription sharing and WhatsApp support to facilitate home delivery and quick counter collections for local patrons."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Genuine Medicines",
    description: "Sourced directly from authorized manufacturers and wholesalers. No counterfeit products, ever.",
    icon: "ShieldCheck"
  },
  {
    title: "Experienced Staff",
    description: "Our staff is highly knowledgeable and assists you with precise dosage schedules and guidelines.",
    icon: "Users"
  },
  {
    title: "Affordable Prices",
    description: "We offer genuine discounts and generic alternatives to make your healthcare budget manageable.",
    icon: "BadgePercent"
  },
  {
    title: "Fast Service",
    description: "Get your medicines instantly at our counter or pre-packed for seamless collection.",
    icon: "Zap"
  },
  {
    title: "Prescription Medicines",
    description: "Accurate dispensing of prescription formulations under stringent verification guidelines.",
    icon: "FileText"
  },
  {
    title: "Healthcare Products",
    description: "Wide collection of wellness supplements, baby products, orthopedic supports, and personal care.",
    icon: "Activity"
  },
  {
    title: "Trusted Local Pharmacy",
    description: "Over 25 years of standing reputation in Pai Bigha, Bihar. We are a part of your family's health journey.",
    icon: "Sparkles"
  },
  {
    title: "Easy WhatsApp Support",
    description: "Simply snapshot your prescription, send it on WhatsApp, and we will keep your medicine parcel ready.",
    icon: "MessageSquareText"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Prescription Medicines",
    description: "We dispense high-quality, genuine prescription pharmaceuticals for chronic and acute illnesses. Backed by direct supplier verification.",
    iconName: "FileSpreadsheet",
    features: ["Cold-chain storage for vaccines & insulin", "Batch tracking and expiry checks", "Expert dosage instructions"]
  },
  {
    id: "s2",
    title: "OTC & General Medicines",
    description: "Comprehensive stock of Over-The-Counter medicines for common ailments like fever, cold, acidity, and minor pain relief.",
    iconName: "Pill",
    features: ["Pain management formulas", "Digestive and acid reflux care", "Allergy & cough relief formulations"]
  },
  {
    id: "s3",
    title: "Health Supplements",
    description: "Vitamins, multi-minerals, protein powders, and immunity boosters from leading brands to keep your health on track.",
    iconName: "Dumbbell",
    features: ["Protein supplements for energy", "Vitamins & Calcium tablets", "Pediatric & geriatric health drinks"]
  },
  {
    id: "s4",
    title: "Baby Care Products",
    description: "Everything you need for your infant's delicate care, including baby food, powders, oils, diapers, and gentle lotions.",
    iconName: "Baby",
    features: ["Top infant formulas", "Hypoallergenic skin care", "Diapers & baby hygiene wipes"]
  },
  {
    id: "s5",
    title: "Personal Care Products",
    description: "Daily personal hygiene and skin wellness products including soaps, shampoos, oral hygiene, and premium creams.",
    iconName: "Sparkles",
    features: ["Therapeutic skin lotions", "Advanced oral hygiene systems", "Hair and scalp wellness products"]
  },
  {
    id: "s6",
    title: "Medical Equipment",
    description: "Diagnostic devices for monitoring chronic health conditions from the safety of your home.",
    iconName: "Activity",
    features: ["Digital Blood Pressure Monitors", "Accurate Blood Glucose Meters", "Infrared Thermometers & Oximeters"]
  },
  {
    id: "s7",
    title: "Surgical Supplies",
    description: "Disposable and surgical medical items for minor surgeries, wound care, and clinic setups.",
    iconName: "Scissors",
    features: ["Sterile gloves & surgical masks", "Syringes, IV sets & cannulas", "Sutures and minor surgical tools"]
  },
  {
    id: "s8",
    title: "First Aid Products",
    description: "Essential life saving first-aid kits and materials to manage emergencies at homes, schools, or workplaces.",
    iconName: "HeartPulse",
    features: ["Antiseptic solutions (Dettol/Savlon)", "Adhesive bandages & cotton rolls", "Ointments for burns, cuts, and sprains"]
  },
  {
    id: "s9",
    title: "Diabetic Care Essentials",
    description: "Tailored products for managing diabetes including insulin cartridges, test strips, and sugar-free foods.",
    iconName: "Droplet",
    features: ["Insulin syringe and needles", "Accu-Chek / OneTouch test strips", "Sugar-free nutritional supplements"]
  },
  {
    id: "s10",
    title: "Healthcare Essentials",
    description: "General medical supports and protective equipment needed for daily mobility and rehabilitation.",
    iconName: "Thermometer",
    features: ["Orthopedic knee, back, and wrist supports", "Nebulizers & Vaporizers", "Adult diapers & underpads"]
  }
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: "cat1",
    name: "Tablets",
    iconName: "Pill",
    description: "Oral solid medications for fever, chronic disorders, antibiotics, and heart care.",
    items: ["Paracetamol", "Amoxycillin", "Atorvastatin", "Metformin"]
  },
  {
    id: "cat2",
    name: "Capsules",
    iconName: "Layers",
    description: "Gelatin-coated formulation for vitamins, pain relief, and digestive supplements.",
    items: ["Omeprazole", "B-Complex", "Amoxicillin Caps", "Vitamin D3 Softgels"]
  },
  {
    id: "cat3",
    name: "Syrups",
    iconName: "Droplet",
    description: "Liquid suspension medications for dry cough, pediatric care, and multi-vitamins.",
    items: ["Cough Expectorant", "Antacid Liquid", "Iron Tonic", "Paracetamol Suspension"]
  },
  {
    id: "cat4",
    name: "Injections",
    iconName: "Syringe",
    description: "Sterile injectables including critical care, emergency vaccines, and insulin.",
    items: ["Insulin Glargine", "Ceftriaxone Injection", "Diclofenac Sodium", "Tetanus Toxoid"]
  },
  {
    id: "cat5",
    name: "Medical Equipment",
    iconName: "Activity",
    description: "High precision devices for tracking vital signs and maintaining home safety.",
    items: ["BP Monitor", "Glucometer", "Pulse Oximeter", "Nebulizer Machine"]
  },
  {
    id: "cat6",
    name: "Protein Supplements",
    iconName: "Award",
    description: "High quality nutritional drinks and protein supplements for wellness and recovery.",
    items: ["Ensure Powder", "Protinex", "Nutricia Supplements", "PediaSure for Kids"]
  },
  {
    id: "cat7",
    name: "Vitamins & Minerals",
    iconName: "HeartPulse",
    description: "Vital nutritional formulas to overcome deficiencies and boost overall immunity.",
    items: ["Vitamin C (Limcee)", "Zinc Supplements", "Calcium & Vitamin D3", "Multivitamins (Revital)"]
  },
  {
    id: "cat8",
    name: "Skin Care",
    iconName: "Flower",
    description: "Dermatologist-recommended skin creams, lotions, and soothing antiseptic formulas.",
    items: ["Moisturizers", "Antifungal Creams", "Calamine Lotion", "Sunscreen Protectors"]
  },
  {
    id: "cat9",
    name: "Baby Products",
    iconName: "Baby",
    description: "Premium pediatric care, baby food, hygienic diapers, and body oils.",
    items: ["Cerelac Baby Food", "Himalaya Baby Pack", "Pampers Diapers", "Johnson's Baby Oil"]
  },
  {
    id: "cat10",
    name: "Personal Hygiene",
    iconName: "Sparkles",
    description: "Everyday hygiene shields including premium sanitizers, washes, and oral systems.",
    items: ["Hand Sanitizers", "Dettol Liquid", "Antiseptic Soaps", "Medicated Toothpaste"]
  },
  {
    id: "cat11",
    name: "Orthopedic Support",
    iconName: "Accessibility",
    description: "Surgical braces, belts, and rehabilitation aids to manage joint or muscular discomfort.",
    items: ["Knee Support Braces", "Lumbo Sacral Belts", "Cervical Collars", "Crepe Bandages"]
  },
  {
    id: "cat12",
    name: "Diabetic Care",
    iconName: "FlaskConical",
    description: "Reliable glucose monitoring tools, lancets, testing strips, and specialized dietaries.",
    items: ["Sugar Free Gold", "Accu-Chek Strips", "OneTouch Lancets", "Diabetic Foot Cream"]
  }
];

export const TRUST_FACTORS = [
  {
    title: "Experienced Pharmacy",
    description: "Serving Bihar since 1998 under strict standards of safe pharmaceutical practice.",
    icon: "Clock"
  },
  {
    title: "Quality Medicines",
    description: "Rigorous batch check controls. Expiry dating is strictly monitored and handled.",
    icon: "Award"
  },
  {
    title: "Quick Counter Service",
    description: "Minimal wait time. Our staff is fast, trained, and coordinates orders flawlessly.",
    icon: "Zap"
  },
  {
    title: "Friendly Guidance",
    description: "We explain medicine dosages and storage requirements clearly to patient families.",
    icon: "Smile"
  },
  {
    title: "Reasonable Pricing",
    description: "Maximized discounts on monthly medicines for elder care and chronic diseases.",
    icon: "BadgeIndianRupee"
  },
  {
    title: "Convenient Location",
    description: "Centrally located in Pai Bigha. Easily accessible with clean parking spaces.",
    icon: "MapPin"
  }
];

export const WORKING_PROCESS = [
  {
    step: "01",
    title: "Visit Store / Contact",
    description: "Walk in to our Pai Bigha store directly, or send us a WhatsApp inquiry with your needs."
  },
  {
    step: "02",
    title: "Share Prescription",
    description: "Present your doctor's prescription to our staff or upload a picture over WhatsApp."
  },
  {
    step: "03",
    title: "Verification & Dispensing",
    description: "We carefully verify the medication, fetch batch-tested supplies, and explain usage."
  },
  {
    step: "04",
    title: "Easy Payment & Go",
    description: "Complete your bill with cash, UPI (Google Pay, PhonePe, Paytm), or online transfer and receive your securely packed meds."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev1",
    name: "Ramesh Sharma",
    location: "Pai Bigha, Bihar",
    rating: 5,
    review: "Agrawal Medical Hall is my go-to shop. For my mother's cardiac medicine, they always give generous discounts and the medicines are 100% genuine. The staff behaves very politely and explains the time of doses.",
    date: "June 2026"
  },
  {
    id: "rev2",
    name: "Anjali Kumari",
    location: "Makhdumpur, Bihar",
    rating: 5,
    review: "I live slightly away but always order my child's baby food and baby care products from Agrawal Medical on WhatsApp. They respond instantly and keep everything packed so I can just pay and collect immediately.",
    date: "May 2026"
  },
  {
    id: "rev3",
    name: "Dr. Alok Prasad",
    location: "Gaya Medical College, Bihar",
    rating: 5,
    review: "As a doctor, quality of medicine is my top priority. I always recommend my patients in Pai Bigha to buy from Agrawal Medical Hall because their cold chain management of insulin and critical vaccines is superb.",
    date: "April 2026"
  },
  {
    id: "rev4",
    name: "Vikash Singh",
    location: "Pai Bigha, Bihar",
    rating: 5,
    review: "Best medical store in the region. They have all types of medical equipment. I bought an OMRON BP Monitor and Accu-Chek sugar testing machine at very reasonable rates, and they even showed me a demo of how to use them.",
    date: "March 2026"
  },
  {
    id: "rev5",
    name: "Sanjay Agrawal",
    location: "Jehanabad, Bihar",
    rating: 5,
    review: "Very professional team. They stock rare surgical supplies and orthopedic supports that are not easily available in local villages. The WhatsApp medicine ordering feature is extremely helpful for elders who cannot travel.",
    date: "February 2026"
  },
  {
    id: "rev6",
    name: "Meera Devi",
    location: "Pai Bigha, Bihar",
    rating: 5,
    review: "We are buying medicines from this shop for the last 15 years. They are like family to us. During urgent situations in the night, they always guide us correctly. Thank you Agrawal Medical Hall for your genuine service.",
    date: "January 2026"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you supply 100% genuine medicines?",
    answer: "Yes, absolutely. Every single medicine, supplement, and healthcare device at Agrawal Medical Hall is sourced strictly from authorized distributors. We have zero tolerance for counterfeit supplies."
  },
  {
    id: "faq2",
    question: "Can I order my medicines in advance via WhatsApp?",
    answer: "Yes! Simply write down the required medicine list or take a clear photo of your doctor's prescription and submit it through our WhatsApp Order system. We will verify the stock, pack it, and message you with the bill so you can pick it up conveniently."
  },
  {
    id: "faq3",
    question: "Do you maintain temperature control (Cold Chain) for vaccines and insulin?",
    answer: "Yes. Sensitive biological formulations, vaccines, and insulin are strictly stored in dedicated, temperature-controlled refrigeration units with backup generators to prevent potency loss."
  },
  {
    id: "faq4",
    question: "Is a prescription mandatory for all medicines?",
    answer: "For Schedule H and prescription-only drugs, a valid doctor's prescription is legally required. For general wellness products, first aid, and standard Over-The-Counter (OTC) items like antacids and cough lozenges, you do not need a prescription."
  },
  {
    id: "faq5",
    question: "What diagnostic equipment do you have available?",
    answer: "We offer digital Blood Pressure Monitors, Blood Glucose (Sugar) Testing Meters, infrared thermometers, oximeters, vaporizers, and nebulizer systems from top reliable brands like Omron and Accu-Check."
  },
  {
    id: "faq6",
    question: "Do you offer discounts on monthly chronic medicines?",
    answer: "Yes, we offer special discounts for patients who buy long-term medicines regularly (such as BP, thyroid, and diabetic medications) to keep healthcare affordable for our Pai Bigha community."
  },
  {
    id: "faq7",
    question: "What payment methods do you accept at the counter?",
    answer: "We accept all major payment modes including Cash, Google Pay, PhonePe, Paytm, BHIM UPI, and direct bank transfers for your maximum convenience."
  },
  {
    id: "faq8",
    question: "Are your staff members trained to guide us?",
    answer: "Yes, our team consists of knowledgeable pharmacy assistants who can clearly read prescriptions, explain dosage timings (before/after meals), and provide valuable advice on standard storage instructions."
  },
  {
    id: "faq9",
    question: "What are the store timings of Agrawal Medical Hall?",
    answer: "We are open Monday through Saturday from 08:00 AM to 09:30 PM. On Sundays, we are open from 09:00 AM to 04:00 PM for emergency needs."
  },
  {
    id: "faq10",
    question: "Do you provide orthopedic supports and surgical supplies?",
    answer: "Yes, we stock cervical collars, knee braces, wrist wraps, crepe bandages, lumbar belts, and surgical essentials like sterile surgical gloves, needles, masks, and wound dressings."
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal1",
    title: "Well Stocked Medicine Sections",
    category: "medicines",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    description: "Fully organized medicine shelves ensuring rapid and error-free retrieval of prescriptions."
  },
  {
    id: "gal2",
    title: "Our Store Front",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600&auto=format&fit=crop",
    description: "Centrally located in Pai Bigha, Bihar with clean surroundings and helpful assistants."
  },
  {
    id: "gal3",
    title: "Diagnostic Equipment & Supplies",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
    description: "Highly accurate home BP monitors, glucometers, and healthcare tracking equipment."
  },
  {
    id: "gal4",
    title: "Cold Chain Storage System",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660db0969?q=80&w=600&auto=format&fit=crop",
    description: "Dedicated medical refrigerators protecting vital insulin formulations and vaccines."
  },
  {
    id: "gal5",
    title: "Baby Care & Wellness Products",
    category: "customers",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=600&auto=format&fit=crop",
    description: "Premium safe healthcare products, infant formulas, and hygiene aids."
  },
  {
    id: "gal6",
    title: "Surgical Supplies Shelf",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1631553127967-90ec89d49009?q=80&w=600&auto=format&fit=crop",
    description: "Sterile syringes, dressings, IV units, and standard bandages for clinics."
  }
];

export const MEDICINE_CATALOG: MedicineSearchItem[] = [
  { id: "m1", name: "Paracetamol 650mg Tablets", category: "Tablets", description: "Fever and mild to moderate pain relief formulation.", availability: "In Stock" },
  { id: "m2", name: "Amoxycillin 500mg Capsules", category: "Capsules", description: "Broad-spectrum prescription antibiotic for bacterial infections.", availability: "In Stock" },
  { id: "m3", name: "Pantocid 40mg (Pantoprazole)", category: "Tablets", description: "Proton pump inhibitor for acidity, gas, and reflux symptoms.", availability: "In Stock" },
  { id: "m4", name: "Metformin 500mg SR Tablets", category: "Tablets", description: "Oral anti-diabetic medication to control blood sugar levels.", availability: "In Stock" },
  { id: "m5", name: "Amlodipine 5mg (Amlong)", category: "Tablets", description: "Prescription medication to manage high blood pressure.", availability: "In Stock" },
  { id: "m6", name: "Revital H Capsules", category: "Vitamins", description: "Daily health supplement with vitamins, minerals, and ginseng.", availability: "In Stock" },
  { id: "m7", name: "Accu-Chek Active Test Strips", category: "Diabetic Care", description: "Blood glucose monitoring strips for home testing.", availability: "In Stock" },
  { id: "m8", name: "Omron HEM-7120 BP Monitor", category: "Medical Equipment", description: "Fully automatic digital blood pressure tracker.", availability: "In Stock" },
  { id: "m9", name: "Volini Pain Relief Gel", category: "Skin Care", description: "Fast-acting topical ointment for back, joint, and muscle pain.", availability: "In Stock" },
  { id: "m10", name: "Ensure Diabetes Care Powder", category: "Protein Supplements", description: "Specialized adult nutrition formula to support diabetes management.", availability: "Available on Demand" },
  { id: "m11", name: "Limcee Vitamin C 500mg Chewables", category: "Vitamins", description: "Immunity-boosting vitamin C orange-flavored chewable tablets.", availability: "In Stock" },
  { id: "m12", name: "Cebryl Dry Cough Syrup", category: "Syrups", description: "Symptomatic relief for dry, tickly, and allergic coughs.", availability: "In Stock" },
  { id: "m13", name: "Himalaya Baby Powder 200g", category: "Baby Products", description: "Gentle baby powder formulated with natural cooling minerals.", availability: "In Stock" },
  { id: "m14", name: "Crepe Bandage 10cm x 4m", category: "Orthopedic Support", description: "Premium stretchable compression bandage for joint strains.", availability: "In Stock" },
  { id: "m15", name: "Insulin Humalog 100 IU/ml", category: "Diabetic Care", description: "Rapid-acting insulin analog to regulate glucose level.", availability: "In Stock" },
  { id: "m16", name: "Dettol Antiseptic Liquid 500ml", category: "Personal Hygiene", description: "Universal disinfection solution for wounds, household, and bath.", availability: "In Stock" }
];
