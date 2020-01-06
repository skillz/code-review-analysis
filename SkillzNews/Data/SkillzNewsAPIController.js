/*
 * @providesModule SkillzNewsAPIController
 * @flow
 */

import CurrentUserStore from 'CurrentUserStore';
import RESTStore from 'RESTStore';

class SkillzNewsAPIController {

  fetchSkillzMessages(): Promise {
    return new Promise((resolve: (response: Object) => void, reject:(error: *) => void) => {
      RESTStore.getServerResponse('users/' + CurrentUserStore.getCurrentUserId() + '/news', null, RESTStore.OnError.failSilently, (response: ?Object, error: ?Object) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  } 
}

export default new SkillzNewsAPIController();
