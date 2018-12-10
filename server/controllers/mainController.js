let bucketList = [{
    photo: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c3/55/d1/shutterstock-258841592.jpg',
    name: 'See Everest',
    id: 1
},
{
    photo: 'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/everest-the-summit-climb.jpg',
    name: 'climb everest',
    id: 2
}
];

let id= 3;

module.exports = {
    getList: (req, res) => {
        res.status(200).send(bucketList)
    },
    addItem: (req,res) => {
        // console.log(req.body)
        bucketList.push({
            name: req.body.name,
            id: id,
            photo: req.body.photo || 'https://ih0.redbubble.net/image.510503774.0568/ap,550x550,16x12,1,transparent,t.u3.png'
        })
        id++;
        res.status(200).send(bucketList)
    },
    deleteItem: (req,res) => {
        // console.log(req.params.id)
        let index = bucketList.findIndex((item)=>
            item.id=== +(req.params.id))
            if(index!== -1){
              bucketList.splice(index, 1)
            }
        res.status(200).send(bucketList)

    },
    updateItem: (req,res) => {
        // console.log(req.params)
        // console.log(req.body)
        let index = bucketList.findIndex((item) => item.id === +(req.params.id))
        // console.log(index)
        if(index !== -1){
            bucketList[index] = {
                id: +req.params.id,
                name: req.body.name || bucketList[index].name,
                photo: req.body.photo || bucketList[index].photo
            }
        }
        res.status(200).send(bucketList)
    }

}