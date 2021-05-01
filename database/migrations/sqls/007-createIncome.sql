BEGIN;
CREATE TABLE IF NOT EXISTS income(
      id uuid PRIMARY KEY,
      referenceMonth bigint,
      value double precision,
      cashflow_id uuid,
      CONSTRAINT fk_cash_id
      FOREIGN KEY(cashflow_id) 
	 REFERENCES cashflow(id)
      
);
COMMIT;
