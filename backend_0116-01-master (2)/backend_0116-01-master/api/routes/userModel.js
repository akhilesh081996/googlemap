const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let db = require('../models');

router.route('/login').post((req, res) => {
	db.userDB.find({ email: req.body.email })
		.then(userData => {
			if (!userData[0]) {
				return res.json('User does not exist. Please try again!');
			}

			// Check password
			bcrypt.compare(req.body.password, userData[0].password).then(isMatch => {
				if (isMatch) {
				
					let payload = {
						user: userData[0]
					};
					
					// Sign Token
					jwt.sign(
			          	payload,
			          	process.env.secretKey,
			          	{
			            	expiresIn: 31556926 // 1 year in seconds
			          	},
			          	(err, token) => {
			            	res.json({
			              		success: true,
			              		token: "Bearer " + token,
								  userid:payload.user._id
							
			            	});
			          	}
			        );
				} else {
					return res.json('Password does not match. Please enter correct password!');
				}
			});
		})
		.catch(err => console.log(err))
})



//  fetch all south carolina tier lsiting 


router.route('/southcarolinalisting').post((req, res) => {
	db.southCarolinaDB.find({ County :req.body.County })
		.then(userData => {
			if (!userData[0]) {
				return res.json('Data does not exist. Please try again!');
			}
             else {
					return res.json({
						success: true,
						data: userData
				  });
		
				}
			})
		.catch(err => console.log(err))
})



router.route('/autologin').post((req, res) => {
	db.userDB.find({ email: req.body.email })
		.then(result => {
			db.userDB.updateOne(
				{ _id: result[0]._id},
				{
				  $set: 
				  	{
				  		"active" : true
				  	}
				}
			).then(response => {
				result[0].active = true
				let payload = {
					user: result[0]
				}
				// Sign Token
				jwt.sign(
		          	payload,
		          	process.env.secretKey,
		          	{
		            	expiresIn: 31556926 // 1 year in seconds
		          	},
		          	(err, token) => {
		            	res.json({
		              		success: true,
		              		token: "Bearer " + token
							 
		            	});
		          	}
		        );
			})
			.catch(err => console.log('err', err));
		})
		.catch(err => console.log(err))
})

router.route('/register').post((req, res) => {
    const newUser = new db.userDB({
        email: req.body.email,
        password: req.body.password,
        imageInfo: req.body.imageInfo,
        role: 2,
        active: false
    });

    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
    	bcrypt.hash(newUser.password, salt, (err, hash) => {
        	if (err) throw err;
        	newUser.password = hash;
        	newUser.save()
        		.then(user => res.json("Add success!"))
        		.catch(err => console.log(err));
    	});
    });
})

router.route('/checkUser').post((req, res) => {
	db.userDB.find({ email: req.body.email })
		.then(result => {
			if (!result[0]) {
				res.json(false)
			} else {
				res.json(true)
			}
		})
		.catch(err => console.log(err))
})

router.route('/resetPassword').put((req, res) => {
	db.userDB.find({ email: req.body.email })
		.then(result => {
			// Hash password before saving in database
		    bcrypt.genSalt(10, (err, salt) => {
		    	bcrypt.hash(req.body.password, salt, (err, hash) => {
		        	if (err) throw err;
		        	
		        	db.userDB.updateOne(
						{ _id: result[0]._id},
						{
						  $set: 
						  	{
						  		"password" : hash
						  	}
						}
					).then(() => {
						res.json(true)
					})
					.catch(err => console.log('err', err));
		    	});
		    });


		})
		.catch(err => console.log(err))
})



 //  save value south carolina promote 


 router.route('/southPromote').post((req, res) => {

	db.southpolygonpromote.find({ userid :req.body.ss.userid }, function(err,result){
    if(result.length > 0){
					db.southpolygonpromote.updateOne(
						{ userid : result[0].userid },
						{ $set:{finalsubmissionvalue: req.body.ss.finalsubmissionvalue,
							firstclaculation: req.body.ss.firstclaculation,
							jobcreatedperyear: req.body.ss.jobcreatedperyear,
							personperyear: req.body.ss.personperyear,
							taxcreditSectors: req.body.ss.taxcreditSectors,
							worldwide: req.body.ss.worldwide,
							Southploygonname:req.body.ss.Southploygonname
							 }},
						{multi : true}
					).then(res => console.log('--res', res))
					.catch(err => console.log('--err', err));
	}else{
		 const southCarolina = new db.southpolygonpromote({
				finalsubmissionvalue: req.body.ss.finalsubmissionvalue,
				firstclaculation: req.body.ss.firstclaculation,
				jobcreatedperyear: req.body.ss.jobcreatedperyear,
				personperyear: req.body.ss.personperyear,
				taxcreditSectors: req.body.ss.taxcreditSectors,
				worldwide: req.body.ss.worldwide,
				userid: req.body.ss.userid ,
				Southploygonname:req.body.ss.Southploygonname
			});
		
			//  before saving in database
			southCarolina.save()
						.then(user =>  res.json({status:'200'}))
						.catch(err => console.log(err));
	
			}
	

	})
			

})


    
  // get single polygon detail according to user
   
  
  router.route('/Singleuserandploygondetail').post((req, res) => {
	  console.log(req.body.userid,'req.body.userid')
	  console.log(req.body.Southploygonname,'req.body.Southploygonname')
	db.southpolygonpromote.find({ $and: [{userid :req.body.userid },{Southploygonname:req.body.Southploygonname}]}, function(err,result){
    if(result.length > 0){
		res.json({status:'200',data:result[0]})
     
	}else{
		res.json({status:'201',data: []})
			}
	})
})
  



module.exports = router;