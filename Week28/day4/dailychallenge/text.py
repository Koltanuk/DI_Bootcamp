import nltk
nltk.download('stopwords')
import string
from collections import Counter
import re
from nltk.corpus import stopwords



class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        word_count = Counter(words)
        return word_count.get(word, f"The word '{word}' is not in the text.")

    def most_common_word(self):
        words = self.text.split()
        word_count = Counter(words)
        most_common = word_count.most_common(1)
        if most_common:
            return most_common[0][0]
        return "No words in text."

    def unique_words(self):
        words = self.text.split()
        return list(set(words))
    
    @classmethod
    def from_file(cls, filename: str):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)

text = Text("A good book would sometimes cost as much as a good house.")
print("Word Frequency (good):", text.word_frequency("good")) 
print("Most Common Word:", text.most_common_word())  
print("Unique Words:", text.unique_words())

text_instance = Text.from_file(r'D:\DI_Bootcamp\Week28\day4\dailychallenge\the_stranger.txt')

print(text_instance.word_frequency("the"))
print(text_instance.most_common_word())
print(text_instance.unique_words())

class TextModification(Text):
    def remove_punctuation(self) -> str:
        return self.text.translate(str.maketrans('', '', string.punctuation))
    
    def remove_stopwords(self) -> str:
        stop_words = set(stopwords.words('english'))
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in stop_words]
        return ' '.join(filtered_words)
    
    def remove_special_characters(self) -> str:
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)
    
text_mod_instance = TextModification.from_file(r'D:\DI_Bootcamp\Week28\day4\dailychallenge\the_stranger.txt')

print("Text without punctuation:")
print(text_mod_instance.remove_punctuation())

print("\nText without stop-words:")
print(text_mod_instance.remove_stopwords())

print("\nText without special characters:")
print(text_mod_instance.remove_special_characters())    