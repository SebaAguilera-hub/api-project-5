const Category = require('../models/Category.model')

const createCategory = async (req, res) => {
    try {
        const category = new Category(req.body)
        const response = await category.save();

        return res.json({
            message: 'Category was created successfully',
            detail: response
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getCategories = async (req, res) => {
    try {
        const response = await Category.find()
        return res.json({
            message: 'category list',
            detail: response
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

module.exports = {
    createCategory,
    getCategories
}