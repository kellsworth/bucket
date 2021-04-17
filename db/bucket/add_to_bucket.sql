INSERT INTO bucket_list(
  list_item, 
  author_id,
  last_updated
) VALUES (
  ${bucketInput},
  ${id},
  CURRENT_TIMESTAMP
);
SELECT * FROM bucket_list
WHERE completed IS NOT TRUE
AND author_id = ${id}
ORDER BY last_updated DESC;
