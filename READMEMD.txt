## Node Practices

1. 패키지
    -   완전한 애플리케이션(nodeamon, babel, webpack)
    -   프로젝트에서 사용하는 모듈(라이브러리)

2. 의존성(Dependency)
    -   개발하는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 패키지
    
    -   일반 의존성
        개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함
        $[project-ex01] npm i...
 
     -   개발 의존성
        개발에 필요하거나 도움이 되는 패키지(dev tool)배포에 포함되지 않는다.
         $[project-ex01] npm i -D...

3. 패키지 설치 
    1) 전역(global) 설치(node가 깔려있는 곳에 설치): 여러 프로젝트에서 공통으로 사용하는 도구 설치
    2) 지역( project local) 설치: 특정 프로젝트에 종속적인 도구나 라이브러리
    3) 패키지 설치
        $[project-ex01] npm i ejs (local, general, dependency)
        $[project-ex01] npm i -D nodemon (local, dev. dependency) -> -D를 안붙이면 서버에도 설치됨, 개발 의존성: -D
        $[project-ex01] npm i -g gulp(global)
        $[project-ex01] npx gulp --version(설치 확인)

    4) 패키지 삭제
        $[project-ex01] npm un ejs (local install 삭제)
        $[project-ex01] npm un -g gulp (global install 삭제)
        $[project-ex01] npx gulp --version(삭제 확인)

4. Node(JavaScript) Project(BE/FE Application, Package) 생성
    1) 프로젝트 생성(mkdir)
    2) 프로젝트 이동
    3) 프로젝트 초기화: 프로젝트 매니페스트 파일(package.json) 생성
     $[project-ex02] npm init -y


5. Module(프로그래밍언어에서 매우 중요)+
    1) 코어 모듈(fs, os, ... node에서 제공해 주는 모듈)
    2) 파일 모듈: 파일 경로로 불러 와서 모듈안의 함수, 객체를 사용한다.
    3) npm 모듈: npm를 통해서 node_module에 설치하고 사용하는 모듈안의  
        -원격 배포
        -로컬 배포

6. npmjs.com의 npm registry에 패키지 배포(원격 배포)


7. helloweb-ex01: 웹애플리케이션 만들어보기(맨바닥)
    1) app01: http: core module 기반
    2) app02: http, fs(file system): core module 기반-> fs가 붙어있으면 정적자원 시스템을 사용해보라
    3) app03: connect, serve-static: npm package 기반
    4) app04: connect, serve-static, connect-route: npm package 기반
8. helloweb-ex02: 웹애플리케이션 만들어보기(exporess 프레임워크 o)