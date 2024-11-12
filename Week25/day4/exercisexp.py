# Exercise 1

my_fav_numbers = {7, 14, 21}
my_fav_numbers.update({28, 35})

my_fav_numbers.remove(35)
friend_fav_numbers = {3, 5, 7, 9}

our_fav_numbers = my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)


# Exercise 2
# No, tuples are immutable, meaning that once created, 
# their elements cannot be modified or added. 
# To add more integers, we would need to create a new tuple.

# Exercise 3

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")

basket.append("Kiwi")
basket.insert(0, "Apples")

apple_count = basket.count("Apples")

basket.clear()

print(basket)  
print("Number of apples:", apple_count)

# Exercise 4

sequence = [x * 0.5 + 1 for x in range(8)]
print(sequence)

# Exercise 5

for num in range(1, 21):
    print(num)


for i in range(1, 21):
    if i % 2 == 0:
        print(i)


# Exercise 6

my_name = "Irina"  

while True:
    name = input("Enter your name: ")
    if name == my_name:
        break

# Exercise 7    

fav_fruits = input("Enter your favorite fruits (separate by spaces): ").split()

fruit_choice = input("Enter a fruit name: ")

if fruit_choice in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

# Exercise 8

toppings = []
while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"I'll add {topping} to your pizza.")


total_cost = 10 + 2.5 * len(toppings)
print(f"Toppings on your pizza: {', '.join(toppings)}")
print(f"Total price: ${total_cost}")    

# Exercise 9

total_cost = 0
family_count = int(input("How many family members need tickets? "))

for _ in range(family_count):
    age = int(input("Enter age: "))
    if age < 3:
        total_cost += 0
    elif 3 <= age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print("Total cost for tickets:", total_cost)


teenagers = ["Alex", "Brian", "Charlie"]
allowed_teens = []

for teen in teenagers:
    age = int(input(f"Enter age for {teen}: "))
    if age < 16 or age > 21:
        allowed_teens.append(teen)

print("Teens allowed to watch the movie:", allowed_teens)

# Exercise 10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]


while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")


finished_sandwiches = []
while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    print(f"I made your {sandwich.lower()}")

print("Sandwiches made:", finished_sandwiches)
