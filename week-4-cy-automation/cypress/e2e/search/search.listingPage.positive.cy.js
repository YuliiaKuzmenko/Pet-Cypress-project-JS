import featuredListingsPage from "../../page_objects/featuredListingsPage";
import homePage from "../../page_objects/home.page";

let bedrooms = [];

describe("Listing page", () => {
  beforeEach(() => {
    cy.visit("/featured-listings?price=500000-10000000");
    homePage.darkMode.click();
  });

  it("Search by keyword should be displayed on listing page", () => {
    featuredListingsPage.searchListingInputField.click().type("Spectrum");
    featuredListingsPage.propertiesInSearchList.each(($el) => {
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

  it("Search by number of bedrooms should be displayed on listing page", () => {
    featuredListingsPage.listingCityInputField.click().type("Irvine");
    featuredListingsPage.bedroomsListingDropdownList.click();
    featuredListingsPage.twoPlusListingBedroomsNumber.click();
    featuredListingsPage.listingStartSearchButton.click();
    featuredListingsPage.listingMoreInfoButton.click();
    featuredListingsPage.currentPropertyBedroomsNumber.contains("2").should("be.visible");
  });

  it("Search by price should be displayed on listing page", () => {
    cy.visit(
      "/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine"
    );
    featuredListingsPage.listingPropertyPriceLabel
      .invoke("text") // Get the text content of the price element
      .then((text) => {
        const price = parseInt(text.replace(/[^\d]/g, ""), 10); // Remove non-numeric characters and parse as a number
        expect(price).to.be.within(500000, 8400000); // Assert that the price is within the range
      });

    featuredListingsPage.listingMoreInfoButton.click();
    featuredListingsPage.currentPropertyPrice
      .invoke("text") // Get the text content of the price element
      .then((text) => {
        const price = parseInt(text.replace(/[^\d]/g, ""), 10); // Remove non-numeric characters and parse as a number
        expect(price).to.be.within(500000, 8400000); // Assert that the price is within the range
      });
  });
});
