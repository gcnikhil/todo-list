pragma solidity ^0.8.0;

contract Mycontract{
    enum  Taskstatus {Pending,Done}
    address owner;
    struct Task{
        string disc;
        Taskstatus status;
    }
    Task[] public tasks;

    constructor()   {
        owner=msg.sender;
    }
    modifier onlyowner(){
        require(msg.sender==owner,"Only owner can update");
        _;
    }
    function addTask(string memory _disc) public onlyowner{
        tasks.push(Task(_disc,Taskstatus.Pending));
    }
function updatetask(uint256 id) public onlyowner{
    require(id<tasks.length,"No task is valid");
    tasks[id].status=Taskstatus.Done;
}
function getAllTask()public view returns (Task[] memory){
    return tasks;
}
function getTask(uint256 id)public view returns (string memory,Taskstatus ){
   require(id<tasks.length,"No task is valid");
    return (tasks[id].disc,tasks[id].status);
}

}
