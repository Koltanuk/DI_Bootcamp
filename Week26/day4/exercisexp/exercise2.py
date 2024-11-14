data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_questions():
    correct_answers = 0
    wrong_answers = []
    
    
    for item in data:
        user_answer = input(f"{item['question']} ")
        if user_answer.strip().lower() == item['answer'].lower():
            correct_answers += 1
        else:
            wrong_answers.append({
                "question": item["question"],
                "user_answer": user_answer,
                "correct_answer": item["answer"]
            })
    
    return correct_answers, wrong_answers

def display_results(correct_answers, wrong_answers):
    total_questions = len(data)
    incorrect_answers = len(wrong_answers)
    
    
    print(f"\nYou got {correct_answers} out of {total_questions} questions right.")
    print(f"Correct answers: {correct_answers}")
    print(f"Incorrect answers: {incorrect_answers}")
    
   
    if incorrect_answers > 0:
        print("\nHere are the questions you got wrong:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['user_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")
    
   
    if incorrect_answers > 3:
        retry = input("You missed more than 3 questions. Would you like to try again? (yes/no): ")
        if retry.strip().lower() == 'yes':
            main()

def main():
    correct_answers, wrong_answers = ask_questions()
    display_results(correct_answers, wrong_answers)


main()