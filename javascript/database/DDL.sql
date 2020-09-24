CREATE TABLE IF NOT EXISTS teachers (
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS students (
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS subjects (
    subjectCode VARCHAR(3) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS classes (
    classCode VARCHAR(4) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS registrations (
    registration_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    teacher_email VARCHAR(100) NOT NULL,
    student_email VARCHAR(100) NOT NULL,
    subject_code VARCHAR(3) NOT NULL,
    class_code VARCHAR(4) NOT NULL,
    FOREIGN KEY (teacher_email)
        REFERENCES teachers (email)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (student_email)
        REFERENCES students (email)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (subject_code)
        REFERENCES subjects (subjectCode)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (class_code)
        REFERENCES classes (classCode)
        ON UPDATE CASCADE ON DELETE RESTRICT
);
