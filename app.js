var express = require("express") ;
var app = express();

app.use(express.static("public")) ;

var sanitizer = require("express-sanitizer") ;

var methodOverride = require("method-override") ;
app.use(methodOverride("_method")) ;

var bodyparser = require("body-parser") ;
app.use(bodyparser.urlencoded({extended :true})) ;

app.use(sanitizer()) ;
var mongoose = require("mongoose") ;
mongoose.connect("mongodb://localhost/restful_blog") ;

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type: Date, default: Date.now}
});
var blog = mongoose.model("blog", blogSchema);

app.get("/", function(req,res){
    res.redirect("/blogs") ;
}) ;

app.get("/blogs" , function(req,res){
    blog.find({},function(err , maal){
        if(err) console.log(err) ;
        else res.render("index.ejs",{blogs : maal}) ;
    }) ;
}) ;

app.get("/blogs/new" , function(req,res){
    res.render("new.ejs") ;
}) ;

app.post("/blogs" , function(req,res){
    req.body.body = req.sanitize(req.body.body) ;
    blog.create({title : req.body.title , body : req.body.body , image : req.body.image} , function(err,newblog){
        if(err) console.log(err) ;
        else    res.redirect("/blogs") ;
    }) ;
}) ;

app.get("/blogs/:id" , function(req,res){
    blog.findById(req.params.id , function(err,maal){
        if(err) console.log(err) ;
        else {
            res.render("show.ejs" , {readmore : maal}) ;
        }
    }) ;
}) ;

app.get("/blogs/:id/edit" , function(req,res){
    blog.findById(req.params.id , function(err,maal){
        if(err) console.log(err) ;
        else {
            res.render("edit.ejs",{ blog:maal }) ;
        }
    }) ;
}) ;

app.put("/blogs/:id/edit" , function(req,res){
    req.body.body = req.sanitize(req.body.body) ;
    blog.findByIdAndUpdate(req.params.id , req.body , function(err,maal){
        if(err) console.log(err) ;
        else {
             res.redirect("/blogs/" + maal._id) ; }
    }) ;
}) ;

app.delete("/blogs/:id" , function(req,res){
    blog.findByIdAndRemove(req.params.id , function(err){    // No maal here as there is nothing 
        if(err) console.log(err) ;
        else res.redirect("/blogs") ;
    }) ;
}) ;

app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Server is ON") ;
}) ;  // Server start