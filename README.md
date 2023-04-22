

# React-Redux를 활용한 Todo list 애플리케이션

 ## 프로젝트 개요
  이 프로젝트는 일정관리를 위한 Todo List입니다. 사용자는 해야 할 일과 내용을 작성하고 진행중인 목록과 완료한 목록을 확인할 수 있습니다. 프로젝트는 [링크](https://todolist-assignment-2.vercel.app/) 에서 확인하실 수 있습니다.


## 사용기술
- CRA
- React
- Redux
- Redux-router-dom
- Styled-components


## 기능
- todo 추가, 목록보기, 삭제, 상세보기


### 폴더 구조
```markdown
src
├─App
├─components
│  ├─TodoCreate
│  └─TodoHeader
│  └─TodoItem
│  └─TodoList
├─pages
│  ├─Detail
│  └─Home
│  └─NotFound
├─redux
│  ├─config
│  │  └─configStore
├─modules
│  ├─todos
├─shared
│  ├─Layout
│  ├─Router
└─styled
│  ├─GlobalStyle

```

__src/components__

| 파일                  | 역할               |
|---------------------|------------------|
| `TodoCreate` | todo 생성   |
| `TodoHeader`  | 헤더         |
| `TodoItem`            |  todo               |
| `TodoList`  | todo 목록            |

__src/modules__
| 파일   | 역할            |
|------------|---------------   |
| `todos` | tdo                |


__src/pages__
| 파일   | 역할            |
|------------|---------------   |
| `Detail` | todo 상세보기 |
| `Home` | 홈               |
| `NotFound` | not found 페이지                |

###  실행
```bash
git clone "https://github.com/devjjin/redux-todolist-assignment.git"

cd redux-todolist-assignment/

yarn install 

yarn start
```
