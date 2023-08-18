USE assessment_seven;
GO

CREATE OR ALTER PROCEDURE fetchAllStudentsProc
AS
BEGIN
    SELECT * FROM students;
END
GO