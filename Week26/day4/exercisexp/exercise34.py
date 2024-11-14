def get_age(year, month, day):
    
    current_year = 2024
    current_month = 11
    current_day = 14
    
    
    age = current_year - year
    if (current_month, current_day) < (month, day):
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    
    year, month, day = map(int, date_of_birth.split('/'))
    
    
    age = get_age(year, month, day)
    
    
    if gender.lower() == 'm' and age >= 67:
        return True
    elif gender.lower() == 'f' and age >= 62:
        return True
    else:
        return False

def main():
    
    gender = input("Enter your gender (m/f): ").strip().lower()
    date_of_birth = input("Enter your date of birth (yyyy/mm/dd): ").strip()
    
    
    if can_retire(gender, date_of_birth):
        print("You can retire.")
    else:
        print("You cannot retire yet.")


main()


#Exercise 4
 
def calculate_pattern(x):
   
    x_str = str(x)
    result = int(x_str) + int(x_str * 2) + int(x_str * 3) + int(x_str * 4)
    return result


x = int(input("Enter a number (X): "))
print("The result of X + XX + XXX + XXXX is:", calculate_pattern(x)) 