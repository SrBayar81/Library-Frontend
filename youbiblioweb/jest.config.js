module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/mocks/fileMock.js",
    },
};





