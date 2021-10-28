import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-experiments' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type ExperimentsProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ExperimentsView';

export const ExperimentsView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ExperimentsProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
