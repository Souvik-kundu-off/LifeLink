export type UserRole = 'admin' | 'hospital_staff' | 'individual';

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type OrganType = 'heart' | 'liver' | 'kidney' | 'lung' | 'pancreas' | 'cornea' | 'bone_marrow';

export type UrgencyLevel = 'low' | 'medium' | 'high' | 'critical';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  hospitalId?: string;
  createdAt: string;
}

export interface IndividualProfile {
  id: string;
  userId: string;
  name: string;
  age: number;
  bloodGroup: BloodGroup;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
  medicalHistory: string;
  
  // Donor capabilities
  isAvailableToDonate: boolean;
  availableOrgans: OrganType[];
  availableForBloodDonation: boolean;
  lastDonationDate?: string;
  
  // Recipient needs
  hasActiveDonationRequests: boolean;
  neededOrgans: OrganType[];
  needsBloodDonation: boolean;
  urgencyLevel?: UrgencyLevel;
  
  verificationStatus: 'pending' | 'verified' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface DonationRequest {
  id: string;
  requesterId: string; // Individual who needs donation
  type: 'blood' | 'organ';
  bloodGroup?: BloodGroup;
  organType?: OrganType;
  urgencyLevel: UrgencyLevel;
  description: string;
  medicalDetails: string;
  preferredHospital?: string;
  maxDistance: number; // in kilometers
  status: 'active' | 'fulfilled' | 'expired' | 'cancelled';
  createdAt: string;
  expiresAt: string;
}