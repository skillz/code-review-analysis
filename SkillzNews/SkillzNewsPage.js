/*
 * @providesModule SkillzNewsPage
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import SkillzNewsMessageCell from 'SkillzNewsMessageCell';
import SkillzNewsController from 'SkillzNewsController';
import SkillzNewsMessage from 'SkillzNewsMessage';
import styles from 'SkillzNewsPageStyle';
import _ from 'lodash';

import {
  ListView,
  View,
} from 'react-native';

export default class SkillzNewsPage extends React.Component {
  static propTypes = {
    dismiss: PropTypes.func.required,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    SkillzNewsController.fetchSkillzMessages(false, (didFetch) => {
      this._setSkillzMessages();
    });
  }

  _setSkillzMessages() {
    this.setState({
      messages: SkillzNewsController.getSkillzMessages(),
    });
  }

  _closeSkillzNewsPage = () => {
    this.props.dismiss();
  }

  _renderMessage = (newsMessage: SkillzNewsMessage, index: number): React.Element => {
    return (
      <View>
        <SkillzNewsMessageCell newsArticle={newsMessage.item}
                               isSideMenuOpen={this.state.isSideMenuOpen} />
      </View>
    );
  }

  _renderMessageContainer(): React.Element<*> {
    return (
      <ListView style={styles.messageContainer}
                contentContainerStyle={styles.listContainerStyle}
                data={this.state.messages}
                renderItem={this._renderMessage}/>
    );
  }

  render(): React.Element<*> {
    return (
      <View style={styles.mainContainer}>
        <HeaderBar title={'Skillz News'}
                   closeButtonHandler={this._closeSkillzNewsPage.bind(this)}/>
        {this._renderMessageContainer()}
      </View>
    );
  }
}
