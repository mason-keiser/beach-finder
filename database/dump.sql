--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.beaches DROP CONSTRAINT IF EXISTS beaches_pkey;
ALTER TABLE IF EXISTS public.beaches ALTER COLUMN beachid DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.beaches_beachid_seq;
DROP TABLE IF EXISTS public.beaches;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: beaches; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.beaches (
    beachid integer NOT NULL,
    beachname text NOT NULL,
    lat numeric(18,6) NOT NULL,
    long numeric(18,6) NOT NULL
);


--
-- Name: beaches_beachid_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.beaches_beachid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: beaches_beachid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.beaches_beachid_seq OWNED BY public.beaches.beachid;


--
-- Name: beaches beachid; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.beaches ALTER COLUMN beachid SET DEFAULT nextval('public.beaches_beachid_seq'::regclass);


--
-- Data for Name: beaches; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.beaches (beachid, beachname, lat, long) FROM stdin;
1	Laguna Beach	33.542721	-117.785355
2	Newport Beach	33.608768	-117.873360
3	Huntington Beach	33.659485	-117.998802
4	Dana Point	33.467224	-117.698097
\.


--
-- Name: beaches_beachid_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.beaches_beachid_seq', 4, true);


--
-- Name: beaches beaches_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.beaches
    ADD CONSTRAINT beaches_pkey PRIMARY KEY (beachid);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

