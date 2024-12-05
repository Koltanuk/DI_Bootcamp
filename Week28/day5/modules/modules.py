import requests
import time

def measure_load_time(url):

    try:
        start_time = time.time()  
        response = requests.get(url)
        response.raise_for_status() 
        end_time = time.time()  
        load_time = end_time - start_time  
        return load_time
    except requests.exceptions.RequestException as e:
        print(f"Error loading {url}: {e}")
        return None

if __name__ == "__main__":
    websites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]
    
    for site in websites:
        print(f"Testing load time for: {site}")
        load_time = measure_load_time(site)
        if load_time is not None:
            print(f"The load time for {site} is {load_time:.2f} seconds.\n")
        else:
            print(f"Failed to load {site}.\n")
