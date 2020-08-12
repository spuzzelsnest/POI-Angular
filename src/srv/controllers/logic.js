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
    
    getMedia(req,res,next){
        models.tblFootages.findAll({
            include:[{
                    model: models.tblMediaTypes,
                    attributes:['id','type'],
                    required: true,
                }],
            where: {
                published: true,
            }
        }).then(data => res.status(200).send({
                data,
            }));
        }
}

const logicController = new LogicController();
export default logicController;