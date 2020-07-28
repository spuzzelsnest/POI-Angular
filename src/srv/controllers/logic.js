import path from 'path';

import models from '../models';

class LogicController{
    
    getCategories(req,res,next){
        let cats;
        
        models.tblMediaTypes.findAll({
            attributes: { exclude: ['createdAt','updatedAt','typeId'] }
        })
        .then(cats => res.status(200).send({cats}));
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