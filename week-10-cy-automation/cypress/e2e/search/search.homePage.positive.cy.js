import featuredListingsPage from "../../page_objects/featuredListingsPage";
import homePage from "../../page_objects/home.page";
import listingData from "../../fixtures/testData/listingPropertyData.json";
import { createEstateObject } from "../../support/apiHelpers";

let bedrooms = [];

describe("Search homePage", () => {
  before(() => {
    cy.visit("/");
    homePage.darkMode.click();
    cy.loginApi();
    createEstateObject("testData/listingPropertyData.json", "img.png");
  });

  it("Should search by keyword", () => {
    cy.visit("/");
    homePage.searchInputFieldMainPage.type(listingData.keyword);
    homePage.startSearchButtonMainPage.click();

    featuredListingsPage.searchListingInputField
      .should("have.value", listingData.keyword)
      .should("be.visible");
    featuredListingsPage.listingPropertyTitle
      .contains(listingData.title)
      .should("be.visible");
  });

  it("Should search by bedrooms count", () => {
    cy.visit("/");
    homePage.darkMode.click();
    homePage.bedroomsDropdownListMainPage.click();
    homePage.twoPlusBedroomsNumberMainPage.click();
    homePage.startSearchButtonMainPage.click();

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

  it("Should search by city", () => {
    cy.visit("/");
    homePage.darkMode.click();
    homePage.cityInputFieldMainPage.type(listingData.city);
    homePage.startSearchButtonMainPage.click();
    featuredListingsPage.listingPropertyCityName
      .contains(listingData.city)
      .should("be.visible");
    featuredListingsPage.listingPropertyTitle
      .contains(listingData.title)
      .should("be.visible");
    featuredListingsPage.listingPropertyBedroomsNumber
      .contains(listingData.bedrooms)
      .should("be.visible");
    featuredListingsPage.listingPropertyPriceLabelDRMode
      .contains(listingData.priceWithCurrencySign)
      .should("be.visible");
    featuredListingsPage.listingMoreInfoButton.first().click();
    featuredListingsPage.currentPropertyTitle
      .contains(listingData.title)
      .should("be.visible");
    featuredListingsPage.currentPropertyBedroomsNumber
      .first()
      .contains(listingData.bedrooms)
      .should("be.visible");
    featuredListingsPage.currentPropertyPrice
      .contains(listingData.priceWithCurrencySign)
      .should("be.visible");
  });

  it("Should search by price", () => {
    cy.visit(
      "/featured-listings?price=500000-8400000&keyword=Spectrum&bedrooms=2&city=Irvine"
    );
    featuredListingsPage.listingPriceVefification
      .invoke("text")
      .then((text) => {
        const tmp = parseInt(text.replace("$ ", "").replace(/,/g, ""), 10);
        expect(tmp).to.be.above(500000);
        expect(tmp).to.be.below(840000);
      });
  });
});
after(() => {
  // Use the custom command to delete the listing
  cy.deleteListing(
    "/featured-listings?price=500000-10000000&keyword=Yuliia+API+Test+Promenade+at+Irvine+Spectrum"
  );
});
