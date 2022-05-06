const asyncnadler = require('express-async-handler')


//DESCRIPTION get goals (to get all goals ama baed ma naemlou authentification bsh yaaml get goal mtaa user wehed specific)
//ROUTE (get a request to api) GET /api/goals
//ACCESS private 
const getGoals= async (req,res) =>
{
    res.status(200).json({message:'GET GOALS'})

}

//DESCRIPTION    SET goal 
//ROUTE          POST(post request) /api/goals
//ACCESS         private 
const setGoal= async (req,res) =>
{
    if(!req.body.text)
    {
        res.status(400) //client error or a bad request
        throw new Error ('Please add a text field')
    }
    res.status(200).json({message:'SET Goal'})

}

//DESCRIPTION     update goal (update a request)
//ROUTE           PUT /api/Goal/:id
//ACCESS private 
const updateGoal= async (req,res) =>
{
    res.status(200).json({message:`UPDATE GOAL ${req.params.id}`})

}

//DESCRIPTION delete goal (delete a request)
//ROUTE (get a request ti api) GET /api/Goal/:id
//ACCESS private 
const deleteGoal= async (req,res) =>
{
    res.status(200).json({message:`DELETE GOAL ${req.params.id}`})

}

module.exports={getGoals,setGoal,updateGoal,deleteGoal,}