describe("Navigation", () => {
  it("should navigate to landing page", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("include", "/Landing/LandingPage");
  });
});

export { }