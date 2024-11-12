import re

# Challenge 1

word = input("Enter a word: ")

letter_indexes = {}

for index, letter in enumerate(word):
    if letter not in letter_indexes:
        letter_indexes[letter] = [] 
    letter_indexes[letter].append(index)  

print(letter_indexes)

# Challenge 2

def affordable_items(items, wallet):
    wallet_amount = int(re.sub(r'[^\d]', '', wallet))
    
    affordable = []
   
    for item, price in items.items():
       
        item_price = int(re.sub(r'[^\d]', '', price))
        
        if item_price <= wallet_amount:
            affordable.append(item)

    
    affordable.sort()

    
    return affordable if affordable else "Nothing"

items_purchase_1 = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet_1 = "$300"
print(affordable_items(items_purchase_1, wallet_1))

items_purchase_2 = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet_2 = "$100"
print(affordable_items(items_purchase_2, wallet_2))

items_purchase_3 = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet_3 = "$1"
print(affordable_items(items_purchase_3, wallet_3))