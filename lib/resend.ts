import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

// Swap to "contact@waleed.codes" once the domain is verified in Resend.
export const CONTACT_FROM_ADDRESS = "Waleed Ali <onboarding@resend.dev>";
