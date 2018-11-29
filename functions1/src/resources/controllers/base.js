const Router  = require('Router');
const ok, fail  = require('./utils');

const MAX_RESULTS = 100;

/**
  Generic controller that provides CRUD operations for a given Mongoose model
*/
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

  create(data) {
    return this.model
      .create(data)
      .then((modelInstance) => {
        // var response = {};
        // response[this.modelName] = modelInstance;
        return modelInstance;
      });
  }

  read(id) {
    var filter = {};
    filter[this.key] = id;
    return this.model
    .findOne(filter)
    .then((modelInstance) => {
      // var response = {};
      // response[this.modelName] = modelInstance;
      return modelInstance;
    });
  }

  list() {
   return this.model
      .find({})
      .limit(MAX_RESULTS)
      .then((modelInstances) => {
        // var response = {};
        // response[pluralize(this.modelName)] = modelInstances;
        return modelInstances;
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
      this
        .list()
        .then(ok(res))
        .then(null, fail(res));
    });

    router.post("/", (req, res) => {
      this
        .create(req.body)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.get("/:key", (req, res) => {
      this
        .read(req.params.key)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.put("/:key", (req, res) => {
      this
        .update(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.delete("/:key", (req, res) => {
      this
        .delete(req.params.key)
        .then(ok(res))
        .then(null, fail(res));
    });

    return router;
  }
}
