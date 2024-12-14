import featuredLisitingsPage from "../../../page_objects/featuredLisitingsPage";
import homePage from "../../../page_objects/home.page";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

let bedrooms = [];

describe("Listing page", () => {
    beforeEach(() => {
      cy.visit("/featured-listings?price=500000-10000000");
      homePage.darkMode.click();
    });
  
    it("Search by keyword should be displayed on listing page", () => {
    featuredLisitingsPage.searchListingFld.click().type("Spectrum");
    featuredLisitingsPage.itemsInSearchList.each(($el) => {
      cy.wrap($el)
          .invoke("text")
          .then((text) => {
            const match = text.split("Bedrooms: ")[1];
            if (match) {
              bedrooms.push(parseInt(match.split(" ")[0], 10));
            }
          });
      });
  
      cy.then(() => {
        bedrooms.forEach((element) => {
          expect(element).to.be.at.least(2);
        });
      });
    });
  
    it("Search by number of bedrooms should be displayed on listing page", () => {;
    featuredLisitingsPage.listingCityFld.click().type('Irvine');
    featuredLisitingsPage.bedroomsListingFld.click();
    featuredLisitingsPage.listingBedroomsFld.click();
    featuredLisitingsPage.listingStartSearchBtn.click();
    featuredLisitingsPage.listingMoreInfoBtn.click();
    featuredLisitingsPage.propertyBedroomsNum.contains("2").should("be.visible");
    });
  
    it("Search by price should be displayed on listing page", () => {
    cy.visit("/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine");
    featuredLisitingsPage.listingPropertyPriceLbl
    .invoke('text') // Get the text content of the price element
    .then((text) => {
      const price = parseInt(text.replace(/[^\d]/g, ''), 10); // Remove non-numeric characters and parse as a number
      expect(price).to.be.within(500000, 8400000); // Assert that the price is within the range
    });

    featuredLisitingsPage.listingMoreInfoBtn.click();
    featuredLisitingsPage.propertyPrice
    .invoke('text') // Get the text content of the price element
    .then((text) => {
      const price = parseInt(text.replace(/[^\d]/g, ''), 10); // Remove non-numeric characters and parse as a number
      expect(price).to.be.within(500000, 8400000); // Assert that the price is within the range
    });
  });
}); 
