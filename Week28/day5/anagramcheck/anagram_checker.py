class AnagramChecker:
    def __init__(self, file_path="D:\\DI_Bootcamp\\Week28\\day5\\anagramcheck\\sowpods.txt"):
        with open(file_path, "r") as file:
            self.words = {line.strip().lower() for line in file}
    
    def is_valid_word(self, word):
        return word.lower() in self.words
    
    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower()) and word1.lower() != word2.lower()
    
    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.words if self.is_anagram(word, w)]