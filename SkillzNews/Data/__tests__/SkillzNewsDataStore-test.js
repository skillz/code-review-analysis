import SkillzNewsController from 'SkillzNewsController';

describe('Test Skillz News Controller', () => {
  it('should return skillz messages', () => {
    const mockMessage = new SkillzNewsMessage({
      id: 1234,
      message: "It is double ticketz weekend!",
      title: "Double Ticketz Weekend!",
      start_date: "2018-01-13 19:55:35",
      image_url: "https://cdn.qa.skillz.com/news-pics/ticketz_weekend.jpeg",
    });

    SkillzNewsController.messages = [mockMessage];
    expect(SkillzNewsController.getSkillzMessages().length).toEqual(1);
  });
});
