USE assessment_seven;
GO

CREATE OR ALTER PROCEDURE updateFeeBalanceProc(@id INT, @fee_balance MONEY)
AS
BEGIN
    UPDATE students SET fee_balance = @fee_balance WHERE id = @id;
END
GO