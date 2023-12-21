import React from 'react';
import { requireNativeComponent, UIManager, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-inga' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface IngaAreaViewProps {
  children: React.ReactNode;
}

const ComponentName = 'IngaAreaView';

export const IngaAreaView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<IngaAreaViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const ExcludeSystemGestureAreaView: React.FC = ({ children }: any) => {
  return Platform.OS === 'android' ? (
    <IngaAreaView>{children}</IngaAreaView>
  ) : (
    children
  );
};
