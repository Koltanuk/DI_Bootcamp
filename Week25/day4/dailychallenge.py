
# Challenge 1

number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))


multiples = [number * i for i in range(1, length + 1)]
print(multiples)

# Challenge 2
user_input = input("Enter a word: ")

result = user_input[0]

for i in range(1, len(user_input)):
    if user_input[i] != user_input[i - 1]:  # Check if the current char is different from the previous
        result += user_input[i]

print(result)