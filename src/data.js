import SUV_svg from "./instructions/images/icon-suvs.svg";
import Sedan_svg from "./instructions/images/icon-sedans.svg";
import Luxury_svg from "./instructions/images/icon-luxury.svg";

export const data = [
  {
    bg_class: "card-bg-orange",
    srcUrl: Sedan_svg,
    alt: "Sedans-avatar",
    card_header: " Sedans",
    card_text: ` Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.`,
  },
  {
    bg_class: "card-bg-dark-cyan",
    srcUrl: SUV_svg,
    alt: "SUVs-avatar",
    card_header: " SUVs",
    card_text: `   Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.`,
  },
  {
    bg_class: "card-bg-very-dark-cyan",
    srcUrl: Luxury_svg,
    alt: "Luxury-avatar",
    card_header: "   Luxury",
    card_text: ` Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.`,
  },
];
