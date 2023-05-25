const{ create, index, update, destroy}=require('../BlogController/comment')
const Router=require('express')
const router=Router()

router.get('/', index)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports=router