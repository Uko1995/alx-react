import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the current year', () => {
    const year = getFullYear();
    expect(year).toBe(new Date().getFullYear());
});

test('getFooterCopy returns correct string when isIndex is true', () => {
    const footer = getFooterCopy(true);
    expect(footer).toEqual(<p>Holberton School</p>);
});

test('getFooterCopy returns correct string when isIndex is false', () => {
    const footer = getFooterCopy(false);
    expect(footer).toEqual(<p>Holberton School main dashboard</p>);
});

test('getLatestNotification returns the expected string', () => {
    const notification = getLatestNotification();
    expect(notification).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});