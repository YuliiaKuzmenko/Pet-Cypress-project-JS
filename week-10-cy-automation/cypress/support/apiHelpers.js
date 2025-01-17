// cypress/support/apiHelpers.js
export function createEstateObject(listingDataFile, imagePath) {
  // Load the JSON data using cy.fixture
  cy.fixture(listingDataFile).then((listingData) => {
    cy.fixture(imagePath).then((image) => {
      // Convert image to binary
      const blob = Cypress.Blob.base64StringToBlob(image, "image/png");

      const formData = new FormData();
      formData.append("images", blob);
      formData.append("title", listingData.title);
      formData.append("description", listingData.description);
      formData.append("address", listingData.address);
      formData.append("city", listingData.city);
      formData.append("state", listingData.state);
      formData.append("zipCode", listingData.zipCode);
      formData.append("price", listingData.price);
      formData.append("bedrooms", listingData.bedrooms);
      formData.append("bathrooms", listingData.bathrooms);
      formData.append("garage", listingData.garage);
      formData.append("sqft", listingData.sqft);
      formData.append("lotSize", listingData.lotSize);
      formData.append("isPublished", listingData.isPublished);
  
        cy.request({
          method: "POST",
          url: "/api/estate-objects",
          body: formData,
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
          },
        }).then((response) => {
          expect(response.status).to.be.oneOf([200, 201]);
          console.log(response.body);
  
          console.log(response.body);
        });
      });
    });
    }


