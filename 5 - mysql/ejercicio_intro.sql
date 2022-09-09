-- ejercicio_intro
USE generation2;

SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

SELECT students.*,
idtypes.*
FROM Students
INNER JOIN idtypes
ON Students.IdType_id = idtypes.id_idtypes;

Select Students.*,
courses_has_students.code
FROM Students
inner JOIN courses_has_students
On Students.idStudent = courses_has_students.students_id_student;

SELECT courses.name,
courses_has_students.students_id_student
FROM courses
INNER JOIN courses_has_students
ON courses.code = courses_has_students.course_code;








