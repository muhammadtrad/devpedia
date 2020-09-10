CREATE TABLE public.User_credentials
(
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  CONSTRAINT PK_users PRIMARY KEY (username)
);

CREATE TABLE Users
(
  user_id serial NOT NULL,
  username varchar(50) NOT NULL,
  CONSTRAINT FK_34 FOREIGN KEY (username) REFERENCES public.User_credentials (username)
);

CREATE INDEX fkIdx_34 ON Users
(
username
);

CREATE TABLE Projects
(
  project_id serial NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(255) NOT NULL,
  creator_username varchar(50) NOT NULL,
  CONSTRAINT PK_projects PRIMARY KEY (project_id),
  CONSTRAINT FK_56 FOREIGN KEY (creator_username) REFERENCES public.User_credentials (username)
);

CREATE INDEX fkIdx_56 ON Projects
(
 creator_username
);

CREATE TABLE Tech_Categories
(
  category_id serial NOT NULL,
  name varchar(50) NOT NULL,
  CONSTRAINT PK_categories PRIMARY KEY ( category_id )
);

CREATE TABLE Techs
(
  tech_id serial NOT NULL,
  name varchar(50) NOT NULL,
  tech_category integer NOT NULL,
  CONSTRAINT FK_61 FOREIGN KEY (tech_category) REFERENCES Tech_Categories (category_id),
  CONSTRAINT PK_techs PRIMARY KEY (tech_id)
);

CREATE INDEX fkIdx_61 ON Techs
(
  tech_category
);

CREATE TABLE Project_Tech_Stacks
(
  project_id integer NOT NULL,
  tech_id integer NOT NULL,
  CONSTRAINT FK_84 FOREIGN KEY ( project_id ) REFERENCES Projects(project_id),
  CONSTRAINT FK_87 FOREIGN KEY ( tech_id ) REFERENCES Techs ( tech_id )
);

CREATE INDEX fkIdx_84 ON Project_Tech_Stacks
(
 project_id
);

CREATE INDEX fkIdx_87 ON Project_Tech_Stacks
(
 tech_id
);

INSERT INTO Tech_Categories (name) VALUES
  ('Main Library / Framework'),
  ('UI Library'),
  ('Server-Side Library'),
  ('Database Type'),
  ('Query Language'),
  ('Testing Framework');

INSERT INTO Techs (tech_category, name) VALUES
  (5, 'Vue'),
  (5, 'Angular'),
  (5, 'React'),
  (6, 'MaterialUI'),
  (6, 'Bootstrap'),
  (7, 'Node'),
  (7, 'Express'),
  (8, 'PostgreSQL'),
  (8, 'MongoDB'),
  (9, 'GraphQL'),
  (9, 'SQL'),
  (10, 'Jest'),
  (10, 'Mocha'),
  (10, 'Chai');