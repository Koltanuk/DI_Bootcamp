import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def area(self):
        
        return math.pi * (self.radius ** 2)

    def __str__(self):
        
        return f"Circle with radius: {self.radius:.2f} and diameter: {self.diameter:.2f}"

    def __add__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only add Circle instances.")
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare Circle instances.")
        return self.radius < other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare Circle instances.")
        return math.isclose(self.radius, other.radius)

    def __gt__(self, other):
        return not self.__lt__(other) and not self.__eq__(other)

circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)
circle3 = Circle(radius=7)


print(circle1) 
print(f"Area: {circle1.area:.2f}") 


circle4 = circle1 + circle3
print(circle4) 

print(circle1 > circle2) 
print(circle1 == circle2)  


circles = [circle1, circle3, circle2]
sorted_circles = sorted(circles)
print([str(c) for c in sorted_circles])  



def draw_circle(circle):
    t = turtle.Turtle()
    t.penup()
    t.goto(0, -circle.radius)  
    t.pendown()
    t.circle(circle.radius)  
    turtle.done()


draw_circle(sorted_circles[0])