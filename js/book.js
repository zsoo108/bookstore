// 메인
const recommendations = [
    {
        query: "경의원",
        badge: ["대여", "전원증정"],
        title: "따뜻한 판타지 <br> <경의원> 6천원 대여 ",
        text: "추가 할인 쿠폰 + 리뷰 전원 포인트!"
    },
    {
        query: "오만과편견",
        badge: ["세트","대여"],
        title: "[50년 대여] <br> 제인 오스틴 전집",
        text: "전 7권 세트 30% 할인"
    },
    {
        query: "교토탐정 홈즈",
        badge: ["세트","30%"],
        title: "<교토탐정 홈즈> <br> 전권 특가 세트",
        text: "전 18권 세트 소장 30% 할인"
    },
    {
        query: "치즈 이야기",
        badge: ["할인","대여"],
        title: "여름 끝자락의 <br> 기묘하고 불길한 이야기",
        text: "문학동네 호러 기담 기획전"
    },
    {
        query: "위스퍼맨",
        badge: ["50%"],
        title: "넷플릭스 영화 <br> 원작<위스퍼맨>",
        text: "출간 기념 다산복스 최대 50%할인"
    },
    {
        query: "오디세이아",
        badge: ["대여","50%"],
        title: "'오디세이'개봉 기념 <br> 고전 특가 대여전",
        text: "추가 할인 쿠폰 + 리뷰 전원 포인트"
    },
    {
        query: "연중무휴던전",
        badge: ["NEW","50%"],
        title: "드래곤이 <br> 왜 사무직이지?",
        text: "<연중무휴 던전> 시리즈 신간! 최대 50%"
    },
    {
        query: "웹소설의 BIBLE",
        badge: ["할인","대여"],
        title: "장편 스토리 작법서 <br> <웹소설의 BIBLE>",
        text: "출간 기념 대여 할인 + 리뷰 할인 포인트"
    }
];
// 지금 많이 읽고있는 작품
const popularBooks = [
    {
        rank: 1,
        query: "마성의 아이",
        title: "마성의 아이",
        author: "오노 후유미 외 1명",
        rating: "5.0 (181)"
    },

    {    rank: 2,
        query: "주식의 시대",
        title: "주식의 시대",
        author: "EBS 다큐프라임 <주식의시대> 제작진",
        rating: "0"
    },

    {
        rank: 3,
        query: "해리 포터와 마법사의 돌",
        title: "개정 번역판 | 해리 포터와 마법사의 돌",
        author: "조앤.K.롤링 외 1명",
        rating: "4.7 (1,499)"
    },
    {
        rank: 4,
        query: "용의자 X의 헌신",
        title: "용의자 X의 헌신",
        author: "히가시노 게이고 외 1명",
        rating: "4.7 (993)"
    },
    {
        rank: 5,
        query: "주인공이 너무 많다",
        title: "주인공이 너무 많다",
        author: "최민호",
        rating: "4.9 (585)"
    },
    {
        rank: 6,
        query: "독하게 돈 공부",
        title: "독하게 돈 공부",
        author: "박소연",
        rating: "4.9 (15)"
    },
    {
        rank: 7,
        query: "세입자",
        title: "세입자",
        author: "프리다 맥파든 외 1명",
        rating: "4.4 (49)"
    },
    {
        rank: 8,
        query: "미스터리세계사 지식도감",
        title: "지도로 읽는다 미스터리세계사 지식도감",
        author: "안혜은",
        rating: "4.8 (4)"
    },
    {
        rank: 9,
        query: "프로젝트 헤일메리",
        title: "프로젝트 헤일메리",
        author: "앤디 위어 외 1명",
        rating: "4.9 (3,990)"
    },
    {
        rank: 10,
        query: "셜록 홈즈 전집 통합본",
        title: "셜록 홈즈 전집 통합본",
        author: "아서 코난 도일 외 1명",
        rating: "5.0 (3)"
    },
    {
        rank: 11,
        query: "더 골1",
        title: "더 골1",
        author: "엘리 골드렛 외 3명",
        rating: "0"
    },
    {
        rank: 12,
        query: "오디세이아",
        title: "오디세이아(영화<오디세이아>)",
        author: "호메로스 외 2명",
        rating: "4.3 (21)"
    },
    {
        rank: 13,
        query: "일상 질문 사전",
        title: "일상 질문 사전",
        author: "전성원",
        rating: "4.6 (5)"
    },
    {
        rank: 14,
        query: "세상이 그대를 속일지라도",
        title: "세상이 그대를 속일지라도",
        author: "김상욱",
        rating: "4.4 (29)"
    },
    {
        rank: 15,
        query: "빵충 사육 준수 사항",
        title: "빵충 사육 준수 사항",
        author: "김혜영",
        rating: "5.0 (1)"
    },
    {
        rank: 16,
        query: "고독 사용 설명서",
        title: "고독 사용 설명서",
        author: "로버트 J. 코플란 외 1명",
        rating: "4.8 (1,922)"
    },
    {
        rank: 17,
        query: "챗GPT·제미나이·클로드까지 모두를 위한 AI",
        title: "챗GPT·제미나이·클로드까지 모두를 위한 AI",
        author: "지현이",
        rating: "3.7 (3)"
    },
    {
        rank: 18,
        query: "은하영웅전설 10권",
        title: "은하영웅전설 15권 세트",
        author: "다나카 요시키 외 1명",
        rating: "4.7 (954)"
    }
];

