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
import DeepLinkUtils from 'DeepLinkUtils';
import PushButton from 'PushButton';

import {
  Image,
  View
} from 'react-native';

export default class SkillzNewsMessageCell extends React.PureComponent {
  static propTypes = {
    newsArticle: PropTypes.object.isRequired,
  }

  constructor(props: any) {
    super(props);

    this.state = {
      newsArticle: this.props.newsArticle,
    };
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

  _shouldRenderPlayButton(): boolean {
    return this.state.newsArticle.deep_link.length> 0;
  }

  _footerButtonOnPress = () => {
    console.log('It works!');
    const deepLink = this.state.newsArticle.deep_link;
    DeepLinkUtils.handleDeeplink(deepLink);
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
        {() => {
          if (!this._shouldRenderPlayButton()) {
            return null;
          }
          
          return (
            <View style={styles.footerView}>
              <PushButton onPress={this._footerButtonOnPress}
                          title={this.state.newsArticle.deep_link_text.toUpperCase()}
                          style={styles.playButton}
                          textStyle={styles.playButtonText}
                          colors={SkillzStyle.fullStyles.btnGradientOne}
                          cornerRadius={SkillzStyle.fullStyles.viewCornerRadiusSecondary.borderRadius}/>
            </View>
          )
        }}
        </View>
    );
  }
}
