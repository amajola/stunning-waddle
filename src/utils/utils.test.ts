import { describe, it, expect } from 'vitest';
import { getStarPercentages, truncateDescription, capitalizeWords } from './product'; // Assuming the functions are in a file named utils.ts

describe('getStarPercentages', () => {
  it('should return correct percentages for integer ratings', () => {
    expect(getStarPercentages(3)).toEqual([100, 100, 100, 0, 0]);
    expect(getStarPercentages(5)).toEqual([100, 100, 100, 100, 100]);
    expect(getStarPercentages(0)).toEqual([0, 0, 0, 0, 0]);
  });

  it('should return correct percentages for decimal ratings', () => {
    expect(getStarPercentages(3.5)).toEqual([100, 100, 100, 50, 0]);
    expect(getStarPercentages(2.7)).toEqual([100, 100, 70, 0, 0]);
  });

  it('should work with custom total stars', () => {
    expect(getStarPercentages(2, 3)).toEqual([100, 100, 0]);
    expect(getStarPercentages(3.5, 7)).toEqual([100, 100, 100, 50, 0, 0, 0]);
  });
});

describe('truncateDescription', () => {
  it('should not truncate short descriptions', () => {
    const shortDesc = 'This is a short description.';
    expect(truncateDescription(shortDesc)).toBe(shortDesc);
  });

  it('should truncate long descriptions', () => {
    const longDesc = 'This is a very long description that exceeds the default max length of 200 characters. It should be truncated at the last space before the 200th character and have an ellipsis added at the end to indicate that it has been truncated.';
    const truncated = truncateDescription(longDesc);
    expect(truncated.length).toBeLessThanOrEqual(204); // 200 + ' ...'
    expect(truncated.endsWith(' ...')).toBe(true);
  });

  it('should respect custom max length', () => {
    const desc = 'This description should be truncated at 50 characters.';
    const truncated = truncateDescription(desc, 50);
    expect(truncated.length).toBeLessThanOrEqual(54); // 50 + ' ...'
    expect(truncated.endsWith(' ...')).toBe(true);
  });

  it('should not cut off words', () => {
    const desc = 'This description should be truncated at the last full word.';
    const truncated = truncateDescription(desc, 30);
    expect(truncated).toBe('This description should be ...');
  });
});

describe('capitalizeWords', () => {
  it('should capitalize first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('the quick brown fox')).toBe('The Quick Brown Fox');
  });

  it('should handle single word', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript');
  });

  it('should handle empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  it('should handle string with multiple spaces', () => {
    expect(capitalizeWords('  multiple   spaces  ')).toBe('  Multiple   Spaces  ');
  });

  it('should not change already capitalized words', () => {
    expect(capitalizeWords('ALL CAPS')).toBe('ALL CAPS');
    expect(capitalizeWords('Mixed Case Words')).toBe('Mixed Case Words');
  });
});