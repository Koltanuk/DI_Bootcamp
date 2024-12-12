class Superstack:
    def __init__(self):
        self.stack = []         
        self.increment = []      

    def push(self, v: int):
        self.stack.append(v)
        self.increment.append(0)  
        print(self.stack[-1])

    def pop(self):
        if len(self.stack) == 1:
            print("Empty")
        else:
            self.increment[-2] += self.increment[-1]
            print(self.stack[-1] + self.increment[-1])
        self.stack.pop()
        self.increment.pop()

    def inc(self, i: int, v: int):
        self.increment[min(i - 1, len(self.stack) - 1)] += v
        print(self.stack[-1] + self.increment[-1])

    def execute_operations(self, operations: list):
        for op in operations:
            parts = op.split()
            if parts[0] == "push":
                self.push(int(parts[1]))
            elif parts[0] == "pop":
                self.pop()
            elif parts[0] == "inc":
                self.inc(int(parts[1]), int(parts[2]))
