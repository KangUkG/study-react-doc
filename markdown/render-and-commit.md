# Render and Commit

## You will learn
### Q1) What rendering means in React
    = 렌더링이란 
### Q2) When and why React renders a component
### Q3) The steps involved in displaying a component on screen
### Q4) Why rendering does not always produce DOM update

 
## React가 UI를 표현하기 위한 과정
1. Triggering a render
 - 최초 렌더링 혹은 set 함수에 의해 렌더링이 시작된다.
2. Rendering the component
 - 렌더링이 시작된 컴포넌트는 재귀적으로 해당 컴포넌트의 하위 컴포넌트까지 렌더링한다.
 - 최초 렌더링의 경우 React는 DOM node(<h1></h1> ...etc)를 생성한다.
 - re-rendering의 경우 React는 이전 렌더링 결과물과 다른점을 계산한다. 
3. Commiting to the DOM
 - 최초 렌더링 시 `appendChild()`를 이용해 DOM 노드를 추가한다.
 - re-rendering 시 렌더링을 진행하며 가장 마지막 렌더링 결과물과 비교해 달라진 DOM 노드를 변경한다.

  

#### Tip
 - React 사용시 Strict Mode를 사용하면 렌더링을 2번 수행한다. 
 - impure한 함수 발견에 용이한 기능이다. 

