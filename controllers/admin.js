const User = require('../models/user');

//hello word 

  exports.postData = (req, res, next) => {
    const name = req.body.name;
    console.log(name)
    const email = req.body.email;
    const number = req.body.phoneNumber;
    //const description = req.body.description;
    User.create({
      name:name,
      
      email:email,
      number:number
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
  