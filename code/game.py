import random

def game():
    # generate a random number between 1 and 100
    number = random.randint(1, 100)
    attempts = 0

    print("Let's play a game! Guess a number between 1 and 100.")
    while True:
        # get player's guess
        guess = int(input("Enter your guess: "))
        attempts += 1

        # check if guess is correct
        if guess == number:
            print(f"Correct! You took {attempts} attempts.")
            break
        elif guess < number:
            print("Too low.")
        else:
            print("Too high.")

if __name__ == '__main__':
    game()

