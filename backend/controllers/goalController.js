const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

//DESCRIPTION get goals (to get all goals ama baed ma naemlou authentification bsh yaaml get goal mtaa user wehed specific)
//ROUTE (get a request to api) GET /api/goals
//ACCESS private 
const getGoals= asyncHandler(async (req,res) =>
{
    const goals = await Goal.find()
   // res.status(200).json({message:'GET GOALS'})
   res.status(200).json(goals) 

})

//DESCRIPTION    SET goal 
//ROUTE          POST(post request) /api/goals
//ACCESS         private 
const setGoal= asyncHandler(async (req,res) =>
{
    if(!req.body.text)
    {
        res.status(400) //client error or a bad request
        throw new Error ('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    
    res.status(200).json(goal)

})

//DESCRIPTION     update goal (update a request)
//ROUTE           PUT /api/Goal/:id
//ACCESS private 
const updateGoal= asyncHandler (async (req,res) =>
{
    const goal =await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error ('goal not found') 
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
    })

    res.status(200).json(updatedGoal)

})

//DESCRIPTION delete goal (delete a request)
//ROUTE (get a request ti api) GET /api/Goal/:id
//ACCESS private 
const deleteGoal= asyncHandler (async (req,res) =>
{
    const goal =await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error ('goal not found') 
    }
    await goal.remove()
    res.status(200).json({id: req.params.id})

})

module.exports={getGoals,setGoal,updateGoal,deleteGoal,}