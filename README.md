# KSTAR.TV Dev.Reference
=============
> ## 구동 환경
* JDK 1.8
* Spring boot 1.5.9(Spring 4.3.4)
* Spring-data-jpa
* Tomcat 8.0 이상 (개발시 Embeded Tomcat으로 구동되며 운영서버 구동시 외부 Tomcat으로 구동)
* IDE 종류는 상관 없으나 IntelliJ 추천(사용시 라이센스 요청 하세요~).


> ## 프로젝트 간단 요약
* 들여쓰기 : java: space 4칸, HTML,CSS: space 2칸 (tap 사용x)
* 파일형식: 이미지: 언더바(_), jsp: 하이픈(-)구분
* src/main/java/artec/base : 환경설정, 공통모듈등을 작성 합니다.
* src/main/java/artec/starapp : Controller, Service, Repository, Model 을 작성합니다.
* src/main/resources/application.yml :각종 설정 properties
* local, dev, real 환경으로 분리, 로컬 개발 실행시 jvm 옵션에 -Dspring.profiles.active=local 추가


> ## Spring-data-jpa
* Data Access Layer가 기본적으로  Hibernate 기반 Spring-data-jpa로 구성되어 있습니다.
* 모든 데이터 구조는 model에서 작성후 Hibernate의 auto ddl 기능을 이용해 테이블을 생성합니다.
* JpaRepository를 상속받는 인터페이스 선언만으로 기본 CRUD와 paging처리 가능한 Method 사용 가능.
* 추가필요한 부분은 @QUERY 어노테이션과 QUERYDSL을 이용해 Predicate 사용.
* spring-data-jpa reference 
 - [Spring-data-jpa 공식 문서](https://docs.spring.io/spring-data/jpa/docs/current/reference/html)
 - [번역 문서 (옛날버젼)](http://arahansa.github.io/docs_spring/jpa.html) 
 - [참고 블로그](http://wonwoo.ml/index.php/post/1004)

> ## Controller URL Mapping
* URI 구조는 최대한 REST한 방식으로 작성합니다.
<pre><code>
//bad
https://www.kstar.tv/board?fn=list&page=1

//good
https://www.kstar.tv/board/list/1        
</code></pre>

* RequestMapping시 GET, POST등 목적에 맞는 method만 맵핑 합니다.
<pre><code>
//bad (모든 METHOD 허용)
@RequestMapping("list")

//good (spring 4.1부터 지원하는 어노테이션 활용)
@GetMapping("/board/list/{page}")  //ex)게시판 페이지1번 불러오기
@PostMaping("/board/insert")       //ex)게시판 글 쓰기
</code></pre>

> ## Service Layer
* 특정 클래스명이나 인터페이스 구현체가 아니더라도 @Transactional 어노테이션 만으로 트랜젝션 설정 가능


> ## 기타 프로젝트 구성
* Session Clustering을 위해 redis session을 사용.
* 모든 인프라 구성은 AWS에서 운용.
* 기타 파일 업로드 등은 S3을 이용해야 합니다

# KSTAR CSS Style Guide
=============

> ### 형식
-------------
* 들여쓰기(indent)는 기본 space 2칸을 기준으로 사용하세요. (예외: JavaScript의 경우 - 4칸)
* ID 선택자는 사용을 지양합니다.
* Class Naming은 BEM(Block-Element-Modifier) 방식을 바탕으로 하되, OOCSS(Object Oriented CSS)을 혼용해서 사용이 가능하며,
하이픈(-) 이나 언더바(_) 사용을 지향합니다. (Camel case 지양)
***
* 규칙 선언부의 여는 괄호 { 이전에 띄어쓰기를 넣어주세요.
* 속성 부분에서, : 문자 뒤에 띄어쓰기를 넣어주세요. 단, : 문자 앞에는 띄어쓰기를 넣지 말아주세요.
* 규칙 선언부의 닫는 괄호 }를 새로운 줄에 넣어주세요.
  <pre><code>.show__caution {
    float: left;
    margin-top: 1em;
  }
  </code></pre>
* 주석은 새로운 줄에 적어주세요. 선택자 또는 속성과 같은 줄에 주석을 작성하는 방식을 피해주세요.
***
* 자바스크립트를 바인드 해야할때는 CSS와 겹치지 않는 별도의 클래스를 만들어 사용해주세요.
  <pre><code>js-(접두어)</code></pre>


***  
* semantic-ui를 기본바탕으로 하되 디자인적인 부분은 커스터마이징하여 사용하세요. (Input, checkbox, dropdown 등)


************ 
> ### 구조
-------------
* CSS 디렉토리 구조는 아래와 같습니다.
  <pre><code>Base (폰트, 초기화) 
  components (버튼, 모달 등 위젯, 모듈 스타일시트 ) 
  language (각 언어별 차이점 scss)
  layout (사이트의 주요 부분(header, footer, sidebar…), 그리드 시스템 혹은 모든 폼의 스타일을 위한 스타일시트) 
  pages (각 페이지) 
  utils (변수, 믹스인 등 프로젝트에서 사용되는 모든 Sass 도구와 헬퍼)
  vender (Semantic-ui 등 외부 라이브러리와 프레임워크)
  vendors-extensions (vender css 를 수정해야할 경우)
  </code></pre>
* CSS는 Sass를 이용해 작성해야하며, import를 이용해 하나의 파일만 링크 시킵니다. import될 파일의 경우 언더바(_)를 파일명 앞에 표기하세요.
  <pre><code>_header.scss , _common.scss</code></pre>
     
* @import에 필요한 기본 형식은 아래와 같습니다.
   <pre><code> utils
   vender
   vendors-extensions
   Base
   components 
   layout  
  </code></pre>
    * 기본 형식에서, 페이지나 따로 작업하시는 scss는 그 하단에  @import 로 첨부하시면 됩니다.
    * 파일은 하이픈(-)으로 구분됩니다.
"# strapay" 
