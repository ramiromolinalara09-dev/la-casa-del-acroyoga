export const FEATHER_URL = "https://www.feather.rsvp/o/lacasadelacroyoga";

export const WHATSAPP_NUMBER = "529999909291";
export const WHATSAPP_DEFAULT_TEXT =
  "Hola, quiero reservar mi primera clase de acroyoga.";

export const buildWhatsappUrl = (text: string = WHATSAPP_DEFAULT_TEXT) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
