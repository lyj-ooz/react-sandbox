# 쇼미더타이핑

타이핑 게임과 그 점수에 따른 랭킹을 보여주는 웹게임 사이트를 만들 것임.

### 어려웠던 점

1. 이 게임을 CRA가 아니라 웹팩으로 빌드(?) 했더니 css 파일을 읽지 못했다. 에러메시지에 https://webpack.js.org/concepts/#loaders 를 참고하라고 해서 이 주소에 나온 글대로 조치하였으나 내 경우에는 'style-loader'도 설치한 후에 webpack.config.js 파일에 설정해준 후에야 css 파일을 읽을 수 있었다 휴
