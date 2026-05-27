import random

number = random.randint(1, 10)

x = int(input("Enter the number: "))
count = 1

while x != number:
    count +=1

    if x < number:
        print("Too Low")

    elif x > number:
        print("Too High")

    x = int(input("Enter the number: "))

print("You guessed it!", count, "guesses")
