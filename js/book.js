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
        query: "은하영웅전설 1",
        title: "은하영웅전설 1",
        author: "다나카 요시키 외 1명",
        rating: "4.7 (954)"
    }
];

const section2Books = [
    {
        query: "그랬다고 적었다",
        text: "7년 만의 산문집 <br>+김애란 작가전"
    },
    {
        query: "은하영웅전설 1",
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