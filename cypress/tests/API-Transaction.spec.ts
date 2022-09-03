const mainUser = {
  firstName: "Katharina",
  lastName: "Bernier",
  userName: "Katharina_Bernier",
  password: "s3cret",
};

describe("API TEST", () => {
  it("TRANSACTION", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/login",
      body: {
        username: mainUser.userName,
        password: mainUser.password,
        type: "LOGIN",
      },
    }).then((request) => {
      expect(request.status).to.eq(200);
      cy.wrap(request.body.user.id).as("sendId");
    });

    cy.request({
      method: "GET",
      url: "http://localhost:3001/users",
    }).then((request) => {
      expect(request.status).to.eq(200);
      cy.wrap(request.body.results[0].id).as("receiverId");
    });

    cy.get<string>("@sendId").then((sendId) => {
      cy.get<string>("@receiverId").then((receiverId) => {
        cy.request({
          method: "POST",
          url: "http://localhost:3001/transactions",
          body: {
            amount: "1000",
            description: "TEST API",
            receiverId: receiverId,
            senderId: sendId,
            transactionType: "payment",
          },
        }).then((request) => {
          expect(request.status).to.eq(200);
        });
      });
    });
  });
});