// 오늘 리디의 발견
const section2Books = [
    {
        query: "그랬다고 적었다",
        text: "7년 만의 산문집 <br>+김애란 작가전"
    },
    {
        query: "은하영웅전설 10권",
        text: "50년 대여로 만나는 <br>우주의 삼국지"
    },
    {
        query: "찌니주의보",
        text: "낯설고도 눈부신 <br>이웃의 탄생"
    },
    {
        query: "경의원",
        text: "고통을 없애는 것과 <br>치료는 다르다"
    },
    {
        query: "새들의 사회성",
        text: "따뜻한 비관론자가 <br>삶을 보는 방식 "
    },
    {
        query: "돈,뜨겁게 사랑하고 차갑게 다루어라",
        text: "유럽의 워렌 버핏 <br>최후의 역작"
    },
    {
        query: "찰리 멍거 바이블",
        text: "[50년 대여] <br>버핏과 멍거의 지혜"
    }
];

// 이벤트
const events = [
    {
        query: "세입자"
    },
    {
        query: "잠들면 눈 뜬다"
    },
    {
        query: "산군"
    }
];
 
// 베스트
const bestBooks = [
    {
        rank: 1,
        query: "경의원",
        title: "경의원",
        author: "이도현",
        rating: "4.9 (302)"
    },

    {    rank: 2,
        query: "요미",
        title: "요미 키우기.swf",
        author: "이사구",
        rating: "4.9 (147)",
        image: "./img/main/요미키우기.jpg"
    },

    {
        rank: 3,
        query: "주인공이 너무 많다",
        title: "주인공이 너무 많다",
        author: "최민호",
        rating: "4.8 (147)"
    },
    {
        rank: 4,
        query: "사람 보는 눈",
        title: "사람 보는 눈",
        author: "이나경",
        rating: "4.8 (146)",
        image: "./img/main/사람보는눈.jpg"
    },
    {
        rank: 5,
        query: "테세우스",
        title: "테세우스의 나무",
        author: "김나은",
        rating: "4.8 (557)",
        image:"./img/main/테세우스의 나무.jpg"
    },
    {
        rank: 6,
        query: "뒤틀린 사랑",
        title: "뒤틀린 사랑",
        author: "아나 황 외 1명",
        rating: "3.7 (3)"
    },
    {
        rank: 7,
        query: "오디세이아",
        title: "오디세이아(영화 <오디세이아>)",
        author: "호메로스 외 2명",
        rating: "4.4 (18)"
    },
    {
        rank: 8,
        query: "독성 인간",
        title: "독성 인간",
        author: "리앤 텐 브링크 외 1명",
        rating: "0"
    },
    {
        rank: 9,
        query: "프로젝트 헤일메리",
        title: "프로젝트 헤일메리",
        author: "앤디 위어 외 1명",
        rating: "4.9 (3,990)"
    },
    {
        rank: 10,
        query: "빵충 사육 준수 사항",
        title: "빵충 사육 준수 사항",
        author: "김혜영",
        rating: "5.0 (3)"
    },
    {
        rank: 11,
        query: "어떻게 살아낼 것인가",
        title: "어떻게 살아낼 것인가",
        author: "짐 콜린스 외 2명",
        rating: "0"
    },
    {
        rank: 12,
        query: "찌니주의보",
        title: "찌니주의보",
        author: "정지아",
        rating: "4.5 (12)"
    },
    {
        rank: 13,
        query: "용의자 X의 헌신",
        title: "용의자 X의 헌신",
        author: "히가시노 게이고 외 1명",
        rating: "4.7 (993)"
    },
    {
        rank: 14,
        query: "싯다르타",
        title: "싯다르타",
        author: "헤르만 헤세 외 1명",
        rating: "4.6 (237)"
    },
    {
        rank: 15,
        query: "주와 연",
        title: "주와 연",
        author: "청예",
        rating: "4.2 (17)"
    },
    {
        rank: 16,
        query: "고독 사용 설명서",
        title: "고독 사용 설명서",
        author: "로버트 J. 코플란 외 1명",
        rating: "4.8 (1,922)"
    },
    {
        rank: 17,
        query: "챗GPT·제미나이·클로드까지 모두를 위한 AI",
        title: "챗GPT·제미나이·클로드까지 모두를 위한 AI",
        author: "지현이",
        rating: "3.7 (3)"
    },
    {
        rank: 18,
        query: "은하영웅전설 10권",
        title: "은하영웅전설 15권 세트",
        author: "다나카 요시키 외 1명",
        rating: "4.7 (954)"
    }
];

