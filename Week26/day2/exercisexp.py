import random

#Exercise 1

def display_message():
    print("I am learning how to create and work with functions in Python.")

display_message()

#Exercise 2

def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

#Exercise 3

def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik")
describe_city("Paris", "France")

#Exercise 4

def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print("Success! You guessed the correct number!")
    else:
        print(f"Fail! Your number was {user_number}, but the random number was {random_number}.")


compare_numbers(25)

# Exercise 5

def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()

make_shirt("Medium")

make_shirt("Small", "Coding is fun!")

make_shirt(size="Extra Large", text="Python is awesome!")

# Exercise 6

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = f"{magicians[i]} the Great"

make_great(magician_names)

show_magicians(magician_names)
