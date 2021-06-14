export const truncate = (skip, str, noOfWords) =>
  str.split(" ").splice(skip, noOfWords).join(" ");

export const checkStrongPassword = (password) => {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return strongRegex.test(password);
};

export const breakSheetIntoCord = (sheet, title, subtitle) => {
  const newSheet = [
    { slide: 0, title, subtitle, type: "FRONT PAGE", isCover: true },
    {
      slide: 0,
      title: "",
      subtitle: "",
      type: "INSIDE FRONT COVER",
      isCover: true,
    },
    ...sheet,
    { slide: 0, title: "", subtitle: "", type: "BACK COVER", isCover: true },
    {
      slide: 0,
      title: "",
      subtitle: "",
      type: "INSIDE BACK COVER",
      isCover: true,
    },
  ];

  let worksheet = [];
  let firstIndex = 0;
  let secondIndex = 1;
  let thirdIndex = 2;
  let fourthIndex = 3;
  let backFirstIndex = 4;
  let backSecondIndex = 5;
  let backThirdIndex = 6;
  let backFourthIndex = 7;

  for (let i = 0; i < Math.ceil(newSheet.length / 8); i++) {
    worksheet.push({
      front: {
        first: {
          slide: newSheet[firstIndex]
            ? newSheet[firstIndex].slide
              ? newSheet[firstIndex].slide
              : 0
            : "",
          title: newSheet[firstIndex]
            ? newSheet[firstIndex].title
              ? newSheet[firstIndex].title
              : ""
            : "",
          subtitle: newSheet[firstIndex]
            ? newSheet[firstIndex].subtitle
              ? newSheet[firstIndex].subtitle
              : ""
            : "",
          type: newSheet[firstIndex]
            ? newSheet[firstIndex].type
              ? newSheet[firstIndex].type
              : ""
            : "",
          isCover: newSheet[firstIndex]
            ? newSheet[firstIndex].isCover
              ? newSheet[firstIndex].isCover
              : false
            : false,
          para: newSheet[firstIndex]
            ? newSheet[firstIndex].para
              ? newSheet[firstIndex].para
              : ""
            : "",
        },

        second: {
          slide: newSheet[secondIndex]
            ? newSheet[secondIndex].slide
              ? newSheet[secondIndex].slide
              : 0
            : "",
          title: newSheet[secondIndex]
            ? newSheet[secondIndex].title
              ? newSheet[secondIndex].title
              : ""
            : "",
          subtitle: newSheet[secondIndex]
            ? newSheet[secondIndex].subtitle
              ? newSheet[secondIndex].subtitle
              : ""
            : "",
          type: newSheet[secondIndex]
            ? newSheet[secondIndex].type
              ? newSheet[secondIndex].type
              : ""
            : "",
          isCover: newSheet[secondIndex]
            ? newSheet[secondIndex].isCover
              ? newSheet[secondIndex].isCover
              : false
            : false,
          para: newSheet[secondIndex]
            ? newSheet[secondIndex].para
              ? newSheet[secondIndex].para
              : ""
            : "",
        },

        third: {
          slide: newSheet[thirdIndex]
            ? newSheet[thirdIndex].slide
              ? newSheet[thirdIndex].slide
              : 0
            : "",
          title: newSheet[thirdIndex]
            ? newSheet[thirdIndex].title
              ? newSheet[thirdIndex].title
              : ""
            : "",
          subtitle: newSheet[thirdIndex]
            ? newSheet[thirdIndex].subtitle
              ? newSheet[thirdIndex].subtitle
              : ""
            : "",
          type: newSheet[thirdIndex]
            ? newSheet[thirdIndex].type
              ? newSheet[thirdIndex].type
              : ""
            : "",
          isCover: newSheet[thirdIndex]
            ? newSheet[thirdIndex].isCover
              ? newSheet[thirdIndex].isCover
              : false
            : false,
          para: newSheet[thirdIndex]
            ? newSheet[thirdIndex].para
              ? newSheet[thirdIndex].para
              : ""
            : "",
        },

        fourth: {
          slide: newSheet[fourthIndex]
            ? newSheet[fourthIndex].slide
              ? newSheet[fourthIndex].slide
              : 0
            : "",
          title: newSheet[fourthIndex]
            ? newSheet[fourthIndex].title
              ? newSheet[fourthIndex].title
              : ""
            : "",
          subtitle: newSheet[fourthIndex]
            ? newSheet[fourthIndex].subtitle
              ? newSheet[fourthIndex].subtitle
              : ""
            : "",
          type: newSheet[fourthIndex]
            ? newSheet[fourthIndex].type
              ? newSheet[fourthIndex].type
              : ""
            : "",
          isCover: newSheet[fourthIndex]
            ? newSheet[fourthIndex].isCover
              ? newSheet[fourthIndex].isCover
              : false
            : false,
          para: newSheet[fourthIndex]
            ? newSheet[fourthIndex].para
              ? newSheet[fourthIndex].para
              : ""
            : "",
        },
      },
      back: {
        first: {
          slide: newSheet[backFirstIndex]
            ? newSheet[backFirstIndex].slide
              ? newSheet[backFirstIndex].slide
              : 0
            : "",
          title: newSheet[backFirstIndex]
            ? newSheet[backFirstIndex].title
              ? newSheet[backFirstIndex].title
              : ""
            : "",
          subtitle: newSheet[backFirstIndex]
            ? newSheet[backFirstIndex].subtitle
              ? newSheet[backFirstIndex].subtitle
              : ""
            : "",
          type: newSheet[backFirstIndex]
            ? newSheet[backFirstIndex].type
              ? newSheet[backFirstIndex].type
              : ""
            : "",
          isCover: newSheet[backFirstIndex]
            ? newSheet[backFirstIndex].isCover
              ? newSheet[backFirstIndex].isCover
              : false
            : false,
          para: newSheet[backFirstIndex]
            ? newSheet[backFirstIndex].para
              ? newSheet[backFirstIndex].para
              : ""
            : "",
        },

        second: {
          slide: newSheet[backSecondIndex]
            ? newSheet[backSecondIndex].slide
              ? newSheet[backSecondIndex].slide
              : 0
            : "",
          title: newSheet[backSecondIndex]
            ? newSheet[backSecondIndex].title
              ? newSheet[backSecondIndex].title
              : ""
            : "",
          subtitle: newSheet[backSecondIndex]
            ? newSheet[backSecondIndex].subtitle
              ? newSheet[backSecondIndex].subtitle
              : ""
            : "",
          type: newSheet[backSecondIndex]
            ? newSheet[backSecondIndex].type
              ? newSheet[backSecondIndex].type
              : ""
            : "",
          isCover: newSheet[backSecondIndex]
            ? newSheet[backSecondIndex].isCover
              ? newSheet[backSecondIndex].isCover
              : false
            : false,
          para: newSheet[backSecondIndex]
            ? newSheet[backSecondIndex].para
              ? newSheet[backSecondIndex].para
              : ""
            : "",
        },

        third: {
          slide: newSheet[backThirdIndex]
            ? newSheet[backThirdIndex].slide
              ? newSheet[backThirdIndex].slide
              : 0
            : "",
          title: newSheet[backThirdIndex]
            ? newSheet[backThirdIndex].title
              ? newSheet[backThirdIndex].title
              : ""
            : "",
          subtitle: newSheet[backThirdIndex]
            ? newSheet[backThirdIndex].subtitle
              ? newSheet[backThirdIndex].subtitle
              : ""
            : "",
          type: newSheet[backThirdIndex]
            ? newSheet[backThirdIndex].type
              ? newSheet[backThirdIndex].type
              : ""
            : "",
          isCover: newSheet[backThirdIndex]
            ? newSheet[backThirdIndex].isCover
              ? newSheet[backThirdIndex].isCover
              : false
            : false,
          para: newSheet[backThirdIndex]
            ? newSheet[backThirdIndex].para
              ? newSheet[backThirdIndex].para
              : ""
            : "",
        },

        fourth: {
          slide: newSheet[backFourthIndex]
            ? newSheet[backFourthIndex].slide
              ? newSheet[backFourthIndex].slide
              : 0
            : "",
          title: newSheet[backFourthIndex]
            ? newSheet[backFourthIndex].title
              ? newSheet[backFourthIndex].title
              : ""
            : "",
          subtitle: newSheet[backFourthIndex]
            ? newSheet[backFourthIndex].subtitle
              ? newSheet[backFourthIndex].subtitle
              : ""
            : "",
          type: newSheet[backFourthIndex]
            ? newSheet[backFourthIndex].type
              ? newSheet[backFourthIndex].type
              : ""
            : "",
          isCover: newSheet[backFourthIndex]
            ? newSheet[backFourthIndex].isCover
              ? newSheet[backFourthIndex].isCover
              : false
            : false,
          para: newSheet[backFourthIndex]
            ? newSheet[backFourthIndex].para
              ? newSheet[backFourthIndex].para
              : ""
            : "",
        },
      },
    });

    firstIndex = firstIndex + 8;
    secondIndex = secondIndex + 8;
    thirdIndex = thirdIndex + 8;
    fourthIndex = fourthIndex + 8;
    backFirstIndex = backFirstIndex + 8;
    backSecondIndex = backSecondIndex + 8;
    backThirdIndex = backThirdIndex + 8;
    backFourthIndex = backFourthIndex + 8;
  }

  return worksheet;
};
