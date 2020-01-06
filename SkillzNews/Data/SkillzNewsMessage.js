/*
 * @providesModule SkillzNewsMessage
 * @flow
 */

import _ from 'lodash';

export class SkillzNewsMessageInterface {
  id:                           number;
  message:                      string;
  title:                        string;
  game_specific:               boolean;
  start_date:                   string;
  image_url:                    string;
}

export default class SkillzNewsMessage extends SkillzNewsMessageInterface {
  constructor(keyValueSource: SkillzNewsMessageInterface): SkillzNewsMessage {
    super();
    return _.create(SkillzNewsMessage.prototype, keyValueSource);
  }

  static make(newsMessages:Array<SkillzNewsMessageInterface>): Array<SkillzNewsMessage> {
    if (Array.isArray(newsMessages)) {
      return _.map(newsMessages, (newsMessageRecord: SkillzNewsMessageInterface): SkillzNewsMessage => new SkillzNewsMessage(newsMessageRecord));
    }
    return [];
  }
}
