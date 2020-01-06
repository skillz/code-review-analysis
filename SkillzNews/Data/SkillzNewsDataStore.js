/*
 * @providesModule SkillzNewsController
 * @flow
 */

import _ from 'lodash';
import SkillzNewsAPIController from 'SkillzNewsAPIController';
import SkillzNewsMessage from 'SkillzNewsMessage';

class SkillzNewsController {
  skillzMessages: Array<SkillzNewsMessage>;

  constructor() {
    this.skillzMessages = [];
  }

  fetchSkillzMessages(isBanner: boolean = false, completion: () => {}) {
    SkillzNewsAPIController.fetchSkillzMessages().then((skillzMesagesData: Array) => {
      this.skillzMessages = SkillzNewsMessage.make(skillzMesagesData);
      completion(true);
    }).catch((error: *) => {
      completion(true);
    });
  }

  getSkillzMessages(): Array<SkillzNewsMessage> {
    return this.skillzMessages;
  }
}

export default new SkillzNewsController();
