-- BizTrip phase 2 Supabase schema draft
create table if not exists profiles (
  id uuid primary key,
  email text unique,
  name text,
  role text check (role in ('admin','manager','executive','viewer')) default 'viewer',
  created_at timestamptz default now()
);

create table if not exists trips (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  country text,
  city text,
  start_date date,
  end_date date,
  status text default 'draft',
  purpose text,
  manager_id uuid references profiles(id),
  created_at timestamptz default now()
);

create table if not exists trip_travelers (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  profile_id uuid references profiles(id),
  display_name text,
  role text
);

create table if not exists schedules (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  date date not null,
  start_time time,
  end_time time,
  title text not null,
  type text,
  location text,
  owner text,
  memo text,
  priority text,
  created_at timestamptz default now()
);

create table if not exists flights (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  flight_code text,
  route text,
  flight_date date,
  flight_time text,
  terminal text,
  status text
);

create table if not exists hotels (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  name text not null,
  check_in date,
  check_out date,
  address text,
  status text
);

create table if not exists approvals (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  title text not null,
  description text,
  requester text,
  status text default 'pending',
  due_date date,
  created_at timestamptz default now()
);
