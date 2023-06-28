const Flat = require("../models/flatModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const apiFeatures = require("../utils/apiFeatures");

//Create Item  (--admin)
exports.createItem = catchAsyncErrors(
    async (req, res, next) => {
        req.body.user = req.user.id;

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
        const itemsInAPage = 6;
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


//Create new review or update review
exports.createFlatReview = catchAsyncErrors(async(req,res,next) => {
    const {comment,flatId} = req.body;

    const review = {
        user : req.user._id,
        name : req.user.name,
        rating: Number(rating),
        comment
    };

    const flat = await Flat.findById(flatId);

    const isReviewed = flat.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if(isReviewed){
        flat.reviews.forEach((rev) => {
            if(rev.user.toString() === req.user._id.toString()){
                (rev.rating = rating),(rev.comment = comment)
            }
        });
    } else{
        flat.reviews.push(review);
        flat.numOfReviews = flatmate.reviews.length
    }

    let avg = 0;

    flat.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    flat.ratings = avg / flat.reviews.length;

    await flat.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
});


//Get all reviews of a product
exports.getAllFlatReviews = catchAsyncErrors(async(req,res,next)=>{
    const flat = await Flat.findById(req.query.id);

    if(!flat){
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success: true,
        reviews: flat.reviews,
    })
});



//Delete Review
exports.deleteFlatReview = catchAsyncErrors(async(req,res,next)=>{
    const flat = await Flat.findById(req.query.flatId);

    if(!flat){
        return next(new ErrorHandler());
    }

    //filter out the review to the deleted and store the rest in reviews
    const reviews = flat.reviews.filter(rev => rev._id.toString() != req.query.id.toString());

    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    const ratings = avg / reviews.length;
    const numOfReviews = reviews.length;
  
    await Flat.findByIdAndUpdate(req.query.flatId,{ reviews,ratings,numOfReviews},
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

