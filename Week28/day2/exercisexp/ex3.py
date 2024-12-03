import string
import random

def generate_random_string(length=5):
    letters = string.ascii_letters 
    return ''.join(random.choice(letters) for _ in range(length))

print(generate_random_string()) 