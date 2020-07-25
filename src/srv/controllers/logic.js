import path from 'path';

import models from '../models';

class LogicController{

    getFootage(req,res,next){
  
        models.tblFootages.findAll({
            where: {
                published: true
            }
        }).then(data => res.status(200).send({
                data,
            }));
    }
    
    getCategories(req,res,next){
        
        models.tblMediaTypes.findAll({
            attributes: { exclude: ['createdAt','updatedAt','typeId'] }
        })
        .then(cat => res.status(200).send({
            cat
        }));
    }
    
    getMediaSelection(req,res,next){
        
        if (!req.params.id){
            return res.status(404).send({
                success: 'false',
                message: 'ID is required',
            });
        }else{
            
            models.tblFootages.findAll({
             where: {
                published: true,
                typeId: req.params.id
            }
        }).then(data => res.status(200).send({
                data,
            }));
        }
    }

}

const logicController = new LogicController();
export default logicController;