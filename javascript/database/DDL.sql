-- -- Clean up
DROP TABLE IF EXISTS Teachers;
DROP TABLE IF EXISTS Subjects;
DROP TABLE IF EXISTS Classes;
DROP TABLE IF EXISTS Workloads;
DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS Registrations;

-- -- Teachers
CREATE TABLE IF NOT EXISTS Teachers (
    teacherEmail VARCHAR(100) NOT NULL PRIMARY KEY,
    teacherName VARCHAR(100) NOT NULL
);

INSERT INTO Teachers VALUES ("teacher1@gmail.com", "Teacher 1");
INSERT INTO Teachers VALUES ("teacher2@gmail.com", "Teacher 2");

-- -- Subjects
CREATE TABLE IF NOT EXISTS Subjects (
    subjectCode VARCHAR(10) NOT NULL PRIMARY KEY,
    subjectName VARCHAR(100) NOT NULL
);

INSERT INTO Subjects VALUES ("ENG", "English");
INSERT INTO Subjects VALUES ("MATH", "Mathematics");

-- -- Classes
CREATE TABLE IF NOT EXISTS Classes (
    classCode VARCHAR(10) NOT NULL PRIMARY KEY,
    className VARCHAR(100) NOT NULL
);

INSERT INTO Classes VALUES ("P1-1", "P1 Integrity");
INSERT INTO Classes VALUES ("P1-2", "P1 Respect");
INSERT INTO Classes VALUES ("P1-3", "P1 Humilty");

-- -- Workloads
CREATE TABLE IF NOT EXISTS Workloads (
    teacherEmail VARCHAR(100) NOT NULL,
    subjectCode VARCHAR(10) NOT NULL,
    classCode VARCHAR(10) NOT NULL,
    PRIMARY KEY (teacherEmail, subjectCode, classCode)
);

INSERT INTO Workloads VALUES ("teacher1@gmail.com", "ENG", "P1-1");
INSERT INTO Workloads VALUES ("teacher1@gmail.com", "MATH", "P1-1");
INSERT INTO Workloads VALUES ("teacher1@gmail.com", "MATH", "P1-2");
INSERT INTO Workloads VALUES ("teacher1@gmail.com", "MATH", "P1-3");
INSERT INTO Workloads VALUES ("teacher2@gmail.com", "ENG", "P1-1");
INSERT INTO Workloads VALUES ("teacher2@gmail.com", "ENG", "P1-2");

-- -- Students
CREATE TABLE IF NOT EXISTS Students (
    studentEmail VARCHAR(100) NOT NULL PRIMARY KEY,
    studentName VARCHAR(100) NOT NULL
);

INSERT INTO Students VALUES ("student1@gmail.com", "Student 1");
INSERT INTO Students VALUES ("student2@gmail.com", "Student 2");
INSERT INTO Students VALUES ("student3@gmail.com", "Student 3");


-- -- Registrations
CREATE TABLE IF NOT EXISTS Registrations (
    teacherEmail VARCHAR(100) NOT NULL,
    subjectCode VARCHAR(10) NOT NULL,
    classCode VARCHAR(10) NOT NULL,
    studentEmail VARCHAR(100) NOT NULL,
    PRIMARY KEY (teacherEmail, subjectCode, classCode, studentEmail)
);

INSERT INTO Registrations VALUES ("teacher1@gmail.com", "ENG", "P1-1", "student1@gmail.com");
INSERT INTO Registrations VALUES ("teacher1@gmail.com", "MATH", "P1-1", "student1@gmail.com");
INSERT INTO Registrations VALUES ("teacher1@gmail.com", "MATH", "P1-2", "student2@gmail.com");
INSERT INTO Registrations VALUES ("teacher1@gmail.com", "MATH", "P1-3", "student3@gmail.com");
INSERT INTO Registrations VALUES ("teacher2@gmail.com", "ENG", "P1-1", "student3@gmail.com");
INSERT INTO Registrations VALUES ("teacher2@gmail.com", "ENG", "P1-2", "student2@gmail.com");
