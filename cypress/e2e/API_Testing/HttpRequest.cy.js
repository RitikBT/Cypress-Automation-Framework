
describe("HTTP Request", ()=>{

it('Get Call', ()=>{
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal', 200);

})


it('Post call',()=>{
    cy.request({
        method : 'POST',
        url : 'https://jsonplaceholder.typicode.com/posts/',
        body : {
            title: "Test Post Data",
            body: "Test Body",
            userId: 1

        }
    })
    .its('status').should('equal', 201);
})

it('Put call', ()=>{
cy.request({
    method : 'PUT',
    url : 'https://jsonplaceholder.typicode.com/posts/1',
    body : {
        title : "TestPost - Updated",
        body : "Test Updated body",
        userId : 1,
        id : 1
    }
})
.its('status').should('equal', 200)

})

it('Delete Call', ()=>{
    cy.request({
        method : 'Delete',
        url : 'https://jsonplaceholder.typicode.com/posts/1'
    
    })
    .its('status').should('equal', 200)
})


})