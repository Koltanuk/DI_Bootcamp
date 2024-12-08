def is_balanced(expr: str) -> bool:
    pairs = {')': '(', '}': '{', ']': '['}
    stack = []

    for char in expr:
        if char in pairs.values():
            stack.append(char)
        elif char in pairs.keys():
            if not stack or stack.pop() != pairs[char]:
                return False

    return len(stack) == 0


expr1 = "(1 + 2) * {[(3 / 4) - 5]}"
expr2 = "[1 + 2) * (3 - 4)]"
expr3 = "((1 + 2)"

print(is_balanced(expr1))  # Output: True
print(is_balanced(expr2))  # Output: False
print(is_balanced(expr3))  # Output: False

def is_balanced_with_quotes(expr: str) -> bool:
    pairs = {')': '(', '}': '{', ']': '[', '"': '"', "'": "'"}
    stack = []

    for char in expr:
        if char in pairs.values(): 
            if char in ['"', "'"]:
                if stack and stack[-1] == char:
                    stack.pop()
                else:
                    stack.append(char)
            else:
                stack.append(char)
        elif char in pairs.keys():  
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()


    return len(stack) == 0


expr_with_quotes = '("1 + 2") * {[3 / 4] - "5"}'
unbalanced_quotes = '("1 + 2]'
print(is_balanced_with_quotes(expr_with_quotes))  # Output: True
print(is_balanced_with_quotes(unbalanced_quotes))  # Output: False