import { formatIncompletePhoneNumber } from "@/lib/libphonenumber";

export function decodeEmail(email: string) {
  return atob(email);
}

export function decodePhoneNumber(phone: string) {
  return atob(phone);
}

export function formatPhoneNumber(phone: string) {
  // Special formatting for Indian phone numbers (+91)
  if (phone.startsWith('+91')) {
    const number = phone.substring(3); // Remove +91
    if (number.length === 10) {
      // Format as +91 XXXXX XXXXX
      return `+91 ${number.substring(0, 5)} ${number.substring(5)}`;
    }
  }
  return formatIncompletePhoneNumber(phone);
}
