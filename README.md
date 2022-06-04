컴퓨터네트워크 1조 백앤드 레포

🔴admin

아이디, 비밀번호 : cm

🔴Push

❗ Base Rule ❗

자신의 이름별로 브랜치 만들기

브랜치에 각자 개발한 코드 push

✔ 개발 시작 전 자신의 브랜치로 이동했는지 꼭 확인(충돌방지)

✔ main으로 merge 할때마다 main으로 이동해서 pull받고 그걸 다시 자신의 브랜치로 push 받아오기 !
-> vscode (main)도 (자신의브랜치)도 모두 메인을 pull받기 위함

🔴Commit

❗ Base Format ❗

YYMMDD 유형(Type) :: 제목(subject)

(Blank Line) : Commit 시 따옴표를 닫지 않고 엔터치면 개행 처리 가능.

1.본문(body) : 설명

ex)

`git commit -m "220112 Fix :: Template 중 'userDao' 파일 내 sql 쿼리문 수정

sql 쿼리문 - 기존 작성 쿼리에서 트랜잭션 오류 발견 후 변경"`

Rules for Format 유형(Type) (종류 : 설명)
Feat : 새로운 기능 추가 (뷰 작업, HTML 작업)
Fix : 버그 수정
Build : 모델 수정
Style : 스타일 (코드 형식, 코드 정렬, 세미콜론 추가 등 비즈니스 로직에 변경이 없는 경우)
Refactor : 코드 리팩토링(완전히 코드 구조 수정 경우)
제목(Subject)
제목은 30자를 넘기지 않고, 마침표를 붙이지 않음.
제목에는 commit 타입을 포함하여 작성함(ex. Feat - 추가, Fix - 수정 등)
과거 시제 사용 X. 명령조로 작성(ex. 사용(O) 사용함(X) 사용했음(X))
제목과 본문은 한 줄 띄워 분리 제목의 첫 글자는 반드시 대문자
본문(Body) (선택) 선택사항.
최대한 적어주면 문제가 생겼을 때 commit 기록으로 확인하여 복구 가능.
무엇을, 왜에 초점을 두어 작성.
설명뿐 아니라, commit의 이유 작성 시에도 작성. 특정 사안에 대해 논의가 필요한 경우에도 작성.
