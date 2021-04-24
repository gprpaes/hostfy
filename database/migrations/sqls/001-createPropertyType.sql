BEGIN;
CREATE TABLE IF NOT EXISTS property_type(
    id uuid CONSTRAINT firstkey PRIMARY KEY,
    name VARCHAR(240),
    description text
);
COMMIT;