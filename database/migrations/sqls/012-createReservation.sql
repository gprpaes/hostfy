BEGIN;
CREATE TABLE IF NOT EXISTS reservation(
      id uuid PRIMARY KEY,
      bedroom_id uuid,
      guest_amount integer,
      start_date text,
      end_date text,
      total_value double precision,
      reservation_date text,
      check_in boolean,
      CONSTRAINT fk_bedroom_id
      FOREIGN KEY(bedroom_id) 
	  REFERENCES bedroom(id)
);
COMMIT;
