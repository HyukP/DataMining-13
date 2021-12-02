import twitter
from collections import Counter
import json

twitter_consumer_key = 'UdBoo684EzNILSznhNw69ZSNV'
twitter_consumer_secret = 'fqKPahwwbMd6Q81vcpiRLxCrNxCzcVlrdZjjxGO2EadjR1hjKv'
twitter_access_token = '1464425905984774144-1iXiJOMIefaQg0uHFHFx1Bg811xpHM'
twitter_access_secret = '9TqDWY6uALoCfTnlZpQ0BabmtiZInowO8YMbVYU9Rz5bL'

twitter_api = twitter.Api(consumer_key=twitter_consumer_key,
                          consumer_secret = twitter_consumer_secret,
                          access_token_key = twitter_access_token,
                          access_token_secret = twitter_access_secret)

searchword = ["Biden"]
output_file = "Biden.csv"
print("Real time Searching..")
with open(output_file, 'w', encoding="utf-8") as output:
    stream = twitter_api.GetStreamFilter(track=searchword)
    while True:
        for tweets in stream:
            tweet = json.dumps(tweets, ensure_ascii=False)
            print(tweet, file=output, flush=True)
            
