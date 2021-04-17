INSERT INTO bucket_list(
  list_item, 
  author_id
) VALUES (
  ${bucketInput},
  ${id}
);
SELECT * FROM bucket_list;

