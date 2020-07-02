const urls = {
    test_env: 'https://graphql.blacklane.io/graphql'
}

const mutationData = {
    clientId: "<your client id>",
    email: "<Your email>",
    password: "<Your password>",
    resourceOwnerType: "driver" ,
    grantType: "implicit"
}

module.exports = {urls, mutationData}