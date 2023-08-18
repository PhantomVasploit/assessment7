USE assessment_seven;
GO

CREATE OR ALTER PROCEDURE fetchAllStudentsProc(@id INT)
AS
BEGIN
    SELECT * FROM students WHERE id = @id;
END
GO