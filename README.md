# We Install Packages

"We Install Packages" is a desktop application for managing packages. It supports various package managers, such as:
- npm
- yarn
- pip
- apt

It's currently still in development. When finished, you will be able to:
- Install New Packages (duh)
- Update Existing Packages
- Switch seamlessly between global/system-wide and local/virtual environments
- Gaze at uniformly formatted package descriptions

## Setup

```bash
# Install Yarn (globally) if you haven't already
npm i -g yarn

# Clone the repository
git clone <url> we-install-packages

# Install dependency packages
cd we-install-packages
yarn
```

## Usage

```bash
# Start the electron app in development mode
yarn run dev

# Build the electron app for production
yarn run build

# Run unit and end-to-end tests
yarn test

# Lint all .js and .vue files
yarn run lint
```

## Acknowledgements

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli).
