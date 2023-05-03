describe("Loan calculator montly payment", () => {
  const loanValues = {
    amount: 50000,
    years: 12,
    rate: 4,
  };

  it("should calculate the monthly rate correctly", function () {
    expect(calculateMonthlyPayment(loanValues)).toEqual("437.76");
  });

  it("should return a result with 2 decimal places", function () {
    //I SEARCH FOR THE REGEX
    expect(calculateMonthlyPayment(loanValues).toString()).toMatch(
      /^\d+\.\d\d$/
    );
  });

  /// etc
});
