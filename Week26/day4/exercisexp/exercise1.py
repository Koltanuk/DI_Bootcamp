import random

def get_random_temp(season):
     if season == 'winter':
        return round(random.uniform(-10, 16), 1)
     elif season == 'spring':
         return round(random.uniform(0,23),1)
     elif season == 'summer':
        return round(random.uniform(24, 40), 1)
     elif season == 'autumn':
        return round(random.uniform(0, 23), 1)
     else:
        print("Invalid season. Defaulting to a temperature between -10 and 40.")
        return round(random.uniform(-10, 40), 1)
    

def main():
    
    month = int(input("Enter the month number (1 for January, 12 for December): "))
    if month in [12, 1, 2]:
        season = 'winter'
    elif month in [3, 4, 5]:
        season = 'spring'
    elif month in [6, 7, 8]:
        season = 'summer'
    elif month in [9, 10, 11]:
        season = 'autumn'
    else:
        print("Invalid month. Defaulting to winter.")
        season = 'winter'
    
   
    temperature = get_random_temp(season)
    
    
    print(f"The temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temperature <= 23:
        print("It's a bit cool outside, a light jacket should be fine.")
    elif 24 <= temperature <= 32:
        print("The weather is warm! Enjoy your day.")
    elif 32 < temperature <= 40:
        print("It's really hot! Stay hydrated and wear light clothing.")


main()