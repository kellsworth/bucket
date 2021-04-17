CREATE TABLE bucket_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(350),
  profile_pic TEXT
);

CREATE TABLE bucket_list (
  id SERIAL PRIMARY KEY,
  list_item VARCHAR(250),
  author_id INTEGER REFERENCES bucket_users(id),
  completed BOOL DEFAULT FALSE,
  last_updated TIMESTAMP
);

CREATE TABLE moments_list (
  id SERIAL PRIMARY KEY,
  list_item VARCHAR(250),
  author_id INTEGER REFERENCES bucket_users(id)
);

ALTER TABLE bucket_list
ADD COLUMN completed BOOL DEFAULT TRUE;

ALTER TABLE bucket_list
ADD COLUMN last_updated TIMESTAMP; 
