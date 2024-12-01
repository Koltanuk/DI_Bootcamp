class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("Fluffy", 3)
cat2 = Cat("Whiskers", 5)
cat3 = Cat("Mittens", 2)

def find_oldest_cat(cats):
    oldest = max(cats, key=lambda cat: cat.age)
    return oldest

cats = [cat1, cat2, cat3]
oldest_cat = find_oldest_cat(cats)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
