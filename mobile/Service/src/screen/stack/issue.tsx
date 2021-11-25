import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {IssueInterface} from '../../interface/issue';

interface IProps {}

const IssueScreen: FC<IProps> = ({}) => {
  const [issue, setIssue] = useState<IssueInterface>();
  return (
    <View>
      <Text>Create New Issue</Text>
    </View>
  );
};

export default IssueScreen;