// 새로 나온 작품
const newworkBooks = [
    {
        query: "빵충 사육 준수 사항",
        title: "빵충 사육 준수 사항",
        author: "김혜영",
        rating: "5.0 (3)"
    },
    {
        query: "부처의 감정 수업",
        title: "부처의 감정 수업",
        author: "자현",
        rating: "5.0 (1)"
    },
    {
        query: "웃는 흉터",
        title: "웃는 흉터",
        author: "김보나",
        rating: "0"
    },
    {
        query: "어두운 집",
        title: "어두운 집",
        author: "전건우",
        rating: "0"
    },
    {
        query: "단편들, 한국 공포 문학의 셋째 밤",
        title: "단편들, 한국 공포 문학의 셋째 밤",
        author: "일월명, 클레이븐, 배예람, 김아직, 차삼동, 영선, 현이랑, 이상준, 창궁",
        rating: "0"
    },
    {
        query: "슬로 호시스",
        title: "슬로 호시스",
        author: "믹 헤런",
        rating: "0"
    },
    {
        query: "클로드 코드 제대로 시작하기",
        title: "클로드 코드 제대로 시작하기",
        author: "주홍철, 황진성",
        rating: "0"
    },
    {
        query: "초풍요의 시대",
        title: "초풍요의 시대",
        author: "피터 디아만디스, 스티븐 코틀러, 김태훈",
        rating: "0"
    },
    {
        query: "조용히 해내는 사람",
        title: "조용히 해내는 사람",
        author: "이재은",
        rating: "0"
    },
    {
        query: "에티의 여름",
        title: "에티의 여름",
        author: "루시 스타즈",
        rating: "0"
    },
    {
        query: "세상을 만들어라",
        title: "세상을 만들어라",
        author: "리하르트 다비트 프레히트, 박종대",
        rating: "0"
    },
    {
        query: "문해내공",
        title: "문해내공",
        author: "신종호, 김윤정",
        rating: "0"
    },
    {
        query: "코리아타운의 핫 칙 샤먼",
        title: "코리아타운의 핫 칙 샤먼",
        author: "전효원",
        rating: "0"
    },
    {
        query: "애거사 크리스티 미스터리",
        title: "애거사 크리스티 미스터리",
        author: "마리 베니딕트, 백지민",
        rating: "0"
    },
    {
        query: "언어화를 위한 소설 사고",
        title: "언어화를 위한 소설 사고",
        author: "오가와 사토시, 박대겸",
        rating: "0"
    },
    {
        query: "혹시 나한테 화났나?",
        title: "혹시 나한테 화났나?",
        author: "멕 조지프슨",
        rating: "0"
    },
];

