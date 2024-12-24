class FeaturedListingsPage {
  get searchListingInputField() {
    return cy.get(
      'div[class *= "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-t"] input[class *= "Mui"]'
    );
  }
  get bedroomsListingDropdownList() {
    return cy.get(
      'div:nth-of-type(2) [id*="r"][role][class *= "MuiSelect-select"]'
    );
  }
  get twoPlusListingBedroomsNumber() {
    return cy.get('ul li[data-value = "2"]');
  }
  get listingCityInputField() {
    return cy.get(
      'input[id*="r4"][class*="MuiInputBase-input MuiOutlinedInput-input css-h3f2gu"]'
    );
  }
  get listingStartSearchButton() {
    return cy.get('button[class*="MuiButtonBase-root MuiB"]');
  }
  get propertiesInSearchList() {
    return cy.get(".MuiCard-root");
  }
  get listingPropertyTitle() {
    return cy.get(
      'div[class *= "MuiGrid-root"] div[class *= "MuiPaper-root MuiPaper-elevation MuiPaper"]'
    );
  }
  get listingPropertyBedroomsNumber() {
    return cy.get(
      'div:nth-of-type(4)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]'
    );
  }
  get listingPropertyCityName() {
    return cy.get(
      'div:nth-of-type(5)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]'
    );
  }
  get listingPropertyPriceLabel() {
    return cy.get('div[class*="MuiBox-root css-6yrxxf"]');
  }
  get listingPriceVefification(){
    return cy.get('[class*="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"] [class="MuiBox-root css-79elbk"]');
  }
  get listingMoreInfoButton() {
    return cy.get('a[class *= "MuiButtonBase-root"]');
  }
  get currentPropertyTitle() {
    return cy.get('h3[class*="MuiTypography-root MuiTypography-h3"]');
  }
  get currentPropertyBedroomsNumber() {
    return cy.get(
      'div:nth-of-type(6)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]'
    );
  }
  get currentPropertyPrice() {
    return cy.get(
      ".MuiGrid-container.MuiGrid-root.MuiGrid-spacing-xs-2.css-isbt42 > div:nth-of-type(1)"
    );
  }
}
export default new FeaturedListingsPage();
