import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./config";

export interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  message: string;
}

interface ContactSubmission extends ContactFormData {
  timestamp: Timestamp;
  status: "new" | "read" | "responded";
}

export const submitContactForm = async (
  formData: ContactFormData,
): Promise<string> => {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Required fields are missing");
    }

    // Prepare submission data
    const submission: ContactSubmission = {
      ...formData,
      timestamp: Timestamp.now(),
      status: "new",
    };

    // Add document to Firestore
    const docRef = await addDoc(
      collection(db, "contactSubmissions"),
      submission,
    );

    console.log("Contact form submitted successfully with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Allow various phone number formats (10+ digits, with optional country code)
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};
