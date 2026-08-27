CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE posts ADD COLUMN category_id INTEGER REFERENCES categories(id);

CREATE INDEX idx_posts_category_id ON posts (category_id);

INSERT INTO categories (name, slug) VALUES
  ('Communication', 'communication'),
  ('Leadership', 'leadership'),
  ('Teamwork', 'teamwork'),
  ('Problem Solving', 'problem-solving'),
  ('Time Management', 'time-management'),
  ('Adaptability', 'adaptability'),
  ('Emotional Intelligence', 'emotional-intelligence'),
  ('Conflict Resolution', 'conflict-resolution'),
  ('Critical Thinking', 'critical-thinking'),
  ('Creativity', 'creativity'),
  ('Work Ethic', 'work-ethic'),
  ('Collaboration', 'collaboration');