// 오디세이
const odysseyBooks = [
    {
        query: "이윤기의 그리스 로마 신화1",
        title: "[50년 대여] 개정판|이윤기의 그리스 로마 신화",
        author: "김혜영",
        rating: "0"
    },
    {
        query: "오디세이아",
        title: "오디세이아(영화<오디세이아>원작)",
        author: "호메로스, 페테르 파울 루벤스, 박문재",
        rating: "4.1 (22)"
    },
    {
        query: "이윤기의 그리스 로마 신화5 ",
        title: "[50년 대여] 개정판|이윤기의 그리스로마 신화5",
        author: "이윤기",
        rating: "5.0 (4)"
    },
    {
        query: "페넬로피아드",
        title: "페넬로피아드",
        author: "마거릿 애트우드, 김진준",
        rating: "4.4 (5)"
    },
    {
        query: "키르케",
        title: "키르케",
        author: "매들린 밀러, 이은선",
        rating: "4.7 (136)"
    },
    {
        query: "만화로 보는 일리아스",
        title: "만화로 보는 일리아스",
        author: "동사원형, 강대진",
        rating: "4.9 (32)"
    },
    {
        query: "일리아스",
        title: "일리아스",
        author: "주홍철, 황진성",
        rating: "5.0 (5)"
    },
    {
        query: "김헌의 그리스 로마 신화",
        title: "김헌의 그리스 로마 신화",
        author: "김헌",
        rating: "4.3 (11)"
    },
];

// 히가시노 게이고
const keigoBooks = [
    {
        query: "용의자 X의 헌신",
        title: "용의자 X의 헌신",
        author: "히가시노 게이고, 양억관",
        rating: "4.7 (980)"
    },
    {
        query: "매스커레이드 라이프",
        title: "매스커레이드 라이프",
        author: "히가시노 게이고, 김은모",
        rating: "4.9 (10)"
    },
    {
        query: "백야행 1",
        title: "백야행 1",
        author: "히가시노 게이고, 김난주",
        rating: "4.7 (102)"
    },
    {
        query: "나미야 잡화점의 기적",
        title: "나미야 잡화점의 기적",
        author: "히가시노 게이고, 양윤옥",
        rating: "4.6 (4,527)"
    },
    {
        query: "가면 산장 살인 사건",
        title: "가면 산장 살인 사건",
        author: "히가시노 게이고, 김난주",
        rating: "4.2     (278)"
    },
    {
        query: "가공범",
        title: "가공범",
        author: "히가시노게이고, 김선영",
        rating: "4.5 (32)"
    },
    {
        query: "눈에 갇힌 외딴 산장에서",
        title: "눈에 갇힌 외딴 산장에서",
        author: "히가시노 게이고, 김난주",
        rating: "3.8 (122)"
    },
    {
        query: "당신이 누군가를 죽였다",
        title: "당신이 누군가를 죽였다",
        author: "히가시노 게이고, 최고은",
        rating: "4.2 (64)"
    },
];

// 우주라이크 소설
const novels = [
    {
        title: "요미 키우기.swf",
        author: "이사구",
        image: "./img/main/요미확대.jpg"
    },
    {
        title: "테세우스의 나무",
        author: "김나은",
        image: "./img/main/나무 확대.jpg"
    },
    {
        title: "사람 보는 눈",
        author: "이나경",
        image: "./img/main/눈확대.jpg"
    },
    {
        title: "주인공이 너무 많다",
        author: "최민호",
        image: "./img/main/주인공확대.jpg"
    },
    {
        title: "혼자 남아도 외로워하지 말 것",
        author: "경민선",
        image: "./img/main/외로워확대.jpg"
    }
];


