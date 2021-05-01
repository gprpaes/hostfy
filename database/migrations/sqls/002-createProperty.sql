BEGIN;
CREATE TABLE IF NOT EXISTS property(
      id uuid PRIMARY KEY,
      name VARCHAR(280),
      cnpj text UNIQUE,
      address text,
      room_amount int,
      property_type_id uuid,
      CONSTRAINT fk_property_type
      FOREIGN KEY(property_type_id) 
	REFERENCES property_type(id)
);
COMMIT;
