class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            group_key = animal[0]
            if group_key not in grouped_animals:
                grouped_animals[group_key] = []
            grouped_animals[group_key].append(animal)
        
        return {i + 1: val for i, val in enumerate(grouped_animals.values())}

    def get_groups(self):
        groups = self.sort_animals()
        print("Animal groups:", groups)

ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Baboon")
ramat_gan_safari.get_animals()

ramat_gan_safari.get_groups()
