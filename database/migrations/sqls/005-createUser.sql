BEGIN;
CREATE TABLE IF NOT EXISTS app_user(
      id uuid PRIMARY KEY,
      name text,
      cpf text UNIQUE,
      email text,
      address text,
      phone text,
      birthday text,
      username text,
      password VARCHAR(280),
      position text,
      is_super_user boolean,
      parent_user_id uuid,
      permission_id uuid,
      blocked boolean,
      created_at bigint,
      property_id uuid,
      CONSTRAINT fk_parent_user_id
      FOREIGN KEY(parent_user_id) 
	REFERENCES app_user(id),
      CONSTRAINT fk_permissions_id
      FOREIGN KEY(permission_id) 
	REFERENCES permission(id),
      CONSTRAINT fk_property_user_id
      FOREIGN KEY(property_id) 
	REFERENCES property(id)
);
COMMIT;
