def sort_words():
    words = input("Enter a comma-separated sequence of words: ")
    sorted_words = ",".join(sorted([word.strip() for word in words.split(",")]))
    print(sorted_words)

sort_words()