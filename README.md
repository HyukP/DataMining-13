### Data Mining Team Project (Team 13)

## 트위터 사용자들의 특정 인물 및 대상에 대한 감정분석 프로젝트

# Introduce

저희 Team 13은 Twitter API를 이용해서 트윗을 수집하고 그것을 딥러닝 모델에 적용하여 특정 키워드에 대한 긍부정 수치를 분석하는 것을 프로젝트의 목표로 했습니다.
결과를 좀 Simple하게 보여주기 위해서 React를 이용해 Page를 만들기도 했습니다. (어디까지나 부가적인 요소라고 생각합니다.)

## Explanation about files

* Transformers_for_Sentiment_Analysis_twitter
  - 딥러닝 모델을 적용하고 이에 따라 워드클라우딩과 긍부정 평균 수치를 분석하는 code입니다.
  - code를 실행하기 위해서는 colab을 사용했습니다.

* Stream.py
  - Twitter로부터 승인받은 키를 이용하여 Twitter API를 사용하기 위한 code입니다.
  - 해당 API를 이용해서 Streaming을 수행하여 트윗을 수집하기 위해 만든 code입니다.

* Tokenization.py
  - 수집한 Json 혹은 csv 파일에 대소문자, 특수문자 등을 처리하기 위해 만든 code입니다.
  - 또한 Token화를 통해서 DF-IDF를 사용하여 Vector화하여 Item이 어떻게 구성되어 있는지 확인하기 위한 내용도 포함되어 있습니다.

* resultViewPage.html
  - React를 사용하여 간단하게 만든 분석 결과를 파이차트와 워드클라우드를 올린 페이지입니다.
  - <A href="resultViewPage.html"> Page로 이동</A>

