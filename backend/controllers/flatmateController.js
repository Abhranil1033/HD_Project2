const Flatmate = require("../models/flatmateModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const apiFeatures = require("../utils/apiFeatures");


//Create Item  (--admin)
exports.createItem = catchAsyncErrors(
    async (req, res, next) => {
        const flatmate = await Flatmate.create(req.body);
    
        res.status(201).json({
            success: true,
            flatmate
        })
    }
    
)

// Get all flatmatess (Home Page)
exports.getAllFlats = catchAsyncErrors(
    async (req, res) => {
        const itemsInAPage = 8;
        const totalFlatmates = await Flatmate.countDocuments();
    
        // const flatmates = await Flatmate.find();
        const apiFeature = new apiFeatures(Flatmate.find(),req.query).search().filter(itemsInAPage);
        const flatmates = await apiFeature.query;

    
        res.status(200).json({
            success: true,
            flatmates,
            itemsInAPage,
            totalFlatmates
        });
    }
    
)

//Get flatmate details (after being clicked)
exports.flatDetails = catchAsyncErrors(
    async (req, res, next) => {
        const flatmate = await Flatmate.findById(req.params.id); //gives us the required flat(which is clicked)
    
        if (!flatmate) {
            return next(new ErrorHandler("Item not found",404))
        }
    
        res.status(200).json({
            success: true,
            flatmate
        })
    }
)



//Update Details (--admin)
exports.updateDetails = catchAsyncErrors(
    async (req, res, next) => {
        let flatmate = await Flatmate.findById(req.params.id);
    
        if (!flatmate) {
            return next(new ErrorHandler("Item not found",404))
        }
    
        flatmate = await Flatmate.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
    
        res.status(200).json({
            success: true,
            flatmate
        })
    }
)


//Deleteitem (--admin)
exports.deleteItem = catchAsyncErrors(
    async (req, res, next) => {
        let flatmate = await Flatmate.findById(req.params.id);
    
        if (!flatmate) {
            return next(new ErrorHandler("Item not found",404))
        }
    
        await flatmate.remove();
    
        res.status(200).json({
            success: true,
            message: "Successfully deleted"
        })
    }
)
