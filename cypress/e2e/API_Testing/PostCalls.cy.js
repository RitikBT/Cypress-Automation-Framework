describe("Post Testing", ()=>{

it('Aproach 1 : Post calls - Hardcoded json object', ()=>{

const requestBody = {
            tourist_name : "Vinod",
            tourist_email : "vminod123@gmail.com",
            tourist_location : "India"
}

    cy.request(
        {
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)

            expect(response.body.tourist_name).to.eq("Vinod")
            expect(response.body.tourist_email).to.eq("vminod123@gmail.com")
            expect(response.body.tourist_location).to.eq("India") 
        })

})

})