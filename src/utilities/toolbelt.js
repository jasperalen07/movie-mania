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
            month: "long",
            day: "numeric"
        };
        return dateObject.toLocaleDateString("en-US", options);
    }

    

  

export { formatReleaseDate, truncate, getYear};
