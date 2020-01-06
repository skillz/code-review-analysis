/*
 * @providesModule SkillzNewsMessageCell
 * @flow
 */

import React from 'react';
import _ from 'lodash';
import Label from 'Label';
import Markdown from 'react-native-markdown-renderer';
import PropTypes from 'prop-types';
import styles from 'SkillzNewsMessageCellStyles';

import {
  Image,
  View
} from 'react-native';

export default class SkillzNewsMessageCell extends React.PureComponent {
  static propTypes = {
    newsArticle: PropTypes.object.isRequired,
  }

  _renderMessageHeaderIcon(): React.Element<*> {
    return (
      <SkillzImage source={'skillz_app_icon.png'}
                   style={styles.headerIcon}/>
    );
  }

  _renderHeader(): React.Element<*> {
    return (
      <View style={styles.headerView}>
        {this._renderMessageHeaderIcon()}
        <Label style={styles.headerTitle}>
          {_.get(this.props.newsArticle, 'title', '')}
        </Label>
      </View>
    );
  }

  _renderBody(): React.Element<*> {
    return (
      <View style={styles.bodyContainer}>
        <Image style={[styles.bodyImage]}
               source={_.get(this.props.newsArticle, 'image_url')}
               resizeMode={'cover'}/>
        <View style={styles.bodyText}>
          <Markdown>
            {_.get(this.props.newsArticle, 'message', '')}
          </Markdown>
        </View>
      </View>
    );
  }

  render(): React.Element<*> {
    return (
      <View style={styles.containerView}>
        {this._renderHeader()}
        {this._renderBody()}
      </View>
    );
  }
}
