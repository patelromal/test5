import { Router } from 'express';
import pluralize  from "pluralize";
import {ok, fail} from './utils';
const MAX_RESULTS = 100;

/**
  Generic controller that provides CRUD operations for a given Mongoose model
*/
var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();

export default class BaseController{

  /**
    @param model Mongoose model
    @param key primary key of the model that will be used for searching, removing
    and reading
  */
  constructor(model, key){
    this.model = model;
    this.modelName = model.modelName.toLowerCase();
    this.key = key;
  }
  
  authenticate(data) {
    return this.model
    .findOne({ username: data.username})
    .then((response) => {
      if(response != null && response.username != null){
        if(response.password == data.password){
          return response;
        }
      }
      return null;
    });
  }

  create(data) {
	  console.log(data);
    return this.model
      .create(data)
      .then((modelInstance) => {
        return modelInstance;
      });
  }

  read(request) {
    return this.model
    .find({ })
//    .populate(request.params.model)
    .then((modelInstance) => {
        var response = {};
        response[this.modelName] = modelInstance;
        return response;
    });
  }
  
  findOne(request) {
    console.log('inside findOne ');
    return this.model
    .find({ course: request.params.id })
    .populate(request.query.populate)
    .then((response) => {
        return response;
    });
  }

  listWithParam(request) {
  console.log('inside listWithParam ');
   return this.model
      .find({})
      .populate(request.query.populate)
      .limit(MAX_RESULTS)
      .then((response) => {
        return response;
      });
  }
  
  list(request) {
   return this.model
      .find({})
      .limit(MAX_RESULTS)
      .then((response) => {
        return response;
      });
  }

  delete(id) {
    const filter = {};
    filter[this.key] = id;
    return this.model
      .remove(filter)
      .then(() => {
        return {};
      })
  }

  /**
   */
  update(id, data) {
    // var filter = {};
    // filter[this.key] = id;
    return this.model
      .findByIdAndUpdate(id, data)
      // .then((modelInstance) => {
      //   // for (var attribute in data){
      //   //   if (data.hasOwnProperty(attribute) && attribute !== this.key && attribute !== "_id"){
      //   //     modelInstance[attribute] = data[attribute];
      //   //   }
      //   // }
      //   return modelInstance.save();
      // })
      .then((modelInstance) => {
        // var response = {};
        // response[this.modelName] = modelInstance;
        return modelInstance;
      });
  }

  route(){
    const router = new Router();
    
    router.get("/", (req, res) => {
		console.log('get all list populate : ' + req.query.populate);
		if(req.query.populate != ''){
			this.listWithParam(req)
	        .then(ok(res))
	        .then(null, fail(res)); 
		}else{
			this.list(req)
	        .then(ok(res))
	        .then(null, fail(res)); 
		}
    });
    
    router.get("/:id", (req, res) => {
	  console.log('findOne populate : ' + req.query.populate);
      this.findOne(req)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.post("/", (req, res) => {
      this.create(req.body)
        .then(ok(res))
        .then(null, fail(res));
    });
    
    router.post("/users", (req, res) => {
        this.authenticate(req.body)
         .then(ok(res))
         .then(null, fail(res));
      });

    router.put("/:key", (req, res) => {
      this.update(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.delete("/:key", (req, res) => {
      this.delete(req.params.key)
        .then(ok(res))
        .then(null, fail(res));
    });
    return router;
  }
}

//	  var MongoClient = require('mongodb').MongoClient,
//	  f = require('util').format,
//	  assert = require('assert');

// Connection URL
// var url = 'mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou';
	
// 	MongoClient.connect(url, function (err, database) {
// 	      var db=database.db('sspou');
// 	      var collections=db.collection('users');
// 	      console.log("Called findOne");
	      
//          collections.findOne({}, function(err, doc){
// 	        if(err) throw err;
//           console.log(doc);
//           return doc;
// //	        db.close();
// 	     });
// 	});
