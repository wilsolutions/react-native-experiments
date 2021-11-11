import { requireNativeComponent } from 'react-native';

// const ComponentName = 'ExperimentsView';

// export const ExperimentsView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<ExperimentsProps>(ComponentName)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };

export const DemoViewManager = requireNativeComponent('DemoViewManager');