// 지금, 리디에서만 볼 수 있는 도서
const onlyridiBooks = [
    {
        query: "요미",
        title: "요미 키우기.swf",
        author: "이사구",
        rating: "4.9 (168)",
        image: "./img/main/요미키우기.jpg",
        small: true
    },

    {
        query: "사람 보는 눈",
        title: "사람 보는 눈",
        author: "이나경",
        rating: "4.8 (146)",
        image: "./img/main/사람보는눈.jpg",
        small: true
    },

    {
        query: "주인공",
        title: "주인공이 너무 많다",
        author: "최민호",
        image: "./img/main/주인공이너무많다.jpg",
        rating: "4.8 (147)",
        small: true
    },
    {
        query: "테세우스",
        title: "테세우스의 나무",
        author: "김나은",
        rating: "4.7 (138)",
        image:"./img/main/테세우스의 나무.jpg",
        small: true
    },
    {
        query: "알리바이의 해부학",
        title: "알리바이의 해부학",
        author: "애슐리 엘스턴, 엄일녀",
        rating: "5.0 (2)"
    },
    {
        query: "미스터리 세계사 지식도감",
        title: "지도로 읽는다 미스터리 세계사 지식도감",
        author: "안혜은",
        rating: "5.0 (2)"
    },
    {
        query: "바이바이 스트레인지니스",
        title: "바이바이 스트레인지니스",
        author: "이산화",
        rating: "4.9 (451)",
        image: "./img/main/바이바이.jpg",
        small: true
    },
    {
        query: "혼자 남아도 외로워하지 말 것",
        title: "혼자 남아도 외로워하지 말 것",
        author: "경민선",
        rating: "4.9 (509)",
        image: "./img/main/혼자남아도.jpg",
        small: true
    },
    {
        query: "밸런스 게임",
        title: "밸런스 게임",
        author: "박하루",
        rating: "4.8 (457)",
        image: "./img/main/밸런스게임.jpg",
        small: true
    },
    {
        query: "가진 집",
        title: "가진 집",
        author: "이랑",
        rating: "4.7 (325)",
        image: "./img/main/가진집.jpg",
        small: true
    },
    {
        query: "꿈 교환의 법칙",
        title: "꿈 교환의 법칙",
        author: "이수현",
        rating: "4.9 (518)",
        image: "./img/main/꿈교환.jpg",
        small: true
    },
    {
        query: "타지 마,죽지 마,나의 마녀야",
        title: "타지 마,죽지 마,나의 마녀야",
        author: "김달리",
        rating: "4.8 (413)",
        image: "./img/main/마녀야.jpg",
        small: true
    },
    {
        query: "나의 오늘도 죽음의 매듭을 맺는다",
        title: "나의 오늘도 죽음의 매듭을 맺는다",
        author: "허지은",
        rating: "4.5 (79)",
        image: "./img/main/죽음의매듭",
        small: true
    },
    {
        query: "다정한 악당들",
        title: "다정한 악당들",
        author: "이나경",
        rating: "4.9 (170)",
        image: "./img/main/다정한악당들",
        small: true
    },
    {
        query: "우리가 더는 만나지 않을 때",
        title: "우리가 더는 만나지 않을 때",
        author: "김준녕",
        rating: "4.8 (202)",
        image: "./img/main/우리가더는만나지않을때",
        small: true
    },
];


// ------책 설정------ //

//  slider 책정보
 async function fetchBooks(query) {
            const params = new URLSearchParams({
                target: "title",
                query,
                size: 8
            });
            const url = `https://dapi.kakao.com/v3/search/book?${params}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: "KakaoAK 345cc71e36fa509ad15e8ca69df80bc5"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP 오류: ${response.status}`);
            }

            return response.json();
        }


        async function bookData() {
            try {
                const boxes = document.querySelectorAll(
                    "#slider .slide_content"
                );

                for (let i = 0; i < recommendations.length; i++) {

                     const item = recommendations[i];

                    const data = await fetchBooks(item.query);

                    const doc = data.documents[0];

                    if (!doc) continue;

                    boxes[i].innerHTML = `
                    <div class = "slide_badge">
                        ${item.badge.map(badge => `<span>${badge}</span>`).join("")}
                        </div>
            
                        <img src="${doc.thumbnail}" alt="${doc.title}">
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                    `;
                }

        } catch (error) {
            console.error('에러 발생:', error);
        }
    }

    bookData();

    // section1 책정보
    async function popularBookData() {

        try {

        const boxes = document.querySelectorAll(
            "#section1 .first_box"
        );

        for (let i = 0; i < popularBooks.length; i++) {

            const item = popularBooks[i];

            const data = await fetchBooks(item.query);

            const book = data.documents[0];

            if (!book) continue;

            // 0~8 → 첫 번째 페이지
            // 9~17 → 두 번째 페이지
            const page = Math.floor(i / 9);

            boxes[page].innerHTML += `
                <div class="popular_book">

                    <img src="${book.thumbnail}" alt="${item.title}">

                    <div class="book_rank">
                        ${item.rank}
                    </div>

                    <div class="book_info">

                        <h3>${item.title}</h3>

                        <p>${item.author}</p>

                        <span>
                            ${
                                item.rating === "0"
                                ? `<em>★0</em>`
                                : `
                                    <b class="star">★</b>
                                    <b class="rating">${item.rating.split(" ")[0]}</b>
                                    <em>${item.rating.substring(item.rating.indexOf(" "))}</em>
                                `
                            }
                        </span>

                    </div>

                </div>
            `;
        }

    } catch (error) {

        console.error("에러 발생:", error);

    }
}

