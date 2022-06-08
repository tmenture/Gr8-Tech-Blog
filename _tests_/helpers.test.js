const { format_date, format_plural } = require('../utils/helpers');

// Formats the pluralization of words when certain criteria is met
test('format_plural() correctly pluralize words', () => {
   const word1 = format_plural('tiger', 1);
   const word2 = format_plural('lion', 2);
   
   expect(word1).toBe('tiger');
   expect(word2).toBe('lions');
});

// Formats the date for easier readability
test('format_date() returns a date string', () => {
    const date = new Date('2022-05-31 16:12:03');

    expect(format_date(date)).toBe('5/31/2022');
});