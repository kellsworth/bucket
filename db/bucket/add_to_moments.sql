-- INSERT INTO moments_list(
--   list_item, 
--   author_id,
--   last_updated
-- ) VALUES (
--   ${momentsInput},
--   ${id},
--   CURRENT_TIMESTAMP
-- );
-- SELECT * FROM moments_list
-- WHERE completed IS NOT TRUE
-- AND author_id = ${id}
-- ORDER BY last_updated DESC;