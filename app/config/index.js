const config = {
    app: {
    port: process.env.PORT || 3000,
    },
    db:{
        uri: process.env.MONGODB_URI || "mongodb+srv://thien:thien@cluster0.m28vgln.mongodb.net/test"
    }
    };
    module.exports = config;