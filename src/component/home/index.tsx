import Header from '../header'
import React from 'react'


export default class HomePage extends React.Component<any, any> {


    render() {


        return (
            <div>
                <Header title="HOME PAGE" style={{ margin: "50px" }} />
                <img height="300px" width="500px" src="https://mk0waynehomesxs0o97h.kinstacdn.com/wp-content/uploads/2018/12/BW-Covington-Craftsman.jpg" alt="not available"/>
            </div>
        )
    }
}