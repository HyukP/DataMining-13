import numpy as np
import pandas as pd
import re
import itertools

np.set_printoptions(precision=2, linewidth=120)

def replace_words(text):
    words = ' '.join(re.sub("(@[A-Za-z0-9]+)|(#[A-Za-z0-9]+)", " ", text).split())
    words = ' '.join(re.sub("[\.\,\!\?\:\;\-\=\#\/]", " ", words).split())
    words = words.replace("RT"," ") ##RT란 단어는 필요가 없다고 판단.
    words = words.replace("…"," ")
    words = words.lower()
    words = words.split()
    return words


dataset = pd.read_json('./Biden.json', lines = True)

dataset['words'] = dataset['text'].apply(replace_words)

output_file = "Biden_words.json"

## 분리하고 가공화한 데이터를 print한다. 이후 data를 json file로 저장한다.
print(dataset['words']) 
with open(output_file, 'w', encoding='utf-8') as f:
    for line in dataset['words']:
        f.write(str(line) + '\n')
