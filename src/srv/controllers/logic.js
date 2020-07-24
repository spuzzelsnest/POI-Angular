import path from 'path';

import models from '../models';

class LogicController{

    start(req, res, next){
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    };
    
    getMedia(req,res, next){
        let fetshed_mediaType;
        
        models.mediaType.findAndCountAll({
            include: [{
                model: models.footages,
                attributes:['id','typeId','lat','lng','name','date','title','info','place','country','source','remarks'],
                required: true
            }],
            limit,
            offset,
            //where:
            //order: [['date','place']]
        })
        .then( data =>{
            fetshed_mediaType = data;
        }).then(count => {
            res.status(200).send({
               fetshed_mediaType 
            })});
    }
}

const logicController = new LogicController();
export default logicController;