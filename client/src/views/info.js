import React from 'react'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import {fetchInfo, fetchInfoHos} from './api/fetchers'

class Info extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            College:[],
            Hospital:[],
            Th: null,
            Tb: null
        }
    }

    async componentDidMount(){
        const dataCol = await fetchInfo()
        const dataHos = await fetchInfoHos()
        this.setState({
            College: dataCol,
            Hospital: dataHos,
            Th: dataHos[36].totalHospitals,
            Tb: dataHos[36].totalBeds
        })
        
        
        console.log(dataHos)
        console.log(dataCol)
    }

    render() {
        const HosColumns=[
            {
                Header:"State",
                accessor:"state"
            },
            {
                Header:"Rural Hospitals",
                accessor:"ruralHospitals"
            },
            {
                Header:"Rural Beds",
                accessor:"ruralBeds"
            },
            {
                Header:"Urban Hospitals",
                accessor:"urbanHospitals"
            },
            {
                Header:"Urban Beds",
                accessor:"urbanBeds"
            },
            {
                Header:"Total Hospitals",
                accessor:"totalHospitals"
            },
            {
                Header:"Total Beds",
                accessor:"totalBeds"
            }
        ]
        const ColColumns=[
            {
                Header:"State name",
                accessor:"state"
            },{
                Header:"Institute Name",
                accessor:"name"
            },{
                Header:"City",
                accessor:"city"
            },{
                Header:"Type",
                accessor:"ownership"
            },
            {
                Header:"Admission Capacity",
                accessor:"admissionCapacity"
            },
            {
                Header:"hospital Beds",
                accessor:"hospitalBeds"
            }
        ]
        var selectedCol = HosColumns
        var selectedData = this.state.Hospital

    

        return(
            
            <div>
                <br></br>
                <h1 className="aheadinglol">Info Page</h1>
                <br></br>
                
                <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="card card-stats">
                        <div class="card-header card-header-warning card-header-icon">
                            <div class="card-icon">
                                <i class="material-icons">content_copy</i>
                            </div>
                            <p class="card-category">Total</p>
                            <h3 class="card-title">{this.state.Th} <small> Hospitals</small></h3>
                        </div>
                        <div class="card-footer">
                            <div class="stats">
                            <i class="material-icons">date_range</i> Last 24 Hours   
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6">
                    <div class="card card-stats">
                        <div class="card-header card-header-success card-header-icon">
                            <div class="card-icon">
                            <i class="material-icons">store</i>
                            </div>
                            <p class="card-category">Total</p>
                            <h3 class="card-title">{this.state.Tb}<small> Beds</small></h3>
                        </div>
                        <div class="card-footer">
                            <div class="stats">
                                <i class="material-icons">date_range</i> Last 24 Hours
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                
                <div class="form-check form-check-radio">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="HospitalRadio" value="option1" default checked/>
                        Hospitals
                        <span class="circle">
                            <span class="check"></span>
                        </span>
                    </label>
                </div>
                <div class="form-check form-check-radio">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="CollegeRadio" value="option2" />
                        Medical Colleges
                        <span class="circle">
                            <span class="check"></span>
                        </span>
                    </label>
                </div>
                <br></br>
                <ReactTable columns={selectedCol} data={selectedData}></ReactTable> 
            </div>
        )

        
    }
}

export default Info;