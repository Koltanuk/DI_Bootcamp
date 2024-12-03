from datetime import datetime

def display_current_date():
    print("Current date:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

display_current_date()