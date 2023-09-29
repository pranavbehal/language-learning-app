"use strict";

// import dotenvExpand from 'https://cdn.jsdelivr.net/npm/dotenv-expand@10.0.0/+esm'
// import openai from "https://cdn.jsdelivr.net/npm/openai@4.10.0/+esm";

// import { config } from "dotenv";
// config();

import { OpenAI } from "openai";
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// import { Configuration, OpenAIApi } from "openai";

const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

// require("dotenv").config();
// import { config } = require("dotenv");
// const { OpenAI } = require("openai");

console.log("beginning");

// const newCourseForm = document.querySelector(".new-course-form");
// const generateButton = document.querySelector(".new-course-submit");
// const vocabInputBox = document.querySelector(".new-course-vocab-input");
// const courseNameInputBox = document.querySelector(".new-course-name-input");
// const languageSelectBox = document.querySelector(".new-course-language-select");

// let vocabList = [];

async function generateCourse(vocab, courseName, language) {
  const chatCompletion = await openai.createChatCompletions({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Generate language learning lessons in JSON format for a ${language} course named "${courseName}" with the following vocabulary, separated by commas: ${vocab}. Each vocabulary should have one question, and it should not be grouped together with any other vocabulary. The JSON should have lessons (each with 10 questions), which have questions, four choices, the correct answer, and the amount of questions in the lesson. If there are more than 10 vocab words, there should be multiple lessons, all with 10 words, and the excess can be grouped together into one last lesson. For example, for 26 different words, there should be 3 lessons (two with 10 questions and one with 6 questions). There should only be the vocab words that are given above - no extras. The two types of questions should be either "What does ___ mean?" or be a fill in the blank question with a sentence and word from that language.
        Here is an example for part of the JSON response - use the same parameter names and formatting structure:
  
      "LessonNameHere": [
        {
          "lesson1": {
            "questions": [
              {
                "question": "What does 'verde' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "green"
                ],
                "correctAnswer": "green"
              },
              {
                "question": "What does 'azul' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "blue"
                ],
                "correctAnswer": "blue"
              },
              {
                "question": "What does 'blanco' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "white"
                ],
                "correctAnswer": "white"
              },
              {
                "question": "What does 'negro' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "black"
                ],
                "correctAnswer": "black"
              },
              {
                "question": "What does 'música' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "music"
                ],
                "correctAnswer": "music"
              },
              {
                "question": "What does 'arte' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "art"
                ],
                "correctAnswer": "art"
              },
              {
                "question": "What does 'baile' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "dance"
                ],
                "correctAnswer": "dance"
              },
              {
                "question": "What does 'viaje' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "trip"
                ],
                "correctAnswer": "trip"
              },
              {
                "question": "What does 'dinero' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "money"
                ],
                "correctAnswer": "money"
              },
              {
                "question": "What does 'éxito' mean?",
                "choices": [
                  "hello",
                  "goodbye",
                  "thank you",
                  "success"
                ],
                "correctAnswer": "success"
              }
            ],
            "totalQuestions": 10
          }
        }]
    `,
      },
    ],
  });

  console.log(chatCompletion);
  console.log(chatCompletion.choices);
  console.log(chatCompletion.choices[0].message.content);

  const courseMessage = chatCompletion.choices[0].message.content;
  console.log(courseMessage);
  console.log(courseMessage[0].lesson2.questions[0]);
  console.log(courseMessage);
  console.log(chatCompletion.data.choices[0].message);
}

// async function generateCourse(vocab, courseName, language) {
//   const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "user",
//         content: `Generate language learning lessons in JSON format for a ${language} course named "${courseName}" with the following vocabulary, separated by commas: ${vocab}. Each vocabulary should have one question, and it should not be grouped together with any other vocabulary. The JSON should have lessons (each with 10 questions), which have questions, four choices, the correct answer, and the amount of questions in the lesson. If there are more than 10 vocab words, there should be multiple lessons, all with 10 words, and the excess can be grouped together into one last lesson. For example, for 26 different words, there should be 3 lessons (two with 10 questions and one with 6 questions). There should only be the vocab words that are given above - no extras. The two types of questions should be either "What does ___ mean?" or be a fill in the blank question with a sentence and word from that language.
//         Here is an example for part of the JSON response - use the same parameter names and formatting structure:

//       "LessonNameHere": [
//         {
//           "lesson1": {
//             "questions": [
//               {
//                 "question": "What does 'verde' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "green"
//                 ],
//                 "correctAnswer": "green"
//               },
//               {
//                 "question": "What does 'azul' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "blue"
//                 ],
//                 "correctAnswer": "blue"
//               },
//               {
//                 "question": "What does 'blanco' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "white"
//                 ],
//                 "correctAnswer": "white"
//               },
//               {
//                 "question": "What does 'negro' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "black"
//                 ],
//                 "correctAnswer": "black"
//               },
//               {
//                 "question": "What does 'música' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "music"
//                 ],
//                 "correctAnswer": "music"
//               },
//               {
//                 "question": "What does 'arte' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "art"
//                 ],
//                 "correctAnswer": "art"
//               },
//               {
//                 "question": "What does 'baile' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "dance"
//                 ],
//                 "correctAnswer": "dance"
//               },
//               {
//                 "question": "What does 'viaje' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "trip"
//                 ],
//                 "correctAnswer": "trip"
//               },
//               {
//                 "question": "What does 'dinero' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "money"
//                 ],
//                 "correctAnswer": "money"
//               },
//               {
//                 "question": "What does 'éxito' mean?",
//                 "choices": [
//                   "hello",
//                   "goodbye",
//                   "thank you",
//                   "success"
//                 ],
//                 "correctAnswer": "success"
//               }
//             ],
//             "totalQuestions": 10
//           }
//         }]
//     `,
//       },
//     ],
//   });

//   console.log(chatCompletion);
//   console.log(chatCompletion.choices);
//   console.log(chatCompletion.choices[0].message.content);

//   const courseMessage = chatCompletion.choices[0].message.content;
//   console.log(courseMessage);
//   console.log(courseMessage[0].lesson2.questions[0]);
//   console.log(courseMessage);
// }

console.log("after function set");

// generateButton.addEventListener("click", function (e) {
//   newCourseForm.checkValidity();
//   const inputStr = vocabInputBox.value;
//   const language = languageSelectBox.value;
//   const courseName = courseNameInputBox.value;
//   vocabList = inputStr.split(", ");

//   if (!inputStr || !courseName || !language) return;

//   document.querySelector(".body").style.display = "none";
//   document.querySelector(".courses-loading").style.display = "block";

//   generateCourse(vocabList, courseName, language);
// });

generateCourse("hola, que, dia, es,", "TestCourse", "Spanish");

console.log("after function call");
