def display_board(board):
    
    print("\nWelcome to TIC TAC TOE!")
    print("***************")
    for row in range(len(board)):
        print(f"*  {' | '.join(board[row])}  *")
        if row < len(board) - 1:
            print("* ---|---|--- *")
    print("***************")


def player_input(player):
    
    while True:
        try:
            row = int(input(f"Player {player}, enter row (0, 1, or 2): "))
            col = int(input(f"Player {player}, enter column (0, 1, or 2): "))
            if row in [0, 1, 2] and col in [0, 1, 2]:
                return row, col
            else:
                print("Invalid input. Rows and columns must be between 0 and 2.")
        except ValueError:
            print("Please enter valid integers for row and column.")


def check_win(board, player):
    
    for row in board:
        if all(cell == player for cell in row):
            return True
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False


def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    turns = 0
    current_player = "X"

    
    while turns < 9:
        display_board(board)

        
        row, col = player_input(current_player)

        
        if board[row][col] == " ":
            board[row][col] = current_player
            turns += 1

            
            if check_win(board, current_player):
                display_board(board)
                print(f"Player {current_player} wins!")
                return

            
            current_player = "O" if current_player == "X" else "X"
        else:
            print("Cell already occupied. Choose a different cell.")

    display_board(board)
    print("It's a tie!")



if __name__ == "__main__":
    print("Welcome to TIC TAC TOE!")
    play()
