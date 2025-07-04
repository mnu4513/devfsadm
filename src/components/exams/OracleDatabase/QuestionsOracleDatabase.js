const list = [{
    "id": 1,
    "question": [
      { "type": "text", "value": "Which two statements are true about selecting related rows from two tables based on an Entity Relationship Diagram (ERD)?" }
    ],
    "options": [
      { "type": "text", "value": "Implementing a relationship between two tables might require joining additional tables." },
      { "type": "text", "value": "An inner join relates rows within the same table." },
      { "type": "text", "value": "Rows from unrelated tables cannot be joined." },
      { "type": "text", "value": "Every relationship between the two tables must be implemented in a join condition." },
      { "type": "text", "value": "Relating data from a table with data from the same table is implemented with a self join." }
    ],
    "answer": [
      { "type": "text", "value": "Implementing a relationship between two tables might require joining additional tables." },
      { "type": "text", "value": "Relating data from a table with data from the same table is implemented with a self join." }
    ]
}, {
    "id": 2,
    "question": [
      { "type": "text", "value": "Which two statements are true about Entity Relationships?" }
    ],
    "options": [
      { "type": "text", "value": "A table name can be specified just once when selecting data from a table having a self-referencing relationship." },
      { "type": "text", "value": "A one-to-many relationship in one direction is a one-to-one relationship in the other direction." },
      { "type": "text", "value": "A relationship can be mandatory for both entities." },
      { "type": "text", "value": "A one-to-one relationship is always a self-referencing relationship." },
      { "type": "text", "value": "A many-to-many relationship can be implemented only by using foreign keys." }
    ],
    "answer": [
      { "type": "text", "value": "A table name can be specified just once when selecting data from a table having a self-referencing relationship." },
      { "type": "text", "value": "A relationship can be mandatory for both entities." }
    ]
}, {
    "id": 3,
    "question": [
      { "type": "text", "value": "Examine the description of the PRODUCT INFORMATION table:" },
      { "type": "command", "value": `
Name         		Null?      	  Type
-----------------	--------	  ------------
PROD_ID      		NOT NULL   	  NUMBER(2)
PROD_NAME               		  VARCHAR2(10)
LIST_PRICE              		  NUMBER(6,2)`},
      { "type": "text", "value": "Which query retrieves the number of products with a null list price?" }
    ],
    "options": [
      { "type": "command", "value": "SELECT COUNT(list_price) FROM product_information WHERE list_price = NULL;" },
      { "type": "command", "value": "SELECT COUNT(DISTINCT list_price) FROM product_information WHERE list_price IS NULL;" },
      { "type": "command", "value": "SELECT COUNT(NVL(list_price, 0)) FROM product_information WHERE list_price IS NULL;" },
      { "type": "command", "value": "SELECT COUNT(list_price) FROM product_information WHERE list_price IS NULL;" }
    ],
    "answer": [
      { "type": "command", "value": "SELECT COUNT(NVL(list_price, 0)) FROM product_information WHERE list_price IS NULL;" }
    ]
}, {
    "id": 4,
    "question": [
      { "type": "text", "value": "Examine this statement, which executes successfully:" },
      { "type": "command", "value": `
SELECT d.department_name, ROUND(AVG(NULLIF(e.salary,0))) AS avgsal, MAX(e.salary) AS maxsal
  FROM employees e
  JOIN departments d
    ON (e.department_id = d.department_id)
 GROUP BY d.department_name
 ORDER BY 2;` },
      { "type": "text", "value": "In which order are the rows displayed?" }
    ],
    "options": [
      { "type": "text", "value": "Sorted by DEPARTMENT_NAME" },
      { "type": "text", "value": "Sorted by DEPARTMENT_NAME and MAXSAL" },
      { "type": "text", "value": "Sorted by DEPARTMENT_NAME and AVGSAL" },
      { "type": "text", "value": "Sorted by AVGSAL" },
      { "type": "text", "value": "Sorted by MAXSAL" }
    ],
    "answer": [
      { "type": "text", "value": "Sorted by AVGSAL" }
    ]
}, {
    "id": 5,
    "question": [
      { "type": "text", "value": "You want to return the current date and time from the user session, with a data type of TIMESTAMP WITH TIME ZONE." },
      { "type": "text", "value": "Which function will do this?" }
    ],
    "options": [
      { "type": "text", "value": "SYSDATE" },
      { "type": "text", "value": "CURRENT_TIMESTAMP" },
      { "type": "text", "value": "CURRENT_DATE" },
      { "type": "text", "value": "LOCALTIMESTAMP" }
    ],
    "answer": [
      { "type": "text", "value": "CURRENT_TIMESTAMP" }
    ]
}, {
    "id": 6,
    "question": [
      { "type": "text", "value": "Examine the description of the ORDERS table:" },
     
      { "type": "command", "value": `
Name				Null?		Type
------------------  ----------  --------------
ORDER_ID						NUMBER(38)	
ORDER_DATE						DATE`},
      { "type": "text", "value": "Examine the description of the INVOICES table:" },
      { "type": "command", "value": `
Name				Null?		Type
------------------  ----------  --------------
INVOICE_ID						NUMBER(38)
INVOICE_DATE					DATE`},
      { "type": "text", "value": "Which three statements execute successfully?" }
    ],
    "options": [
      { "type": "command", "value": "SELECT order_id, order_date FROM orders\nUNION ALL\nSELECT invoice_id, invoice_date FROM invoices ORDER BY order_id;" },
      { "type": "command", "value": "SELECT order_id, order_date FROM orders\nINTERSECT\nSELECT invoice_id, invoice_date FROM invoices ORDER BY invoice_id;" },
      { "type": "command", "value": "SELECT * FROM orders ORDER BY order_id\nINTERSECT\nSELECT * FROM invoices ORDER BY invoice_id;" },
      { "type": "command", "value": "SELECT order_id invoice_id, order_date FROM orders\nMINUS\nSELECT invoice_id, invoice_date FROM invoices ORDER BY invoice_id;" },
      { "type": "command", "value": "(SELECT * FROM orders\nUNION ALL\nSELECT * FROM invoices) ORDER BY order_id;" },
      { "type": "command", "value": "SELECT * FROM orders\nMINUS\nSELECT * FROM invoices ORDER BY 1;" },
      { "type": "command", "value": "SELECT * FROM orders ORDER BY order_id\nUNION\nSELECT * FROM invoices;" }
    ],
    "answer": [
      { "type": "command", "value": "SELECT order_id, order_date FROM orders\nUNION ALL\nSELECT invoice_id, invoice_date FROM invoices ORDER BY order_id;" },
      { "type": "command", "value": "(SELECT * FROM orders\nUNION ALL\nSELECT * FROM invoices) ORDER BY order_id;" },
      { "type": "command", "value": "SELECT * FROM orders\nMINUS\nSELECT * FROM invoices ORDER BY 1;" }
    ]
}, {
    "id": 7,
    "question": [
      { "type": "text", "value": "Which three are true about the CREATE TABLE command?" }
    ],
    "options": [
      { "type": "text", "value": "It implicitly executes a commit." },
      { "type": "text", "value": "It can include the CREATE ... INDEX statement for creating an index to enforce the primary key constraint." },
      { "type": "text", "value": "The owner of the table should have space quota available on the tablespace where the table is defined." },
      { "type": "text", "value": "The owner of the table must have the UNLIMITED TABLESPACE system privilege." },
      { "type": "text", "value": "A user must have the CREATE ANY TABLE privilege to create tables." },
      { "type": "text", "value": "It implicitly rolls back any pending transactions." }
    ],
    "answer": [
      { "type": "text", "value": "It implicitly executes a commit." },
      { "type": "text", "value": "It can include the CREATE ... INDEX statement for creating an index to enforce the primary key constraint." },
      { "type": "text", "value": "The owner of the table should have space quota available on the tablespace where the table is defined." }
    ]
}, {
    "id": 8,
    "question": [
      { "type": "text", "value": "Which two statements are true about a full outer join?" }
    ],
    "options": [
      { "type": "text", "value": "It returns matched and unmatched rows from both tables being joined." },
      { "type": "text", "value": "It includes rows that are returned by a Cartesian product." },
      { "type": "text", "value": "The Oracle join operator (+) must be used on both sides of the join condition in the WHERE clause." },
      { "type": "text", "value": "It includes rows that are returned by an inner join." },
      { "type": "text", "value": "It returns only unmatched rows from both tables being joined." }
    ],
    "answer": [
      { "type": "text", "value": "It returns matched and unmatched rows from both tables being joined." },
      { "type": "text", "value": "It includes rows that are returned by an inner join." }
    ]
}, {
    "id": 9,
    "question": [
      { "type": "text", "value": "Which two statements are true about the results of using the INTERSECT operator in compound queries?" }
    ],
    "options": [
      { "type": "text", "value": "The number of columns in each SELECT in the compound query can be different." },
      { "type": "text", "value": "INTERSECT returns rows common to both sides of the compound query." },
      { "type": "text", "value": "Column names in each SELECT in the compound query can be different." },
      { "type": "text", "value": "Reversing the order of the intersected tables can sometimes affect the output." },
      { "type": "text", "value": "INTERSECT ignores NULLs." }
    ],
    "answer": [
      { "type": "text", "value": "INTERSECT returns rows common to both sides of the compound query." },
      { "type": "text", "value": "Column names in each SELECT in the compound query can be different." }
    ]
}, {
    "id": 10,
    "question": [
      { "type": "text", "value": "Evaluate these commands which execute successfully:" },
      { "type": "command", "value": `
CREATE SEQUENCE ord_seq
  INCREMENT BY 1
  START WITH 1
  MAXVALUE 100000
  CYCLE
  CACHE 5000;
${` `}
CREATE TABLE ord_items (
  ord_no       NUMBER(4) DEFAULT ord_seq.NEXTVAL NOT NULL,
  item_no      NUMBER(3),
  qty          NUMBER(3),
  expiry_date  DATE,
  CONSTRAINT ir_pk PRIMARY KEY (ord_no, item_no),
  CONSTRAINT ord_fk FOREIGN KEY (ord_no) REFERENCES orders (ord_no));` },
      { "type": "text", "value": "Which two statements are true about the ORD_ITEMS table and the ORD_SEQ sequence?" }
    ],
    "options": [
      { "type": "text", "value": "If sequence ORD_SEQ is dropped then the default value for column ORD_NO will be NULL for rows inserted into ORD_ITEMS." },
      { "type": "text", "value": "Column ORD_NO gets the next number from sequence ORD_SEQ whenever a row is inserted into ORD_ITEMS and no explicit value is given for ORD_NO." },
      { "type": "text", "value": "Sequence ORD_SEQ cycles back to 1 after every 5000 numbers and can cycle 20 times." },
      { "type": "text", "value": "Sequence ORD_SEQ is guaranteed not to generate duplicate numbers." },
      { "type": "text", "value": "Any user inserting rows into table ORD_ITEMS must have been granted access to sequence ORD_SEQ." }
    ],
    "answer": [
      { "type": "text", "value": "Column ORD_NO gets the next number from sequence ORD_SEQ whenever a row is inserted into ORD_ITEMS and no explicit value is given for ORD_NO." },
      { "type": "text", "value": "Any user inserting rows into table ORD_ITEMS must have been granted access to sequence ORD_SEQ." }
    ]
}, {
    "id": 11,
    "question": [
      { "type": "text", "value": "Which three statements are true about GLOBAL TEMPORARY TABLES?" }
    ],
    "options": [
      { "type": "text", "value": "A GLOBAL TEMPORARY TABLE can have multiple indexes." },
      { "type": "text", "value": "A GLOBAL TEMPORARY TABLE cannot have a PUBLIC SYNONYM." },
      { "type": "text", "value": "A GLOBAL TEMPORARY TABLE can have only one index." },
      { "type": "text", "value": "A trigger can be created on a GLOBAL TEMPORARY TABLE." },
      { "type": "text", "value": "DML on GLOBAL TEMPORARY TABLES generates no REDO." },
      { "type": "text", "value": "A GLOBAL TEMPORARY TABLE can be referenced in the defining query of a view." }
    ],
    "answer": [
      { "type": "text", "value": "A GLOBAL TEMPORARY TABLE can have multiple indexes." },
      { "type": "text", "value": "A trigger can be created on a GLOBAL TEMPORARY TABLE." },
      { "type": "text", "value": "A GLOBAL TEMPORARY TABLE can be referenced in the defining query of a view." }
    ]
}, {
    "id": 12,
    "question": [
      { "type": "text", "value": "Which three statements are true about the Oracle join and ANSI join syntax?" }
    ],
    "options": [
      { "type": "text", "value": "The SQL:1999 compliant ANSI join syntax supports creation of a Cartesian product of two tables." },
      { "type": "text", "value": "The Oracle join syntax only supports right outer joins." },
      { "type": "text", "value": "The Oracle join syntax performs better than the SQL:1999 compliant ANSI join syntax." },
      { "type": "text", "value": "The Oracle join syntax supports natural joins." },
      { "type": "text", "value": "The Oracle join syntax performs less well than the SQL:1999 compliant ANSI join syntax." },
      { "type": "text", "value": "The SQL:1999 compliant ANSI join syntax supports natural joins." },
      { "type": "text", "value": "The Oracle join syntax supports creation of a Cartesian product of two tables." }
    ],
    "answer": [
      { "type": "text", "value": "The SQL:1999 compliant ANSI join syntax supports creation of a Cartesian product of two tables." },
      { "type": "text", "value": "The SQL:1999 compliant ANSI join syntax supports natural joins." },
      { "type": "text", "value": "The Oracle join syntax supports creation of a Cartesian product of two tables." }
    ]
}, {
    "id": 13,
    "question": [
      { "type": "text", "value": "Which set of commands will prompt only once for the name of the table to use in the query?" }
    ],
    "options": [
      { "type": "command", "value": "PROMPT Enter table name &x\nSELECT employee_id FROM &x WHERE last_name = 'King';" },
      { "type": "command", "value": "DEFINE x = 'employees'\nPROMPT Enter table name &x\nSELECT employee_id FROM &x WHERE last_name = 'King';" },
      { "type": "command", "value": "PROMPT Enter table name &&x\nSELECT employee_id FROM &x WHERE last_name = 'King';" },
      { "type": "command", "value": "PROMPT Enter table name &x\nSELECT employee_id FROM &&x WHERE last_name = 'King';" }
    ],
    "answer": [
      { "type": "command", "value": "PROMPT Enter table name &&x\nSELECT employee_id FROM &x WHERE last_name = 'King';" }
    ]
}, {
    "id": 14,
    "question": [
      { "type": "text", "value": "You execute this command:" },
      { "type": "command", "value": "ALTER TABLE employees SET UNUSED (department_id);" },
      { "type": "text", "value": "Which two are true?" }
    ],
    "options": [
      { "type": "text", "value": "The DEPARTMENT_ID column can be recovered from the recycle bin." },
      { "type": "text", "value": "No updates can be made to the data in the DEPARTMENT_ID column." },
      { "type": "text", "value": "A new column with the name DEPARTMENT_ID can be added to the EMPLOYEES table." },
      { "type": "text", "value": "A query can display data from the DEPARTMENT_ID column." },
      { "type": "text", "value": "The DEPARTMENT_ID column is set to null for all rows in the table." },
      { "type": "text", "value": "The storage space occupied by the DEPARTMENT_ID column is released only after a COMMIT is issued." }
    ],
    "answer": [
      { "type": "text", "value": "No updates can be made to the data in the DEPARTMENT_ID column." },
      { "type": "text", "value": "A new column with the name DEPARTMENT_ID can be added to the EMPLOYEES table." }
    ]
}, {
    "id": 15,
    "question": [
      { "type": "text", "value": "Examine this query:" },
      { "type": "command", "value": "SELECT * FROM bricks, colors;" },
      { "type": "text", "value": "Which two statements are true?" }
    ],
    "options": [
      { "type": "text", "value": "You can add an ON clause with a join condition." },
      { "type": "text", "value": "It returns the same rows as SELECT * FROM bricks CROSS JOIN colors;" },
      { "type": "text", "value": "It returns the number of rows in BRICKS plus the number of rows in COLORS." },
      { "type": "text", "value": "You can add a WHERE clause with filtering criteria." },
      { "type": "text", "value": "You can add a USING clause with a join condition." }
    ],
    "answer": [
      { "type": "text", "value": "It returns the same rows as SELECT * FROM bricks CROSS JOIN colors;" },
      { "type": "text", "value": "You can add a WHERE clause with filtering criteria." }
    ]
}, {
    "id": 16,
    "question": [
      { "type": "text", "value": "Which two are SQL features?" }
    ],
    "options": [
      { "type": "text", "value": "Providing database transaction control" },
      { "type": "text", "value": "Providing graphical capabilities" },
      { "type": "text", "value": "Providing variable definition capabilities" },
      { "type": "text", "value": "Processing sets of data" },
      { "type": "text", "value": "Providing update capabilities for data in external files" }
    ],
    "answer": [
      { "type": "text", "value": "Providing database transaction control" },
      { "type": "text", "value": "Processing sets of data" }
    ]
}, {
    "id": 17,
    "question": [
      { "type": "text", "value": "Which three statements are true about Structured Query Language (SQL)?" }
    ],
    "options": [
      { "type": "text", "value": "It requires that data be contained in hierarchical data storage." },
      { "type": "text", "value": "It provides independence for logical data structures being manipulated from the underlying physical data storage." },
      { "type": "text", "value": "It best supports relational databases." },
      { "type": "text", "value": "It is used to define encapsulation and polymorphism for a relational table." },
      { "type": "text", "value": "It guarantees atomicity, consistency, isolation, and durability (ACID) features." },
      { "type": "text", "value": "It is the only language that can be used for both relational and object-oriented databases." }
    ],
    "answer": [
      { "type": "text", "value": "It provides independence for logical data structures being manipulated from the underlying physical data storage." },
      { "type": "text", "value": "It best supports relational databases." },
      { "type": "text", "value": "It guarantees atomicity, consistency, isolation, and durability (ACID) features." }
    ]
}, {
    "id": 18,
    "question": [
      { "type": "text", "value": "Which two are true about the NVL, NVL2, and COALESCE functions?" }
    ],
    "options": [
      { "type": "text", "value": "The first expression in NVL2 is never returned." },
      { "type": "text", "value": "COALESCE stops evaluating the list of expressions when it finds the first null value." },
      { "type": "text", "value": "NVL can have any number of expressions in the list." },
      { "type": "text", "value": "COALESCE stops evaluating the list of expressions when it finds the first non-null value." },
      { "type": "text", "value": "NVL2 can have any number of expressions in the list." },
      { "type": "text", "value": "NVL must have expressions of the same data type." }
    ],
    "answer": [
      { "type": "text", "value": "COALESCE stops evaluating the list of expressions when it finds the first non-null value." },
      { "type": "text", "value": "NVL must have expressions of the same data type." }
    ]
}, {
    "id": 19,
    "question": [
      { "type": "text", "value": "Which three are true about granting object privileges on tables, views, and sequences?" }
    ],
    "options": [
      { "type": "text", "value": "INSERT can be granted on tables, views, and sequences." },
      { "type": "text", "value": "ALTER can be granted only on tables and sequences." },
      { "type": "text", "value": "REFERENCES can be granted only on tables and views." },
      { "type": "text", "value": "SELECT can be granted only on tables and views." },
      { "type": "text", "value": "UPDATE can be granted only on tables and views." },
      { "type": "text", "value": "DELETE can be granted on tables, views, and sequences." }
    ],
    "answer": [
      { "type": "text", "value": "ALTER can be granted only on tables and sequences." },
      { "type": "text", "value": "SELECT can be granted only on tables and views." },
      { "type": "text", "value": "UPDATE can be granted only on tables and views." }
    ]
}, {
    "id": 20,
    "question": [
      { "type": "text", "value": "Examine these statements executed in a single Oracle session:" },
      { "type": "command", "value": `
CREATE TABLE product (pcode NUMBER(2), pname VARCHAR2(20));
${` `}
INSERT INTO product VALUES (1, 'pen');
${` `}
INSERT INTO product VALUES (2, 'pencil');
${` `}
INSERT INTO product VALUES (3, 'fountain pen');
${` `}
SAVEPOINT a;
${` `}
UPDATE product SET pcode = 10 WHERE pcode = 1;
${` `}
COMMIT;
${` `}
DELETE FROM product WHERE pcode = 2;
${` `}
SAVEPOINT b;
${` `}
UPDATE product SET pcode = 30 WHERE pcode = 3;
${` `}
SAVEPOINT c;
${` `}
DELETE FROM product WHERE pcode = 10;
${` `}
ROLLBACK TO SAVEPOINT b;
${` `}
COMMIT;` },
      { "type": "text", "value": "Which three statements are true?" }
    ],
    "options": [
      { "type": "text", "value": "There is no row containing pen." },
      { "type": "text", "value": "The code for pen is 10." },
      { "type": "text", "value": "The code for fountain pen is 3." },
      { "type": "text", "value": "There is no row containing pencil." },
      { "type": "text", "value": "The code for pen is 1." },
      { "type": "text", "value": "There is no row containing fountain pen." }
    ],
    "answer": [
      { "type": "text", "value": "The code for pen is 10." },
      { "type": "text", "value": "The code for fountain pen is 3." },
      { "type": "text", "value": "There is no row containing pencil." }
    ]
}, {
    "id": 21,
    "question": [
      { "type": "text", "value": "Which three are true about the MERGE statement?" }
    ],
    "options": [
      { "type": "text", "value": "It can update the same row of the target table multiple times." },
      { "type": "text", "value": "It can use views to produce source rows." },
      { "type": "text", "value": "It can update, insert, or delete rows conditionally in multiple tables." },
      { "type": "text", "value": "It can merge rows only from tables." },
      { "type": "text", "value": "It can use subqueries to produce source rows." },
      { "type": "text", "value": "It can combine rows from multiple tables conditionally to insert into a single table." }
    ],
    "answer": [
      { "type": "text", "value": "It can use views to produce source rows." },
      { "type": "text", "value": "It can use subqueries to produce source rows." },
      { "type": "text", "value": "It can combine rows from multiple tables conditionally to insert into a single table." }
    ]
}, {
    "id": 22,
    "question": [
      { "type": "text", "value": "Examine these statements:" },
      { "type": "command", "value": `
CREATE TABLE dept (
  deptno NUMBER PRIMARY KEY,
  dname  VARCHAR2(10),
  mgr    NUMBER,
  CONSTRAINT dept_fkey FOREIGN KEY (mgr) REFERENCES emp(empno)
);
${` `}
CREATE TABLE emp (
  empno    NUMBER PRIMARY KEY,
  ename    VARCHAR2(10),
  deptno   NUMBER,
  CONSTRAINT emp_fkey FOREIGN KEY (deptno) REFERENCES dept(deptno) DISABLE
);
${` `}
ALTER TABLE emp MODIFY CONSTRAINT emp_fkey ENABLE;` },
      { "type": "text", "value": "Which two are true?" }
    ],
    "options": [
      { "type": "text", "value": "The DEPTNO column in the EMP table will be able to contain NULL values." },
      { "type": "text", "value": "The MGR column in the DEPT table will not be able to contain NULL values." },
      { "type": "text", "value": "The CREATE TABLE EMP statement must precede the CREATE TABLE DEPT statement for all three statements to execute successfully." },
      { "type": "text", "value": "All three statements execute successfully in the order shown." },
      { "type": "text", "value": "Both foreign key constraint definitions must be removed from the CREATE TABLE statements, and be added with ALTER TABLE statements once both tables are created, for the two CREATE TABLE statements to execute successfully in the order shown." },
      { "type": "text", "value": "The DEPT_FKEY constraint definition must be removed from the CREATE TABLE DEPT statement, and be added with an ALTER TABLE statement once both tables are created, for the two CREATE TABLE statements to execute successfully in the order shown." }
    ],
    "answer": [
      { "type": "text", "value": "The DEPTNO column in the EMP table will be able to contain NULL values." },
      { "type": "text", "value": "All three statements execute successfully in the order shown." }
    ]
}, {
    "id": 23,
    "question": [
      { "type": "text", "value": "Which two statements are true about Oracle synonyms?" }
    ],
    "options": [
      { "type": "text", "value": "Any user can create a PUBLIC synonym." },
      { "type": "text", "value": "A synonym can have a synonym." },
      { "type": "text", "value": "A synonym has an object number." },
      { "type": "text", "value": "A synonym can be created on an object in a package." },
      { "type": "text", "value": "All private synonym names must be unique in the database." }
    ],
    "answer": [
      { "type": "text", "value": "A synonym can have a synonym." },
      { "type": "text", "value": "A synonym has an object number." }
    ]
}, {
    "id": 24,
    "question": [
      { "type": "text", "value": "Which three statements are true about multiple row subqueries?" }
    ],
    "options": [
      { "type": "text", "value": "They can contain HAVING clauses." },
      { "type": "text", "value": "They cannot contain a subquery." },
      { "type": "text", "value": "They can contain GROUP BY clauses." },
      { "type": "text", "value": "Two or more values are always returned from the subquery." },
      { "type": "text", "value": "They can return multiple columns." }
    ],
    "answer": [
      { "type": "text", "value": "They can contain HAVING clauses." },
      { "type": "text", "value": "They can contain GROUP BY clauses." },
      { "type": "text", "value": "They can return multiple columns." }
    ]
}, {
    "id": 25,
    "question": [
      { "type": "text", "value": "Which two statements about INVISIBLE indexes are true?" }
    ],
    "options": [
      { "type": "text", "value": "All INSERT, UPDATE, and DELETE statements maintain entries in the index." },
      { "type": "text", "value": "You use ALTER INDEX to make an INVISIBLE index VISIBLE." },
      { "type": "text", "value": "You can only create one INVISIBLE index on the same column list." },
      { "type": "text", "value": "An INVISIBLE index consumes no storage." },
      { "type": "text", "value": "The query optimizer never considers INVISIBLE indexes when determining execution plans." }
    ],
    "answer": [
      { "type": "text", "value": "All INSERT, UPDATE, and DELETE statements maintain entries in the index." },
      { "type": "text", "value": "You use ALTER INDEX to make an INVISIBLE index VISIBLE." }
    ]
}, {
    "id": 26,
    "question": [
      { "type": "text", "value": "Examine the description of the EMPLOYEES table:" },
      { "type": "command", "value": `
Name			Null?			Type
--------------  ---------   	------------
EMP_NO			NOT NULL		NUMBER(4)
LAST_NAME						VARCHAR2(10)	
HIRE_DATE						DATE			
SALARY							NUMBER(6,2)`},
      { "type": "text", "value": "For each employee in department 90 you want to display:" },
      { "type": "text", "value": "1. Their last name"},
      { "type": "text", "value": "2. The number of complete weeks they have been employed"},
      { "type": "text", "value": "The output must be sorted by the number of weeks, starting with the longest serving employee first." },
      { "type": "text", "value": "Which statement will accomplish this?" }
    ],
    "options": [
      { "type": "command", "value": "SELECT last_name, TRUNC((SYSDATE - hire_date) / 7) AS tenure\nFROM employees\nWHERE department_id = 90\nORDER BY tenure;" },
      { "type": "command", "value": "SELECT last_name, TRUNC((SYSDATE - hire_date) / 7) AS tenure\nFROM employees\nWHERE department_id = 90\nORDER BY tenure DESC;" },
      { "type": "command", "value": "SELECT last_name, ROUND((SYSDATE - hire_date) / 7) AS tenure\nFROM employees\nWHERE department_id = 90\nORDER BY tenure DESC;" },
      { "type": "command", "value": "SELECT last_name, ROUND((SYSDATE - hire_date) / 7) AS tenure\nFROM employees\nWHERE department_id = 90\nORDER BY tenure;" }
    ],
    "answer": [
      { "type": "command", "value": "SELECT last_name, TRUNC((SYSDATE - hire_date) / 7) AS tenure\nFROM employees\nWHERE department_id = 90\nORDER BY tenure DESC;" }
    ]
}, {
    "id": 27,
    "question": [
      { "type": "text", "value": "Examine the data in the EMPLOYEES table:" },
      { "type": "command", "value": `
EMPLOYEE_ID  LAST_NAME   MONTHLY_SALARY  MONTHLY_COMMISSION_PCT
-----------  ----------  --------------  ----------------------
        101  Kochhar             24000                   <NULL>
        102  Ernst               17000                       .5
        103  Rajs                27000                       .2
        104  Lorentz             25000                   <NULL>
        105  Morris              12000                   <NULL>`},
      { "type": "text", "value": "Which statement will compute the total annual compensation for each employee?" }
    ],
    "options": [
      { "type": "command", "value": "SELECT last_name, (monthly_salary * 12) + (monthly_salary * 12 * NVL(monthly_commission_pct, 0)) AS annual_comp FROM employees;" },
      { "type": "command", "value": "SELECT last_name, (monthly_salary + monthly_commission_pct) * 12 AS annual_comp FROM employees;" },
      { "type": "command", "value": "SELECT last_name, (monthly_salary * 12) + (monthly_salary * 12 * monthly_commission_pct) AS annual_comp FROM employees;" },
      { "type": "command", "value": "SELECT last_name, (monthly_salary * 12) + (monthly_commission_pct * 12) AS annual_comp FROM employees;" }
    ],
    "answer": [
      { "type": "command", "value": "SELECT last_name, (monthly_salary * 12) + (monthly_salary * 12 * NVL(monthly_commission_pct, 0)) AS annual_comp FROM employees;" }
    ]
}, {
    "id": 28,
    "question": [
      { "type": "text", "value": "You own table DEPARTMENTS, referenced by views, indexes, and synonyms." },
      { "type": "text", "value": "Examine this command which executes successfully:" },
      { "type": "command", "value": "DROP TABLE departments PURGE;" },
      { "type": "text", "value": "Which three statements are true?" }
    ],
    "options": [
      { "type": "text", "value": "It will remove the DEPARTMENTS table from the database." },
      { "type": "text", "value": "Neither can it be rolled back nor can the DEPARTMENTS table be recovered." },
      { "type": "text", "value": "It will drop all indexes on the DEPARTMENTS table." },
      { "type": "text", "value": "It will remove all views that are based on the DEPARTMENTS table." },
      { "type": "text", "value": "It will remove all synonyms for the DEPARTMENTS table." },
      { "type": "text", "value": "It will delete all rows from the DEPARTMENTS table, but retain the empty table." }
    ],
    "answer": [
      { "type": "text", "value": "It will remove the DEPARTMENTS table from the database." },
      { "type": "text", "value": "Neither can it be rolled back nor can the DEPARTMENTS table be recovered." },
      { "type": "text", "value": "It will drop all indexes on the DEPARTMENTS table." }
    ]
}, {
    "id": 29,
    "question": [
      { "type": "text", "value": "Which statement executes successfully?" }
    ],
    "options": [
      { "type": "command", "value": "SELECT TO_NUMBER(TO_DATE(INTERVAL '800' SECOND)) FROM DUAL;" },
      { "type": "command", "value": "SELECT TO_DATE(INTERVAL '800' SECOND, 'HH24:MM') FROM DUAL;" },
      { "type": "command", "value": "SELECT TO_DATE(TO_NUMBER(INTERVAL '800' SECOND)) FROM DUAL;" },
      { "type": "command", "value": "SELECT TO_CHAR(INTERVAL '800' SECOND, 'HH24:MM') FROM DUAL;" },
      { "type": "command", "value": "SELECT TO_NUMBER(INTERVAL '800' SECOND, 'HH24:MM') FROM DUAL;" }
    ],
    "answer": [
      { "type": "command", "value": "SELECT TO_CHAR(INTERVAL '800' SECOND, 'HH24:MM') FROM DUAL;" }
    ]
}, {
    "id": 30,
    "question": [
      { "type": "text", "value": "The INVOICE table has a QTY_SOLD column of data type NUMBER and an INVOICE_DATE column of data type DATE." },
      { "type": "text", "value": "NLS_DATE_FORMAT is set to DD-MON-RR." },
      { "type": "text", "value": "Which two are true about data type conversions involving these columns in query expressions?" }
    ],
    "options": [
      { "type": "text", "value": "invoice_date = '15-march-2019' : uses implicit conversion" },
      { "type": "text", "value": "qty_sold = '0554982' : requires explicit conversion" },
      { "type": "text", "value": "CONCAT(qty_sold, invoice_date) : requires explicit conversion" },
      { "type": "text", "value": "qty_sold BETWEEN '101' AND '110' : uses implicit conversion" },
      { "type": "text", "value": "invoice_date > '01-02-2019' : uses implicit conversion" }
    ],
    "answer": [
      { "type": "text", "value": "invoice_date = '15-march-2019' : uses implicit conversion" },
      { "type": "text", "value": "qty_sold BETWEEN '101' AND '110' : uses implicit conversion" }
    ]
}, {
    "id": 31,
    "question": [
      { "type": "text", "value": "You have been tasked to create a table for a banking application." },
      { "type": "text", "value": "One of the columns must meet three requirements:" },
      { "type": "list", "value": [
        "Be stored in a format supporting date arithmetic without using conversion functions",
        "Store a loan period of up to 10 years",
        "Be used for calculating interest for the number of days the loan remains unpaid"
      ]},
      { "type": "text", "value": "Which data type should you use?" }
    ],
    "options": [
      { "type": "text", "value": "INTERVAL DAY TO SECOND" },
      { "type": "text", "value": "INTERVAL YEAR TO MONTH" },
      { "type": "text", "value": "TIMESTAMP" },
      { "type": "text", "value": "TIMESTAMP WITH LOCAL TIMEZONE" },
      { "type": "text", "value": "TIMESTAMP WITH TIMEZONE" }
    ],
    "answer": [
      { "type": "text", "value": "INTERVAL YEAR TO MONTH" }
    ]
}, {
    "id": 32,
    "question": [
      { "type": "text", "value": "Examine the description of the EMPLOYEES table:" },
      { "type": "command", "value": `
Name         		Null?    	Type
----------------- 	-------- 	--------------
EMPLOYEE_ID  		NOT NULL 	NUMBER(6)
FIRST_NAME            			VARCHAR2(20)
LAST_NAME    		NOT NULL 	VARCHAR2(25)
SALARY                			NUMBER(8,2)
HIREDATE              			DATE
DEPARTMENT_ID         			NUMBER(4)`},
      { "type": "text", "value": "Which two statements will insert a row into the EMPLOYEES table?" }
    ],
    "options": [
      { "type": "command", "value": "INSERT into employees VALUES (101, 'John', '', 12000, SYSDATE, 10);" },
      { "type": "command", "value": "INSERT into employees SELECT 101, 'John', 'Smith', 12000, (SELECT SYSDATE FROM dual), 10 FROM dual;" },
      { "type": "command", "value": "INSERT into employees (employee_id, salary, first_name, hiredate, last_name) VALUES (101, 12000, 'John', SYSDATE, 'Smith');" },
      { "type": "command", "value": "INSERT into employees (employee_id, first_name, last_name, salary, hiredate)\nVALUES ((SELECT 101, 'John', 'Smith', 12000, SYSDATE FROM dual) );" },
      { "type": "command", "value": "INSERT into employees VALUES (101, 'John', 'Smith', 10, 12000, SYSDATE);" },
      { "type": "command", "value": "INSERT into employees VALUES (101, 'John', 'Smith', 12000, SYSDATE);" }
    ],
    "answer": [
      { "type": "command", "value": "INSERT into employees SELECT 101, 'John', 'Smith', 12000, (SELECT SYSDATE FROM dual), 10 FROM dual;" },
      { "type": "command", "value": "INSERT into employees (employee_id, salary, first_name, hiredate, last_name) VALUES (101, 12000, 'John', SYSDATE, 'Smith');" }
    ]
}, {
    "id": 33,
    "question": [
      { "type": "text", "value": "Which statement is true about TRUNCATE and DELETE?" }
    ],
    "options": [
      { "type": "text", "value": "You can never TRUNCATE a table if foreign key constraints would be violated." },
      { "type": "text", "value": "For tables with multiple indexes and triggers, DELETE is faster than TRUNCATE." },
      { "type": "text", "value": "For large tables, DELETE is faster than TRUNCATE." },
      { "type": "text", "value": "You can DELETE rows from a table with referential integrity constraints." }
    ],
    "answer": [
      { "type": "text", "value": "You can DELETE rows from a table with referential integrity constraints." }
    ]
}, {
    "id": 34,
    "question": [
      { "type": "text", "value": "Examine this SQL statement:" },
      { "type": "command", "value": `
DELETE FROM employees e
 WHERE EXISTS
    (SELECT 'dummy'
       FROM emp_history
     WHERE employee_id = e.employee_id);` },
      { "type": "text", "value": "Which two are true?" }
    ],
    "options": [
      { "type": "text", "value": "The subquery is executed before the DELETE statement is executed." },
      { "type": "text", "value": "The subquery is executed for every row in the EMPLOYEES table." },
      { "type": "text", "value": "The subquery is not a correlated subquery." },
      { "type": "text", "value": "The DELETE statement executes successfully even if the subquery selects multiple rows." },
      { "type": "text", "value": "All existing rows in the EMPLOYEES table are deleted." }
    ],
    "answer": [
      { "type": "text", "value": "The subquery is executed for every row in the EMPLOYEES table." },
      { "type": "text", "value": "The DELETE statement executes successfully even if the subquery selects multiple rows." }
    ]
}, {
    "id": 35,
    "question": [
      { "type": "text", "value": "Examine the description of the CUSTOMERS table:" },
      { "type": "command", "value": `
Name              Null?    Type
----------------- -------- -------------
CUST_ID           NOT NULL VARCHAR2(2)
CUST_LAST_NAME             VARCHAR2(30)
CITY                       VARCHAR2(10)
CUST_CREDIT_LIMIT          NUMBER(6,2)`},
      { "type": "text", "value": "You need to display last names and credit limits of all customers whose last name starts with A or B in lower or upper case, and whose credit limit is below 1000." },
      { "type": "command", "value": "SELECT cust_last_name, cust_credit_limit FROM customers" },
      { "type": "text", "value": "Which two WHERE conditions give the required result?" }
    ],
    "options": [
      { "type": "command", "value": "WHERE (UPPER(cust_last_name) LIKE INITCAP('A') OR UPPER(cust_last_name) LIKE INITCAP('B')) AND ROUND(cust_credit_limit) < ROUND(1000);" },
      { "type": "command", "value": "WHERE (UPPER(cust_last_name) LIKE 'A%' OR UPPER(cust_last_name) LIKE 'B%') AND ROUND(cust_credit_limit) < 1000;" },
      { "type": "command", "value": "WHERE (UPPER(cust_last_name) BETWEEN UPPER('A%') AND 'B%') AND ROUND(cust_credit_limit) < 1000;" },
      { "type": "command", "value": "WHERE (INITCAP(cust_last_name) LIKE 'A%' OR INITCAP(cust_last_name) LIKE 'B%') AND cust_credit_limit < 1000;" },
      { "type": "command", "value": "WHERE UPPER(cust_last_name) IN ('A%', 'B%') AND cust_credit_limit < 1000;" }
    ],
    "answer": [
      { "type": "command", "value": "WHERE (UPPER(cust_last_name) LIKE 'A%' OR UPPER(cust_last_name) LIKE 'B%') AND ROUND(cust_credit_limit) < 1000;" },
      { "type": "command", "value": "WHERE (INITCAP(cust_last_name) LIKE 'A%' OR INITCAP(cust_last_name) LIKE 'B%') AND cust_credit_limit < 1000;" }
    ]
}, {
    "id": 36,
    "question": [
      { "type": "text", "value": "Which two actions can you perform with object privileges?" }
    ],
    "options": [
      { "type": "text", "value": "Execute a procedure or function in another schema." },
      { "type": "text", "value": "Delete rows from tables in any schema except SYS." },
      { "type": "text", "value": "Create roles." },
      { "type": "text", "value": "Set default and temporary tablespaces for a user." },
      { "type": "text", "value": "Create FOREIGN KEY constraints that reference tables in other schemas." }
    ],
    "answer": [
      { "type": "text", "value": "Execute a procedure or function in another schema." },
      { "type": "text", "value": "Create FOREIGN KEY constraints that reference tables in other schemas." }
    ]
}, {
    "id": 37,
    "question": [
      { "type": "text", "value": "Which two queries execute successfully?" }
    ],
    "options": [
      { "type": "command", "value": "SELECT INTERVAL '1' DAY + INTERVAL '1' MONTH FROM DUAL;" },
      { "type": "command", "value": "SELECT SYSTIMESTAMP + INTERVAL '1' DAY FROM DUAL;" },
      { "type": "command", "value": "SELECT SYSDATE * INTERVAL '1' DAY FROM DUAL;" },
      { "type": "command", "value": "SELECT INTERVAL '1' DAY - INTERVAL '1' MINUTE FROM DUAL;" },
      { "type": "command", "value": "SELECT INTERVAL '1' DAY - SYSDATE FROM DUAL;" }
    ],
    "answer": [
      { "type": "command", "value": "SELECT SYSTIMESTAMP + INTERVAL '1' DAY FROM DUAL;" },
      { "type": "command", "value": "SELECT INTERVAL '1' DAY - INTERVAL '1' MINUTE FROM DUAL;" }
    ]
}, {
    "id": 38,
    "question": [
      { "type": "text", "value": "Which two statements are true about an Oracle database?" }
    ],
    "options": [
      { "type": "text", "value": "A table can have multiple primary keys." },
      { "type": "text", "value": "A NUMBER column without data has a zero value." },
      { "type": "text", "value": "A VARCHAR2 column without data has a NULL value." },
      { "type": "text", "value": "A column definition can specify multiple data types." },
      { "type": "text", "value": "A table can have multiple foreign keys." }
    ],
    "answer": [
      { "type": "text", "value": "A VARCHAR2 column without data has a NULL value." },
      { "type": "text", "value": "A table can have multiple foreign keys." }
    ]
}];

export default list; 