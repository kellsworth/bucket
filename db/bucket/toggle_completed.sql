UPDATE bucket_list
SET completed = ${completed}
WHERE id = ${itemId};

SELECT * FROM bucket_list
WHERE completed IS NOT TRUE
AND author_id = ${id}
ORDER BY last_updated DESC;
