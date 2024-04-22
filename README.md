# 관심사 기반 대학 친구 찾기 서비스
<img width="710" alt="스크린샷 2023-09-12 오후 7 38 35" src="https://github.com/SonMinSeock/spark_v2/assets/44064257/9ca94662-7713-4285-9680-4e4f3eddb1d5">

- 배포 URL : [스파크 - 관심사 기반 대학 친구 찾기 서비스](https://spark-v2-d78f1.web.app)
- 스파크 인스타그램 : [스파크](https://www.instagram.com/spark_univ?igsh=NWwxeXNmdXBkbGxt)
  
## 목차
  - [프로젝트 소개](#프로젝트-소개)
  - [프로젝트 기간](#프로젝트-기간)
  - [팀원 구성](#팀원-구성)
  - [개발 환경](#개발-환경)
  - [채택한 개발 기술](#채택한-개발-기술)
  - [화면 구성](#화면-구성)
  - [주요 기능](#주요-기능)
  - [배운점](#배운점)

## 프로젝트 소개
- 우리 프로젝트는 새로운 친구를 찾고자 하는 대학생들을 위한 특별한 공간입니다.
- MBTI를 기반으로 매일 친구를 추천해드리며, 간단한 질문에 답하기만 하면 마음맞는 친구를 찾을 수 있습니다.
- 지금 당장 스파크에 참여하여 새로운 친구를 만나보세요!

## 프로젝트 기간
- 1차 개발 : 2023.07.10 ~ 2023.08.13

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
  - Firebase 호스팅은 빠르고 간편한 배포 프로세스를 제공합니다. 로컬 환경에서 개발한 내용을 신속하게 웹에 배포할 수 있는 특징이 있어 사용 했습니다.
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

## 주요 기능
### [카카오 로그인]

| **카카오로그인** |
| :------: |
|<img width="380" alt="카카오로그인" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/b1dea47d-3f69-4a82-9c25-abbfe1a0e6e9">|
| 사용자가 많이 사용하는 계정은 카카오 계정이므로 카카오 로그인 API 쳬택 했습니다|
| 카오 로그인 API를 활용하여 간편하고 안전한 사용자 인증 및 로그인 기능을 구현했습니다.|

### [회원가입]

| **회원가입** |
| :------: |
|<img width="378" alt="비회원가입" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/597e1a5b-9423-418e-bbf8-d3a78af0e019">|
| 카카오 로그인을 통한 간편한 로그인 기능과 함께, 비회원이 회원가입 폼을 작성하여 가입하는 기능을 제공합니다.|

### [질문작성]

| **첫 번째 질문** | **두 번째 질문** | **세 번째 질문** | **네 번째 질문** | **다섯 번째 질문** |
| :------: | :------: |:------: |:------: |:------: |
|<img width="379" alt="질문1" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/d30a1b4c-4443-453d-ab3f-0d218e0e10cb">|<img width="378" alt="질문2" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/ed6d11f5-8304-47b9-9ccf-57a9b03396b5">|<img width="386" alt="질문3" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/e23d6ac5-b991-47e2-bdfa-491a6579dd48">|<img width="381" alt="질문4" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/327d3028-1013-4160-807c-4b6c65495d09">|<img width="379" alt="질문5" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/a3ab274f-762c-4aa6-9e41-b003e62fc9b0">|

- 회원정보 등록후 질문을 작성하여 관심을 공유하고 친구를 선택하는 기능을 제공합니다.
- 사용자는 프로필에 나타나는 5가지 질문을 작성할 수 있습니다. 이 질문은 다른 사용자가 프로필을 방문했을 때 보여지며, 관심을 끌어 회원간의 상호작용을 촉진합니다.
  
### [오픈채팅방]

| **오픈채팅방** | **오픈채팅방 유도모달**|
| :------: | :------:|
|<img width="377" alt="오픈채팅방링크등록" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/a0c21914-8254-42a8-a598-b8e459769473">|<img width="372" alt="오픈채팅방등록안할경우모달" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/2436c2d6-8003-4115-8e8a-e15739d2a327">|
| 사용자는 카카오 오픈채팅방 만들어서 링크 추가해야 합니다.
| 다른 사용자가 프로필을 방문했을 때 메시지 보내기 버튼 클릭하면 상대방의 오픈채팅방 참여 할 수 있습니다.| 오픈채팅방 작성하도록 유도하는 모달을 보여줍니다.|

### [친구 추천]

| **친구추천** |
| :------: |
|<img width="378" alt="추천인" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/bd11e559-c33a-43d6-a18d-bad6668d8eda">|
| 최근에 들었거나, 질문에 가장 비슷한 3명 추천해줍니다.|

### [친구 리스트]

| **친구추천** |
| :------: |
|<img width="362" alt="친구리스트" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/aca5fc92-b65f-4f88-9861-2c31ed5d03aa">|
| 스파크 가입 한 친구들을 보여붑니다.|
|최근 가입한 친구들을 우선적으로 나열해서 보여줍니다.|

### [포인트 지급]

| **친구추천** |
| :------: |
|<img width="374" alt="포인터제도" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/4a5020a6-cc36-4778-95bf-abfb99c3b628">|
| 24시간 기준으로 하루 지나면 3포인트 지급 해줍니다.|
| 초기에는 3포인트 지급하여 3명 친구 오픈채팅 할 수 있도록 정했습니다.|

### [프로필]

| **자신 프로필** | **상대방 프로필**| **메시지 보내기 모달**|
| :------: | :------:| :------:|
|<img width="378" alt="자신프로필" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/8c730aad-2328-4c37-b9c9-16d3a19d3b7f">|<img width="374" alt="상대방프로필" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/c8e31cd9-9391-4d6e-84c0-1da7139e36a6">|<img width="351" alt="채팅방등록모달" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/229c9d7d-df82-41d2-9416-c57dfd6d30ca">|
| 자기자신 프로필 일 경우, 회원가입 때 작성한 질문 리스트들을 보여줍나다.|상대방 프로필 일 경우, 상대방이 작성한 질문 리스트들을 보여줍니다.|메시지 보내기 버튼 클릭하면 1포인트 사용하여 상대방 오픈채팅방 참여 가능합니다.|
| 내 오픈채팅방 링크 버튼 클릭하면 내가 만든 오픈채팅방으로 이동해줍니다.|상대방 프로필 일 경우, 맨 상단 우측에서 신고 아이콘을 보여줍니다.|

### [신고]

| **신고작성**|
| :------: |
|<img width="376" alt="신고작성" src="https://github.com/SonMinSeock/ikw-market/assets/44064257/011410a6-e29f-40c7-93e0-3fcded6389bb">|
| 상대방 프로필에서 신고 아이콘 클릭하여 신고 사유 작성할수 있도록 신고 입력폼을 제공합니다.|
| 상대방 신고 접수하여 신고를 당한 사용자는 해당 서비스를 사용못하도록 제한합니다.|

## 배운점
1. 실제 사용자 확보.
- 프로젝트를 배포한 후 인스타그램을 활용하여 실제 30명사용자를 확보하는데 성공했습니다. 이를 통해 소셜 미디어를 활용한 홍보 전략의 중요성을 깨달았습니다.
2. 홍보 중요성.
- 인스타그램을 통한 홍보를 통해 사용자가 유입되었지만, 이를 유지하고 향후 성장하기 위해서는 지속적인 마케팅 활동과 커뮤니티 참여가 필요함을 알게 되었습니다.
3. 협업과 피드백 과정.
- 디자이너와의 원활한 협업을 위해, 서로 현재 작업 상황을 공유하고 디자인 피드백 및 프론트 디자인 피드백을 주고 받았습니다
- 매주 3일 간격으로 미팅을 설정하여 서로 보완하고 발전할 수 있도록 노력했습니다.
2. 분석 및 성과.
- 기획자가 페이지 방문과 친구 리스트 등 각종 데이터에 대한 분석을 위해 GA를 적용하는 것을 제안했습니다.
- Firebase Analytics를 통해 데이터를 수집하고 분석하여 향후 전략 수립에 활용하는 방법을 배웠습니다.
3. React 개발자로 성장.
- 리액트 SPA 제작과 스타일 컴포넌트를 활용한 웹 제작을 통해 실전 프로젝트 경험을 쌓음으로써 자신감을 키웠습니다.
- 리액트를 독학하며 웹 개발에 대한 지식을 쌓고, 실무에서 필요한 도구와 기술을 익히며 성장할 수 있는 웹 개발자로 거듭나는 데 중요한 계기가 되었습니다.

