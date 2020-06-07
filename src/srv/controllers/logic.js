import path from 'path';

import models from '../models';

class LogicController{

    start(req, res, next){
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    };
    
    getMeidaType(req, res, next){
        models.mediaTypes.findAll({
            include: type
        })
        .then(mediaTypes =>{
            res.status(200).json(authors);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
    }
    
    getFootage(req, res, next){

        models.tblfootages.findOne({
            include: [{
                model: models.Logitem
            },{
                model: models.User
            }],
             where: {
                '$User.key$': req.params.key,
                id: req.params.logid
        }})
        .then(timelog => res.status(200).send({
            timelog,
        }));
    }
    
}

const logicController = new LogicController();
export default logicController;