const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // raiz do projeto, não dentro do src
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.js"],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
    "**/tests/**/*.[jt]s?(x)"
  ],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/data/(.*)$": "<rootDir>/src/data/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

module.exports = createJestConfig(customJestConfig);
