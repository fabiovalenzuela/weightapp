module.exports = {

    preset: "react-native",
    collectCoverage: true,
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-navigation)"
    ],
    moduleNameMapper: {
        "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
        "^[@./a-zA-Z0-9$_-]+\\.(png|gif)$": "RelativeImageStub"
    }
};
