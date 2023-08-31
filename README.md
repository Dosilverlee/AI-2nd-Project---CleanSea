# 해수욕장 추천 웹 서비스 프로젝트

이 프로젝트는 대장균과 장구균 데이터 분석을 기반으로 해수욕장을 추천해주는 웹 서비스를 개발하는 프로젝트입니다.

## 프로젝트 소개

해수욕장은 사람들에게 즐거움과 휴식을 제공하는 중요한 장소입니다. 그러나 대장균과 장구균과 같은 미생물의 존재로 인해 물의 안전성이 영향을 받을 수 있습니다. 이 프로젝트는 과학적인 데이터 분석을 통해 물의 질을 평가하고, 안전하고 쾌적한 해수욕장을 사용자에게 추천하는 것을 목표로 합니다.

## 기능

- 메인 페이지 : 이 프로젝트의 목적과 의미를 간결하게 소개하는 부분입니다.
 사용자들이 이 프로그램을 통해 해수욕장 선택에 대한 더 나은 결정을 내릴 수 있는 이점을 설명하고 각 페이지로 이동할 수 있는 내비게이션 기능이 있습니다.
 또한 대장균과 장구균 데이터의 평균 점수를 시각화한 지도도 함께 포함이 되어 있습니다. 
 사용자에게 지역별 물의 질을 시각적으로 보여주며, 사용자가 지역별 안전한 해수욕장을 선택할 수 있도록 도와줍니다.

- 그래프 페이지 : 년도별 대장균 및 장구균 수치를 그래프로 시각화하여 환경 변화의 추이를 파악할 수 있습니다. 
이를 통해 환경 변화에 대한 이해를 높이고, 우리의 선택이 어떻게 환경에 영향을 미치는지 알아 볼 수 있습니다.

- search 페이지 : 각 지역을 선택하여 해당 지역 해수욕장의 장구균과 대장균의 수치를 통해 수질을 분석하고, 지역별로 해수욕장을 순위화하여 깨끗한 환경을 찾아 해수욕장으로 떠날 수 있습니다.

- 네트워크 페이지 : 해수욕장에서의 경험을 사진과 이야기로 나눌 수 있는 공간을 제공합니다. 
다른 사용자와 소통하며 환경 보호에 대한 의식을 공유하고, 작은 실천으로 큰 변화를 이끌어내는 커뮤니티를 형성합니다.

- 마이 페이지 : 개인 프로필을 수정하거나 해수욕장을 방문한 기록을 쓸 수 있는 방명록이 있습니다.

## 사용 방법
1. 프로젝트를 클론합니다.
2. 프로젝트 디렉토리로 이동합니다.
    - cd your-project
3. 필요한 라이브러리와 종속성을 설치합니다.

### 프론트 엔드로 이동합니다.
- cd front
- npm install --global yarn
- yarn start

### 백 엔드로 이동합니다.
#### Mongodb 서버 구축
Atlas 서버
1. [MongoDB Atlas](https://www.mongodb.com/atlas)에 가입하여 무료 클러스터(512MB)를 생성합니다.
2. 왼쪽 아래의 "SECURITY" 메뉴에서 "Database Access"로 이동하여 새 사용자를 추가합니다. 사용자 이름과 비밀번호를 설정합니다.
3. 왼쪽 아래의 "SECURITY" 메뉴에서 "Network Access"로 이동하여 IP 주소를 추가합니다. "current IP"로 등록하면 현재 사용 중인 IP 주소가 자동으로 등록됩니다.
4. 왼쪽 위의 "DEPLOYMENT" 메뉴에서 "Databases"로 이동하여 "Connect"를 클릭합니다. "Connect your application" 옵션을 선택하고 서버 링크를 복사합니다.

#### MongoDB 서버 URL 환경변수 등록

1. 프로젝트 디렉토리로 이동합니다: `cd back`
2. 전역으로 Yarn을 설치합니다: `npm install --global yarn`
3. 백엔드를 실행합니다: `yarn start`

- cd back
- npm install --global yarn
- yarn start

## 기술 스택
### 프론트 엔드
- HTML
- CSS
- JS
- REACT

### 백 엔드
- MongoDB
- nodejs + express
- multer
- typescript

### 데이터분석
- python

## 관련 자료 및 참고 문헌
- [해양환경정보시스템](https://www.meis.go.kr/mei/observe/beach.do): 해당 링크는 해양수질 관련 정보를 제공하는 공식 웹사이트로, 프로젝트에서 사용한 데이터의 원본 출처입니다. 프로젝트 개발에 도움을 받은 정보와 데이터를 얻을 수 있습니다.

## API
![5](/uploads/137f54eedabc168cc7679efc91bf2e8b/5.png)

![4](/uploads/807b35e16fbe03efed344dfb9216a420/4.png)