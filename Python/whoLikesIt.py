def likes(names):
    message = ''
    if len(names) == 0:
        message = 'no one likes this'
    elif len(names) == 1:
        message = f'{names[0]} likes this'
    elif len(names) == 2:
        message = f'{names[0]} and {names[1]} like this'
    elif len(names) == 3:
        message = f'{names[0]}, {names[1]}, and {names[2]} like this'
    else: 
        message = f'{names[0]}, {names[1]} and {len(names) - 2} others like this'
    return message


print(likes(['alex', 'mark', 'john', 'luke', 'ethan']))


""" https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python
good intro to interpolation, if, elif, and else for me
"""