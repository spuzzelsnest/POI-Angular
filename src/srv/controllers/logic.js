import path from 'path';

import models from '../models';

class LogicController{
    
    getMedia(req,res,next){
    
            models.tblFootages.findAll({
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