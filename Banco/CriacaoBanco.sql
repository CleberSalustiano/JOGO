DROP TABLE IF EXISTS CRIANCA CASCADE;
DROP TABLE IF EXISTS JOGO1 CASCADE;
DROP TABLE IF EXISTS JOGO2 CASCADE;
DROP TABLE IF EXISTS JOGO3 CASCADE;


CREATE TABLE CRIANCA (
    id INTEGER PRIMARY KEY,
    idade INTEGER
);

CREATE TABLE JOGO1 (
    id INTEGER PRIMARY KEY,
    qtd_acertos INTEGER,
    tempo VARCHAR,
    FK_CRIANCA_id INTEGER
);

CREATE TABLE JOGO2 (
    id INTEGER PRIMARY KEY,
    f1_qtd_acertos INTEGER,
    f1_tempo VARCHAR,
    f2_qtd_acertos INTEGER,
    f2_tempo VARCHAR,
    f3_qtd_acertos INTEGER,
    f3_tempo VARCHAR,
    FK_CRIANCA_id INTEGER
);

CREATE TABLE JOGO3 (
    id INTEGER PRIMARY KEY,
    tempo VARCHAR,
    FK_CRIANCA_id INTEGER
);
 
ALTER TABLE JOGO1 ADD CONSTRAINT FK_JOGO1_2
    FOREIGN KEY (FK_CRIANCA_id)
    REFERENCES CRIANCA (id)
    ON DELETE CASCADE;
 
ALTER TABLE JOGO2 ADD CONSTRAINT FK_JOGO2_2
    FOREIGN KEY (FK_CRIANCA_id)
    REFERENCES CRIANCA (id)
    ON DELETE CASCADE;
 
ALTER TABLE JOGO3 ADD CONSTRAINT FK_JOGO3_2
    FOREIGN KEY (FK_CRIANCA_id)
    REFERENCES CRIANCA (id)
    ON DELETE CASCADE;