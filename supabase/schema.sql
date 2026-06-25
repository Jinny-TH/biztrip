create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique,
  role text default 'viewer',
  department text,
  created_at timestamptz default now()
);

create table if not exists trips (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  country text,
  city text,
  start_date date not null,
  end_date date not null,
  purpose text,
  status text default 'draft',
  manager_name text,
  created_at timestamptz default now()
);

create table if not exists trip_travelers (
  id uuid primary key default uuid_generate_v4(),
  trip_id uuid references trips(id) on delete cascade,
  name text not null,
  role text,
  company text,
  created_at timestamptz default now()
);

create table if not exists schedules (
  id uuid primary key default uuid_generate_v4(),
  trip_id uuid references trips(id) on delete cascade,
  title text not null,
  schedule_date date not null,
  start_time time,
  end_time time,
  location text,
  category text default 'meeting',
  memo text,
  created_at timestamptz default now()
);

create table if not exists flights (
  id uuid primary key default uuid_generate_v4(),
  trip_id uuid references trips(id) on delete cascade,
  flight_no text,
  airline text,
  departure_airport text,
  arrival_airport text,
  departure_time timestamptz,
  arrival_time timestamptz,
  memo text,
  created_at timestamptz default now()
);

create table if not exists hotels (
  id uuid primary key default uuid_generate_v4(),
  trip_id uuid references trips(id) on delete cascade,
  hotel_name text not null,
  address text,
  check_in date,
  check_out date,
  memo text,
  created_at timestamptz default now()
);

create table if not exists approvals (
  id uuid primary key default uuid_generate_v4(),
  trip_id uuid references trips(id) on delete cascade,
  approver_name text not null,
  status text default 'pending',
  comment text,
  approved_at timestamptz,
  created_at timestamptz default now()
);

insert into trips (title,country,city,start_date,end_date,purpose,status,manager_name)
select '이사님 태국 출장 7월(2026년)','Thailand','Bangkok','2026-07-02','2026-07-13','경영진 출장 및 행사 참석','approved','Jinny'
where not exists (select 1 from trips where title='이사님 태국 출장 7월(2026년)');
