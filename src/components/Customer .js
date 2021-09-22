
import React from "react";// 특정 라이브러리 불러오기 

class Customer extends React.Component {
    render(){
        return(
            <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.sex}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }
}

export default Customer;// 내보내기