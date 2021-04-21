DELETE FROM bucket_list
WHERE id = $1;

SELECT * FROM bucket_list
WHERE author_id = $2;
