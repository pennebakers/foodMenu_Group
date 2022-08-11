CREATE TABLE foodMenu (
    id int  PRIMARY KEY AUTO_INCREMENT NOT NULL,
    itemType varchar(200),
    itemName varchar(200),
    itemDescription varchar(200),
    price double
);

CREATE TABLE drinkMenu (
    id int  PRIMARY KEY AUTO_INCREMENT NOT NULL,
    itemName varchar(200),
    itemDescription varchar(200),
    price double
);

CREATE TABLE shoppingCart (
    id int  PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstName varchar(200),
    lastName varchar(200),
    totalCost double
);