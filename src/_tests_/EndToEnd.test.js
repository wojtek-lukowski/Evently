import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
      browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250,
      // ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  })

  afterAll(() => {
    browser.close();
  })

  test('An event element is collapsed by defaiult', async () => {
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  })

  test('User can expand an event to see its details', async () => {
    await page.click('.event .button__show-details');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse the event to hide its details', async () => {
    await page.click('.event .button__show-details');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  })

});

describe('filter events by cities ', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
      browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250,
      // ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  })
  
  afterAll(() => {
    browser.close();
  })
  
  test('show alll events', async () => {
    await page.waitForSelector('.EventList');
    const EventList = await page.$('.EventList');
    expect(EventList).toBeDefined();
  })

  test('show list of suggestions', async () => {
    await page.waitForSelector('.city');
    await page.type('.city', 'query');
    await page.waitForSelector('.suggestions');
    expect('.suggestions').toBeDefined();
  });

  test('Select a city from the suggestion list', async () => {
    await page.waitForSelector('.suggestions');
    await page.click('.suggestions');
  })
//not finished
});