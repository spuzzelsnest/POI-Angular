import path from 'path';

import models from '../models';

class LogicController{

    start(req, res, next){
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    };
    
    getFootage(req,res,next){

        models.tblFootages.findAll({
            attributes: ['lat','lng','name','date','title','info','place','country','source','remarks'],
            where: {
                published: true
            }
        }).then( data=>{
            res.status(200).send({
                data
            })});
    }
}

const logicController = new LogicController();
export default logicController;