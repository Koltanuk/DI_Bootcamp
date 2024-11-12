#Exercise 1 

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))
print(result)

#Exercise 2

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0

# for member, age in family.items():
#     if age < 3:
#         ticket_price = 0
#     elif 3 <= age <= 12:
#         ticket_price = 10
#     else:
#         ticket_price = 15
#     total_cost += ticket_price
#     print(f"{member} has to pay ${ticket_price}")

# print("Total cost for the family:", total_cost)

#Bonus
family = {}
while True:
    name = input("Enter family member's name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

total_cost = sum(
    0 if age < 3 else 10 if 3 <= age <= 12 else 15 for age in family.values()
)
print("Total cost for the family:", total_cost)

#Exercise 3

# Step 2: Create a dictionary
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# Step 3: Change the number of stores to 2.
brand["number_stores"] = 2

# Step 4: Print clients information
print("Zara's clients include men, women, children, and home product buyers.")

# Step 5: Add country_creation
brand["country_creation"] = "Spain"

# Step 6: Check and add competitor
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Step 7: Delete creation date
del brand["creation_date"]

# Step 8: Print last competitor
print("Last international competitor:", brand["international_competitors"][-1])

# Step 9: Major colors in the US
print("Major colors in the US:", brand["major_color"]["US"])

# Step 10: Print number of key-value pairs
print("Number of key-value pairs:", len(brand))

# Step 11: Print dictionary keys
print("Keys in the brand dictionary:", brand.keys())

# Step 12: Create another dictionary
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# Step 13: Add more_on_zara to brand
brand.update(more_on_zara)

# Step 14: Print number of stores
print("Number of stores:", brand["number_stores"])


#Exercise 4

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Step 1
disney_users_A = {user: index for index, user in enumerate(users)}
print(disney_users_A)

# Step 2
disney_users_B = {index: user for index, user in enumerate(users)}
print(disney_users_B)

# Step 3
disney_users_C = {user: index for index, user in enumerate(sorted(users))}
print(disney_users_C)

# Step 4
disney_users_i = {user: index for index, user in enumerate(users) if "i" in user}
print(disney_users_i)

# Step 5
disney_users_mp = {user: index for index, user in enumerate(users) if user[0].lower() in ['m', 'p']}
print(disney_users_mp)
