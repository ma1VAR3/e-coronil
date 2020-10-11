import React from 'react'


const Info =()=>{
    return(
        <div>
            <br></br>
                <h1 className="aheadinglol">Stats Page</h1>
            <br></br>
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-chart">
                    <div class="card-header card-chart card-header-warning">
                        <div class="ct-chart" id="dailySalesChart"></div>
                    </div>  
                    <div class="card-body">
                        <h4 class="card-title">Daily Sales</h4>
                        <p class="card-category"><span class="text-success"><i class="fa fa-long-arrow-up"></i> 55%  </span> increase in today sales.</p>
                    </div>
                    <div class="card-footer">
                        <div class="stats">
                        <i class="material-icons">access_time</i> updated 4 minutes ago
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                <div class="card card-chart">
                    <div class="card-header card-chart card-header-success">
                    <div class="ct-chart" id="completedTasksChart"></div>
                    </div>  
                    <div class="card-body">
                    <h4 class="card-title">Completed Tasks</h4>
                    <p class="card-category">Last Campaign Performance</p>
                    </div>
                    <div class="card-footer">
                    <div class="stats">
                        <i class="material-icons">access_time</i> updated 2 minutes ago
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Info;