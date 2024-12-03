import random

def get_words_from_file(filename):
    try:
        with open(filename, "r") as file:
            words = file.read().split()
        return words
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
        return []

def get_random_sentence(length, words):
    sentence = " ".join(random.choices(words, k=length))
    return sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    print("You will get a random sentence of your chosen length.")

    try:
        length = int(input("Enter the sentence length (between 2 and 20): "))
        if not 2 <= length <= 20:
            raise ValueError("Invalid length.")
    except ValueError:
        print("Error: Please enter an integer between 2 and 20.")
        return

    words = get_words_from_file("D:\DI_Bootcamp\Week28\day4\exercisexp\sowpods.txt")
    sentence = get_random_sentence(length, words)
    print(f"Generated sentence: {sentence}")

if __name__ == "__main__":
    main()