import React from "react";

const QuizTableRow = ({ item }) => {
  const { option, question, score } = item;
  console.log("Items: ", item);
  return (
    <>
      <tr class="bg-white dark:bg-gray-800">
        <th
          scope="row"
          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {question}
        </th>
        <td class="py-4 px-6">{option}</td>
        <td class="py-4 px-6">{score}</td>
      </tr>
    </>
  );
};

function generateRandom() {
  let quizData = [
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
  let responses = [];
  for (let i = 0; i < 7; i++) {
    let rand = Math.random() * 4;
    rand = Math.floor(rand);
    // console.log(rand); // say 99.81321410836433
    let obj = {
      question: quizData[i].question,
      option: quizData[i].options[rand]["text"],
      score: quizData[i].options[rand]["score"],
    };
    responses.push(obj);
  }

  console.log(responses);
  return responses;
}

const calculateHADS = (quizData) => {
  let score = 0;
  quizData.forEach((item) => {
    score += item["score"];
  });

  return score;
};

const Quiz = () => {
  const quizData = generateRandom();
  console.log("QuizData: ", quizData);

  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <div className="font-bold text-3xl mb-4">Quiz Results</div>
      <div style={{ width: "50%" }} className="">
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Question
                </th>
                <th scope="col" class="py-3 px-6">
                  Answer
                </th>
                <th scope="col" class="py-3 px-6">
                  HADS Score
                </th>
              </tr>
            </thead>
            <tbody>
              {quizData?.map((item) => {
                return <QuizTableRow item={item} />;
              })}
            </tbody>
            <tfoot>
              <tr class="font-semibold text-gray-900 dark:text-white bg-gray-600">
                <th scope="row" class="py-3 px-6 text-base">
                  Total HADS
                </th>
                <td class="py-3 px-6"></td>
                <td class="py-3 px-6">{calculateHADS(quizData)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
