

// 본 스크립트는 대우직업전문학교 남대희가 제작하였으며,
// 누구나 수정 배포할 수 있습니다.
// 본 스크립트는 재미를 좀 보셨다면
// 저도 좀 재미를 줄 수 있게 아래 계좌로 후원금을 주시면 감사합니다.
// 국민은행: 490101-04-002363
// 개발일자 2019.11.11
// 개발자 : 남대희 (cesare713@hanmail.net)

// 1. 본문에서 .txtover라는 상자를 찾아서 각 상자마다 다음과 같이 이야기하겠다.
// 2. 그상자(.txtover)의 내용을 잘 저장해 두고, 그 상자를 비운다.
// 3. 그상자 안에 .compare라는 상자를 만든다.
// 4. 아까 갈무리해둔 내용을 " " 기준으로 다진다.
// 5. 다져진 단어수만큼 반복
    // 5-1. i번째 단어의 공백을 <span>으로 묶어서 그상자안에 있는 .compare에 추가한다.
    // 5-2. .compare의 높이를 재고 그 높이가 그상자(.txtover)의 높이보다 크다면
        // 5-2-1. 그상자 안에 있는 .compare안에 있는 span 중에 마지막을 지운다.
        // 5-2-2. 그상자 안에 있는 "..."을 추가한다.
        // 5-2-3. 반복문을 중지한다.

function textover(){
    $(".txtover").each(function(){
        var oldtxt;
        if(!this.hasAttribute("title")){
            oldtxt = $(this).text();
            $(this).attr("title",oldtxt);
        }else{
            oldtxt = $(this).attr("title");
        }

        $(this).html("<div class='compare'></div>");
        var oldword = oldtxt.split(" ");
        var originH = $(this).height();
        for(i=0; i<oldword.length; i++) {
            $(this).children(".compare").append("<span>" + oldword[i] + " </span>");
            var newH = $(this).children(".compare").height();
            if(originH < newH){
                $(this).children(".compare").children("span:last-of-type").remove();
                $(this).children(".compare").append("&hellip;");
                break;
            }
        }
    });
};

textover();

$(window).resize(function(){
    textover();
});