SELECT * FROM bucket_users 
WHERE username = ${username};

-- username is being destructured from an object that we're passing into this query from the Controller

-- option 2: use array in controller