import realEstateNewPage from "../../page_objects/realEstate.new.page";
import homePage from "../../page_objects/home.page";
import featuredListingsPage from "../../page_objects/featuredListingsPage";
import listingData from "../../fixtures/testData/listingPropertyData.json";

describe("New listings", () => {
  before(() => {
    cy.visit("/");
    cy.loginApi();
    cy.visit("/dashboard/real-estate/new");
  });

  it("Should create listings", () => {
    realEstateNewPage.estateTitle.type(listingData.title);
    realEstateNewPage.Description.type(listingData.description);
    realEstateNewPage.City.type(listingData.city);
    realEstateNewPage.Address.type(listingData.address);
    realEstateNewPage.zipCode.type(listingData.zipCode);
    realEstateNewPage.stateDropdownList.click();
    realEstateNewPage.stateCA.click();
    realEstateNewPage.price.type(listingData.price);
    realEstateNewPage.bedroomsInputField.type(listingData.bedrooms);
    realEstateNewPage.bathroomsInputField.type(listingData.bathrooms);
    realEstateNewPage.garageInputField.type(listingData.garage);
    realEstateNewPage.sqftInputField.type(listingData.sqft);
    realEstateNewPage.lotSizeInputField.type(listingData.lotSize);

    realEstateNewPage.dropDown.attachFile("img.png", {
      subjectType: "drag-n-drop",
    });
    realEstateNewPage.pusblishToggle.click();
    realEstateNewPage.postButton.click();
    cy.wait(1000);
    cy.visit("/dashboard/real-estate/list");
    realEstateNewPage.listOfProperties.contains(listingData.title);
  });

  it("All data for created listing is shown on property page", () => {
    cy.visit("/");
    homePage.searchInputFieldMainPage.type(listingData.title);
    homePage.startSearchButtonMainPage.click();
    featuredListingsPage.listingMoreInfoButton.click();
    featuredListingsPage.currentPropertyGarage
      .contains(listingData.garage)
      .should("be.visible");
    featuredListingsPage.currentPropertyLotSize
      .contains(listingData.lotSize)
      .should("be.visible");
    featuredListingsPage.currentPropertyPrice
      .contains(listingData.priceWithCurrencySign)
      .should("be.visible");
  });
});

after(() => {
  // Use the custom command to delete the listing
  cy.deleteListing(
    "/featured-listings?price=500000-10000000&keyword=Yuliia+API+Test+Promenade+at+Irvine+Spectrum"
  );
});
