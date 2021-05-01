BEGIN;
CREATE TABLE IF NOT EXISTS cashflow(
      id uuid PRIMARY KEY,
      referenceMonth bigint,
      balance double precision,
      property_id uuid,
      user_id uuid,
      CONSTRAINT fk_property_cash_id
      FOREIGN KEY(property_id) 
	REFERENCES property(id),
      CONSTRAINT fk_user_cash_id
      FOREIGN KEY(user_id) 
	REFERENCES app_user(id)
      
);
COMMIT;
