BEGIN;
CREATE TABLE IF NOT EXISTS bedroom_rating(
      id uuid PRIMARY KEY,
      bedroom_id uuid,
      rating_id uuid,
      CONSTRAINT fk_bedroom_id
      FOREIGN KEY(bedroom_id) 
	  REFERENCES bedroom(id),
      CONSTRAINT fk_rating_id
      FOREIGN KEY(rating_id) 
	  REFERENCES rating(id)     
);
COMMIT;
