const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

//findUserByUsername
function findUserByUsername(array, string){
    let user = array.find(function(value){
        return value.username === string;
    })
    return user;
}

//removeUser
function removeUser(array, string){
    let removeUser = array.findIndex(function(value){
        return value.username === string;
    })
    if(removeUser !== -1){
        return array.splice(removeUser, 1);
    }else{
    return undefined;
    }  
}