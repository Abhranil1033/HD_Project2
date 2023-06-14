const Flat = require("../models/flatModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const apiFeatures = require("../utils/apiFeatures");

//Create Item  (--admin)
exports.createItem = catchAsyncErrors(
    async (req, res, next) => {
        const flat = await Flat.create(req.body);
    
        res.status(201).json({
            success: true,
            flat
        })
    }
)


// Get all flats (Home Page)
exports.getAllFlats = catchAsyncErrors(
    async (req, res) => {
        const itemsInAPage = 8;
        const totalFlats = await Flat.countDocuments();
    
        // const flats = await Flat.find();
        const apiFeature = new apiFeatures(Flat.find(),req.query).search().filter().pagination(itemsInAPage);
        const flats = await apiFeature.query;

    
        res.status(200).json({
            success: true,
            flats,
            itemsInAPage,
            totalFlats
        });
    }
)


//Get flat details (after being clicked)
exports.flatDetails = catchAsyncErrors(
    async (req, res, next) => {
        const flat = await Flat.findById(req.params.id); //gives us the required flat(which is clicked)
    
        if (!flat) {
            return next(new ErrorHandler("Item not found",404))
        }
    
        res.status(200).json({
            success: true,
            flat
        })
    }
)



//Update Details (--admin)
exports.updateDetails = catchAsyncErrors(
    async (req, res, next) => {
        let flat = await Flat.findById(req.params.id);
    
        if (!flat) {
            return next(new ErrorHandler("Item not found",404))
        }
    
        flat = await Flat.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
    
        res.status(200).json({
            success: true,
            flat
        })
    }
    
)

//Deleteitem (--admin)
exports.deleteItem = catchAsyncErrors(
    async (req, res, next) => {
        let flat = await Flat.findById(req.params.id);
    
        if (!flat) {
            return next(new ErrorHandler("Item not found",404))
        }
    
        await flat.remove();
    
        res.status(200).json({
            success: true,
            message: "Successfully deleted"
        })
    }
)
