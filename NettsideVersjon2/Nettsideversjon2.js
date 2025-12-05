const AppleInput = document.getElementById("Apple");
const submitAnswer = document.getElementById("submitAnswer");
const AnswerResult = document.getElementById("AnswerResult");
 
submitAnswer.onclick = function() {
    let Answer = (AppleInput.value);
 
    if (Answer === "Yes" || Answer === "yes" ) {
        AnswerResult.textContent = `Welcome to Applepie Club!!`;
    }

    else if
    (Answer === "No" || Answer === "no") {
        AnswerResult.textContent = `Oh. Well, you must like applepies to be part of our Applepie Club`

    }

    else {
        AnswerResult.textContent = `You didn't answer the question!`;
    }
};