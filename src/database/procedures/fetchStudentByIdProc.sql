USE assessment_seven;
GO

CREATE OR ALTER PROCEDURE fetchStudentByIdProc(@id INT)
AS
BEGIN
    SELECT * FROM students WHERE id = @id;
END
GO