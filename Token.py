import numpy as np
import pandas as pd
import re
from sklearn.feature_extraction.text import TfidfVectorizer

np.set_printoptions(precision=2, linewidth=120)

def replace_words(text):
    words = ' '.join(re.sub("(@[A-Za-z0-9]+)|(#[A-Za-z0-9]+)", " ", text).split())
    words = ' '.join(re.sub("[\.\,\!\?\:\;\-\=\#\/]", " ", words).split())
    words = words.replace("…"," ")
    words = words.lower()
    return words

dataset = pd.read_json('./Vaccinated.json', lines = True)
tfidf_vectorizer = TfidfVectorizer(min_df = 0)
dataset['words'] = dataset['full_text'].apply(replace_words)
tfidf_vectorizer.fit(dataset['words'])
      
sorted(tfidf_vectorizer.vocabulary_.items())
text = tfidf_vectorizer.vocabulary_.items()
print(text)

print(tfidf_vectorizer.fit_transform(dataset['words']).shape)
sen = ""
output_file = "Voca_in_Vaccinated.txt"
with open(output_file, 'w', encoding="utf-8") as output:
    for line in dataset['words']:
        output.write(str(line) + '\n')

