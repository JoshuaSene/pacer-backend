-- Comando para desabilitar o modo de segurança e permitir exclusões e alterações gerais.
-- SET SQL_SAFE_UPDATES = 0;

-- CRITERIA
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('1','Proatividade','N');
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('2','Autonomia','N');
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('3','Colaboração','N');
insert into criteria (id_criteria,desc_criteria,sn_ativo) values ('4','Entrega de Resultados','N');
commit;
-- select * from criteria;

-- NOTES_STORE
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (1,11,22,1,1,1);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (2,11,22,1,2,1);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (3,11,22,1,3,1);
insert into notes_store (id_evaluation,id_evaluator,id_evaluated,id_group,id_criteria,id_sprint) values (4,11,22,1,4,1);
    
select * from notes_store order by id_evaluation, id_evaluator;    

delete from notes_store;