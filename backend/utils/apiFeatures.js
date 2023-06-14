class apiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            city : {
                $regex : this.queryStr.keyword,
                $options : "i"
            },
        } : {};

        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr};

        const removeFields = ["keyword","page","limit"];

        removeFields.forEach(key => delete queryCopy[key]);

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=> `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(itemsInAPage){
        const currPage = Number(this.queryStr.page) || 1;

        const skipItems = itemsInAPage * (currPage - 1); //in page 1,we have to skip 0 items => currPage = 1 .Therefore, currPage-1 gives 0 which results in 0 products being skipped.

        this.query = this.query.limit(itemsInAPage).skip(skipItems);
        return this;
    }
}

module.exports = apiFeatures;