from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker()
    
    while True:
        print("\nANAGRAM CHECKER")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option (1 or 2): ").strip()
        
        if choice == "2":
            print("Goodbye!")
            break
        
        if choice == "1":
            user_word = input("\nEnter a single word: ").strip()
            
            if " " in user_word:
                print("Error: Only a single word is allowed.")
                continue
            if not user_word.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue
            
            user_word = user_word.strip()
            
            if not checker.is_valid_word(user_word):
                print(f'"{user_word}" is not a valid English word.')
                continue
            
            anagrams = checker.get_anagrams(user_word)
            

            print("\nYOUR WORD:", user_word.upper())
            print("This is a valid English word.")
            print("Anagrams for your word:", ", ".join(anagrams) if anagrams else "None.")
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
