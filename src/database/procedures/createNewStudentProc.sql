USE assessment_seven;
GO

CREATE OR ALTER PROCEDURE createNewStudentPROC(@full_name VARCHAR(255), @student_class INT, @fee_balance MONEY)
AS
BEGIN
    INSERT INTO students(full_name, student_class, fee_balance)
    VALUES(@full_name, @student_class, @fee_balance)
END
GO