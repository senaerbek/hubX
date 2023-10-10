# Screenshots


<img src="https://github.com/senaerbek/Notes/assets/36725302/80126fc5-3655-4e18-9fc8-2b3f9492b638" width="150">
<img src="https://github.com/senaerbek/Notes/assets/36725302/e419ce72-60b9-4d7b-8cf3-00dfba2a9a99" width="150">
<img src="https://github.com/senaerbek/Notes/assets/36725302/eab87ea8-e874-4508-8f2f-01b805c17629" width="150">
<img src="https://github.com/senaerbek/Notes/assets/36725302/cc20743e-3aa7-42b9-bbaa-fe54334733e3" width="150">

# Folder Structure

```
src
├── api
│   └── services
├── componenets
│   ├── AppText
│   ├── BottomNavigatorComponent
│   │   └── images
│   ├── ButtonComponent
│   ├── GradientTextComponent
│   ├── RadioButtonComponent
│   ├── ScanButtonComponent
│   ├── TextInputComponent
│   │   └── images
│   └── TextWithUnderlineImage
│       └── images
├── models
├── navigation
├── screens
│   ├── DiagnoseScreen
│   ├── GetStartedScreen
│   │   └── images
│   ├── HomeScreen
│   │   ├── AdvertisementButton
│   │   │   └── images
│   │   ├── CategoryCardComponent
│   │   ├── QuestionCardComponent
│   │   └── images
│   ├── MyGardenScreen
│   ├── OnBoardingScreen
│   │   ├── TabView
│   │   └── images
│   ├── PayWallScreen
│   │   ├── InfoComponent
│   │   ├── PriceSelectionComponent
│   │   └── images
│   ├── ProfileScreen
│   └── WelcomeScreen
├── store
│   ├── categories
│   ├── navigate
│   └── questions
└── utils
```



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
