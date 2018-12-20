import { Subcourse } from '../models/Subcourse';
import BaseController from './base';
import { Router } from 'express';
import {ok, fail} from './utils';
const MAX_RESULTS = 100;

export class SubcourseController extends BaseController{
  constructor(){
    super(Subcourse, '_id');
  }

}

// export class SubcourseController{

//   list() {
//    return Subcourse
//       .findOne({})
//       .limit(MAX_RESULTS)
//       .then((response) => {
//         return response;
//       });
//   }

//   route(){
//     const router = new Router();

//     router.get("/", (req, res) => {
//       this.list()
//         .then(ok(res))
//         .then(null, fail(res));
//     });

//     return router;
//   }
// }
