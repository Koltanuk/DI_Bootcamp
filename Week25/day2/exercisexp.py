#Exercise 1
print('Hello World\n' *5)

#Exercise 2

result = (99 ** 3) * 8
print(result)

#Exercise 3

print(5 < 3)            # Output: False
print(3 == 3)           # Output: True
print(3 == "3")         # Output: False (integer vs. string)
# print("3" > 3)        # Error: Cannot compare string and integer
print("Hello" == "hello")  # Output: False (case-sensitive)

#Exercise 4

computer_brand = "hp"  
print(f"I have a {computer_brand} computer")

#Exercise 5

name = "Irina"          
age = 37                 
shoe_size = 39           
info = f"My name is {name}, I am {age} years old and my shoe size is {shoe_size}."
print(info)


#Exercise 6

a = 10
b = 5
if a > b:
    print("Hello World")

#Exercise 7

number = int(input("Enter a number: "))
if number % 2 == 0:
    print("This number is even.")
else:
    print("This number is odd.")    


#Exercise 8

user_name = input("What's your name? ")
if user_name.lower() == "Irina".lower(): 
    print("Hey, we have the same name! That's awesome!")
else:
    print("Nice to meet you! But we don't have the same name.")


#Exercise 9

height = int(input("Enter your height in centimeters: "))
if height >= 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("You need to grow some more to ride the roller coaster.")