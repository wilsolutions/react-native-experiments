import React, { useEffect, useRef } from 'react';
import { UIManager, findNodeHandle } from 'react-native';

// import { DemoViewManager } from './DemoViewManager';
import { DemoViewManager } from 'react-native-experiments';

const createFragment = (viewId) =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    UIManager.DemoViewManager.Commands.create.toString(), // we are calling the 'create' command
    [viewId]
  );

export const DemoView = () => {
  const ref = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId!);
  }, []);

  return (
    <DemoViewManager ref={ref} />
  );
};
