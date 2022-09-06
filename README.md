# @smarteat/ui
UiKit For smarteat
## Installation

```sh
npm install @smarteattech/ui react-native-reanimated
```

or

```sh
yarn add @smarteattech/ui react-native-reanimated
```

Add Reanimated's babel plugin to your ``babel.config.js``:

```js
module.exports = {
  // ...
    plugins: [
  // ...
    'react-native-reanimated/plugin',
]};
```

### Android

Turn on Hermes engine by editing ``android/app/build.gradle``

```

project.ext.react = [
  enableHermes: true  // <- here | clean and rebuild if changing
]

```

Plug Reanimated in ``MainApplication.java``

```

import com.facebook.react.bridge.JSIModulePackage; // <- add
import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
...
private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
...

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Override
    protected JSIModulePackage getJSIModulePackage() {
      return new ReanimatedJSIModulePackage(); // <- add
    }
  };
...
```

### iOS

As Reanimated is setup to configure and install automatically, the only thing you have to do is to run ``pod install`` in the ``ios/`` directory. Note that the auto-installation setup works for the standard React Native apps, if you have problems setting it up with a custom setup (e.g. brownfield) please start a new issue where we can find a way to guide you through that process.

## Usage

```js
import {Layout, Text, constants} from '@smarteat/ui';


const App = () => {
  return (
    <Layout jc='space-between' ai='center'>
      <Text fontSize={24} color={constants.colors.GRAY_DARK}>Hello, world!</Text>
    </Layout>
  )
};

```



## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
