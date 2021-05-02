import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContentProps {}

const Content = (props: ContentProps) => {
  const navigateBack = () => {
    // navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const BackIcon = props => <Icon {...props} name="arrow-back" />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Content"
        alignment="center"
        accessoryLeft={BackAction}
      />

      <Divider />

      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1" status="basic">
          Content
        </Text>
      </Layout>
    </SafeAreaView>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {},
});
