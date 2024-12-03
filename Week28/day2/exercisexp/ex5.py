from datetime import datetime

def time_until_new_year():
    now = datetime.now()
    next_year = datetime(now.year + 1, 1, 1)
    delta = next_year - now
    print(f"Time left until January 1st: {delta.days} days and {delta.seconds // 3600}:{(delta.seconds // 60) % 60}:{delta.seconds % 60}")

time_until_new_year()