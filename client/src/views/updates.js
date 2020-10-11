import React from 'react'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import {fetchUpdates} from './api/fetchers'

class Info extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            posts:[],
            dateUpdate: null
        }
    }

    async componentDidMount(){
        const data = await fetchUpdates()
        var dateUpdate = data.lastRefreshed;
        var posts = data.data.notifications;
        this.setState({
            posts:posts,
            dateUpdate: dateUpdate
        })

        console.log(dateUpdate)
    }

    render() {
        const columns=[
            {
                Header:"Title",
                accessor:"title"
            },
            {
                Header:"Link",
                accessor:"link"
            }
        ]
        return(
            <div>
                <br></br>
                <h1 className="aheadinglol">Updates Page</h1>
                <h3>Last Updated At:{this.state.dateUpdate}</h3>
                    <ReactTable columns={columns} data={this.state.posts}></ReactTable> 
            </div>
        )
    }
}

export default Info;