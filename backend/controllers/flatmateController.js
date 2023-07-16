const Flatmate = require("../models/flatmateModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const apiFeatures = require("../utils/apiFeatures");


//Create Item  (--admin)
exports.createItem = catchAsyncErrors(
    async (req, res, next) => {
        req.body.user = req.user.id;
        const flatmate = await Flatmate.create(req.body);
    
        res.status(201).json({
            success: true,
            flatmate
        })
    }
    
)

// Get all flatmatess (Home Page)
exports.getAllFlatmates = catchAsyncErrors(
    async (req, res) => {
        const itemsInAPage = 8;
        const totalFlatmates = await Flatmate.countDocuments();
    
        // const flatmates = await Flatmate.find();
        const apiFeature = new apiFeatures(Flatmate.find(),req.query).search().filter().pagination(itemsInAPage);
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
exports.flatmateDetails = catchAsyncErrors(
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


//Create new review or update review
exports.createFlatmateReview = catchAsyncErrors(async(req,res,next) => {
    const {comment,flatmateId} = req.body;

    const review = {
        user : req.user._id,
        name : req.user.name,
        comment
    };

    const flatmate = await Flatmate.findById(flatmateId);

    const isReviewed = flatmate.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if(isReviewed){
        flatmate.reviews.forEach((rev) => {
            if(rev.user.toString() === req.user._id.toString()){
                (rev.comment = comment)
            }
        });
    } else{
        flatmate.reviews.push(review);
        flatmate.numOfReviews = flatmate.reviews.length
    }

    await flatmate.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
});



//Get all reviews 
exports.getAllFlatmateReviews = catchAsyncErrors(async(req,res,next)=>{
    const flatmate = await Flatmate.findById(req.query.id);

    if(!flatmate){
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success: true,
        reviews: flatmate.reviews,
    })
})


//Delete Review
exports.deleteFlatmateReview = catchAsyncErrors(async(req,res,next)=>{
    const flatmate = await Flatmate.findById(req.query.flatmateId);

    if(!flatmate){
        return next(new ErrorHandler());
    }

    //filter out the review to the deleted and store the rest in reviews
    const reviews = flatmate.reviews.filter((rev) => rev._id.toString() != req.query.id.toString());

    const numOfReviews = reviews.length;

    await Flatmate.findByIdAndUpdate(req.query.flatmateId,{ reviews,numOfReviews },
        {
            new : true,
            runValidators: true,
            useFindAndModify:false
        }
    );
  
    res.status(200).json({
      success: true,
    });
})