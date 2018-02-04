DROP DATABASE IF EXISTS `kccb`;
CREATE DATABASE `kcdb`;
USE `kcdb`;

create table participants(
	id integer not null auto_increment,
    email varchar(100) not null,
    password varchar(100) not null,
    facebook varchar(100) not null,
    primary key (id));
    
create table deeds(
	id integer not null auto_increment,
    name varchar(100) not null,
    primary key (id));

create table locations(
	id integer not null auto_increment,
    country varchar(100) not null,
    city varchar(100) not null,
    lat DECIMAL(10, 8) NOT NULL, 
    lng DECIMAL(11, 8) NOT NULL,
    primary key (id));


create table done_deed(
	id integer not null auto_increment,
	participantId integer not null,
	deedId integer not null, 
    locationID integer not null,
    primary key (id),
    foreign key (participantId) references participants(id),
    foreign key (deedId) references deeds(id),
    foreign key (locationId) references locations(id));

create table friendships(
	participantId integer not null,
    friendId integer not null,
    foreign key (participantId) references participants(id),
    foreign key (friendId) references participants(id));

