def to_camel_case(text):
    wordList = '-'.join(text.split('_')).split('-')
    resList = []
    for i in range(len(wordList)):
        resList.append(wordList[i]) if i == 0 else resList.append(wordList[i].capitalize())
    return ''.join(resList)    


text1 = 'the_stealth_warrior'
text2= 'ABC'
text3 = 'the-stealth-warrior'
print(to_camel_case(text1))
print(to_camel_case(text2))
print(to_camel_case(text3))

""" first python kata!
"""