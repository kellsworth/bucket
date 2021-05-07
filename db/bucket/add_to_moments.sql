INSERT INTO bucket_list(
  list_item, 
  author_id,
  last_updated,
  completed
) VALUES (
  ${momentsInput},
  ${id},
  CURRENT_TIMESTAMP,
  TRUE
);
