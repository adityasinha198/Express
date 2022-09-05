const User = require('../models/user');

//hello wor

  exports.postData = (req, res, next) => {
    const amount = req.body.amount;
    //console.log(amount)
    const description= req.body.description;
    const category = req.body.category;
    //const description = req.body.description;
    User.create({
      amount:amount,
      
      description:description,
      category:category
      })
      .then(result=>{

        res.redirect('/admin/users')
        //console.log(result)
        
  })
  
      .catch(err=>console.log(err))
  }

  exports.deleteUser = (req,res,next)=>{
    const userId = req.params.Id
    console.log(userId)
    
    User.findByPk(userId)
    .then(user => {
      return user.destroy()
    })

    .then(result =>{
      User.findAll()
      .then( users =>{
        res.json(users)
      })
      .catch(err =>console.log(err) ) 
    })
    .catch(err=>console.log(err))   

  }

  exports.getUsers = (req, res, next) => {
    // req.user.getProducts()
    User.findAll()
   
     .then(users => {
       res.json(users)
       console.log(users)
     /*  res.render('admin/products', {
         prods: products,
         pageTitle: 'Admin Products',
         path: '/admin/products'*/
       })
     
     .catch(err=>console.log(err))
   };
  