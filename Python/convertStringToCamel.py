def to_camel_case(text):
    wordList = text.split('_')
    resList = []
    for i in range(len(wordList)):
        resList.append(wordList[i]) if i == 0 else resList.append(wordList[i].capitalize())
    res = ''.join(resList)    
    return res


text1 = 'the_stealth_warrior'
text2= ''
print(to_camel_case(text1))
print(to_camel_case(text2))
