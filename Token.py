import numpy as np
import pandas as pd
import re
from sklearn.feature_extraction.text import TfidfVectorizer

np.set_printoptions(precision=2, linewidth=120)

def replace_words(text):
    words = ' '.join(re.sub("(@[A-Za-z0-9]+)|(#[A-Za-z0-9]+)", " ", text).split())
    words = ' '.join(re.sub("[\.\,\!\?\:\;\-\=\#\/]", " ", words).split())
    words = words.replace("RT"," ") ##RT란 단어는 필요가 없다고 판단.
    words = words.replace("…"," ")
    words = words.lower()
    return words

dataset = pd.read_json('./Biden.json', lines = True)
tfidf_vectorizer = TfidfVectorizer(min_df = 0)
dataset['words'] = dataset['text'].apply(replace_words)
tfidf_vectorizer.fit(dataset['words'])
      
sorted(tfidf_vectorizer.vocabulary_.items())
text = tfidf_vectorizer.vocabulary_

print(tfidf_vectorizer.fit_transform(dataset['words']).shape)

output_file = "Biden_words.txt"
with open(output_file, 'w', encoding="utf-8") as output:
    for line in dataset['words']:
        output.write(str(line) + '\n')
        
