import path from 'path';

import models from '../models';

class LogicController{

    start(req, res, next){
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    };
    
    getMeidaType(req, res, next){
        
        if (!req.params.key){
            return res.status(404).send({
                success: 'false',
                message: 'Key is required',
            });
        }else{
        models.User.findOne({
             where: {key: req.params.key},
        })
            .then(userLogin => res.status(200).send({
                success: 'true',
                message: `Key found =${userLogin.key}`,
                userLogin
            }));
        }
    }
    
    getMedia(req, res, next){
        let fetshedPosts;
        const pageSize = +req.query.pagesize;
        const currentPage = +req.query.page;
        const offset = (pageSize * (currentPage - 1));
        const limit =  pageSize;
     
        models.Log.findAndCountAll({
            include: [{
                model: models.Logitem ,
                attributes: ['id', 'startAt', 'breakOut', 'breakIn', 'endAt','logId'],
                required: true
            },
                      {
                model: models.User
            }],
            limit,
            offset,
            where: {'$User.key$': req.params.key},
            order: [['day', 'DESC'],]
        })
        .then(logs => {
            fetshedPosts = logs;
        }).then(count => {
            res.status(200).send({
            fetshedPosts
        })});
    }
    
    getFootage(req, res, next){

        models.Log.findOne({
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