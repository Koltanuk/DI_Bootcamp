def divide_by_zero():
    try:
        result = 5/0
        return result
    except ZeroDivisionError as e:
        print("Error: Cannot divide by zero.")
        print("Exception message:", e)

divide_by_zero()       