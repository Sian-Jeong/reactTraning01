import React from 'react';
import './Square.css';

//! constructor(생성자) : 설계도를 기반으로 인스턴스를 만들고 초기 상태를 설정하는 메서드
//!       class(클래스) : 객체를 찍어내는 설계도
//!      속성(property) : 인스턴스가 가지는 데이터 (여기선 name)
//! 매개변수(parameter) : 생성자에 전달되는 값
//!  인스턴스(instance) : **클래스를 실제로 찍어낸 ‘실체’**를 가리키는 말
//!  props(properties) : 부모 컴포넌트가 자식 컴포넌트에게 값을 전달할 때 사용(속성, 컴포넌트 간 데이터 전달하는 방법)
//?                      자녀 컴포넌트는 읽기전용(변경 불가), 부모 컴포넌트에서 state를 변경시켜줘야 함
//* new 클래스명(...) 할 때 생성자가 호출되어 속성을 초기화하고, 그 결과로 완성된 인스턴스가 반환됩니다.

/**====================================================================================================
 * ! super
 * : super 키워드는 자식 클래스 내에서 부모 클래스의 생성자 또는 메소드를 호출할 때 사용됩니다.
 * ? super 이후에 this 키워드가 나와야 하는 이유?
 * : 부모 클래스의 생성자를 호출하기 전에 this를 사용하면 문제가 되기 때문    
 *   = React에서 this.state을 생성자에게 정의할 때 super가 먼저 나와야 하는 것도 같은 맥락 
 * ? React에서 super에 props를 인자로 전달하는 이유?
 * : React.Component 객체가 생성될 때 props 속성을 초기화하기 위해 부모 컴포넌트에게 props를 전달
 * : 생성자 내부에서도 this.props를 정상적으로 사용할 수 있도록 보장하기 위함 
 * 
 * class Person {
 *     constructor(name) {
 *         this.name = name;
 *     } 
 * }
 * 
 * class PolitePerson extends Person {
 *     constructor(name) {
 *         this.great Colleagues();
 *         super(name);
 *     }
 *     greatColleagues() {
 *         alert('Mt name is' + this.name + ', nice to meet you!');
 *     }
 * }
 * 
 *===================================================================================================**/
 
/*
    constructor(name) {      // 생성자 메서드
        this.name = name;    // 속성 초기화 (property initialization) / name = 생성자의 매개변수(parameter)       
    }
*/

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <button className="square" onClick={() => { this.setState({ value: 'X' }) }}>
                {this.state.value}
            </button>
        );
    }

}