import random

#Exercise 1 and 2

user_input = input("Enter a string of 10 characters: ")

if len(user_input) < 10:
    print("String not long enough")
elif len(user_input) > 10:
    print("String too long")
else:
    print("Perfect string")
    print(user_input[0])  
    print(user_input[-1])


#Exercise 3

user_input2 = input("Enter a string: ")


constructed_string = ""
for char in user_input2:
    constructed_string += char
    print(constructed_string)

#Exercise 4

shuffled_list = list(user_input2)
random.shuffle(shuffled_list)
shuffled_string = ''.join(shuffled_list)
print("Jumbled string:", shuffled_string)







