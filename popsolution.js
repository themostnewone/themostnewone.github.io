// Updated to 10 total questions
var total = 10;
var question = new Array();
for (i = 1; i <= total + 1; i++) {
    temp = "choice" + i + "=new Array()";
    eval(temp);
}
var solution = new Array();

// Expanded compliments for correct answers
var compliments = new Array();
compliments[0] = "Excellent!";
compliments[1] = "Wow, you're really rocking!";
compliments[2] = "You must have studied hard. Good job!";
compliments[3] = "Right on.";
compliments[4] = "Correct!";
compliments[5] = "Great Job!";
compliments[6] = "Good work!";
compliments[7] = "Nicely done!";
compliments[8] = "You're on fire!";
compliments[9] = "Fantastic! Keep it up!";
compliments[10] = "You're crushing it!";

// Questions and answers for the quiz
question[1] = "What is the probability of an event that is certain to happen?";
choice1[1] = "0";
choice1[2] = "0.5";
choice1[3] = "1";
choice1[4] = "Depends on the sample space";

question[2] = "Which of the following terms describes the set of all possible outcomes of an experiment?";
choice2[1] = "Event";
choice2[2] = "Random Variable";
choice2[3] = "Sample Space";
choice2[4] = "Probability Distribution";

question[3] = "If you flip a fair coin three times, how many possible outcomes are there?";
choice3[1] = "2";
choice3[2] = "4";
choice3[3] = "8";
choice3[4] = "16";

question[4] = "What is the probability of getting heads in two consecutive flips of a fair coin?";
choice4[1] = "0.25";
choice4[2] = "0.5";
choice4[3] = "0.25";
choice4[4] = "0.75";

question[5] = "Which of the following statements is true for independent events?";
choice5[1] = "The occurrence of one event affects the other";
choice5[2] = "The occurrence of one event does not affect the other";
choice5[3] = "Both events are mutually exclusive";
choice5[4] = "The sum of their probabilities is 1";

question[6] = "Which of the following is an example of a Bernoulli trial?";
choice6[1] = "Rolling a die";
choice6[2] = "Flipping a coin";
choice6[3] = "Drawing two cards from a deck";
choice6[4] = "Rolling two dice at once";

question[7] = "Which of the following formulas represents conditional probability?";
choice7[1] = "P(A and B) = P(A) + P(B)";
choice7[2] = "P(A | B) = P(A ∩ B) / P(B)";
choice7[3] = "P(A or B) = P(A) * P(B)";
choice7[4] = "P(A) = 1 - P(B)";

question[8] = "Which of the following is a property of mutually exclusive events?";
choice8[1] = "They can occur together";
choice8[2] = "They cannot occur at the same time";
choice8[3] = "They are independent";
choice8[4] = "Their probabilities multiply";

question[9] = "What does Bayes' Theorem calculate?";
choice9[1] = "Probability of independent events";
choice9[2] = "Probability of joint events";
choice9[3] = "Probability of an event given prior knowledge of related events";
choice9[4] = "Total number of possible outcomes";

question[10] = "In a classification problem, which metric requires predicted probabilities for evaluation?";
choice10[1] = "AUC (Area Under the Curve)";
choice10[2] = "Accuracy";
choice10[3] = "Precision";
choice10[4] = "Recall";

// Solutions for each question
solution[1] = "c";
solution[2] = "c";
solution[3] = "c";
solution[4] = "a";
solution[5] = "b";
solution[6] = "b";
solution[7] = "b";
solution[8] = "b";
solution[9] = "c";
solution[10] = "a";
