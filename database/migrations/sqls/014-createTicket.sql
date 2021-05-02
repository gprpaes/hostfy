BEGIN;
CREATE TABLE IF NOT EXISTS ticket(
      id uuid PRIMARY KEY,
      current_value double precision,
      closed boolean,
      closed_date bigint,
      reservation_id uuid,
      CONSTRAINT fk_reservation_id
      FOREIGN KEY(reservation_id) 
	  REFERENCES reservation(id)
);
COMMIT;
