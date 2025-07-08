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


export const allQuestions = [
    {
      id: 1,
      category: 'logical',
      question: 'If all roses are flowers and some flowers fade quickly, can we conclude that some roses fade quickly?',
      options: ['Yes, definitely', 'No, we cannot conclude that', 'Maybe, it depends', 'Only if roses are red'],
      correctAnswer: 1
    },
    {
      id: 2,
      category: 'logical',
      question: 'Tom is older than Jim. Jim is older than Harry. Who is the oldest?',
      options: ['Tom', 'Jim', 'Harry', 'Cannot Determine'],
      correctAnswer: 0
    },
    {
      id: 3,
      category: 'logical',
      question: 'If the first 2 statements are true, is the final statement true?\n All cats are mammals. Some mammals are black. Therefore, some cats are black.',
      options: ['Yes, the conclusion follows', 'No, the conclusion does not necessarily follow', 'Maybe, it depends on the cats', 'Only if cats are pets'],
      correctAnswer: 1
    },
    {
      id: 4,
      category: 'logical',
      question: 'Complete the sequence: 1, 8, 27, 64, 125, ____',
      options: ['200, 215, 201, 216'],
      correctAnswer: 3
    },
    {
      id: 5,
      category: 'logical',
      question: 'If A = 1, B = 2, C = 3, what does ABC equal?',
      options: ['123', '321', '6', '121'],
      correctAnswer: 2
    },
    {
      id: 6,
      category: 'logical',
      question: 'Which number comes next: 1, 3, 6, 10, 15, ____?',
      options: ['18', '20', '21', '22'],
      correctAnswer: 2
    },
    {
      id: 7,
      category: 'logical',
      question: 'If all doctors wear white coats and John is wearing a white coat, then:',
      options: ['John is definitely a doctor', 'John might be a doctor', 'john is not a doctor', 'John is a nurse'],
      correctAnswer: 1
    },    
    {
      id: 8,
      category: 'logical',
      question: 'Which figure completes the pattern: ⬜ ⬛⬛ ⬜⬜⬜ ⬛⬛⬛⬛?',
      options: ['⬛⬛⬛⬛⬛', '⬛⬜⬛⬜⬛', '⬜⬛⬜⬛⬜', '⬜⬜⬜⬜⬜'],
      correctAnswer: 3
    },
    {
      id:9,
      category: 'logical',
      question: 'If 3 workers can build a huse in 6 days, how many days will it take 6 workers?',
      options: ['2 days', '3 days', '12 days', '18 days'],
      correctAnswer: 1
    },
    {
      id: 10,
      category: 'logical',
      question: 'Which word does not belong: Apple, Banana, Carrot, Orange?',
      options: ['Apple', 'Banana', 'Carrot', 'Orange'],
      correctAnswer: 2
    },
    {
      id: 11,
      category: 'verbal',
      question: 'Which word is most similar in meaning to "benevolent"?',
      options: ['Kind', 'Angry', 'Tired', 'Sad'],
      correctAnswer: 0
    },
    {
      id: 12,
      category: 'verbal',
      question: 'Choose the correctly spelled word:',
      options: ['Recieve', 'Receive', 'Recive', 'Receeve'],
      correctAnswer: 1
    },
    {
      id: 13,
      category: 'verbal',
      question: 'Fill in the blank: She _____ to the store before it started raining.',
      options: ['go', 'gone', 'went', 'going'],
      correctAnswer: 2
    },
    {
      id: 14,
      category: 'verbal',
      question: 'What is the opposite of "abundant"?',
      options: ['Plentiful', 'Scarce', 'Rich', 'Full'],
      correctAnswer: 1
    },
    {
      id: 15,
      category: 'verbal',
      question: 'Which word is a synonym for "eloquent"?',
      options: ['Quiet', 'Articulate', 'Shy', 'Rude'],
      correctAnswer: 1
    },
    {
      id: 16,
      category: 'verbal',
      question: 'Complete the analogy: Book is to reading as fork is to:',
      options: ['Cooking', 'Eating', 'Kitchen', 'Food'],
      correctAnswer: 1
    },
    {
      id: 17,
      category: 'verbal',
      question: 'Which sentence is grammatically correct?',
      options: ['Me and him went to the store', 'Him and I went to the store', 'He and I went to the store', 'I and he went to the store'],
      correctAnswer: 2
    },
    {
      id: 18,
      category: 'verbal',
      question: 'What does "ubiquitous" mean?',
      options: ['Rare', 'Present everywhere', 'Expensive', 'Beautiful'],
      correctAnswer: 1
    },
    {
      id: 19,
      category: 'verbal',
      question: 'Which word is an antonym of "diligent"?',
      options: ['Hardworking', 'Lazy', 'Smart', 'Quick'],
      correctAnswer: 1
    },
    {
      id: 20,
      category: 'verbal',
      question: 'Choose the word that best completes: The weather was so _____ that we had to cancel the picnic.',
      options: ['nice', 'pleasant', 'terrible', 'warm'],
      correctAnswer: 2
    },
  
    // Spatial Reasoning Questions (21-30)
    {
      id: 21,
      category: 'spatial',
      question: 'Which shape comes next in the sequence: ◼ ◻ ◼ ◻ ?',
      options: ['◼', '◻', '◼', '◻'],
      correctAnswer: 0
    },
    {
      id: 22,
      category: 'spatial',
      question: 'If you rotate an "L" shape 90 degrees clockwise, what does it look like?',
      options: ['A backward L', 'A rotated L facing down', 'A normal L', 'A mirror image L'],
      correctAnswer: 1
    },
    {
      id: 23,
      category: 'spatial',
      question: 'Which object does not belong: Cube, Sphere, Pyramid, Circle?',
      options: ['Cube', 'Sphere', 'Pyramid', 'Circle'],
      correctAnswer: 3
    },
    {
      id: 24,
      category: 'spatial',
      question: 'How many faces does a cube have?',
      options: ['4', '6', '8', '12'],
      correctAnswer: 1
    },
    {
      id: 25,
      category: 'spatial',
      question: 'Which shape has the most sides: Triangle, Square, Pentagon, Hexagon?',
      options: ['Triangle', 'Square', 'Pentagon', 'Hexagon'],
      correctAnswer: 3
    },
    {
      id: 26,
      category: 'spatial',
      question: 'If you fold a piece of paper in half twice, how many layers will you have?',
      options: ['2', '3', '4', '6'],
      correctAnswer: 2
    },
    {
      id: 27,
      category: 'spatial',
      question: 'Which direction is opposite to Northwest?',
      options: ['Northeast', 'Southeast', 'Southwest', 'North'],
      correctAnswer: 1
    },
    {
      id: 28,
      category: 'spatial',
      question: 'How many edges does a triangular prism have?',
      options: ['6', '9', '12', '15'],
      correctAnswer: 1
    },
    {
      id: 29,
      category: 'spatial',
      question: 'Which shape can be made by combining two triangles?',
      options: ['Square', 'Rectangle', 'Parallelogram', 'All of the above'],
      correctAnswer: 3
    },
    {
      id: 30,
      category: 'spatial',
      question: 'If you look at a clock and it shows 3:15, what angle do the hands make?',
      options: ['45 degrees', '60 degrees', '75 degrees', '90 degrees'],
      correctAnswer: 2
    },
  
    // Memory Questions (31-40)
    {
      id: 31,
      category: 'memory',
      question: 'You are shown a list of 10 words. After 30 seconds, how many can you recall?',
      options: ['2-3 words', '5-7 words', '8-10 words', 'All 10 words'],
      correctAnswer: 1
    },
    {
      id: 32,
      category: 'memory',
      question: 'You see a sequence: 2, 4, 6, 8, __. What number comes next?',
      options: ['9', '10', '11', '12'],
      correctAnswer: 1
    },
    {
      id: 33,
      category: 'memory',
      question: 'You are told a phone number: 555-1234. Can you repeat it backwards?',
      options: ['4321-555', '555-4321', '1234-555', '555-1234'],
      correctAnswer: 0
    },
    {
      id: 34,
      category: 'memory',
      question: 'Remember this sequence: Red, Blue, Green, Yellow. What was the second color?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      correctAnswer: 1
    },
    {
      id: 35,
      category: 'memory',
      question: 'You see: Apple, Banana, Cherry, Date. Which fruit was third?',
      options: ['Apple', 'Banana', 'Cherry', 'Date'],
      correctAnswer: 2
    },
    {
      id: 36,
      category: 'memory',
      question: 'Remember: 7, 3, 9, 1, 5. What was the middle number?',
      options: ['3', '7', '9', '1'],
      correctAnswer: 2
    },
    {
      id: 37,
      category: 'memory',
      question: 'You hear: Monday, Tuesday, Wednesday. What day was mentioned first?',
      options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      correctAnswer: 0
    },
    {
      id: 38,
      category: 'memory',
      question: 'Remember this pattern: ⭐ ⭐⭐ ⭐⭐⭐. How many stars were in the second group?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 1
    },
    {
      id: 39,
      category: 'memory',
      question: 'You see: Cat, Dog, Bird, Fish. Which animal was last?',
      options: ['Cat', 'Dog', 'Bird', 'Fish'],
      correctAnswer: 3
    },
    {
      id: 40,
      category: 'memory',
      question: 'Remember: 2, 8, 4, 6. What was the highest number?',
      options: ['2', '4', '6', '8'],
      correctAnswer: 3
    }
];