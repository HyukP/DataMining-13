import twitter
import json

twitter_consumer_key = 'UdBoo684EzNILSznhNw69ZSNV'
twitter_consumer_secret = 'fqKPahwwbMd6Q81vcpiRLxCrNxCzcVlrdZjjxGO2EadjR1hjKv'
twitter_access_token = '1464425905984774144-1iXiJOMIefaQg0uHFHFx1Bg811xpHM'
twitter_access_secret = '9TqDWY6uALoCfTnlZpQ0BabmtiZInowO8YMbVYU9Rz5bL'

twitter_api = twitter.Api(consumer_key=twitter_consumer_key,
                          consumer_secret = twitter_consumer_secret,
                          access_token_key = twitter_access_token,
                          access_token_secret = twitter_access_secret,
                          tweet_mode='extended')

searchword = ["Biden"] ## 대괄호 안의 String은 keyword에 해당함. 이에 따라 검색하는 내용도 달라진다.
output_file = "Biden.json" ## Output File 이름의 형식
print("Real time Searching..")
with open(output_file, 'w', encoding="utf-8") as output:
    stream = twitter_api.GetStreamFilter(track=searchword, stall_warnings=True)
    while True:
        for tweets in stream:
            try:
                if tweets['truncated'] == True :
                    tweet = json.dumps(tweets['extended_tweet'], ensure_ascii=False)
                    print(tweet, file=output, flush=True)
                elif tweets['truncated'] == False :
                    print("Test")  
            except KeyError as e:
                print(e)
                
            
