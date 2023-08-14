export interface Rider {
  name?: string;
  email?: string;
  otp?: string;
  phoneNumber: string;
  password: string;
  currentLocation?: string;
  createdAt: Date;
  vehicleType?: string;
  avatar?: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  vehicleNumber?: string;
}

export interface Package {
  senderName: string;
  pickup: Place;
  senderPhone: string;
  receiverPhone: string;
  receiverName: string;
  dropoff: Place;
  packageSize: "small" | "medium" | "large";
  deliveryTime: Date;
  status: "pending" | "assigned" | "in_progress" | "delivered";
  assignedTo?: Rider;
  createdAt: Date;
  _id: string;
}

export interface Place {
  name: string;
  latLng: string;
}
