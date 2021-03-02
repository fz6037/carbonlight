import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './CategoryDetail.css'; 

const BASE_URL ='static/frontend/img/person-male.png'

class CategoryDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

            displayRes:false,
            redirectToHome: false,
            categoryId: this.props.match.params.id-1,

            eco_Ef: 0,
            eco_Ef_percent: 0,
            emi_Ges: 0,
            emi_Ges_percent: 0,
            ecc_50:0,
            ece_50:0,

            inputValues: {
                cons_E1: "",
                cons_E2: "",
                cons_G1: "",
                cons_G2: "",
                cons_F1: "",
                cons_F2: "",

                refresh: 2,
                duration: "",

                charge: "",
                application: "",
                escapeRef: "",
                escapeProj: "",

                itPower: "",
                pueRef: "",
                pueProj: "",

                countryFactor:0.0599 ,
                fluidFactorRef:"",
                fluidFactorProj:"",
                constType:1,

                cvcS:"",
                plbS:"",
                cfoS:"",
                cfaS:"",
            },

            dropDownCountryValues:[

                { key:0, country:"France", value: 0.0599  },
                { key:1, country:"China", value: 1.24091118 },
                { key:2, country:"Denmark", value: 0.37364792 },
                { key:3, country:"Europe", value: 0.45883386 },
                { key:4, country:"Brasil", value: 0.29497968 },
                { key:5, country:"Italy", value: 0.41862758 },
                { key:6, country:"Japan", value: 0.8049703 },
                { key:7, country:"Korea", value: 0.66862292 },
                { key:8, country:"Peru", value: 0.39577104 },
                { key:9, country:"Poland", value: 1.098491328 },
                { key:10, country:"Russia", value: 0.82491714 },
                { key:11, country:"Spain", value: 0.361459116 },
                { key:12, country:"Sweden", value: 0.0494387136 },
                { key:13, country:"USA", value: 0.707442372 },
                { key:14, country:"Rest of the world", value: 0.29497968 },

            ],

            dropDownFluidValues:[

                { key:0, name:"Fluide frigorigène", value: "" },
                { key:1, name:"R1234ze", value: 7 },
                { key:2, name:"R134a", value: 1430 },
                { key:3, name:"R290 / Propane", value: 20 },
                { key:4, name:"R32", value: 675 },
                { key:5, name:"R407c", value: 1800 },
                { key:6, name:"R410A", value: 2088 },
                { key:7, name:"R449A", value: 1397 },
                { key:8, name:"R513A", value: 631 },
                { key:9, name:"R717 / NH3", value: 0 },
                { key:10, name:"R744 / CO2", value: 1 },
                { key:11, name:"NF3", value: 16100 },
                { key:12, name:"R116", value: 11100 },
                { key:13, name:"R125", value: 3170 },
                { key:14, name:"R14", value: 6630 },
                { key:15, name:"R143a", value: 4800 },
                { key:16, name:"R152a", value: 138 },
                { key:17, name:"R218", value: 8900 },
                { key:18, name:"R227ea", value: 2640 },
                { key:19, name:"R23", value: 12400 },
                { key:20, name:"R318", value: 9540 },
                { key:21, name:"R404a", value: 3940 },
                { key:22, name:"R407a", value: 1920 },
                { key:23, name:"R407f", value: 1670 },
                { key:24, name:"R417a", value: 2130 },
                { key:25, name:"R422a", value: 2840 },
                { key:26, name:"R422d", value: 2470 },
                { key:27, name:"R427a", value: 2020 },
                { key:28, name:"R4310mee", value: 1650 },
                { key:29, name:"R507", value: 3990 },   
                { key:30, name:"R507a", value: 2240 }, 
                { key:31, name:"R5114", value: 7910 }, 
                { key:32, name:"SF6", value: 23500 }, 
                { key:33, name:"Bromure de méthyle", value: 2 }, 
                { key:34, name:"Chloroforme de méthyle", value: 160 }, 
                { key:35, name:"Halon-1211", value: 1750 }, 
                { key:36, name:"Halon-1301", value: 6290 }, 
                { key:37, name:"Halon-2402", value: 1470 }, 
                { key:38, name:"R11", value: 4660 }, 
                { key:39, name:"R113", value: 5820 }, 
                { key:40, name:"R114", value: 8590 }, 
                { key:41, name:"R115", value: 7670 }, 
                { key:42, name:"R12", value: 10200 }, 
                { key:43, name:"R122", value: 59 }, 
                { key:44, name:"R122a", value: 258 }, 
                { key:45, name:"R123", value: 79 }, 
                { key:46, name:"R123a", value: 370 }, 
                { key:47, name:"R124", value: 527 }, 
                { key:48, name:"R13", value: 13900 }, 
                { key:49, name:"R132c", value: 338 }, 
                { key:50, name:"R141b", value: 782 }, 
                { key:51, name:"R142b", value: 1980 }, 
                { key:52, name:"R21", value: 148 }, 
                { key:53, name:"R22", value: 1760 }, 
                { key:54, name:"R225ca", value: 127 }, 
                { key:55, name:"R225cb", value: 525 }, 
                { key:56, name:"R401a", value: 1130 }, 
                { key:57, name:"R408a", value: 3260 }, 
                { key:58, name:"R502", value: 4790 }, 
                { key:59, name:"R1234yf", value: 4 },
                { key:60, name:"Tétrachlorométhane", value: 1730 }, 
                

            ]
        }
        
        this.displayLogo = this.displayLogo.bind(this)
        this.displayContacts = this.displayContacts.bind(this)
        this.displayNews = this.displayNews.bind(this)
        this.displayInputs = this.displayInputs.bind(this)
        this.handleTotal = this.handleTotal.bind(this)
        this.calculateTotalEnergy = this.calculateTotalEnergy.bind(this)
        this.calculateTotalGes = this.calculateTotalGes.bind(this)
        this.displayResults = this.displayResults.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
        this.calculateTotalGesPercent = this.calculateTotalGesPercent.bind(this)
        this.calculateTotalEnergyPercent = this.calculateTotalEnergyPercent.bind(this)
        this.displayCountryDropDown = this.displayCountryDropDown.bind(this)
        this.displayFluidDropDown = this.displayFluidDropDown.bind(this)
        this.displayDropDownConst = this.displayDropDownConst.bind(this)

        this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this)
  
        this.myDivToFocus = React.createRef()
    }

    handleDisplay = () => {
        this.setState({ displayRes : true })
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest",
               transition: "2s"
            })
        }
    }

    paragraphText() {
        const text = this.props.data.dataList[this.state.categoryId].description;
        if(this.props.data.dataList[this.state.categoryId].carbon_calculator_type != ""){
            var i;
            let res = []
            const newText = text.split('###');
            const count = newText.length;
            for (i = 0; i < count; i++) {
                const result = newText[i]
                console.log(result)
                const double = result.split(':')
                console.log(double[0])
                console.log(double[1])
                res.push(
                    <span style={{fontWeight:400}}>{double[0]}</span>
                )  
                res.push(
                    <p>{double[1]}</p>
                )      
            } 
            return res
        }
        else{
            const newText = text.split('###').map(str => <p>{str}</p>);
            return newText 
        }    
    }

    handleChange = (event) => {
        this.setState({
            constType: event.target.value,
        })
    }

    copyCodeToClipboard(){
 
        var elements = document.getElementsByClassName("result-value");
       
        let values =  "<table><tr><th scope="+"row" +">"+ elements[0].innerText + "</th><td>" + elements[2].innerText + "</td></tr><tr><th scope="+"row" +">" + elements[1].innerText + "</th><td>" + elements[3].innerText + "</td></tr></table>"
        
        console.log(values)
        
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = values;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        
    }
    
    displayResults() {
        if(this.state.displayRes === true){
            if(this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){
                return (
                    <div className="results">
                        <table  className ="styled-table">
                            <thead>
                                <tr>
                                    <th>Résultats</th>
                                    <th>Valeurs</th>
                                    <th>en %</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Économie d'énergie finale</td>
                                    <td className="result-value" value={this.state.eco_Ef + " MWh"} >{this.state.eco_Ef + " MWh"}</td>
                                    <td className="result-value" value={this.state.eco_Ef_percent + " %"}>{this.state.eco_Ef_percent + " %"}</td>
                                </tr>
                                <tr>
                                    <td>Émissions de GES évitées par les economies d'énergie</td>
                                    <td className="result-value" value={this.state.emi_Ges + " teqCO2"}>{this.state.emi_Ges + " teqCO2"}</td>
                                    <td className="result-value" value={this.state.emi_Ges_percent + " %"}>{this.state.emi_Ges_percent + " %"}</td>
                                </tr>
                                <tr>
                                    <td>Empreinte carbone de la construction sur 50 ans</td>
                                    <td>{this.state.ecc_50 + " teqCO2"}</td>
                                    <td>___</td>
                                </tr>
                                <tr>
                                    <td>Empreinte carbone de l'énergie sur 50 ans</td>
                                    <td>{this.state.ece_50 + " teqCO2"}</td>
                                    <td>___</td>
                                </tr>
                            </tbody>  
                        </table>
                        <button className="calculate-button"
                            onClick={() => this.copyCodeToClipboard()}>
                            COPIER    
                        </button>
                    </div>
                    
                );
            }
            else{
                return(
                    <div className="results">
                        <table className ="styled-table">
                            <thead>
                                <tr>
                                    <th>Résultats</th>
                                    <th>Valeurs</th>
                                    <th>en %</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Économie d'énergie finale</td>
                                    <td className="result-value" value={this.state.eco_Ef + " MWh"} >{this.state.eco_Ef + " MWh"}</td>
                                    <td className="result-value" value={this.state.eco_Ef_percent + " %"}>{this.state.eco_Ef_percent + " %"}</td>
                                </tr>
                                <tr>
                                    <td>Émissions de GES évitées par les economies d'énergie</td>
                                    <td className="result-value" value={this.state.emi_Ges + " teqCO2"}>{this.state.emi_Ges + " teqCO2"}</td>
                                    <td className="result-value" value={this.state.emi_Ges_percent + " %"}>{this.state.emi_Ges_percent + " %"}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="calculate-button"
                            onClick={() => this.copyCodeToClipboard()}>
                            COPIER    
                        </button>
                    </div>
                );
            }
        }
        else{
            return (
                <div className="results-container-hidden"> 
                </div>  
            );
        }
    }

    

    handleTotal = (e) => {  
        const {value,name} = e.target;
        const parsedValue = value === "" ? "" : parseFloat(value);
        this.setState((prevState) => {
            const updatedInputValues = {
                ...prevState.inputValues,
                [name]: parsedValue
            };
            
            const newEcc_50 = this.calculateTotalCarbonTertiaire(updatedInputValues);
            const newEce_50 =this.calculateTotalGesProject(updatedInputValues, newEcc_50)
            const newEco_Ef = this.calculateTotalEnergy(updatedInputValues);
            const newEmi_Ges = this.calculateTotalGes(updatedInputValues, newEcc_50, newEce_50);
            const newEco_Ef_percent = this.calculateTotalEnergyPercent(updatedInputValues);
            const newEmi_Ges_percent = this.calculateTotalGesPercent(updatedInputValues, newEmi_Ges, newEcc_50, newEce_50);

            return {
                inputValues: updatedInputValues,
                eco_Ef: newEco_Ef.toFixed(2),
                emi_Ges: newEmi_Ges.toFixed(2),
                eco_Ef_percent: Math.abs(newEco_Ef_percent.toFixed(0)),
                emi_Ges_percent: Math.abs(newEmi_Ges_percent.toFixed(0)),
                ecc_50: newEcc_50.toFixed(0),
                ece_50: newEce_50.toFixed(0),
            }
        })
    }

    calculateTotalCarbonTertiaire = (inputValues) => {

        let resultEec = 0

        if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){

            let constType = inputValues.constType - 1

            const cvc = this.props.data.dataList[this.state.categoryId].constants[constType].cvc_value
            const plb = this.props.data.dataList[this.state.categoryId].constants[constType].plb_value
            const cfa = this.props.data.dataList[this.state.categoryId].constants[constType].cfa_value
            const cfo = this.props.data.dataList[this.state.categoryId].constants[constType].cfo_value

            resultEec = (cvc*inputValues.cvcS + plb*inputValues.plbS + cfa*inputValues.cfaS + cfo*inputValues.cfoS)/1000  
        }
        return resultEec
    }

    calculateTotalGesProject = (inputValues, newEcc_50) => {

        let refreshedResultGes = 0;
        var i;

        if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){

            let resultGes = newEcc_50*1000 
            let resultGesEn = inputValues.cons_E2*1000*0.0599  + ((inputValues.cons_G2*1000*0.227)/1.11) + ((inputValues.cons_F2*1000*0.324)/1.07)
            let refresh = 8;

            refresh = 1 - (refresh/100);
            refreshedResultGes = resultGes + resultGesEn;
            
            for (i = 2; i <= 50; i++) {
                resultGesEn = refresh*resultGesEn;
                refreshedResultGes = refreshedResultGes + resultGesEn;
            }

            refreshedResultGes = (refreshedResultGes/1000)-newEcc_50
        }

        return refreshedResultGes
    }

    calculateTotalEnergyPercent = (inputValues) => {

        let result = 0;

        if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Nucléaire"){
            result = -((inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1 - inputValues.cons_E2 - inputValues.cons_G2 - inputValues.cons_F2)/(inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1))*100;
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Datacenter"){
            result = ((inputValues.pueProj - inputValues.pueRef)*100)/inputValues.pueRef;
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Retail et Logistique"){
            result = -((inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1 - inputValues.cons_E2 - inputValues.cons_G2 - inputValues.cons_F2)/(inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1))*100;
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){
            result = -((inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1 - inputValues.cons_E2 - inputValues.cons_G2 - inputValues.cons_F2)/(inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1))*100;
        }
        else {
            console.log("Pas de calculs pour cette catégorie !")    
        }

        return result
    }

    calculateTotalGesPercent = (inputValues, newEmi_Ges, newEcc_50, newEce_50) => {
        var i;
        let result = 0;
        let count = inputValues.duration;
        let refresh = inputValues.refresh;
        refresh = 1-(refresh/100);

        if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Nucléaire"){
            result = (inputValues.cons_E1*1000*inputValues.countryFactor + ((inputValues.cons_G1*227)/1.11))/1000;
            let refreshedResult = result;
            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            refreshedResult = - (newEmi_Ges/refreshedResult)*100
            return refreshedResult
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Datacenter"){
            result = ((inputValues.pueProj - inputValues.pueRef)*100)/inputValues.pueRef;
            return result
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Retail et Logistique"){
            result = (inputValues.cons_E1*1000*0.0599  + ((inputValues.cons_G1*1000*0.227)/1.11) + ((inputValues.fluidFactorRef*inputValues.escapeRef*inputValues.charge)/100))/1000;
            let refreshedResult = result;
            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            refreshedResult = - (newEmi_Ges/refreshedResult)*100
            return refreshedResult
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){

            result =  newEce_50 + newEmi_Ges
            result = -(newEmi_Ges)*100/result
            return result
        }
        
    }

    calculateTotalEnergy = (inputValues) => {

        var i;
        let refresh = inputValues.refresh;
        let result = 0;
        let count = inputValues.duration;

        if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Nucléaire"){

            refresh = 1 - (refresh/100);
            result = inputValues.cons_E1 + inputValues.cons_G1 - inputValues.cons_E2 - inputValues.cons_G2 ;
            let refreshedResult = result; 

            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            return refreshedResult
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Datacenter"){

            refresh = 1 - (refresh/100);
            result = inputValues.itPower*8760*0.73*(inputValues.pueRef - inputValues.pueProj);
            let refreshedResult = result;

            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            return refreshedResult
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Retail et Logistique"){

            refresh = 1 - (refresh/100);
            result = inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1 - inputValues.cons_E2 - inputValues.cons_G2 - inputValues.cons_F2;
            let refreshedResult = result;

            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            return refreshedResult
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){

            refresh = 8
            refresh = 1 - (refresh/100);
            result = inputValues.cons_E1 + inputValues.cons_G1 + inputValues.cons_F1 - inputValues.cons_E2 - inputValues.cons_G2 - inputValues.cons_F2;
            let refreshedResult = result;

            for (i = 2; i <= 50; i++) {
                result = refresh*result;
                refreshedResult = refreshedResult + result;
            }
            return refreshedResult
        }
    }

    calculateTotalGes = (inputValues, newEcc_50, newEce_50) => {

        var i;
        let refresh = inputValues.refresh;
        let count = inputValues.duration;
        let result = 0;
        
        if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Nucléaire"){
            result = (((inputValues.cons_E1 - inputValues.cons_E2)*1000*inputValues.countryFactor) + (((inputValues.cons_G1 - inputValues.cons_G2)*227)/1.11))/1000;
            refresh = 1 - (refresh/100);
            let refreshedResult = result;
            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            return refreshedResult 
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Datacenter"){
            result = inputValues.itPower*8760*0.73*(inputValues.pueRef - inputValues.pueProj)*inputValues.countryFactor;
            let refreshedResult = result;
            refresh = 1 - (refresh/100);
            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            return refreshedResult 
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Retail et Logistique"){
            refresh = 1 - (refresh/100);
            result = (((inputValues.cons_E1 - inputValues.cons_E2)*1000*0.0599 ) + (((inputValues.cons_G1 - inputValues.cons_G2)*1000*0.227)/1.11) + (inputValues.fluidFactorRef*inputValues.charge*inputValues.escapeRef/100) - (inputValues.fluidFactorProj*inputValues.application*inputValues.escapeProj/100))/1000;
            let refreshedResult = result;
            for (i = 2; i <= count; i++) {
                if ( i<= 150){
                    result = refresh*result;
                    refreshedResult = refreshedResult + result;
                }
                else{
                    console.log("Durée de vie trop élevée !");
                }
            }
            return refreshedResult 
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){

            let resultGesRef = inputValues.cons_E1*1000*0.0599  + ((inputValues.cons_G1*1000*0.227)/1.11) + ((inputValues.cons_F1*1000*0.324)/1.07)
            let resultGesPro = (newEce_50 + newEcc_50)*1000
            let refreshedResultGesRef = resultGesRef
            let refresh = 8

            refresh = 1 - (refresh/100);

            for (i = 2; i <= 50; i++) {
                resultGesRef = refresh*resultGesRef;
                refreshedResultGesRef = refreshedResultGesRef + resultGesRef;
            }

            let refreshedResultGesVoid = ((refreshedResultGesRef - resultGesPro)/1000) + newEcc_50

            return refreshedResultGesVoid
        }        
    }

    displayDropDownConst(){ 
        let res = []
        this.props.data.dataList[this.state.categoryId].constants.forEach(sector => {
            res.push(
                <option className ="option-detail" key={sector.id} value={sector.id}>{sector.type}</option>
            )
        });
        return res
    }

    displayCountryDropDown(){
        let res = []
        this.state.dropDownCountryValues.forEach(object => {
            res.push(
                <option className ="option" key={object.key} value={object.value}>{object.country}</option>
            )
        });
        return res
    }

    displayFluidDropDown(){
        let res = []
        this.state.dropDownFluidValues.forEach(object => {
            res.push(
                <option className ="option" key={object.key} value={object.value}>{object.name}</option>
            )
        });
        return res
    }

    handleClick(){
        this.setState({ redirectToHome: true })
    }
    
    displayInputs(){
        let res = []
        if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Nucléaire"){
            res.push(
                <form className="form">
                    <div className="form-container">  
                        Scénario de référence       
                        <div className="group">      
                            <input type="number" name="cons_E1" required onChange={this.handleTotal} value={this.state.inputValues.cons_E1 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation d'électricité en MWh/an</label>
                        </div>   
                        <div className="group">      
                            <input type="number" name="cons_G1" required onChange={this.handleTotal} value={this.state.inputValues.cons_G1 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de gaz naturel en MWhPCS/an</label>
                        </div>
                    </div> 
                    <div className="form-container">
                        Scénario projeté
                        <div className="group">      
                            <input type="number" name="cons_E2" required onChange={this.handleTotal} value={this.state.inputValues.cons_E2 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation d'électricité en MWh/an</label>
                        </div> 
                        <div className="group">      
                            <input type="number" name="cons_G2" required onChange={this.handleTotal} value={this.state.inputValues.cons_G2 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de gaz naturel en MWhPCS/an</label>
                        </div>
                    </div>
                    <div className="form-container">
                        Paramètres du projet
                        <div className="group">      
                            <input type="number" name="duration" required onChange={this.handleTotal} value={this.state.inputValues.duration || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Durée de vie du projet en années</label>
                        </div> 
                        <select className="select-detail"
                            name="countryFactor"
                            onChange={this.handleTotal}
                            value={this.state.inputValues.countryFactor || ''}  
                        >
                            {this.displayCountryDropDown()} 
                        </select>
                    </div>
                </form>
            )
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Datacenter"){
            res.push(
                <form className="form"> 
                    <div className="form-container">
                        Scénario de référence
                        <div className="group">      
                            <input type="number" name="itPower" required onChange={this.handleTotal} value={this.state.inputValues.itPower || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Puissance IT en MW</label>
                        </div>
                        <div className="group">      
                            <input type="number" name="pueRef" required onChange={this.handleTotal} value={this.state.inputValues.pueRef || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>PUE</label>
                        </div>
                    </div>
                    <div className="form-container">
                        Scénario de projeté
                        <div className="group">      
                            <input type="number" name="pueProj" required onChange={this.handleTotal} value={this.state.inputValues.pueProj || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>PUE</label>
                        </div>
                    </div>        
                    <div className="form-container">
                        Paramètres du projet
                        <div className="group">      
                            <input type="number" name="duration" required onChange={this.handleTotal} value={this.state.inputValues.duration || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Durée de vie du projet en années</label>
                        </div>
                        <select className="select-detail"
                            name="countryFactor"
                            onChange={this.handleTotal}
                            value={this.state.inputValues.countryFactor || ''}
                        >
                            {this.displayCountryDropDown()} 
                        </select>
                    </div> 
                </form>
            )
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Retail et Logistique"){
            res.push(
                <form className="form">
                    <div className="form-container">
                        Scénario de référence
                        <div className="group">      
                            <input type="number" name="cons_E1" required onChange={this.handleTotal} value={this.state.inputValues.cons_E1 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation d'électricité en MWh/an</label>
                        </div>   
                        <div className="group">      
                            <input type="number" name="cons_G1" required onChange={this.handleTotal} value={this.state.inputValues.cons_G1 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de gaz naturel en MWhPCS/an</label>
                        </div>
                        <div className="group"> 
                            <input  type="number" name="charge" required onChange={this.handleTotal} value={this.state.inputValues.charge || ''}></input>     
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Charge initiale en kg</label>
                        </div>
                        <div className="group">      
                            <input type="number" name="escapeRef" required onChange={this.handleTotal} value={this.state.inputValues.escapeRef || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Taux de fuite en %</label>
                        </div>     
                        <select className="select-detail"
                            name="fluidFactorRef"
                            onChange={this.handleTotal}
                            value={this.state.inputValues.fluidFactorRef || ''}  
                        >
                            {this.displayFluidDropDown()} 
                        </select> 
                    </div> 
                    <div className="form-container">
                        Scénario projeté
                        <div className="group">      
                            <input type="number" name="cons_E2" required onChange={this.handleTotal} value={this.state.inputValues.cons_E2 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation d'électricité en MWh/an</label>
                        </div> 
                        <div className="group">      
                            <input type="number" name="cons_G2" required onChange={this.handleTotal} value={this.state.inputValues.cons_G2 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de gaz naturel en MWhPCS/an</label>
                        </div> 
                        <div className="group">      
                            <input type="number" name="application" required onChange={this.handleTotal} value={this.state.inputValues.application || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Charge initiale en kg</label>
                        </div> 
                        <div className="group">      
                            <input type="number" name="escapeProj" required onChange={this.handleTotal} value={this.state.inputValues.escapeProj || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Taux de fuite en %</label>
                        </div> 
                        <select className="select-detail"
                            name="fluidFactorProj"
                            onChange={this.handleTotal}
                            value={this.state.inputValues.fluidFactorProj || ''} 
                        >
                            {this.displayFluidDropDown()} 
                        </select>
                    </div>
                    <div className="form-container">
                        Paramètres du projet
                        <div className="group">      
                            <input type="number" name="duration" required onChange={this.handleTotal} value={this.state.inputValues.duration || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Durée de vie du projet en années</label>
                        </div>  
                    </div>
                </form>
            )
        }
        else if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type == "Calculette Tertiaire"){ 
            res.push(
                <form className="form"> 
                    <div className="form-container">
                        Scénario de référence  
                        <div className="group">      
                            <input type="number" name="cons_E1" required onChange={this.handleTotal} value={this.state.inputValues.cons_E1 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation d'électricité en MWh/an</label>
                        </div>   
                        <div className="group">      
                            <input type="number" name="cons_G1" required onChange={this.handleTotal} value={this.state.inputValues.cons_G1 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de gaz naturel en MWhPCS/an</label>
                        </div> 
                        <div className="group">      
                            <input type="number" name="cons_F1" required onChange={this.handleTotal} value={this.state.inputValues.cons_F1 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de Fioul en MWhPCS/an</label>
                        </div>   
                    </div> 
                    <div className="form-container">
                        Scénario projeté
                        <div className="group">      
                            <input type="number" name="cons_E2" required onChange={this.handleTotal} value={this.state.inputValues.cons_E2 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation d'électricité en MWh/an</label>
                        </div> 
                        <div className="group">      
                            <input type="number" name="cons_G2" required onChange={this.handleTotal} value={this.state.inputValues.cons_G2 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de gaz naturel en MWhPCS/an</label>
                        </div>
                        <div className="group">      
                            <input type="number" name="cons_F2" required onChange={this.handleTotal} value={this.state.inputValues.cons_F2 || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Consommation de Fioul en MWhPCS/an</label>
                        </div>
                    </div>
                    <div className="form-container">
                        Surface des lots
                        <div className="group">      
                            <input type="number" name="cvcS" required onChange={this.handleTotal} value={this.state.inputValues.cvcS || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Surface de plancher en m² (CVC)</label>
                        </div> 
                        <div className="group">      
                            <input type="number" name="plbS" required onChange={this.handleTotal} value={this.state.inputValues.plbS || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Surface de plancher en m² (PLB)</label>
                        </div>
                        <div className="group">      
                            <input type="number" name="cfoS" required onChange={this.handleTotal} value={this.state.inputValues.cfoS || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Surface de plancher en m² (CFO)</label>
                        </div>
                        <div className="group">      
                            <input type="number" name="cfaS" required onChange={this.handleTotal} value={this.state.inputValues.cfaS || ''}></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Surface de plancher en m² (CFA)</label>
                        </div>
                    </div>
                    <div className="form-container">
                        Paramètres du projet
                        <select className ="select-detail"
                            name="constType"
                            onChange={this.handleTotal}  
                            value={this.state.inputValues.constType || ''}
                        >
                            {this.displayDropDownConst()} 
                        </select>
                    </div>
                </form>
            )
        }
        return res     
    }

    displayContacts(){
        let res = []
        this.props.data.dataList[this.state.categoryId].contact.forEach(contact => {
            if (contact.photo_main === null){
                res.push(
                    <div className="contact-card">
                        <div className="contact-card-photo" style={{
                            height:"25vh",
                            width:"34vh",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center", 
                            backgroundImage: "url("+ BASE_URL +")",
                            backgroundSize:'contain',
                            backgroundRepeat:'no-repeat',    
                            borderTopRightRadius:'15%',
                            borderTopLeftRadius:'15%',
                            backgroundPosition: 'center',                    
                        }}>   
                        </div>
                        <div className="contact-card-content">
                            <div className="contact-card-content-alias">
                                {contact.alias}
                            </div>
                            <div className="contact-card-content-service">
                                {contact.service}
                            </div> 
                            <div className="contact-card-content-description"> 
                                {contact.description}
                            </div>  
                            <a className="contact-card-content-email" href={"mailto:" + contact.email}>
                                {contact.email}
                            </a>   
                        </div>
                    </div>
                )
            }
            else{
                res.push(
                    <div className="contact-card">
                        <div className="contact-card-photo" style={{
                            height:"25vh",
                            width:"34vh",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center", 
                            backgroundImage: "url("+ contact.photo_main +")",
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',    
                            borderTopRightRadius:'15%',
                            borderTopLeftRadius:'15%',                    
                        }}>   
                        </div>
                        <div className="contact-card-content">
                            <div className="contact-card-content-alias">
                                {contact.alias}
                            </div>
                            <div className="contact-card-content-service">
                                {contact.service}
                            </div> 
                            <div className="contact-card-content-description"> 
                                {contact.description}
                            </div>  
                            <a className="contact-card-content-email" href={"mailto:" + contact.email}>
                                {contact.email}
                            </a>   
                        </div>
                    </div>    
                )
            }  
        }); 
        return res 
    }

    displayNews(){
        let res = []
        this.props.data.dataList[this.state.categoryId].news.forEach(news => {
            if (news.email != ""){
                console.log(news.email)
                res.push(
                    <div className="news-card">
                        <div className="news-card-photo" style={{
                            height:"34vh",
                            width:"34vh",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center", 
                            backgroundImage: "url("+ news.photo_main +")", 
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',  
                            backgroundPosition:'center'
                        }}>    
                        </div> 
                        <div className="news-card-content">
                            <div className="news-card-content-title">
                                {news.title}
                            </div> 
                            <div className="news-card-content-description">  
                                {news.description}
                            </div>
                            <a className="news-card-content-link" href={"mailto:" + news.email}>
                                Plus d'infos
                            </a>
                        </div>
                    </div>     
                )
            }else{
                res.push(
                    <div className="news-card">
                        <div className="news-card-photo" style={{
                            height:"34vh",
                            width:"34vh",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center", 
                            backgroundImage: "url("+ news.photo_main +")", 
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',  
                            backgroundPosition:'center'
                        }}>    
                        </div> 
                        <div className="news-card-content">
                            <div className="news-card-content-title">
                                {news.title}
                            </div> 
                            <div className="news-card-content-description">  
                                {news.description}
                            </div>
                            <a className="news-card-content-link" href={news.link}>
                                Plus d'infos
                            </a>
                        </div>
                    </div>     
                )
            }
        });
        return res
    }

    displayLogo(){
        let res = []
        if (this.props.data.dataList[this.state.categoryId].logo_main != null){
            res.push(
                <div className="left-calculate-tab-logo" style={{
                    height:'20vh',
                    width:'20vh',
                    backgroundImage: "url("+ this.props.data.dataList[this.state.categoryId].logo_main +")", 
                    backgroundSize:'contain',
                    backgroundRepeat:'no-repeat',  
                    backgroundPosition:'center',
                }}>   
                </div>
            )
        }
        return res
    }


    render(){
        if(this.state.redirectToHome){
            return(
                <Redirect to={'/home'}/>
            )
        }
        else{
            if (this.props.data.dataList[this.state.categoryId].carbon_calculator_type != ""){          
                return(
                    <div className ="page">
                        <div className ="calculate-section"> 
                            <div className="calculate-tab">
                                <div className="top-calculate-tab">
                                    <div className="top-left-calculate-tab-title">
                                        {this.props.data.dataList[this.state.categoryId].type}
                                    </div>
                                    <button className="home-button" 
                                        onClick={() => this.handleClick()}
                                    >
                                    CHANGER DE CATÉGORIE
                                    </button> 
                                </div>
                                <div className="top-left-calculate-tab-description">
                                    {this.paragraphText()}
                                </div>
                                <div className="bottom-calculate-tab">
                                    {this.displayInputs()}         
                                </div>
                                <button className="calculate-button"
                                    onClick={this.handleDisplay}>
                                    CALCULER
                                </button>
                            </div>
                            
                        </div>
                        {this.displayResults()} 
                        <div ref={this.myDivToFocus} className ="news-section"> 
                            <div style={{
                                height:"auto",
                                width:"50vw",
                                borderTop:"2px solid rgba(40, 132, 224, 1)",
                            }}>
                            </div>
                            <div className="news-container">
                                {this.displayNews()}
                            </div> 
                            <div style={{
                                height:"auto",
                                width:"50vw",
                                borderBottom:"2px solid rgba(40, 132, 224, 1)",
                            }}>
                            </div>
                        </div>
                        <div className ="contacts-section"> 
                            <div className="contacts-container">
                                {this.displayContacts()}
                            </div> 
                        </div>
                        <div className="footer-detail">
                            <p>Développé par Engie Solutions Engineering</p>
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <div className ="page">
                        <div className="calculate-section-other">
                            <div className="top-calculate-tab">
                                <div className="top-left-calculate-tab-title">
                                    {this.props.data.dataList[this.state.categoryId].type}
                                </div>  
                                <button className="home-button" 
                                    onClick={() => this.handleClick()}
                                >
                                    CHANGER DE CATÉGORIE
                                </button>  
                            </div>
                            <div className="center-calculate-tab">
                                <div className="right-left-calculate-tab">
                                    <div className="paragraph-text">
                                        {this.paragraphText()}
                                    </div>   
                                    {this.displayLogo()}
                                </div>
                                <div className="contacts-container-other">
                                    {this.displayContacts()}
                                </div>
                            </div>
                            <div className="footer-detail">
                                <p>Développé par Engie Solutions Engineering</p>
                            </div> 
                        </div> 
                    </div>     
                )
            }
        }
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, null)(CategoryDetail);


