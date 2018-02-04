USE `kcdb`;

INSERT INTO participants (email, password, facebook) VALUES('afouchie@uci.edu', 'pwd1', 'https://www.facebook.com/anneclaire.fouchier');
INSERT INTO participants (email, password, facebook) VALUES('jeanellg@uci.edu', 'password', 'https://www.facebook.com/jeanelle.guardado');
INSERT INTO participants (email, password, facebook) VALUES('evangew1@uci.edu', 'whatsapassword', 'https://www.facebook.com/nuinui.wongo');
INSERT INTO participants (email, password, facebook) VALUES('katkhunsinger@gmail.com', 'pwd2', 'https://www.facebook.com/kat.hunsinger');


INSERT INTO deeds (name) VALUES ('Buy a stranger a coffee');
INSERT INTO deeds (name) VALUES ('Treat Yo Self!');
INSERT INTO deeds (name) VALUES ('Help someone in need');
INSERT INTO deeds (name) VALUES ('Call a relative you always postpone calling');
INSERT INTO deeds (name) VALUES ('Talk to someone about Kind Connections');
INSERT INTO deeds (name) VALUES ('Leave tampons/pads in a public bathroom');
INSERT INTO deeds (name) VALUES ('Volunteer 2 hours in a shelter');
INSERT INTO deeds (name) VALUES ('Adopt an abandoned animal');

INSERT INTO locations (country, city, lat, lng) VALUES ('United States', 'Irvine', 33.684567, -117.826505);
INSERT INTO locations (country, city, lat, lng) VALUES ('France', 'Ruy-Montceau', 45.587724, 5.318858);
lngINSERT INTO locations (country, city, lat, lgn) VALUES ('United States', 'Garden Grove', 33.774269, -117.937995);
INSERT INTO locations (country, city, lat, lgn) VALUES ('United States', 'Los Angeles', 34.052234, -118.243685);
INSERT INTO locations (country, city, lat, lgn) VALUES ('Germany', 'Berlin', 52.520007, 13.404954);
INSERT INTO locations (country, city, lat, lgn) VALUES ('United Kingdom', 'London', 51.507351, -0.127758);

INSERT INTO done_deed (participantId, deedId, locationID) VALUES (1, 5, 2); 
INSERT INTO done_deed (participantId, deedId, locationID) VALUES (2, 1, 6);
INSERT INTO done_deed (participantId, deedId, locationID) VALUES (3, 7, 1);
INSERT INTO done_deed (participantId, deedId, locationID) VALUES (4, 4, 7);


INSERT INTO friendships(participantId, friendId) VALUES (1, 2);
INSERT INTO friendships(participantId, friendId) VALUES (1, 3);
INSERT INTO friendships(participantId, friendId) VALUES (1, 4);
INSERT INTO friendships(participantId, friendId) VALUES (2, 3);
INSERT INTO friendships(participantId, friendId) VALUES (2, 4);
INSERT INTO friendships(participantId, friendId) VALUES (3, 4);


