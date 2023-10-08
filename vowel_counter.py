x = str(input("Please enter a word: "))

vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']

count = 0


for i in x:
    if i in vowels:
        count+=1
        print(i, "is a vowel")
    else:
        print(i, "is not a vowel")
        
        
        
print("number of vowels: ", count)