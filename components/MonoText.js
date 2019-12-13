import React from 'react';
import { Text } from 'react-native';
import Styles from '../constants/Styles';

export default class MonoText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    }
  }

  render() {
    const { text } = this.state;
    return (
      <Text style={[Styles.monoText]}>{text}</Text>
    );
  }
}
