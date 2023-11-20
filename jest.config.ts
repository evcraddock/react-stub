import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'], // we will create this file in the next step
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
