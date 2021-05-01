BEGIN;
CREATE TABLE IF NOT EXISTS permission(
      id uuid PRIMARY KEY,
      name text,
      description text,
      can_view_financial boolean,
      can_edit_financial boolean,
      can_view_report boolean,
      can_edit_report boolean,
      can_view_guest boolean,
      can_edit_guest boolean
      
);
COMMIT;
