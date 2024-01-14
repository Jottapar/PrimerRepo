const partido = () => {
    return new Promise ((resolve, reeject) => {
        if (true) {
            resolve('gano el barcelona');
        } else {
            reeject('gano el madrid');
        }
    })
};

partido()
    .then(response => console.log(response))
    .catch(err=>console.log(err));
    


