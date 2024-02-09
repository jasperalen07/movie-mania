function truncate (input) {
    return input.length > 100 ? `${input.substring(0,100)}...`: input;
    }

    function getYear(){
        const d =new Date();
        return d.getFullYear();
    }

    function formatReleaseDate (date) {
        const dateObject = new Date (date);
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        };
        return dateObject.toLocaleDateString("en-US", options);
    }

    function formatRunTime(runtime){
        if (runtime < 60) {
            return runtime + "m";
          } else {
            return Math.floor(runtime / 60) + "h " + (runtime % 60) + "m";
          }
    }

    function filterVideos (videoDataArray){
        return videoDataArray.filter((videoData) => {
            return videoData.site === "YouTube" && videoData.type === "Trailer";
        })      
    }

  

export { formatReleaseDate, truncate, getYear, filterVideos, formatRunTime };
 