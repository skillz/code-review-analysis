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
      this.skillzMessages = [ new SkillzMessage(this.fakemesageForError()) ];
      completion(true);
    });
  }

  getSkillzMessages(): Array<SkillzNewsMessage> {
    return this.skillzMessages;
  }

  fakemesageForError(): SkillzNewsMessage {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const formattedDate = currentDate.getFullYear() + '-' + month + '-' + currentDate.getDate();

    const skillzMessage = [{
      id: -1,
      message: "Please refresh and try again later.",
      title: "Skillz News is currently unavailable",
      game_specific: false,
      start_date: formattedDate,
    }];

    return skillzMessage;
  }
}

export default new SkillzNewsController();
