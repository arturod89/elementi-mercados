
--CREACION DE ROLE USER
-- DROP ROLE mercados;
CREATE ROLE mercados LOGIN
  PASSWORD 'admin'
  SUPERUSER INHERIT CREATEDB CREATEROLE REPLICATION;


--CREACION DE TABLESPACE
-- DROP TABLESPACE mercados_dat
CREATE TABLESPACE mercados_dat OWNER mercados LOCATION 'C:\Program Files\PostgreSQL\9.1\data\dbs';

-- Database: postgres
-- DROP DATABASE postgres;

CREATE DATABASE mercados_db
  WITH OWNER = mercados
       ENCODING = 'UTF8'
       TABLESPACE = mercados_dat
       LC_COLLATE = 'Spanish_Peru.1252'
       LC_CTYPE = 'Spanish_Peru.1252'
       CONNECTION LIMIT = -1;

COMMENT ON DATABASE mercados_db
  IS 'DB Mercados';

