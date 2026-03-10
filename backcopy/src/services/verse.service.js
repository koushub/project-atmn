const sanskrit = require('../data/sanskrit.json.json');
const hindi = require('../data/hindi.json.json');
const english = require('../data/english.json.json');

// Get all the keys in order (e.g., ['1.1', '1.2', '1.3', ... '2.1'])
const verseKeys = Object.keys(sanskrit);

const getVerse = (verseKey) => {
  if (!sanskrit[verseKey]) return null;

  return {
    reference: verseKey,
    sanskrit: sanskrit[verseKey],
    hindi: hindi[verseKey],
    english: english[verseKey]
  };
};

// NEW: Function to calculate the next verse for tomorrow
const getNextVerseKey = (currentVerseKey) => {
  const currentIndex = verseKeys.indexOf(currentVerseKey);
  
  // If it's the very last verse in the book, or verse not found, return null
  if (currentIndex === -1 || currentIndex === verseKeys.length - 1) {
    return null; 
  }
  
  // Return the next verse in the list
  return verseKeys[currentIndex + 1];
};

module.exports = { getVerse, getNextVerseKey };