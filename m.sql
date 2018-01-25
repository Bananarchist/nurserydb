create table species ( id INT unsigned NOT NULL AUTO_INCREMENT,  genus VARCHAR(32) NOT NULL, species VARCHAR(32) NOT NULL, PRIMARY KEY (id));

create table specimen (id INT unsigned NOT NULL AUTO_INCREMENT,  species_id INT unsigned NOT NULL, quantity INT unsigned NOT NULL, size VARCHAR(16) NOT NULL, created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, planter VARCHAR(128), source VARCHAR(128), PRIMARY KEY (id));

create table observation ( id INT unsigned NOT NULL AUTO_INCREMENT, status VARCHAR(16) NOT NULL, comment VARCHAR(128), specimen_id INT unsigned NOT NULL, created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id));

 create table observation2specimen (o_id INT unsigned NOT NULL, s_id INT unsigned NOT NULL);


     SELECT n.id, n.species_id, n.quantity, n.size, n.created, n.planter, n.source, n.location, s.genus, s.species, COUNT(o.id) as totalObservations, MAX(o.created) as lastObservationMade, MAX(o.id) as lastObservationID from specimen AS n JOIN species AS s ON s.id=n.species_id right JOIN observation AS o ON o.specimen_id=n.id GROUP BY n.id;
