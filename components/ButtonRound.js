import React from 'react';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Text, TouchableOpacity } from 'react-native'
import Styles from '../constants/Styles';

export default class ButtonRound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      buttonRoundStyle: '',
      buttonRoundTextStyle: '',
    }
  }

  componentDidMount() {
    this.getStyle(this.props.styleType);
  }

  render() {
    const { title, buttonRoundStyle, buttonRoundTextStyle } = this.state;

    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={buttonRoundStyle}>
        <Text style={buttonRoundTextStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }

  getStyle = (styleType) => {
    if (styleType == 'bordered') {
      console.log('bordered')
      this.setState({
        buttonRoundStyle: Styles.buttonRoundBordered,
        buttonRoundTextStyle: Styles.buttonRoundTextBordered,
      })
    } else if (styleType == 'rounded') {

    }else {
      this.setState({
        buttonRoundStyle: Styles.buttonRound,
        buttonRoundTextStyle: Styles.buttonRoundText,
      })      
    }

  }
}