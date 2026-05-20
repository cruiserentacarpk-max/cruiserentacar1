export const SITE = {
  name: "Cruise Rent A Car",
  phone: "0305 6333341",
  phoneIntl: "923056333341",
  email: "cruiserentacar7@gmail.com",
  address: "345 B Block Sabzazar, Lahore, Pakistan 54572",
  instagram: "cruiserentacar7",
  since: 2014,
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(msg)}`;

export const waDefault = waLink(
  `Hello Cruise Rent A Car,\n\nI would like more information about your rental services.\n\nThank you.`
);

export const waVehicle = (name: string) =>
  waLink(
    `Hello Cruise Rent A Car,\n\nI want ${name}.\n\nKindly confirm the availability and price.\n\nThank you.`
  );

import imgSonata from "@/assets/cruise/cars/sonata.jpg";
import imgCivic11 from "@/assets/cruise/cars/civic11.jpg";
import imgLandCruiser from "@/assets/cruise/cars/landcruiser.webp";
import imgYaris from "@/assets/cruise/cars/yaris.jpg";
import imgTucson from "@/assets/cruise/cars/tucson.jpg";
import imgPrado from "@/assets/cruise/cars/prado.jpg";
import imgBrv from "@/assets/cruise/cars/brv.jpg";
import imgTaycan from "@/assets/cruise/cars/taycan.jpg";
import imgCoaster from "@/assets/cruise/cars/coaster.webp";
import imgHaval from "@/assets/cruise/cars/haval.jpeg";
import imgFortuner from "@/assets/cruise/cars/fortuner.jpg";
import imgHilux from "@/assets/cruise/cars/hilux.jpg";
import imgSportage from "@/assets/cruise/cars/sportage.webp";
import imgCity from "@/assets/cruise/cars/city.jpg";
import imgYaris23 from "@/assets/cruise/cars/yaris23.jpg";
import imgCivicX from "@/assets/cruise/cars/civicx.jpg";
import imgAlto from "@/assets/cruise/cars/alto.jpg";
import imgCultus from "@/assets/cruise/cars/cultus.jpg";
import imgChr from "@/assets/cruise/cars/chr.jpg";
import imgHiace from "@/assets/cruise/cars/hiace.jpg";
import imgGrandCabin from "@/assets/cruise/cars/grandcabin.jpg";
import imgC200 from "@/assets/cruise/cars/c200.jpg";
import imgI8 from "@/assets/cruise/cars/i8.jpg";
import imgA6 from "@/assets/cruise/cars/a6.jpg";
import imgBentley from "@/assets/cruise/cars/bentley.jpg";

export type Vehicle = {
  name: string;
  year: number;
  category: "Economic" | "Luxury" | "Group";
  type: "SUV" | "Sedan" | "Hatchback" | "Crossover" | "Van" | "Bus" | "Pickup" | "Supercar";
  seats: number;
  transmission: "Auto" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  drive: ("Self Drive" | "With Driver")[];
  tagline: string;
  image: string;
};

export const VEHICLES: Vehicle[] = [
  { name: "Honda BR-V", year: 2023, category: "Economic", type: "SUV", seats: 7, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Family-ready 7-seater for any journey", image: imgBrv },
  { name: "Toyota Land Cruiser", year: 2022, category: "Economic", type: "SUV", seats: 7, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "The legendary SUV. Built for everywhere.", image: imgLandCruiser },
  { name: "Toyota Prado", year: 2022, category: "Economic", type: "SUV", seats: 7, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Refined off-road luxury", image: imgPrado },
  { name: "Toyota Fortuner", year: 2023, category: "Economic", type: "SUV", seats: 7, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Bold presence, unstoppable drive", image: imgFortuner },
  { name: "Toyota Hilux Revo", year: 2022, category: "Economic", type: "Pickup", seats: 5, transmission: "Auto", fuel: "Diesel", drive: ["Self Drive","With Driver"], tagline: "Tough. Reliable. Anywhere.", image: imgHilux },
  { name: "Kia Sportage", year: 2024, category: "Economic", type: "Crossover", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Modern crossover. Smart drive.", image: imgSportage },
  { name: "Hyundai Tucson", year: 2023, category: "Economic", type: "Crossover", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Bold design, refined drive", image: imgTucson },
  { name: "Hyundai Sonata", year: 2023, category: "Economic", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Elegant executive sedan", image: imgSonata },
  { name: "Honda City 2025", year: 2025, category: "Economic", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Sharp. Efficient. New.", image: imgCity },
  { name: "Toyota Yaris 2026", year: 2026, category: "Economic", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Smooth city ride", image: imgYaris },
  { name: "Toyota Yaris 2023", year: 2023, category: "Economic", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Reliable comfort", image: imgYaris23 },
  { name: "Honda Civic X", year: 2021, category: "Economic", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Sporty sedan icon", image: imgCivicX },
  { name: "Honda Civic 11th Generation", year: 2024, category: "Economic", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Bold next-gen styling", image: imgCivic11 },
  { name: "Suzuki Alto", year: 2023, category: "Economic", type: "Hatchback", seats: 4, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Easy. Light. Efficient.", image: imgAlto },
  { name: "Suzuki Cultus", year: 2023, category: "Economic", type: "Hatchback", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Compact city favorite", image: imgCultus },
  { name: "Toyota C-HR", year: 2022, category: "Economic", type: "Crossover", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Striking crossover", image: imgChr },
  { name: "Haval H6", year: 2024, category: "Economic", type: "SUV", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Next-gen SUV with futuristic luxury", image: imgHaval },
  { name: "Toyota Coaster", year: 2022, category: "Group", type: "Bus", seats: 28, transmission: "Manual", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Group travel done right", image: imgCoaster },
  { name: "Toyota HiAce", year: 2023, category: "Group", type: "Van", seats: 13, transmission: "Manual", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Premium van for any trip", image: imgHiace },
  { name: "Toyota HiAce Grand Cabin", year: 2023, category: "Group", type: "Van", seats: 13, transmission: "Manual", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "Spacious luxury van", image: imgGrandCabin },
  { name: "Mercedes-Benz C200", year: 2023, category: "Luxury", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["Self Drive","With Driver"], tagline: "The benchmark of executive class", image: imgC200 },
  { name: "Porsche Taycan", year: 2023, category: "Luxury", type: "Supercar", seats: 4, transmission: "Auto", fuel: "Electric", drive: ["With Driver"], tagline: "Pure Porsche performance", image: imgTaycan },
  { name: "BMW i8", year: 2020, category: "Luxury", type: "Supercar", seats: 4, transmission: "Auto", fuel: "Hybrid", drive: ["With Driver"], tagline: "A supercar from the future", image: imgI8 },
  { name: "Audi A6", year: 2023, category: "Luxury", type: "Sedan", seats: 5, transmission: "Auto", fuel: "Petrol", drive: ["With Driver"], tagline: "Sophisticated German engineering", image: imgA6 },
  { name: "Bentley Continental GT", year: 2022, category: "Luxury", type: "Supercar", seats: 4, transmission: "Auto", fuel: "Petrol", drive: ["With Driver"], tagline: "The pinnacle of grand touring", image: imgBentley },
];

export const BLOG_POSTS = [
  { slug: "luxury-cars-pakistan-guide", category: "Luxury", date: "Apr 12, 2026", read: "6 min read", title: "The Ultimate Guide to Renting Luxury Cars in Pakistan", excerpt: "From Mercedes to Bentley — discover how to choose the perfect luxury car for your next occasion in Pakistan." },
  { slug: "self-drive-lahore", category: "Self Drive", date: "Apr 05, 2026", read: "5 min read", title: "Self Drive Cars in Lahore: Everything You Need to Know", excerpt: "Freedom on four wheels. Learn the rules, requirements, and best self-drive options across Lahore." },
  { slug: "wedding-cars", category: "Wedding", date: "Mar 28, 2026", read: "4 min read", title: "Best Cars to Rent for Your Wedding Day", excerpt: "Arrive in style. The most elegant wedding car options for the unforgettable day." },
  { slug: "executive-business-cars", category: "Business", date: "Mar 20, 2026", read: "5 min read", title: "Top Executive Cars for Business Trips", excerpt: "Make the right impression with these refined business-class rentals." },
  { slug: "prado-rental-guide", category: "SUV", date: "Mar 14, 2026", read: "6 min read", title: "Toyota Prado Rental Guide", excerpt: "Why the Prado is Pakistan's favorite luxury SUV — and how to book one right." },
  { slug: "fortuner-rental-guide", category: "SUV", date: "Mar 08, 2026", read: "5 min read", title: "Toyota Fortuner Rental Guide", excerpt: "Bold styling, capable drive. A complete guide to renting the Fortuner." },
  { slug: "hiace-group-travel", category: "Vans", date: "Feb 28, 2026", read: "7 min read", title: "HiAce Van Rental Guide for Group Travel", excerpt: "Planning a group trip? Here's why the HiAce is the smartest choice." },
  { slug: "bmw-i8-experience", category: "Supercar", date: "Feb 20, 2026", read: "8 min read", title: "BMW i8 Experience in Pakistan", excerpt: "A hybrid supercar like no other. Read our full review of the i8." },
  { slug: "lahore-rent-a-car-guide", category: "City Guide", date: "Feb 14, 2026", read: "9 min read", title: "Lahore Rent A Car: The Complete Guide", excerpt: "Everything you should know before renting a car in Lahore." },
  { slug: "airport-transfers", category: "Chauffeur", date: "Feb 08, 2026", read: "4 min read", title: "Premium Airport Transfer Services Explained", excerpt: "Stress-free arrivals and departures with a private chauffeur." },
  { slug: "corporate-rentals", category: "Corporate", date: "Jan 30, 2026", read: "6 min read", title: "Corporate Car Rental in Pakistan", excerpt: "Tailored fleets, monthly plans, and dedicated drivers for businesses." },
  { slug: "family-road-trip", category: "Travel", date: "Jan 22, 2026", read: "5 min read", title: "Best Cars for a Family Road Trip", excerpt: "Comfort, space and safety — the family rentals we recommend." },
];
