BEGIN;
CREATE TABLE IF NOT EXISTS guest(
      id uuid PRIMARY KEY,
      name text,
      cpf text UNIQUE,
      address text,
      email text,
      phone text,
      birthday bigint,
      reservation_id uuid,
      CONSTRAINT fk_reservation_id
      FOREIGN KEY(reservation_id) 
	  REFERENCES reservation(id)
);
COMMIT;
