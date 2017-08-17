CLUE1:
SELECT name, population FROM country WHERE region='Southern Europe' ORDER BY population ASC;
 ___________________________
Holy See (Vatican City State)

CLUE2:
SELECT language FROM countrylanguage WHERE countrycode='VAT';
 language
----------
 Italian
(1 row)


CLUE3:
SELECT * FROM countrylanguage WHERE language='Italian';
-------------+----------+------------+------------
 SMR         | Italian  | t          |        100
SELECT * FROM country WHERE code='SMR';
  SMR  | San Marino | Europe    | Southern Europe |



CLUE4:
  SELECT name FROM city WHERE countrycode = 'SMR';
    name
------------
 Serravalle


 CLUE5:

 SELECT * FROM city WHERE name LIKE 'Serr%';
  id  |    name    | countrycode |     district      | population
------+------------+-------------+-------------------+------------
  265 | Serra      | BRA         | Esp�rito Santo  |     302666
 3170 | Serravalle | SMR         | Serravalle/Dogano |       4802
(2 rows)

SELECT name FROM country WHERE code='BRA'
;
  name
--------
 Brazil
(1 row)


CLUE6:
SELECT capital FROM country WHERE code='BRA';
 capital
---------
     211
(1 row)

carmen=# SELECT name FROM city WHERE capital=211;
ERROR:  column "capital" does not exist
LINE 1: SELECT name FROM city WHERE capital=211;
                                    ^
carmen=# SELECT name FROM city WHERE id=211;
    name
------------
 Bras�lia
(1 row)


CLUE8:
SELECT name, district, countrycode FROM city WHERE population = 91084;
     name     |  district  | countrycode
--------------+------------+-------------
 Santa Monica | California | USA
(1 row)



