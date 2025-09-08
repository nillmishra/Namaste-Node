const adminAuth = (req, res, next) => {
    //logic of checking if the request is authenticated or not
    const token = "abfgbgcd"
    const isAdminAuthenticated = token === "abcd"; 
    if(!isAdminAuthenticated) {
        return res.status(401).send("Admin not authenticated");
    }
    else{
        next();
    }
};

const userAuth = (req, res, next) => {
    //logic of checking if the request is authenticated or not
    const token = "abcd"
    const isAdminAuthenticated = token === "abcd"; 
    if(!isAdminAuthenticated) {
        return res.status(401).send("Admin not authenticated");
    }
    else{
        next();
    }
};

module.exports = {adminAuth, userAuth};