tasks = []

while True:
    print("1.Add task")
    print("2.View task")
    print("3.Mark task")
    print("4.Delete task")
    print("5.Quit")

    choice = input("Pick the number: ")
    
    if choice == "1":
        task = input("Enter task: ")
        tasks.append(task)
        print("Task added!")
    elif choice == "2":
        if len(tasks) == 0:
            print("No tasks yet!")
        else:
            for i, task in enumerate(tasks):
                print(str(i+1) + ". " + task)


    elif choice == "3":
        for i, task in enumerate(tasks):
            print(str(i+1) + "." + task)
        number = int(input("Which one you want to mark as done"))
        tasks[number -1] = tasks [number -1] + "✅"
        print("Task marked!")


    elif choice == "4":  
        for i, task in enumerate(tasks):
            print(str(i+1) + " ." + task)
        number = int(input("Which one you want to delete?"))
        tasks.pop(number - 1)
        print("Task deleted!")
    elif choice == "5":
        quit()