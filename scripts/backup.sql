-- データベースバックアップスクリプト
-- 実行日時: $(date)
-- データベース: properties_db

-- テーブル構造のバックアップ
\dt+

-- プロパティテーブルのデータ
SELECT 
  'INSERT INTO properties (id, type, name, catch_copy, prefecture, city, address, price, price_note, status, created_at, updated_at, land_area, building_area, layout, built_year, structure, floors, parking, building_name, room_number, exclusive_area, balcony_area, floor, direction, total_units, management_fee, repair_reserve) VALUES (' ||
  '''' || id || ''', ' ||
  '''' || type || ''', ' ||
  '''' || REPLACE(name, '''', '''''') || ''', ' ||
  '''' || REPLACE(catch_copy, '''', '''''') || ''', ' ||
  '''' || prefecture || ''', ' ||
  '''' || city || ''', ' ||
  '''' || REPLACE(address, '''', '''''') || ''', ' ||
  price || ', ' ||
  '''' || price_note || ''', ' ||
  '''' || status || ''', ' ||
  '''' || created_at || ''', ' ||
  '''' || updated_at || ''', ' ||
  COALESCE('''' || land_area || '''', 'NULL') || ', ' ||
  COALESCE('''' || building_area || '''', 'NULL') || ', ' ||
  COALESCE('''' || layout || '''', 'NULL') || ', ' ||
  COALESCE('''' || built_year || '''', 'NULL') || ', ' ||
  COALESCE('''' || structure || '''', 'NULL') || ', ' ||
  COALESCE('''' || floors || '''', 'NULL') || ', ' ||
  COALESCE('''' || parking || '''', 'NULL') || ', ' ||
  COALESCE('''' || building_name || '''', 'NULL') || ', ' ||
  COALESCE('''' || room_number || '''', 'NULL') || ', ' ||
  COALESCE('''' || exclusive_area || '''', 'NULL') || ', ' ||
  COALESCE('''' || balcony_area || '''', 'NULL') || ', ' ||
  COALESCE('''' || floor || '''', 'NULL') || ', ' ||
  COALESCE('''' || direction || '''', 'NULL') || ', ' ||
  COALESCE('''' || total_units || '''', 'NULL') || ', ' ||
  COALESCE('''' || management_fee || '''', 'NULL') || ', ' ||
  COALESCE('''' || repair_reserve || '''', 'NULL') ||
  ');' as insert_statement
FROM properties;

-- 画像テーブルのデータ
SELECT 
  'INSERT INTO property_images (id, property_id, url, kind, order_num) VALUES (' ||
  '''' || id || ''', ' ||
  '''' || property_id || ''', ' ||
  '''' || url || ''', ' ||
  '''' || kind || ''', ' ||
  order_num ||
  ');' as insert_statement
FROM property_images;

-- 駅情報テーブルのデータ
SELECT 
  'INSERT INTO property_stations (id, property_id, name, distance, walk_time) VALUES (' ||
  '''' || id || ''', ' ||
  '''' || property_id || ''', ' ||
  '''' || REPLACE(name, '''', '''''') || ''', ' ||
  '''' || distance || ''', ' ||
  '''' || walk_time || ''', ' ||
  ');' as insert_statement
FROM property_stations;

-- 特徴テーブルのデータ
SELECT 
  'INSERT INTO property_features (id, property_id, category, key_name, value) VALUES (' ||
  '''' || id || ''', ' ||
  '''' || property_id || ''', ' ||
  '''' || REPLACE(category, '''', '''''') || ''', ' ||
  '''' || REPLACE(key_name, '''', '''''') || ''', ' ||
  '''' || REPLACE(value, '''', '''''') || ''' ||
  ');' as insert_statement
FROM property_features;

-- バックアップ完了
SELECT 'Backup completed at ' || NOW() as backup_status;
