# State as a snap

## You will learn
### Q1) What rendering means in React
    = 렌더링이란 React가 해당 컴포넌트에 대한 DOM node를 생성하고 추가하는 작업이다.
### Q2) When and why React renders a component
    = when : 최초 실행시, set 함수에 의해 trigger 하는 경우에 컴포넌트 렌더링을 수행한다.
    = why : 컴포넌트란 React 문법으로 UI를 나타낸 jsx, tsx 확장자를 가지는 파일이다. 어떤 UI를 표현할지 알아야 하기 때문에 컴포넌트를 렌더링 한다.
### Q3) The steps involved in displaying a component on screen
    = 렌더링을 시작하라는 trigger, trigger에 의한 컴포넌트 해석, 최초일 경우 모든 컴포넌트를 지정된 node에 추가하며, rerender일 경우 이전 렌더링 결과와 비교해 다른 부분만 교체한다.
### Q4) Why rendering does not always produce DOM update
    = 이전 렌더링 결과와 비교해 달라진 부분간 교체하기 때문이다. re-rendering을 시작하더라도 렌더링 결과인 DOM node가 달라지지 않는다면 DOM update가 필요하지 않다.

 
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