const sortVideos = (videos,sortBy)=>{
    videos.sort((video1,video2)=>{
        if(sortBy === "releaseDate"){
            return new Date(video2.releaseDate) - new Date(video1.releaseDate);
        }
    })
    // console.log(videos[0]);
    return videos;
}


const getPossibleContentRatings = (ratingValues,contentRating) => {
    let contentRatings = ratingValues;
    
    if(contentRating === "All" || contentRating === ""){
        return contentRatings;
    }

    const IndexOfContentRating = contentRatings.indexOf(contentRating);
    const possibleCintentRatings = contentRatings.splice(IndexOfContentRating);

    return possibleCintentRatings;
}

module.exports = {
    getPossibleContentRatings,
    sortVideos
};