popularBookData();

        // section2 책정보
        async function section2BookData() {

            try {

            const boxes = document.querySelectorAll(
                "#section2 .swiper-slide"
                );

            for (let i = 0; i < section2Books.length; i++) {

                const item = section2Books[i];

                const data = await fetchBooks(item.query);

                const book = data.documents[0];

                if (!book) continue;

                boxes[i].innerHTML = `
                    <img src="${book.thumbnail}" alt="${book.title}">

                    <div class="section2_info">
                    <p>${item.text}</p>
                    </div>
                `;
            }

        } catch (error) {

            console.error("section2 에러:", error);

        }
    }

    section2BookData();

    // 이벤트 도서
    async function eventBookData() {

    try {

        const boxes = document.querySelectorAll("#event .event_box");

        for (let i = 0; i < events.length; i++) {

            const item = events[i];

            const data = await fetchBooks(item.query);

            const book = data.documents[0];

            if (!book) continue;

            boxes[i].insertAdjacentHTML("beforeend", `
                <img src="${book.thumbnail}" alt="${book.title}">
            `);
        }

    } catch (error) {

        console.error("이벤트 에러:", error);

    }
}

eventBookData();

    // 베스트셀러
    async function bestBookData() {

        try {

        const boxes = document.querySelectorAll(
            "#bestseller .two_box"
        );

        for (let i = 0; i < bestBooks.length; i++) {

            const item = bestBooks[i];

            const data = await fetchBooks(item.query);

            const book = data.documents[0];

            if (!book) continue;

            const page = Math.floor(i / 9);

            boxes[page].innerHTML += `
                <div class="best_book">

                    <img src="${item.image || book.thumbnail}" alt="${item.title}">

                    <div class="book_rank">
                        ${item.rank}
                    </div>

                    <div class="book_info">

                        <h3>${item.title}</h3>

                        <p>${item.author}</p>

                        <span>
                            ${
                                item.rating === "0"
                                ? `<em>★0</em>`
                                : `
                                    <b class="star">★</b>
                                    <b class="rating">${item.rating.split(" ")[0]}</b>
                                    <em>${item.rating.substring(item.rating.indexOf(" "))}</em>
                                `
                            }
                        </span>

                    </div>

                </div>
            `;
        }

    } catch (error) {

        console.error("에러 발생:", error);

    }
}

bestBookData();

    // 새로 나온 작품
    async function newworkBookData() {

        try {

            const boxes = document.querySelectorAll(
            "#newwork .swiper-slide"
            );

            for (let i = 0; i < newworkBooks.length; i++) {

                const item = newworkBooks[i];

                const data = await fetchBooks(item.query);

                const book = data.documents[0];

                if (!book) continue;

                boxes[i].innerHTML = `
                    <img src="${book.thumbnail}" alt="${item.title}">

                    <div class="book_info">

                        <h3>${item.title}</h3>

                        <p>${item.author}</p>

                        <span>
                            ${
                                item.rating === "0"
                                ? `<em>★0</em>`
                                : `
                                    <b class="star">★</b>
                                    <b class="rating">${item.rating.split(" ")[0]}</b>
                                    <em>${item.rating.substring(item.rating.indexOf(" "))}</em>
                                `
                            }
                        </span>

                    </div>
                `;
            }

        } catch (error) {

            console.error("newwork 에러:", error);

        }
    }

    newworkBookData();

    // 오디세이랑 함께 보면 좋아요!
    async function odysseyBookData() {

        try {

            const boxes = document.querySelectorAll(
                "#odyssey .swiper-slide"
            );

            for (let i = 0; i < odysseyBooks.length; i++) {

                const item = odysseyBooks[i];

                const data = await fetchBooks(item.query);

                const book = data.documents[0];

                if (!book) continue;

                boxes[i].innerHTML = `
                    <img src="${book.thumbnail}" alt="${item.title}">

                    <div class="book_info">

                        <h3>${item.title}</h3>

                        <p>${item.author}</p>

                        <span>
                            ${
                                item.rating === "0"
                                ? `<em>★0</em>`
                                : `
                                    <b class="star">★</b>
                                    <b class="rating">${item.rating.split(" ")[0]}</b>
                                    <em>${item.rating.substring(item.rating.indexOf(" "))}</em>
                                `
                            }
                        </span>

                    </div>
                `;
            }

        } catch (error) {

            console.error("newwork 에러:", error);

        }
    }

    odysseyBookData();


    // 히가시노 게이고 대표작
    async function keigoBookData() {

        try {

            const boxes = document.querySelectorAll(
                "#keigo .swiper-slide"
            );

            for (let i = 0; i < keigoBooks.length; i++) {

                const item = keigoBooks[i];

                const data = await fetchBooks(item.query);

                const book = data.documents[0];

                if (!book) continue;

                boxes[i].innerHTML = `
                    <img src="${book.thumbnail}" alt="${item.title}">

                    <div class="book_info">

                        <h3>${item.title}</h3>

                        <p>${item.author}</p>

                        <span>
                            <b class="star">★</b>
                            <b class="rating">
                                ${item.rating.split(" ")[0]}
                            </b>
                            <em>
                                ${item.rating.substring(item.rating.indexOf(" "))}
                            </em>
                        </span>

                    </div>
                `;
            }

        } catch (error) {

            console.error("newwork 에러:", error);

        }
    }

    keigoBookData();

    // 우주라이크소설
    function novelBookData() {

    try {

        const boxes = document.querySelectorAll("#novel .novel_box");

        for (let i = 0; i < novels.length; i++) {

            const item = novels[i];

            if (!boxes[i]) continue;

            boxes[i].insertAdjacentHTML("afterbegin", `
                <img src="${item.image}" alt="${item.title}">
            `);
        }

    } catch (error) {

        console.error("소설 에러:", error);

    }
}

