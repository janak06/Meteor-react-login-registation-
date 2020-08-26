ServiceConfiguration.configurations.remove({
    service: "facebook"
});
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '171127143484268',
    secret: 'bac6a6268806e5a098354bd52896f16b'
});
Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});
ServiceConfiguration.configurations.remove({
    service: "google"
});
// ServiceConfiguration.configurations.insert({
//     service: 'google',
//     appId: '171127143484268',
//     secret: 'bac6a6268806e5a098354bd52896f16b'
// });