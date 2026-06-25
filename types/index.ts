export type TripStatus = 'draft' | 'pending' | 'approved' | 'completed' | 'cancelled';

export type Trip = {
  id: string;
  title: string;
  country: string;
  city: string;
  start_date: string;
  end_date: string;
  purpose?: string;
  status: TripStatus;
  manager_name?: string;
};

export type Schedule = {
  id: string;
  trip_id: string;
  title: string;
  schedule_date: string;
  start_time: string;
  end_time?: string;
  location?: string;
  category: string;
};
