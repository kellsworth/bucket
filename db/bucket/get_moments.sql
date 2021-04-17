SELECT * FROM bucket_list
WHERE completed IS TRUE
AND author_id = ${id}
ORDER BY last_updated DESC;