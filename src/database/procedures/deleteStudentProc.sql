USE assessment_seven;
GO

CREATE OR ALTER PROCEDURE deleteStudentProc(@id INT)
AS
BEGIN
    UPDATE students SET is_deleted = 1 WHERE id = @id;
END
GO