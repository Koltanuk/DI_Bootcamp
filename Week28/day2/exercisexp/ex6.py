from datetime import datetime

def minutes_lived(birthdate):

    birthdate = datetime.strptime(birthdate, "%Y-%m-%d")
    now = datetime.now()
    delta = now - birthdate
    print(f"You have lived {delta.days * 24 * 60 + delta.seconds // 60} minutes.")


minutes_lived("1987-02-26") 