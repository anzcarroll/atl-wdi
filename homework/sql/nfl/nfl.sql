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


