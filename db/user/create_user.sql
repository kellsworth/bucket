INSERT INTO bucket_users
(username, password)
VALUES
(${ username }, ${hash})
RETURNING *;


