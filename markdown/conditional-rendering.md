조건에 따라 다른 것들을 보여주고 싶을 때 **if** , **&&** **? :** 를 사용한다.

때로는 아무것도 보여주고 싶지 않을 때 `null`을 반환한다.


Q1. 이 2개는 equivalent 한가?

```
const Item = ({ name, isPacked }: { name: string; isPacked: boolean }) => {
    if (isPacked) {
        return <li className="p-2 underline">{name} ✔</li>;
      }
      return <li className="p-2 underline">{name}</li>;
};

vs

const Item = ({ name, isPacked }: { name: string; isPacked: boolean }) => {
      return (
        <li className="item">
          {isPacked ? name + ' ✔' : name}
        </li>
      );
};
```

A1. equivalent 하다. 객체지향적인 관점에서 살펴보면, 이렇게 생각할 수 있다.
각 2개 컴포넌트가 렌더링되며 다른 상태값을 가지는 인스턴스가 생성될텐데. 왜 같지? 이렇게 생각하면 안된다. 
이 jsx element는 인스턴스가 아니다. 왜냐하면 내부에 어떤 상태값을 가진것도 아니고 실제 DOM도 아니기 대문이다. jsx element는 blueprint와 같다고 생각하자.


Q2. && 연산자란?

A2. v1 && v2 로 주어질 때, v1의 값이 true라면 v2을 반환하고, v1의 값이 false라면 false를 반환한다. jsx element에서는 null, undefined는 아무것도 렌더링하지 않는다. 

A2-1. 이렇게는 쓰지마세요. ```messageCount && <p>New messages</p>``` 왜냐하면 messageCount가 0일때, 0을 렌더링합니다. 왜인지는 모르겟음..