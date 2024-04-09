# 관심사 기반 대학 친구 찾기 서비스
<img width="710" alt="스크린샷 2023-09-12 오후 7 38 35" src="https://github.com/SonMinSeock/spark_v2/assets/44064257/9ca94662-7713-4285-9680-4e4f3eddb1d5">

- 배포 URL : [스파크](https://spark-v2-d78f1.web.app)

## 프로젝트 소개
- 우리 프로젝트는 새로운 친구를 찾고자 하는 대학생들을 위한 특별한 공간입니다.
- MBTI를 기반으로 매일 친구를 추천해드리며, 간단한 질문에 답하기만 하면 마음맞는 친구를 찾을 수 있습니다.
- 지금 당장 스파크에 참여하여 새로운 친구를 만나보세요!

## 팀원 구성

| **전민서** | **박서윤** | **손민석** |
| :------: |  :------: | :------: |
|<img width="140" height="140" alt="스크린샷 2023-09-13 오후 3 20 10" src="https://github.com/SonMinSeock/spark_v2/assets/44064257/9e6476fb-a5b0-4bfe-bea9-8c9219218f68"><br/>PO|<img width="150" height="140" alt="스크린샷 2023-09-13 오후 3 20 14" src="https://github.com/SonMinSeock/spark_v2/assets/44064257/3802e669-be87-4a0f-ad67-19fb8f61c367"><br/>디자이너|<img width="140" height="140" src="https://avatars.githubusercontent.com/u/44064257?s=400&u=c0f84c43a6aaa80ecc32bf82f47e893e26400fbf&v=4" /><br/>프론트엔드|

## 개발 환경
- FrontEnd : React, JavaScript, styled-components
- BackEnd : Firebase
- 버전 및 이슈관리 : Github
- 협업 툴 : Notion, Google Docs
- 디자인 : Figma

## 채택한 개발 기술
### [React]
  - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려하기 위해 React를 채택하여 개발했습니다.
  - 컴포넌트화를 통해 리소스 절약의 효과 가능합니다.
### [styled-components]
  - React를 이용하여 컴포넌트 적용하여 스타일링 유지 보수 가능합니다.
  - props를 이용하여 조건부 스타일링을 활용해 상황에 알맞은 스타일을 적용가능 하므로 채택했습니다.
  - 네이밍을 통해 일반 컴포넌트와 스타일 컴포넌트를 구분하기 쉽습니다.
### [Firebase]
  - Firebase는 실시간 데이터베이스를 제공하며, 실시간 데이터 동기화를 쉽게 구현할 수 있습니다.
  - Firebase는 백엔드 서버를 설정하고 관리하는 복잡한 과정을 간소화합니다.
  - Firebase가 서버리스 기능을 제공하여 서버 관리와 관련된 부담을 줄일 수 있기 때문입니다.
  - Google Analytics(GA)를 포함한 분석 기능을 활용할 수 있다는 점이 있습니다.
    - Firebase Analytics는 다양한 통계 및 리포트를 제공하여 앱의 성과를 이해하고 개선하기 위한 정보를 제공합니다.
### [브랜치 전략]
  - Git-flow 전략을 기반으로 master, develop 브랜치와 기능 브랜치(Feat)를 운용했습니다.
  - master, develop, 기능 브랜치(Feat)로 나누어 개발을 하였습니다.
  - master 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - develop 브랜치는 개발 중인 코드의 최신 버전을 포함하는 브랜치로 사용됩니다.
  - Feat 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

## 화면 구성
| **초기화면** | **회원가입** | **질문작성** |
| :------: |  :------: | :------: |
| <img width="375" alt="스크린샷 2023-09-13 오후 2 42 27" src="https://github.com/SonMinSeock/spark_v2/assets/44064257/dd9516bb-f78f-45fa-bf69-0646f9b2c209"> |![회원가입](https://github.com/SonMinSeock/spark_v2/assets/44064257/01b07230-2289-4d95-9440-710abe4b758a)|![질문등록](https://github.com/SonMinSeock/spark_v2/assets/44064257/783c16fc-278e-42b3-ab71-e0de1c29f923)|

| **홈** | **자신 프로필** | **상대방 프로필** | **신고 작성** |
| :------: | :------: | :------: | :------: |
|![홈](https://github.com/SonMinSeock/spark_v2/assets/44064257/4b41240a-712d-4aac-91fe-78be113baba3)|![자신프로필](https://github.com/SonMinSeock/spark_v2/assets/44064257/b2a5cc62-eff3-4fa1-82dc-8b70e5d72607)|![상대방프로필](https://github.com/SonMinSeock/spark_v2/assets/44064257/d6189b9d-0fe5-47fc-b405-8b537b5ad03b)|![신고](https://github.com/SonMinSeock/spark_v2/assets/44064257/137157c9-bd58-4f0a-92e9-fae6f29a1e81)|
