BEGIN;
CREATE TABLE IF NOT EXISTS event(
      id uuid PRIMARY KEY,
      type text,
      description text,
      reservation_id uuid,
      CONSTRAINT fk_reservation_id
      FOREIGN KEY(reservation_id) 
	  REFERENCES reservation(id)
);
COMMIT;
