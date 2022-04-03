module.exports =  {
css: {
    loaderOptions: {
        sass: {
            additionalData: '@import "@/assets/scss/variables.scss";'
        }
    }
}
};

// module.exports = {
//     css: {
//         loaderOptions: {
//             sass: {
//                 additionalData: `@import "@/assets/css/main.scss";`
//             },
//         },
//     },
// };