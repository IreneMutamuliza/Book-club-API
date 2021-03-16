//create a record
export function createrecord(req, res){
    console.log(req.body);
    res.send(req.body)

}
//update a retured book
export function updatereturedbook(req, res){
    console.log(req.body);
    res.send(req.body)

}

//view particular borrowing
export function particularborrowing(req, res){
    console.log(req.body);
    res.send(req.body)

}

//view all borrowing from a particular member
export function viewallp(req, res){
    console.log(req.body);
    res.send(req.body)

}
//view all borrowed books
export function viewallborrowed(req, res){
    console.log(req.body);
    res.send(req.body)

}
