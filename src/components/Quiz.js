import React from "react";

const Quiz = () => {
  const quizData = [
    {
      question: "I feel as if I am slowed down:",
      options: [
        {
          text: "Nearly all the time",
          score: 3,
        },
        {
          text: "Very often",
          score: 2,
        },
        {
          text: "Sometimes",
          score: 1,
        },
        {
          text: "Not at all",
          score: 0,
        },
      ],
    },


    {
      question: "I still enjoy the things I used to enjoy:",
      options: [
        {
          text: "Definitely as much",
          score: 0,
        },
        {
          text: "Not quite so much",
          score: 1,
        },
        {
          text: "Only a little",
          score: 2,
        },
        {
          text: "Hardly at all ",
          score: 3,
        },
      ],
    },

    {
      question: "I have lost interest in my appearance:",
      options: [
        {
          text: "Definitely",
          score: 3,
        },
        {
          text: "I don't take as much care as I should",
          score: 2,
        },
        {
          text: "I may not take quite as much care",
          score: 1,
        },
        {
          text: "I take just as much care as ever",
          score: 0,
        },
      ],
      },

      {
        question: "I can laugh and see the funny side of things:",
        options: [
          {
            text: "As much as I always could",
            score: 0,
          },
          {
            text: "Quite a lot",
            score: 1,
          },
          {
            text: "Not very much",
            score: 2,
          },
          {
            text: "Not at all",
            score: 3,
          },
        ],
        },

        {
          question: "I look forward with enjoyment to things:",
          options: [
            {
              text: "As much as I ever did",
              score: 0,
            },
            {
              text: "Rather less than I used to",
              score: 1,
            },
            {
              text: "Definitely less than I used to",
              score: 2,
            },
            {
              text: "Hardly at all",
              score: 3,
            },
          ],
          },

          {
            question: "I feel cheerful:",
            options: [
              {
                text: "Not at all",
                score: 3,
              },
              {
                text: "Not often",
                score: 2,
              },
              {
                text: "Sometimes",
                score: 1,
              },
              {
                text: "Most of the time",
                score: 0,
              },
            ],
            },

            {
              question: "I can enjoy a good book or radio or TV program:",
              options: [
                {
                  text: "Often",
                  score: 0,
                },
                {
                  text: "Sometimes",
                  score: 1,
                },
                {
                  text: "Not often",
                  score: 2,
                },
                {
                  text: "Very seldom",
                  score: 3,
                },
              ],
              },

  ];
  return <div>Quiz</div>;
};

export default Quiz;
