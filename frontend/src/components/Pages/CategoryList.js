import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import './CategoryList.css'

const BASE_URL ='static/frontend/img/background_home.jpg'


class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToCategoryDetail: null,
            categoryId: 0,
            categoryPhoto: BASE_URL

        }
        
        this.handleSelectCategory = this.handleSelectCategory.bind(this)
    
    }

    
    handleChange = (event) => {
        this.setState({
            categoryId: event.target.value,
            categoryPhoto: event.target.value == 0 ? BASE_URL : this.props.data.dataList[event.target.value - 1].photo_main
        });
    }

    handleSelectCategory = () => {
        this.setState({ redirectToCategoryDetail: this.state.categoryId })
    }

    displayButton() {
        if(this.state.categoryId != 0){
            return (
            <button id="btn" className="menu-button"
                onClick={this.handleSelectCategory}>
                Calculer
            </button>
            );
        }
        else{
            return (
                <button className="menu-button-hidden"> </button>
            );
        }
    }

    displayInput(){ 
        let res = [<option className ="option-home" key={0} value={0}> Sélectionner votre secteur d'activité </option>]
        this.props.data.dataList.forEach(category => {
            res.push(
                <option className ="option-home" key={category.id} value={category.id}>{category.type}</option>
            )
        });
        return res
    }

    render(){
        if(this.state.redirectToCategoryDetail==null){
            return(            
                <div className ="page" style = {{
                    height:'100vh',
                    width:'100vw',
                    display: "flex",
                    flexDirection:"column",
                    jusitfyContent:'space-between',
                    alignItems:'center',
                    backgroundImage: "url(" + this.state.categoryPhoto + ")",
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    filter: 'grayscale(40%)',
                    transition: '2s'
                    
                    
                }}>
                    <div className ="top-container">
                        <div className ="logo" style = {{
                            height: '12vh',
                            width: '20vw',
                            display: "flex",
                            flexDirection:"column",
                            justifyContent: "center",
                            marginLeft:'1.5vw',
                            marginTop:'3vh',
                            backgroundImage: 'url('+'static/frontend/img/logo_engie.png'+')',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>   
                        </div>
                    </div>
                    <div className ="bottom-container"> 
                        <div className="menu-container">
                            <div className="menu-title">
                                CarbonLight
                            </div>
                            <div className="menu-description">
                                <h5>Bienvenue sur CarbonLight, l'outil de la BU industrie à votre disposition pour le calcul de l'empreinte carbone de vos projets.</h5>
                                <h4>Utilisez-le en perspective d'un livrable client ou d'un comité d'engagement !</h4>
                                <h1>Focalisée sur les principaux postes d'émissions de Gaz à Effet de Serre (GES), cette plateforme digitale met à votre disposition des informations, des contenus ainsi que des utilitaires de calcul vous permettant de quantifier l'impact carbone d'installations peu complexes. Elle s'appuie notamment sur des calculs et retours d'expérience concrets.</h1>
                            								
                            </div>
                            <select className ="select-home"
                                onChange={this.handleChange}  
                            >
                                {this.displayInput()} 
                            </select>
                            <div className="menu-description">
                                
                                <h1>Si votre projet est complexe ou que vous ne trouvez pas l'information que vous recherchez, deux possibilités s'offrent à vous : </h1>
                                <ul className="list">
                                    <li>Contacter notre équipe d'experts dont vous trouverez les coordonnées dans les sections dédiées par segment de marché</li>    
                                    <li>Partagez-nous une idée ou un disfonctionnement via le bouton en pied de page</li>
                                </ul>
                                <h1>Une dernière précision : Cette plateforme évolue, se nourrit des projets réalisés et s'enrichit régulièrement. Des mises à jour sont prévues et permettront d'évaluer toujours plus finement l'empreinte carbone de vos projets (implantation, complexité, projets digitaux...).</h1>
                                <h3>Bonne navigation !</h3>	
                            								
                            </div>
                             
                            {this.displayButton()}                          
                        </div>
                    </div>
                    <div className="footerC">
                        <div className="contact-container">
                            <a className="contact-home" href={"mailto:thomas.zentilin@engie.com"}>
                                Une idée ?
                            </a> 
                        </div>
                        <div className="dev-signature">Développé par Engie Solutions Engineering</div>
                    </div>
                </div>     
            );
        }
        else{
            return(
                <Redirect to={'/category/detail&id='+this.state.redirectToCategoryDetail}/>
            )
        }               
    }
}

const mapStateToProps = (state) => {    
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, null)(CategoryList);

       