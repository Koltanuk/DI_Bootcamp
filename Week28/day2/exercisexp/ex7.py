from faker import Faker

fake = Faker()
users = []

def add_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code(),
    }
    users.append(user)


for _ in range(5):
    add_user()


for user in users:
    print(user)