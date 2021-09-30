-- Comando para desabilitar o modo de segurança e permitir exclusões e alterações gerais.
-- SET SQL_SAFE_UPDATES = 0;

-- CRITERIA
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('1','Proatividade','S');
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('2','Autonomia','S');
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('3','Colaboração','S');
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('4','Entrega de Resultados','S');
commit;
-- select * from criteria;

-- NOTES_STORE
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (1,11,22,1,1,1);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (2,11,22,1,2,1);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (3,11,22,1,3,1);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (4,11,22,1,4,1);
    
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint,note) values (5,12,22,1,1,1,2);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint,note) values (6,12,22,1,2,1,3);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (7,12,22,1,3,1);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (8,12,22,1,4,1);


select * from notes_store order by id_evaluation, id_evaluator;    

delete from notes_store;