novelBookData();

    // 지금, 리디에서만 볼 수 있는 도서
    async function onlyridiBookData() {
    try {
        const boxes = document.querySelectorAll(
            "#onlyridi .swiper-slide"
        );

        for (let i = 0; i < onlyridiBooks.length; i++) {

            const item = onlyridiBooks[i];

            const data = await fetchBooks(item.query);
            const book = data.documents[0];

            if (!boxes[i]) continue;

            const image = item.image || (book && book.thumbnail);

            if (!image) continue;

            boxes[i].innerHTML = `
                <div class="onlyridi_book ${item.small ? "small_book" : ""}">

                    <img 
                        src="${image}" 
                        alt="${item.title}"
                    >
                    <div class="book_info">

                        <h3>${item.title}</h3>
                        <p>${item.author}</p>

                        <span>
                            ${
                                item.rating === "0"
                                ? `<em>★0</em>`
                                : `
                                    <b class="star">★</b>
                                    <b class="rating">
                                        ${item.rating.split(" ")[0]}
                                    </b>
                                    <em>
                                        ${item.rating.substring(
                                            item.rating.indexOf(" ")
                                        )}
                                    </em>
                                `
                            }
                        </span>

                    </div>

                </div>
            `;
        }

    } catch (error) {
        console.error("에러 발생:", error);
    }
}

onlyridiBookData();

    document.addEventListener("DOMContentLoaded", async function () {
                try {
                    const response = await fetch("./sub_txt/txt1.txt");
                    if (!response.ok) {
                    throw new Error("Network response was not ok");
                    }
                    const data = await response.text();
                    document.getElementById("tmpBox").innerHTML = data;
                } catch (error) {
                    console.error("There was a problem with the fetch operation:", error);
                }
            });

// ----------------------- 서브 페이지 --------------------------- //

    // 서브 메인 책
    async function submainBookData() {

        const data = await fetchBooks("용의자 X의 헌신");
        const book = data.documents[0];

        if (!book) return;

        document.querySelector(".submain_left").innerHTML = `
        <div class="book_cover">
            <img src="${book.thumbnail}" alt="${book.title}">
            <button class="preview_btn">미리보기</button>
        </div>

        <div class="book_info">
            <p>소설 > 일본 소설</p>
            <h2>${book.title}</h2>
            <p>★4.7 (955) | 관심 500</p>
            <p>${book.authors.join(", ")} 작가 ${book.translators.join(", ")} 출판</p>
            <p>${book.publisher} 출판</p>
            <button>+ 관심</button>

            <div class="book_buttons">
                <button>하트</button>
                <button>장바구니</button>
                <button>선물</button>
                <button>소장</button>
                
            </div>
        </div>
        `;
    }
    submainBookData();