USE  assessment_seven;
CREATE TABLE students(
    id INT IDENTITY(1, 1) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    class INT NOT NULL,
    fee_balance MONEY NOT NULL,
    is_deleted BIT DEFAULT 0
);

