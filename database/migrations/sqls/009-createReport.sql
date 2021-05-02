BEGIN;
CREATE TABLE IF NOT EXISTS report(
      id uuid PRIMARY KEY,
      referenceMonth bigint,
      name text,
      property_id uuid,
      CONSTRAINT fk_property_id
      FOREIGN KEY(property_id) 
	 REFERENCES property(id)
      
);
COMMIT;
