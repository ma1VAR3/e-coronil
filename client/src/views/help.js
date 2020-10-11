import React from 'react'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import {fetchHelp} from './api/fetchers'

class Info extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            posts:[]
        }
    }

    async componentDidMount(){
        const data = await fetchHelp()

        var posts = data
        this.setState({
            posts:posts
        })

        console.log(posts)
    }

    render() {
        const columns=[
            {
                Header:"location",
                accessor:"loc"
            },
            {
                Header:"number",
                accessor:"number"
            }
        ]
        return(
            <div>
                <br></br>
                <h1 className="aheadinglol">Help Page</h1>
                    <ReactTable columns={columns} data={this.state.posts}></ReactTable> 
            </div>
        )
    }
}

export default Info;