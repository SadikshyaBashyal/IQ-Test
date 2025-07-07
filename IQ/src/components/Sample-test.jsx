// Sample-test.jsx
// This file exports sample questions for each reasoning type as named exports.

export const logicalQuestions = [
  {
    question: 'If all roses are flowers and some flowers fade quickly, can we conclude that some roses fade quickly?',
    answer: 'No, we cannot conclude that. While all roses are flowers, and some flowers fade quickly, it does not necessarily mean that any of the roses are among the flowers that fade quickly.'
  },
  {
    question: 'Tom is older than Jim. Jim is older than Harry. Who is the oldest?',
    answer: 'Tom is the oldest.'
  },
  {
    question: 'If the first two statements are true, is the final statement true?\nAll cats are mammals. Some mammals are black. Therefore, some cats are black.',
    answer: 'No, the conclusion does not necessarily follow. Some mammals being black does not mean any cats are black.'
  }
];

export const verbalQuestions = [
  {
    question: 'Which word is most similar in meaning to "benevolent"? (A) Kind (B) Angry (C) Tired (D) Sad',
    answer: 'A) Kind'
  },
  {
    question: 'Choose the correctly spelled word: (A) Recieve (B) Receive (C) Recive (D) Receeve',
    answer: 'B) Receive'
  },
  {
    question: 'Fill in the blank: She _____ to the store before it started raining. (A) go (B) gone (C) went (D) going',
    answer: 'C) went'
  }
];

export const spatialQuestions = [
  {
    question: 'Which shape comes next in the sequence: ◼ ◻ ◼ ◻ ?',
    answer: '◼. The pattern alternates between filled and empty squares.'
  },
  {
    question: 'If you rotate an "L" shape 90 degrees clockwise, what does it look like?',
    answer: 'It looks like a rotated "L" facing down.'
  },
  {
    question: 'Which object does not belong: Cube, Sphere, Pyramid, Circle?',
    answer: 'Circle. All others are 3D shapes; a circle is 2D.'
  }
];

export const memoryQuestions = [
  {
    question: 'You are shown a list of 10 words. After 30 seconds, how many can you recall?',
    answer: 'This tests your short-term memory. Most people recall 5-7 words.'
  },
  {
    question: 'You see a sequence: 2, 4, 6, 8, __. What number comes next?',
    answer: '10. This tests your ability to remember and continue a pattern.'
  },
  {
    question: 'You are told a phone number: 555-1234. Can you repeat it backwards?',
    answer: '4321-555. This tests your working memory.'
  }
];
