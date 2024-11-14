matrix = [
    ["7", "i", "i"],
    ["T", "s", "x"],
    ["h", "%", "?"],
    ["i", " ", "#"],
    ["s", "M", " "],
    ["$", "a", " "],
    ["#", "t", "%"],
    ["^", "r", "!"]
]

def decode_matrix(matrix):
    message = ""
    num_columns = len(matrix[0])
    num_rows = len(matrix)

    for col in range(num_columns):
        for row in range(num_rows):
            char = matrix[row][col]
            
            if char.isalpha():
                message += char
           
            elif message and message[-1] != " ":
                message += " "
    
    
    message = ' '.join(message.split())
    return message

decoded_message = decode_matrix(matrix)
print(decoded_message)