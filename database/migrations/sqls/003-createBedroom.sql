BEGIN;
CREATE TABLE IF NOT EXISTS bedroom(
      id uuid PRIMARY KEY,
      number VARCHAR(10),
      type VARCHAR(280),
      bedtype VARCHAR(280),
      capacity integer,
      status VARCHAR(280),
      booked boolean,
      property_id uuid,
      CONSTRAINT fk_property_id
      FOREIGN KEY(property_id) 
	REFERENCES property(id)
);
COMMIT;
