import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class FloatingLabelInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label
    }
  }

  render() {
    return (
      <Item floatingLabel>
        <Label>{this.state.label}</Label>
        <Input {...this.props} />
      </Item>
    );
  }
}