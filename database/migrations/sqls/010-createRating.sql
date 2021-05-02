BEGIN;
CREATE TABLE IF NOT EXISTS rating(
      id uuid PRIMARY KEY,
      daily_rate double precision,
      bedroom_type text,
      start_date bigint,
      end_date bigint,
      valid boolean
      
);
COMMIT;
