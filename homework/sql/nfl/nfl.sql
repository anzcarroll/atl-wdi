STEP3
    PT1 :
    SELECT name FROM teams;
         name
----------------------
 Buffalo Bills
 Miami Dolphins

    PT2:
    SELECT stadium, head_coach FROM teams
;
            stadium            |   head_coach
-------------------------------+----------------
 Ralph Wilson Stadium          | Doug Marrone
 Sun Life Stadium              | Joe Philbin
 Gillette Stadium              | Bill Belichick
 MetLife Stadium               | Rex Ryan

    PT3:
    SELECT head_coach FROM teams WHERE conference='AFC' AND division= 'South';
   head_coach
----------------
 Bill OBrien
 Chuck Pagano
 Gus Bradley
 Ken Whisenhunt
(4 rows)


    PT4:
    SELECT COUNT(*) FROM players;
 count
-------
  1532
(1 row)

    PT5:
    SELECT name, head_coach FROM teams WHERE conference ='NFC' AND division ='North' OR conference='AFC' AND division='East';
         name         |   head_coach
----------------------+----------------
 Buffalo Bills        | Doug Marrone
 Miami Dolphins       | Joe Philbin
 New England Patriots | Bill Belichick
 New York Jets        | Rex Ryan
 Chicago Bears        | Marc Trestman
 Detroit Lions        | Jim Caldwell
 Green Bay Packers    | Mike McCarthy
 Minnesota Vikings    | Mike Zimmer
(8 rows)

    PT6:
    SELECT name FROM players ORDER BY salary DESC LIMIT 50;
          name
-------------------------
 Peyton Manning
 Drew Brees
 Dwight Freeney

    PT7:
    SELECT AVG(salary) FROM players;
         avg
----------------------
 1579692.539817232376
(1 row)

    PT8:
    SELECT name, position FROM players WHERE salary > 10000000;
          name           | position
-------------------------+----------
 Jake Long               | T
 Joe Thomas              | T
 Dwight Freeney          | DE
 Peyton Manning (buyout) | QB
 Peyton Manning          | QB
 Elvis Dumervil          | DE



    PT9:
    SELECT name FROM players ORDER BY salary DESC LIMIT 1;
      name
----------------
 Peyton Manning


    PT10:
 SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;
          name          | position
------------------------+----------
 Phillip Dillard        |
 Eric Kettani           | RB
 Greg Orton             | WR


    PT11:
    SELECT AVG(salary) FROM players WHERE position='DE';
         avg
----------------------
 2161326.377049180328
(1 row)

    PT12:
    SELECT players.name, teams.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';

    PT13:
    SELECT SUM(players.salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'New York Giants';
   sum
----------
 74179466
(1 row)

    PT14:
    SELECT players.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Green Bay Packers' ORDER BY salary ASC LIMIT 1;
      name
----------------
 Shaky Smithson
