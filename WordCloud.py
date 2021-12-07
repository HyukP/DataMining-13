from wordcloud import WordCloud
import matplotlib.pyplot as plt

file = open('Voca_in_Vaccinated.txt','r',encoding='utf-8')
text = file.read()

cloud = WordCloud(background_color='white', width=800, height=600).generate(str(text))
cloud.to_file(filename = 'Voca_in_Vaccinated.png')
plt.figure(figsize=(11,11))
plt.axis('off')
plt.imshow(cloud, interpolation='bilinear')
plt.show()