import SkillzNewsMessage from 'SkillzNewsMessage';

describe('make', () => {
  const data = {
    id:                           10,
    message:                      "Saying hello to the world",
    title:                        "Hello World",
    start_date:                   "string",
    image_url:                    "string",
  };

  const newsMessages = [data];
  const newsMessage = new SkillzNewsMessage(data);

  it('should return a new array containing the messages that were passed in.', () => {
    expect(SkillzNewsMessage.make(newsMessages)).toEqual([newsMessage]);
  });
});

describe('deep_linking_variables', () => {
  const data = {
    id:                           10,
    message:                      "Saying hello to the world",
    title:                        "Hello World",
    start_date:                   "string",
    image_url:                    "string",
    deep_link:                    "string",
    deep_link_text:               "string",
  };

  const newsMessage = new SkillzNewsMessage(data);

  it('returns deep link values', () => {
    expect(newsMessage.deep_link.toEqual(data.deep_link));
  });
});
