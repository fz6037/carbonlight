import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchDataList } from '../../actions/dataListActions';

import './AppLoader.css'


class AppLoader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectToHome: false,
        }
    }

    
    componentDidMount(){
        const { onDataListFetch } = this.props
        onDataListFetch()
        setTimeout(() => {
            this.setState({redirectToHome: true})
        }, 500);
        
    }

    render(){
        if(this.state.redirectToHome){
            return(
                <Redirect to={'/home'}/>
            )
        }
        else {
            return(
                <div className ="app">
                    <div style={{ 
                        height: '100vh',
                        width: '100vw',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection:"column",
                        background:"rgba(40, 132, 224, 1)",
                        fontSize:"8vh",
                        fontWeight:"600",
                        color:"white",
                    }}>
                        <div style={{
                            backgroundImage: 'url('+'static/frontend/img/logo_engie.png'+')',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width:"20vw",
                            height:"30vh",
                        }}>
                        </div>
                        
                    </div>
                </div>
            );
        }
    }
}


//Récupère le store (que ce qui nous intéresse ici)
const mapStateToProps = (state) => {
    return {
        dataList: state.dataList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDataListFetch: () => {
            dispatch(fetchDataList());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLoader);